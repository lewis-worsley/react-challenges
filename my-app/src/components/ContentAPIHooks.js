import React, { useEffect, useState } from 'react';
import css from "./css/Content.module.css";
import PostItemAPI from './PostItem';
import Loader from './Loader';
import axios from 'axios';
import API_KEY from '../secrets';

function ContentAPIHooks() {

    console.log("useState")

    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setPosts] = useState([]);
    const [savedPosts, setSavedPosts] = useState([]);

    useEffect(() => {
        console.log("useEffect")
        fetchImages()
    }, []);

    const fetchImages = async () => {
        console.log("const fetchImages")
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100&safesearch=true&editors_choice=true&orientation=horizontal`);
        const fetchedPosts = response.data.hits;

        setIsLoaded(true);
        setPosts(fetchedPosts);
        setSavedPosts(fetchedPosts);

    }

    const handleChange = (event) => {
        console.log("const handleChange")
        const name = event.target.value.toLowerCase()
        const filteredPosts = savedPosts.filter((post)=>{
            return post.user.toLowerCase().includes(name);
        })
        
        setPosts(filteredPosts);
    }

    return (
        <div className={css.Content}>
            

            <div className={css.TitleBar}>
                <h1>My Photos</h1>
                <form>
                    <label htmlFor="searchinput">Search</label>
                    <input
                        type="search"
                        id="searchinput"
                        placeholder="By Author"
                        onChange={(event) => handleChange(event)}
                    />
                    <h4>posts found {posts.length}</h4>
                </form>
            </div>

            <div className={css.SearchResults}>
                {
                    isLoaded ?
                        <PostItemAPI savedPosts={posts} />
                        : <Loader />
                }

            </div>
        </div>
    )
}

export default ContentAPIHooks