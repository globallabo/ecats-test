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

  if (isError) return <div>Error!</div>;
  if (isLoading) return <div>Loading ...</div>;
  if (!testTakers) return <div>No data!.</div>;

  return (
    <>
      <h1>Test Takers</h1>
      {testTakers.map((testTaker) => (
        <div key={testTaker.id}>
          <p>
            {testTaker.id}, {testTaker.email}, {testTaker.code}
          </p>
        </div>
      ))}
      <AddTestTaker />
    </>
  );
}

export const AddTestTaker = () => {
  const [addTestTaker] = useCreateTestTakerMutation();
  const testTaker = {
    email: "something2@new.com",
  };
  const addHandler = async () => {
    await addTestTaker(testTaker);
  };
  return (
    <>
      <button onClick={addHandler}>Add a new test taker</button>
    </>
  );
};

export default Admin;
