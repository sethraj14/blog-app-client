import { gql } from '@apollo/client';

export const GET_BLOG_BY_ID = gql`
  query GetBlogById($id: ID!) {
    getBlogPost(id: $id) {
      id
      title
      content
      author
      createdAt
    }
  }
`;
