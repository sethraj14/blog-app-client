import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_BLOGS } from '../queries/getBlogs';
import { Blog } from '../types';
import CreateBlogPostForm from './CreateBlogPostForm';

const BlogList = () => {
  const { loading, error, data } = useQuery<{ getAllBlogPosts: Blog[] }>(
    GET_BLOGS
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <CreateBlogPostForm />
      {data?.getAllBlogPosts?.map(({ id, title }) => (
        <div key={id}>
          <h3>{title}</h3>
          <Link to={`/blog/${id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
