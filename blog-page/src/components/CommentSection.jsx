import React, { useState } from 'react';

const CommentSection = ({ postId }) => {
const [comments, setComments] = useState([]);
const [newComment, setNewComment] = useState('');

const handleAddComment = () => {
if (newComment.trim()) {
    setComments([...comments, newComment]);
    setNewComment('');
}
};

return (
<div className="comment-section">
    <h3>Comments</h3>
    <ul>
    {comments.map((comment, index) => (
        <li key={index}>{comment}</li>
    ))}
    </ul>
    <textarea
    value={newComment}
    onChange={(e) => setNewComment(e.target.value)}
    placeholder="Add a comment"
    ></textarea>
    <button onClick={handleAddComment}>Submit</button>
</div>
);
};

export default CommentSection;
