import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css';

const BlogCard = ({ post }) => (
<div className="blog-card">
<div className="blog-details">
    <h2>{post.title}</h2>
    <p>By {post.author} on {post.date}</p>
    <p>{post.excerpt}</p>
    <Link to={`/post/${post.id}`} className="read-more">Read More</Link>
</div>
</div>
);

export default BlogCard;
