import React from 'react'

const useUser = () => {
  const user = JSON.parse(localStorage.logged)
  return user;
}

export default useUser