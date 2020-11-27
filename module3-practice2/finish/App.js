import React, { useState, useEffect } from 'react';

import { PostList } from './components/PostList';
import { Form } from './components/Form';

const postsUrl = 'https://jsonplaceholder.typicode.com/posts';

function App() {
    const [posts, setPosts] = useState([]);
    const [filtredPosts, setFiltredPosts] = useState([]);

    const filterPosts = (search, isUserOneOnly = false) => {
        if (!search && !isUserOneOnly) {
            return setFiltredPosts([]);
        }

        let newPosts = posts;

        if (search) {
            newPosts = newPosts.filter(
                (post) =>
                    post.title.includes(search) || post.body.includes(search)
            );
        }

        if (isUserOneOnly) {
            newPosts = newPosts.filter((post) => post.userId === 1);
        }

        setFiltredPosts(newPosts);
    };

    useEffect(() => {
        fetch(postsUrl)
            .then((response) => response.json())
            .then((data) => setPosts(data));
    }, []);

    return (
        <div className="App">
            <Form filterPosts={filterPosts} />
            <PostList posts={filtredPosts.length ? filtredPosts : posts} />
        </div>
    );
}

export default App;
