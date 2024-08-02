import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./BlogCreator.css";
import Tiptap from '../../../components/Tiptap/Tiptap.tsx';
import useAuthContext from '../../hooks/useAuthContext.jsx';

export default function BlogCreator() {
  const [isAdmin, setIsAdmin] = useState(null);
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const fetchAdmin = async () => {
    if (user && user.username) {
      try {
        const response = await fetch(`${apiUrl}/api/check-admin`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: user.username }),
        });
        const data = await response.json();
        setIsAdmin(data.isAdmin === "true");
      } catch (error) {
        console.log(error);
        setIsAdmin(false);
      }
    } else {
      setIsAdmin(false);
    }
  };

  useEffect(() => {
    fetchAdmin();
  }, [user]);

  useEffect(() => {
    if (isAdmin === false) {
      navigate('/');
    }
  }, [isAdmin, navigate]); 

  return (
    <div className='blog-creator-page-container'>
      <div className='card'>
        <Tiptap />
      </div>
    </div>
  );
}
