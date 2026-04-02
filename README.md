# myNotePad

MyNotePad is an Angular/AdonisJS project, made to learn these technologies.

## Key features

- **Create** / **Delete** notes
- **Sort** notes by title / Date of creation / Date of last update
- **Modify** node title and content

## Requirements

This project requires both `node`, `npm` and `ng` to launch manually, and `Docker` to launch automatically.


## How to launch

There are **two ways** you can execute the program.

1. Use ```docker compose up --build``` at root.
2. Execute ```./frontend/setup-frontend.sh``` and ```./backend/setup-backend``` simultaneously.

the main page should appear on ```http://localhost:4200```

## API & Open ports

2 ports will be opened by the program:
- 4200: main web entry
- 3333: Backend API

Please check `backend/README.md` for further information on the API, or `frontend/README.md` for list of pages avaliable to the user.

## Use of AI

As this project was created to learn both backend & frontend technologies, the use of AI was restrained to a limited scope of objectives:
- Create tutorials on how to setup these technologies, and how they behave.
- Enhance the visual aspect of the website.
- Help understand errors, should no sufficent documentation be found.

Note: while some programs where transferred to the AI, **the AI did not modify any file** and **every modification requested by the AI was reviewed and modified to correspond to our will**.