import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_BLOG_POST } from '../mutations/createBlogPost';
import { GET_BLOGS } from '../queries/getBlogs';

const CreateBlogPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [createBlogPost] = useMutation(CREATE_BLOG_POST, {
    refetchQueries: [GET_BLOGS]
  });

  const handleSubmit = async (e: React.FormEvent) => {
    setIsSubmitting(true);
    e.preventDefault();
    if (!title || !content || !author) {
      alert('Please fill in all fields');
      return;
    }

    try {
      await createBlogPost({ variables: { title, content, author } });
      setTitle('');
      setContent('');
      setAuthor('');
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false); // Re-enable the submit button regardless of success or failure
    }
  };

  return (
    <div className="form-container">
      <div className="form-title">Create a New Blog Post</div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="form-control"
          ></input>
        </div>
        <div className="form-group">
          <label className="form-label">Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
            minLength={10}
          ></textarea>
        </div>

        <button
          type="submit"
          className="submit-btn"
          disabled={
            isSubmitting || !title.trim() || !content.trim() || !author.trim()
          }
        >
          {isSubmitting ? 'Submitting...' : 'Create Post'}
        </button>
      </form>
    </div>
  );
};

export default CreateBlogPostForm;
