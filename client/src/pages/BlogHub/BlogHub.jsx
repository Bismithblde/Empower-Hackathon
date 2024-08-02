import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Paper, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import './BlogHub.css';
import useAuthContext from '../../hooks/useAuthContext';

export default function BlogHub() {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [scholarships, setScholarships] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [isAdmin, setIsAdmin] = useState(null);
  const { user } = useAuthContext();

  const getBlogs = async (type) => {
    try {
      const response = await fetch(`${apiUrl}/api/get-blogs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type }),
      });
      const data = await response.json();
      return data.blogs;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      const fetchedScholarships = await getBlogs('Scholarship');
      const fetchedBlogs = await getBlogs('Blog');
      setScholarships(fetchedScholarships);
      setBlogs(fetchedBlogs);
    };

    const fetchAdmin = async () => {
      if (user && user.username) {
        try {
          const response = await fetch(`${apiUrl}/api/check-admin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: user.username }),
          });
          const data = await response.json();
          setIsAdmin(data.isAdmin);
        } catch (error) {
          console.log(error);
          setIsAdmin(false);
        }
      }
    };

    fetchBlogs();
    fetchAdmin();
  }, [user]);

  return (
    <div className='bloghub-page-container'>
      <Container maxWidth="lg">
        <div className="blogs-list-container">
          <Paper elevation={3} className="scholarship-container">
            <Typography variant="h4" component="h1" gutterBottom>
              Scholarships
            </Typography>
            <List>
              {scholarships.map((scholarship) => (
                <ListItem button key={scholarship._id} component={Link} to={`/blog-hub/scholarships/${scholarship._id}`}>
                  <ListItemText primary={scholarship.title} />
                </ListItem>
              ))}
            </List>
          </Paper>
          <Paper elevation={3} className="blog-list-container">
            <Typography variant="h4" component="h1" gutterBottom>
              Financial Blogs
            </Typography>
            <List>
              {blogs.map((blog) => (
                <ListItem button key={blog._id} component={Link} to={`/blog-hub/blogs/${blog._id}`}>
                  <ListItemText primary={blog.title} />
                </ListItem>
              ))}
            </List>
          </Paper>

        </div>
      </Container>
      {isAdmin && (
            <div className="create-blog-container">
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/blog-creator"
                key="blog-creator-link"
                className="blog-creator-button"
                fullWidth
              >
                Blog Creator
              </Button>
            </div>
          )}
    </div>
  );
}
