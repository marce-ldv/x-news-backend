create database news;
use news;

create table articles(
    id bigint auto_increment,
    title varchar(50),
    description varchar(150),
    constraint pk_id primary key (id)
);

create table users(
    id bigint auto_increment,
    username varchar(50),
    password varchar(150),
    constraint pk_id primary key (id)
);

insert into articles (title,description) values ('Lorem impum','descadsdasdas');
insert into users (username,password) values ('admin','admin');