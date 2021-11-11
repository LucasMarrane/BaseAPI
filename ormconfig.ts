import { ConnectionOptions } from "typeorm"

   export class ConnectionsOptions {
      static mySqlTeste: ConnectionOptions = {
         "type": "mysql",
         "host": "localhost",
         "port": 3306,
         "username": "root",
         "password": "",
         "database": "guia",
         "synchronize": false,
         "logging": false,
         "name": "default",
         "entities": [
            "src/data/entity/**/*.ts"
         ],
         "migrations": [
            "src/data/migration/**/*.ts"
         ],
         "subscribers": [
            "src/data/subscriber/**/*.ts"
         ],
         "cli": {
            "entitiesDir": "src/data/entity",
            "migrationsDir": "src/data/migration",
            "subscribersDir": "src/data/subscriber"
         }
      }   
      static sqliteTeste: ConnectionOptions = {
         "type": "sqlite",
         "name": "default",
         "database": "src/data/database/marrsyscard.db",
         "synchronize": true,
         "logging": false,
         "entities": [
            "src/data/entity/**/*.ts"
         ],
         "migrations": [
            "src/data/migration/**/*.ts"
         ],
         "subscribers": [
            "src/data/subscriber/**/*.ts"
         ],
         "cli": {
            "entitiesDir": "src/data/entity",
            "migrationsDir": "src/data/migration",
            "subscribersDir": "src/data/subscriber"
         }
      }   
      static sqliteProducao: ConnectionOptions = {
         "type": "sqlite",
         "name": "default",
         "database": "src/data/database/bear.db",
         "synchronize": false,
         "logging": false,
         "entities": [
            "src/data/entity/**/*.ts"
         ],
         "migrations": [
            "src/data/migration/**/*.ts"
         ],
         "subscribers": [
            "src/data/subscriber/**/*.ts"
         ],
         "cli": {
            "entitiesDir": "src/data/entity",
            "migrationsDir": "src/data/migration",
            "subscribersDir": "src/data/subscriber"
         }
      }
   }
   
   export default ConnectionsOptions.sqliteTeste as ConnectionOptions