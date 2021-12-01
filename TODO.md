# Project

Project Description

<em>[TODO.md spec & Kanban Board](https://bit.ly/3fCwKfM)</em>

### Todo

- [ ] Create test instances in DB  
- [ ] Create test-taker auth (email and code)  
- [ ] Send results to server API  
- [ ] Write results to report output  
- [ ] Add docker container for DRF app  
  - [ ] Deployment? gunicorn?  

### In Progress


### Done ✓

- [x] Work out how to handle button click when the array of questions is in separate state from the "currentQuestion" number variable (passed the full question object along with the user answer to the button click handler reducer).  
- [x] Move answer options from the Test into the Question component, either as a child component or directly.  
- [x] Remove dummy data from testSlice and make sure things still work with data from the API. (NB: total number of questions is now hard coded)  
- [x] Move api/services to app folder, since that's what the RTK Query docs have in their examples.  
- [x] Remove Header component, since it's no longer used now that the question number is integrated into the instructions and the Timer is at the bottom.  

