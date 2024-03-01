import React, { useState } from 'react';
import axios from 'axios';

export const Write = () => {
  const [formData, setFormData] = useState({
    title: '',
    bodytext: '',
    tag: '',
    menusubtitle: '',
    img: null
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      img: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postData = new FormData();
      postData.append('title', formData.title);
      postData.append('bodytext', formData.bodytext);
      postData.append('tag', formData.tag);
      postData.append('menusubtitle', formData.menusubtitle);
      postData.append('image', formData.img);
      postData.append('date', new Date().toISOString());

      console.log('FormData:', postData);

      const response = await axios.post('http://localhost:8800/Posts', postData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Data submitted successfully!', response.data);
      setFormData({
        title: '',
        bodytext: '',
        tag: '',
        menusubtitle: '',
        img: null
      });
    } catch (err) {
      console.error('Error submitting data:', err);
    }
  };

  return (
    <div>
      <h1>Add New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          value={formData.title}
          onChange={handleInputChange}
          style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
        />
        <textarea
          name="bodytext"
          placeholder="Enter body text"
          value={formData.bodytext}
          onChange={handleInputChange}
          style={{ width: '100%', height: '200px', marginBottom: '10px', padding: '5px' }}
        ></textarea>
        <input
          type="text"
          name="tag"
          placeholder="Enter tags (comma-separated)"
          value={formData.tag}
          onChange={handleInputChange}
          style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
        />
        <input
          type="text"
          name="menusubtitle"
          placeholder="Enter menusubtitle"
          value={formData.menusubtitle}
          onChange={handleInputChange}
          style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
        />
        <input
          type="file"
          name="img"
          accept="image/*"
          onChange={handleImageChange}
          style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
        />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};
