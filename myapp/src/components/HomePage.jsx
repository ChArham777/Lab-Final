import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories,setError } from '../Store/Slices/slice';
import { Link } from 'react-router-dom';

function HomePage() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    fetch('https://emojihub.yurace.pro/api/all')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch.');
        }
        return response.json();
      })
      .then((data) => {
        dispatch(setCategories(data));
      })
      .catch((error) => {
        dispatch(setError(error.message));
      });
  }, [dispatch]);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
  <h1 style={{ marginBottom: '20px', color: '#333' }}>Emoji Metrics</h1>
  {categories.length === 0 ? (
    <p>Loading...</p>
  ) : (
    categories.map((category) => (
      <div key={category.id} style={{ marginBottom: '15px' }}>
        <Link to={`/details/${category.id}`} style={{ textDecoration: 'none', color: '#007bff' }}>
          {category.name} - {category.metric}
        </Link>
      </div>
    ))
  )}
</div>


  );
}

export default HomePage;
