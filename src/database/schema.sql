/* PostgreSQL commands:
    \l: Lists all databases.
    \dt: Lists all tables in the currently connected database.
    \d: Describes a table.
    \c: Connect to a different database. Example: \c database_name.
*/

CREATE DATABASE mycontacts;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS categories (
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS contacts (
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    name VARCHAR NOT NULL,
    email VARCHAR UNIQUE,
    phone VARCHAR,
    category_id UUID,
    FOREIGN KEY(category_id) REFERENCES categories(id)
);
