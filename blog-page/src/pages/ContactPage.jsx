import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
const [formData, setFormData] = useState({
name: '',
email: '',
message: '',
});

const [submitted, setSubmitted] = useState(false);

const handleChange = (e) => {
const { name, value } = e.target;
setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e) => {
e.preventDefault();

if (formData.name && formData.email && formData.message) {
    setSubmitted(true);

    // Simulate API submission
    setTimeout(() => {
    setSubmitted(false);
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
    }, 1000);
} else {
    alert('Please fill in all fields.');
}
};

return (
<div className="contact-page">
    <h1>Contact Us</h1>
    <p>If you have any questions, feel free to reach out using the form below!</p>

    <form onSubmit={handleSubmit} className="contact-form">
    <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
        required
        />
    </div>

    <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
        required
        />
    </div>

    <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Enter your message"
        required
        ></textarea>
    </div>

    <button type="submit" disabled={submitted}>
        {submitted ? 'Submitting...' : 'Submit'}
    </button>
    </form>
</div>
);
};

export default ContactPage;
