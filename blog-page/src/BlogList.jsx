import React from 'react';
import blogData from '../data/blogData';
import BlogCard from '../components/BlogCard';

const BlogList = () => {
return (
<div className="blog-list">
    {blogData.map((post) => (
    <BlogCard
        key={post.id}
        title={post.title}
        author={post.author}
        date={post.date}
        content={post.content}
        imageUrl={post.imageUrl}
    />
    ))}
</div>
);
};

export default BlogList;
