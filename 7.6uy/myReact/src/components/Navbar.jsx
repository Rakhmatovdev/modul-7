import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="container">
    <div className="navbar d-flex">
<div className="logo">RJ</div>
<div className="pages d-flex gap-3">
<NavLink to={"/kassa"} className={"btn btn-primary"}>Kassa</NavLink>
<NavLink to={"/chiqim"} className={"btn btn-primary"}>Chiqim</NavLink>
<NavLink to={"/kirim"} className={"btn btn-primary"}>Kirim</NavLink>
</div>
</div>
    </div>
  )
}

export default Navbar