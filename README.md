# moviesApp

A movies API in TypeScript, exposing the same data through both a REST
controller and a GraphQL endpoint, backed by MongoDB through TypeORM.

## What it is

A study of layering a Node API properly: routes, controllers, services,
repositories, entities and DTOs as separate concerns, with two transport layers
over one domain.

```
        REST                    GraphQL
    moviesRouter            moviesResolver
          │                        │
          └────────┬───────────────┘
                   ▼
            movies.service          business logic
                   ▼
          movies.repository         data access
                   ▼
             Movie entity           TypeORM + MongoDB
```

The point of the split is that adding GraphQL did not mean reimplementing
anything: both transports call the same service, so the query logic exists
once.

## Key technical decisions

**Controllers are injected, not imported.** The `App` class takes an array of
controllers and a port in its constructor and mounts them, so the server's
composition is declared in one place and the app can be started with a
different set for tests.

**The schema is separate from the resolvers.** `schema.ts` holds the SDL
(`Movie`, `CreateMovie`, `Query`, `Mutation`); `moviesResolver.ts` implements
it. The contract stays readable on its own.

**MongoDB through TypeORM, with decorators.** `Movie` uses `@Entity`,
`@ObjectIdColumn` and `@Column`, so the same entity definitions could move to a
relational driver. `connection.synchronize()` keeps the schema matching the
models in development.

**Barrel files per layer.** Every directory has an `index.ts` re-exporting its
members, so imports address the layer rather than the file.

**A failed database connection stops the app.** `initializeModels` throws if the
connection is undefined instead of letting the server start and fail per
request.

**DTOs are explicit.** `create-movie.dto.ts` types the write path separately
from the entity, so the API contract and the storage model can diverge.

## Running it

Requires Node.js and a MongoDB instance.

```bash
npm install
npm run dev        # nodemon + babel-node over server.ts
```

TypeORM reads its connection settings from an ormconfig file — point it at your
own MongoDB URL before starting.

```bash
npm run lint
npm run format
npm test
```

> **Note.** This project is on the `master` branch; the repository's default
> branch holds only a stub README. The committed ormconfig also contains a real
> connection string with credentials, which should be replaced with an
> environment variable and rotated.
