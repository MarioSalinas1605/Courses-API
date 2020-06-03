# Graphi Courses API
Service to manage courses and students with GraphQL and ExpressJS
---
## Requirement
For development, you will only need Node.js, installed in your environement.
### Node
- #### Node installation on Windows
  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).
- #### Node installation on Ubuntu
  You can install nodejs and npm easily with apt install, just run the following commands.
      $ sudo apt install nodejs
      $ sudo apt install npm
### NPM installation
  After installing node dependencies run the following command.
---
## Install
    $ git clone https://github.com/MarioSalinas1605/Courses-API.git
    $ cd Courses-API
    $ npm install
## Configure app
Create a file `.env` then edit it with your settings. You will need:
- PORT = 
- DB_USER =
- DB_PASSWORD =
- DB_HOST =
- DB_NAME =

## Running the project
    $ npm start
## Running for development
    $ npm run dev

## About the application
In this application, you have CRUD operations for students and courses. You can also add students to a course.