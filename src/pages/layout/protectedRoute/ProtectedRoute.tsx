import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import Login from '@pages/login/index'

const ProtectedRoute = (props) => {
  // const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const checkUserToken = () => {
    const userToken = localStorage.getItem('user-token')
    if (!userToken || userToken === 'undefined') {
      setIsLoggedIn(false)
      // return navigate('/login')
    }
    setIsLoggedIn(true)
    // return navigate('/')
  }
  useEffect(() => {
    checkUserToken()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn])

  return <>{isLoggedIn ? props.children : <Login />}</>
}
export default ProtectedRoute
