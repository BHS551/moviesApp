import bodyParser from 'body-parser';
import cors from 'cors'
import express from 'express';
import "reflect-metadata";
import { createConnection, Connection } from 'typeorm';

class App {
	public app: express.Application;
	public port: number;
	public connection: Connection; // TypeORM connection to the database

	// The constructor receives an array with instances of the controllers for the application and an integer to designate the port number.
	constructor(controllers: any[], port: number) {
		this.app = express();
		this.port = port;
		this.initializeModels();
		this.initializeMiddlewares();
		this.initializeControllers(controllers);
	}

	private async initializeModels() {
		const connection = await createConnection();
		if (connection === undefined) { throw new Error('Error connecting to database'); } // In case the connection failed, the app stops.
		connection.synchronize(); // this updates the database schema to match the models' definitions
		this.connection = connection; // Store the connection object in the class instance.
		console.info(`conected to database`)
	}

	// Here we can add all the global middlewares for our application. (Those that will work across every contoller)
	private initializeMiddlewares() {
		this.app.use(express.json());
		this.app.use(bodyParser.json({ limit: '16mb' }))
		this.app.use(bodyParser.urlencoded({ extended: true }))
		this.app.use(cors())
		this.app.options('*', cors())
	}
	
	private initializeControllers(controllers: any[]) {
		controllers.forEach((controller) => {
			this.app.use('/', controller);
		});
	}

	// Boots the application
	public listen() {
		this.app.listen(this.port, () => {
			console.log(`Server running on port ${this.port}`);
		});
	}
}

export default App;