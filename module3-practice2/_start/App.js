import React, { useState, useEffect } from 'react';

import PostList from './components/PostList';

const postsUrl = 'https://jsonplaceholder.typicode.com/posts';

function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(postsUrl)
            .then((response) => response.json())
            .then((data) => setPosts(data));
    }, []);

    return (
        <div className="App">
            <PostList posts={posts} />
        </div>
    );
}

export default App;
