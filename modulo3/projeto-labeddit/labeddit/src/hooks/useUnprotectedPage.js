import { useNavigate } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { goToPostsListPage } from '../routes/coordinator'

const useUnprotectedPage = () => {
  const navigate = (useNavigate)
  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (!token){
      goToPostsListPage(navigate)
    }
  }, [navigate])
}

export default useUnprotectedPage