import React, { useState } from 'react'

function ControlledFormHooks() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('website');
    const [comments, setComments] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
    console.log(name, category, comments)
    }
    return (
        <div>
            <h2>Please fill out the form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='id-name'>Your Name:</label>
                    <input value={name}
                        onChange={(event) => setName(event.target.value)}
                        id='id-name'
                        name='name'
                        type='text'
                    />
                </div>
                <div>
                    <label htmlFor='id-category'>Query category:</label>
                    <select
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                        id='id-category'
                        name='category'
                    >
                        <option value="website">Website issue</option>
                        <option value="order">Order issue</option>
                        <option value="general">General inquiry</option>
                    </select>
                    <div>
                        <label htmlFor='id-comments'>Comments:</label>
                        <textarea
                            value={comments}
                            onChange={(event) => setComments(event.target.value)}
                            id='id-comments'
                            name='comments'
                        />
                    </div>
                </div>
                <input type='submit' value='Submit' />
            </form>
        </div>
    )
}

export default ControlledFormHooks


// Steps to convert a controlled class form into a functional one
// 1. Define a state property, its initial value and the setter method with the useState hook
// 2. Update onChange and value attributes to use new setters and state properties
// 3. Remove all references to the 'this' keyword, including the onSubmit handler