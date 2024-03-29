import { useSelector } from "react-redux";

function Customer() {
 const  user=useSelector(state=>state.user)
const firstName =user.fullName.split(" ")[1]
  return (<><h2 style={{textTransform: 'capitalize'}}>👋 Welcome, {firstName} </h2>
  <h3>Your Account created date: {user.createAt.toString().slice(0,24)}</h3>
  </>);
}

export default Customer;
