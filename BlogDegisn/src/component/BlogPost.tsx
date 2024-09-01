import React from 'react';

interface BlogPostProps {
  title: string;
  date: string;
  author: string;
  content: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, date, author, content }) => {
  return (
    <div className="blog-post">
      <h2 className="blog-post-title">{title}</h2>
      <p className="blog-post-meta">{date} by <a href="#">{author}</a></p>
      <p>{content}</p>
    </div>
  );
};

export default BlogPost;

