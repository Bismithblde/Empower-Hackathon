import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import './Blog.css';
import { useAchievements } from '../../../contexts/AchievementsContext';
import Reader from '../../../components/Tiptap/Reader';
export default function Blog() {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [blogContent, setBlogContent] = useState('');
  const [blogTitle, setBlogTitle] = useState('');
  const { id } = useParams();
  const { state, dispatch } = useAchievements();
  const achievementAddedRef = useRef(false);

  const getBlog = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/api/get-blog`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _id: id }),
      });
      const data = await response.json();
      return data.blog[0];
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  useEffect(() => {
    const fetchBlog = async () => {
      const fetchedBlog = await getBlog(id);
      if (fetchedBlog) {
        setBlogContent(fetchedBlog.text);
        setBlogTitle(fetchedBlog.title);
      }
    };

    fetchBlog();
  }, [id]);

  useEffect(() => {
    if (!achievementAddedRef.current) {
      const achievementExists = state.achievements.some(ach => ach.name === 'First Foward Blog Visited!');

      if (!achievementExists) {
        dispatch({
          type: 'ADD_ACHIEVEMENT',
          payload: {
            name: 'First Foward Blog Visited!',
            description: 'Awarded for visiting your first blog on foward hub.',
            image: "/ribbon1.PNG",
            animationTriggered: false,
            dateEarned: new Date().toISOString()
          }
        });
        achievementAddedRef.current = true; // Mark the achievement as added
      }
    }
    console.log(blogContent)
  }, [blogTitle, state.achievements, dispatch]);

  return (
    <div className='blog-container'>
       <div className='blog-content'> <Reader content={blogContent}/></div>
    </div>
  );
}
