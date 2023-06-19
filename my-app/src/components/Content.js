import React, { Component } from 'react';
import { savedPosts } from "../posts.json";
import css from "./css/Content.module.css";
import PostItem from './PostItem';
import Loader from './Loader';


export class Content extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoaded: true,
            })
            
        }, 2000);
    }

    render() {
        return (
            <div className={css.Content}>

                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                </div>

                {/* Part 1: Creating the map function */}

                {/* <div className={css.SearchResults}>
                    {
                        savedPosts.map(post => {
                            return (
                                <div className={css.SearchItem} key={post.title}>
                                    <p>{post.title}</p>
                                    <p>{post.name}</p>
                                    <img src={post.image} alt='random'></img> 
                                    <p>{post.description}</p>
                                </div>
                            )
                        })
                    }
                </div> */}

                {/* Part 2: Creating a child component */}

                <div className={css.SearchResults}> {
                    this.state.isLoaded ? 
                    <PostItem savedPosts={savedPosts} /> : <Loader />
                }
                    
                </div>
            </div>
        )
    }
}

export default Content