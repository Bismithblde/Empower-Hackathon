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
  const { achievements, addAchievement } = useAchievements();
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
    if (achievements.length > 0 && !achievementAddedRef.current) {
      const timer = setTimeout(() => {
        const newAchievement = {
          name: 'First Blog Visited',
          description: 'Awarded for visiting your first blog.',
          image: "/ribbon1.PNG",
          animationTriggered: false,
          dateEarned: new Date().toISOString(),
        };
        addAchievement(newAchievement);
        achievementAddedRef.current = true;
      }, 1000);

      return () => clearTimeout(timer); // cleanup on unmount or when blogTitle changes
    }
  }, [achievements, blogTitle, addAchievement]);

  return (
    <div className='blog-container'>
      <div className='blog-content'>
        <Reader content={blogContent} />
      </div>
    </div>
  );
}
