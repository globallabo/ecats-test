# Describing the flow of the ECATS App

## Taking a Test

1. Enter email and code.
   - These are verified to be a valid combo (API GET), and that the test taker is active, giving an error if not.
   - A test instance is created (API POST).
2. Begin the test (a second button from the email/code one?)
   - The test instance is marked as started (API PUT).
   - A set of questions is retrieved and stored in state (API GET).
3. Answer questions.
   - Results stored in local state.
4. Finish test.
   - Confirmation screen shown to user.
   - The test instance is marked as finished (API PUT).
   - Results are sent to the API (API POST?).

## Adding a Test Taker

1. Enter email.
   - This is verified to not yet exist (API GET), giving an error if it already exists.
   - The email is sent to the API (API POST).
     - The code is generated automatically.
2. Result of the action is shown, with email, code and confirmation that it is marked as active.

## Resetting a Test Taker

1.
