import React from 'react';
import CommentSection from './CommentSection';
import { Helmet } from 'react-helmet';

const BlogPost = ({ post }) => (
<div className="blog-post">
<Helmet>
    <title>{post.title}</title>
    <meta name="description" content={post.excerpt} />
</Helmet>
<h1>{post.title}</h1>
<p>By {post.author} on {post.date}</p>
<img src={post.image} alt={post.title} />
<p>{post.content}</p>
<CommentSection postId={post.id} />
</div>
);

export default BlogPost;
