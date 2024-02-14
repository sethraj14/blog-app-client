import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_BLOGS } from '../queries/getBlogs';
import { Blog } from '../types';

const BlogList = () => {
  const { loading, error, data } = useQuery<{ getAllBlogPosts: Blog[] }>(
    GET_BLOGS
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data?.getAllBlogPosts?.map(({ id, title }) => (
        <div key={id}>
          <h3>{title}</h3>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
