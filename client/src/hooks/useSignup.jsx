import { useState } from 'react'
import useAuthContext from './useAuthContext'

const usernameValidation = /^[a-zA-Z0-9_]{5,}$/;

export const useSignup = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const signup = async (username, password) => {
    setIsLoading(true)
    setError(null)
    if (!usernameValidation.test(username)) {
      setError('Username can only contain letters, numbers, and underscores. Username must be at least 5 characters long.');
      setIsLoading(false)
      throw Error("Username can only contain letters, numbers, and underscores. Username must be at least 5 characters long.")
      return;
    }
    const response = await fetch(`${apiUrl}/api/signup`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ username, password })
    })
    const json = await response.json()
    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
      throw Error(json.error)
    }


    if (response.ok) {
      localStorage.setItem('user', JSON.stringify(json))
      dispatch({type: 'LOGIN', payload: json})
      setIsLoading(false)
    }
  }

  return { signup, isLoading, error }
}