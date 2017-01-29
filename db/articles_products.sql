
DROP DATABASE IF EXISTS "articles_products";
CREATE DATABASE "articles_products";

\c articles_products

DROP TABLE IF EXISTS products;
CREATE TABLE products(
  id serial PRIMARY KEY NOT NULL,
  name varchar(90) DEFAULT NULL,
  price numeric DEFAULT NULL,
  inventory numeric DEFAULT NULL
);

DROP TABLE IF EXISTS articles;
CREATE TABLE articles(
  title varchar(90) PRIMARY KEY NOT NULL,
  body varchar(180) DEFAULT NULL,
  author varchar(90) DEFAULT NULL,
  titleURL varchar(180) DEFAULT NULL
);

