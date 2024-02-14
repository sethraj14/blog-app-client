import { gql } from '@apollo/client';

export const GET_BLOGS = gql`
  query GetBlogs {
    getAllBlogPosts {
      id
      title
      content
      author
      createdAt
    }
  }
`;
