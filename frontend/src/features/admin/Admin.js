import { useState } from "react";
import { TextField } from "@mui/material";

import {
  useCreateTestTakerMutation,
  useGetAllTestTakersQuery,
} from "../../app/services/ecats";

function Admin() {
  const {
    data: testTakers = [],
    isError,
    isLoading,
  } = useGetAllTestTakersQuery();

  const initialValue = { email: "" };
  const [testTaker, setTestTaker] = useState(initialValue);
  const handleChange = ({ target }) => {
    setTestTaker((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };
  const [addTestTaker] = useCreateTestTakerMutation();
  const handleSubmit = () =>
    addTestTaker(testTaker).then(() => setTestTaker(initialValue));

  if (isError) return <div>Error!</div>;
  if (isLoading) return <div>Loading ...</div>;
  if (!testTakers) return <div>No data!.</div>;

  return (
    <>
      <h1>Test Takers</h1>
      {testTakers.map((testTaker) => (
        <div key={testTaker.id}>
          <p>
            {testTaker.id}, {testTaker.email}, {testTaker.code},
            {testTaker.active ? "Active" : "Inactive"}
          </p>
        </div>
      ))}
      <TextField
        onChange={handleChange}
        value={testTaker.email}
        required
        fullWidth
        id="test-taker-email"
        name="email"
        label="Email"
      />
      <button onClick={handleSubmit}>Add a new test taker</button>
    </>
  );
}

// export const AddTestTaker = () => {
//   const [addTestTaker] = useCreateTestTakerMutation();
//   const testTaker = {
//     email: "something2@new.com",
//   };
//   const addHandler = async () => {
//     await addTestTaker(testTaker);
//   };
//   return (
//     <>
//       <button onClick={addHandler}>Add a new test taker</button>
//     </>
//   );
// };

export default Admin;
