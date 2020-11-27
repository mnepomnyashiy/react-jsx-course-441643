import React, { useState, useEffect } from 'react';
import PostItem from './PostItem';
import { Loader } from './Loader';

const postsUrl = 'https://jsonplaceholder.typicode.com/posts';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(postsUrl)
            .then((response) => response.json())
            .then((data) => setPosts(data));
    }, []);

    return (
        <div>
            {posts[0] ? (
                posts.map((post) => (
                    <PostItem
                        key={post.title}
                        title={post.title}
                        body={post.body}
                    />
                ))
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default PostList;
