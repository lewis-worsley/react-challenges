import React from 'react';
import css from './css/PostItem.module.css';

function PostItem(props) {
    return (

        // props.savedPosts.map(post => {
        //     return (
        //         <div className={css.searchItem} key={post.title}>
        //             <p>{post.title}</p>
        //             <p>{post.name}</p>
        //             <img src={post.image} alt='random'></img>
        //             <p>{post.description}</p>
        //         </div>
        //     )
        // })

        props.savedPosts.map(post => {
            // Extra task destructuring
            const { title, name, image, description } = post
            return (
                <div className={css.searchItem} key={title}>
                    <p>{title}</p>
                    <p>{name}</p>
                    <img src={image} alt='random'></img>
                    <p>{description}</p>
                </div>
            )
        })
    )
}

export default PostItem