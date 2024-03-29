import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./showSlice";

const Showuser = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.show.users);
  // const { data } = useFetch("https://jsonplaceholder.typicode.com/users");
  
  const handleBtn = () => {
    dispatch(getUsers());
  };
  return (
    <>
      <button onClick={handleBtn}>Show user</button>
      {user?.map((user) => {
        return (
          <Fragment key={user.id}>
            <h1>{user.name}</h1>
          </Fragment>
        );
      })}
    </>
  );
};

export default Showuser;
