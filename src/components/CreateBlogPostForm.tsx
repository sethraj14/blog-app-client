import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_BLOG_POST } from '../mutations/createBlogPost';
import { GET_BLOGS } from '../queries/getBlogs'; // Assuming you have this query

const CreateBlogPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const [createBlogPost] = useMutation(CREATE_BLOG_POST, {
    refetchQueries: [
      GET_BLOGS // This will refetch blog posts list after creation
    ]
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) {
      alert('Please fill in all fields');
      return;
    }
    await createBlogPost({ variables: { title, content } });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreateBlogPostForm;
