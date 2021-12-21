drop database if exists names;

create database names;
\connect names;

/****************************
Create names and salary table
*****************************/

drop table if exists names;
create table names (
  id serial,
  names varchar(200),
  salary bigint
)

copy names from '/Users/michelleguan/Applications/Tic-tac-toe/Sample_Data.csv' delimiter ',' csv header;



