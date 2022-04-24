# ECATS App

![An example multiple choice question in the test](/ecats-question-screenshot.png)

This is a full-stack web application to test students on English grammar using multiple choice questions. The backend is Django (DRF) with PosgreSQL. The frontend is React with Redux Toolkit, RTK-Query and Material UI. Deployment is through Docker. The project is still under development and has not been released for production yet.

## Roadmap

- [x] Question component with timer
- [x] Result page with table of results
- [x] Login page with instructions
- [x] Django backend using DRF to create an API
- [x] API calls in frontend through RTK-Query
- [x] Use React Router to access other pages
- [x] Simple admin UI to add test takers
- [x] Docker deployment of frontend, backend and DB
- [ ] Script for scraping Google Sheets holding questions
- [ ] More comprehensive admin UI for editing users and questions

## Usage

### Clone the repo:

```bash
git clone https://github.com/globallabo/ecats-test.git
```

### Modify your env file:

You'll need to modify the sample .env file with your own information, such as Django secret key, database credentials and domain name of the server/API.

### Build and run:

```bash
docker-compose up -d --build
```
