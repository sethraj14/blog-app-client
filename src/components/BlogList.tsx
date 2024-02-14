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
      <h2 className={'blog-list-title'}>{'Blogs List'}</h2>
      <div className="container">
        {data?.getAllBlogPosts.map((blog) => (
          <div className="blog-card">
            <h2>{blog.title}</h2>
            <div className="blog-card-content">
              <p className="blog-date">
                {new Date(parseInt(blog.createdAt)).toLocaleDateString(
                  'en-IN',
                  {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  }
                )}
              </p>
              <p className={'blog-author'}>By: {blog.author}</p>
              <p className="blog-excerpt">
                {blog.content.substring(0, 200)}...
              </p>
              <Link to={`/blog/${blog.id}`} className="read-more">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
      <CreateBlogPostForm />
    </div>
  );
};

export default BlogList;
