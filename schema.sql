drop database if exists names; 

create database names;
\connect qa; 

/****************************
Create names and salary table
*****************************/

drop table if exists names; 
create table names (
  id serial, 
  names varchar(200), 
  salary bigint
)

