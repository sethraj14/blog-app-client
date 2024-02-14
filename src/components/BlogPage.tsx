import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_BLOG_BY_ID } from '../queries/getBlogById';
import { Blog } from '../types'; // Assuming you have defined types for your data

const BlogPage = () => {
  const { id } = useParams<'id'>(); // Specify the expected type of 'id' parameter
  const { loading, error, data } = useQuery<
    { getBlogPost: Blog },
    { id: string }
  >(GET_BLOG_BY_ID, { variables: { id: id || '' } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data || !data.getBlogPost) return <p>Blog post not found.</p>;

  const { title, content, createdAt } = data.getBlogPost;

  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Time: {createdAt}</p>
      {/* Render other fields as needed */}
    </div>
  );
};

export default BlogPage;
