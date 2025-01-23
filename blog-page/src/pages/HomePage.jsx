import React, { useState } from 'react';
import BlogCard from '../components/BlogCard';
import SearchBar from '../components/SearchBar';
import blogPosts from '../data/blogPosts';

const HomePage = () => {
const [searchTerm, setSearchTerm] = useState('');

const filteredPosts = blogPosts.filter(post =>
post.title.toLowerCase().includes(searchTerm.toLowerCase())
);

return (
<div>
    <SearchBar setSearchTerm={setSearchTerm} />
    <div className="blog-list">
    {filteredPosts.map(post => (
        <BlogCard key={post.id} post={post} />
    ))}
    </div>
</div>
);
};

export default HomePage;
