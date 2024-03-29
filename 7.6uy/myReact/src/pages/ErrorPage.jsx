import { NavLink, useRouteError } from 'react-router-dom'

function ErrorPage() {
  const error = useRouteError()

  if (error.status === 404) {
    return (
      <div className="error-container">
        <h1>👇PageNotFound👇</h1>
        <h1 className='text-center align-items-center'>
          Sahifa topilmadi
        </h1>
        <NavLink to="/" className={"btn btn-secondary"}>Home Page</NavLink>
      </div>
    )
  }

  return (
    <div className="error-container">
      <h1>👇Something went wrong :(👇</h1>
      <p className="error-message">{error.message}</p>
      <NavLink to="/">Home Page</NavLink>
    </div>
  )
}

export default ErrorPage