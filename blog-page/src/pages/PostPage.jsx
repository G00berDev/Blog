import React from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from '../components/BlogPost';
import blogPosts from '../data/blogPosts';

const PostPage = () => {
const { postId } = useParams();
const post = blogPosts.find(post => post.id === parseInt(postId, 10));

return post ? <BlogPost post={post} /> : <h2>Post not found</h2>;
};

export default PostPage;
