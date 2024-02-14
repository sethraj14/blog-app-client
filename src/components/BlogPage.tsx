import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_BLOG_BY_ID } from '../queries/getBlogById';
import { Blog } from '../types';

const BlogPage = () => {
  const { id } = useParams<'id'>();
  const { loading, error, data } = useQuery<
    { getBlogPost: Blog },
    { id: string }
  >(GET_BLOG_BY_ID, { variables: { id: id || '' } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data || !data.getBlogPost) return <p>Blog post not found.</p>;

  const { title, content, author, createdAt } = data.getBlogPost;

  return (
    <div className="blog-page-container">
      <Link to="/" className="back-btn">
        Back to Home
      </Link>
      <h1 className="blog-page-title">{title}</h1>
      <p className="blog-page-date">
        {' '}
        {new Date(createdAt).toLocaleDateString('en-IN', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}{' '}
      </p>
      <p className={'blog-page-author'}>By: {author}</p>
      <div className="blog-page-content">{content}</div>
    </div>
  );
};

export default BlogPage;
