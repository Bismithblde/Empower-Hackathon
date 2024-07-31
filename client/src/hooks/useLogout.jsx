import useAuthContext from "./useAuthContext"
import { useNavigate } from 'react-router-dom';

export default function useLogout() {
  const { dispatch } = useAuthContext()
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem('user')

    dispatch({type: 'LOGOUT'})
    navigate('/login')
    console.log("Sucessful logout")
  }
  

  return {logout};
}
