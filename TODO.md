# Project

Project Description

<em>[TODO.md spec & Kanban Board](https://bit.ly/3fCwKfM)</em>

### Todo

- [ ] Separate StartPage into a login page and an instructions page. (After login, check email&code with backend. Give an error then if they aren't valid, or send on to instructions page.)  
- [ ] Use permission classes to restrict access to put/post/etc.  
- [ ] Write results to report output  
- [ ] Add docker container for DRF app  
  - [ ] Deployment? gunicorn?  

### In Progress

- [ ] When test is finished, mark test instance finished, user inactive and send results to server via API (probably have to keep user id and test instance id in redux state)  

### Done ✓

- [x] When test taker is valid and starting the test, create a test instance, and mark it as started.  
- [x] Send email and code to server and validate  
- [x] Create test-taker auth (email and code)  
- [x] Use React Router for various pages  
- [x] Create test taker code as a default value  
- [x] Use viewsets to access API  
- [x] Get test-taker by email, not ID  
- [x] Create test instances in DB  
- [x] Refactor random view and limits into the main question viewset  
- [x] Work out how to handle button click when the array of questions is in separate state from the "currentQuestion" number variable (passed the full question object along with the user answer to the button click handler reducer).  
- [x] Move answer options from the Test into the Question component, either as a child component or directly.  
- [x] Remove dummy data from testSlice and make sure things still work with data from the API. (NB: total number of questions is now hard coded)  
- [x] Move api/services to app folder, since that's what the RTK Query docs have in their examples.  
- [x] Remove Header component, since it's no longer used now that the question number is integrated into the instructions and the Timer is at the bottom.  

