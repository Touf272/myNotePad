## my NotePad > Backend

backend of myNotePad made in AdonisJS 6

## Introduction

This project was made from an AdonisJS preset containing a User System.

Database used is Lucid ORM

## Routes

| CRUD | endpoint | description |
| --- | --- | --- |
| **GET** | */notes* | list of every note |
| **POST** | */notes* | create a new note |
| **GET** | */notes/:id* | get a note by its ID |
| **PUT** | */notes/:id* | modify a specific note |
| **DELETE** | */notes/:id* | remove a specific note |

routes are exposed under `/api/`
