// src/mutations/createBlogPost.ts
import { gql } from '@apollo/client';

export const CREATE_BLOG_POST = gql`
  mutation CreateBlogPost(
    $title: String!
    $content: String!
    $author: String!
  ) {
    createBlogPost(title: $title, content: $content, author: $author) {
      id
      title
      content
      author
    }
  }
`;
