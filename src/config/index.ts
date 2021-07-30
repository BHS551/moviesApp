import {} from 'dotenv/config'

const config = {
  app: {
    port: process.env.SERVER_PORT,
  },
  db: {
    poolSize: 10,
    uri: '',
    name: ''
  }
}

export default config
