import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function Private({auth}) {
    console.log(Boolean(auth));
  return (
    <>
      {auth ? <Outlet></Outlet>:<Navigate to={"/login"}></Navigate>}
    </>
  )
}

export default Private