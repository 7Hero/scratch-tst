import React from 'react'
import { Navigate } from 'react-router-dom';

interface Props {
  element: React.ReactElement;
}
const PrivateRoute: React.FC<Props> = ({ element }) => {
  if(localStorage.logged){
    return element
  } else {
    return <Navigate to='/' />
  }
}

export default PrivateRoute