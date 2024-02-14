// src/mutations/createBlogPost.ts
import { gql } from '@apollo/client';

export const CREATE_BLOG_POST = gql`
  mutation CreateBlogPost($title: String!, $content: String!) {
    createBlogPost(title: $title, content: $content) {
      id
      title
      content
    }
  }
`;
