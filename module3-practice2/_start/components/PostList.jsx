import React from 'react';
import { PostItem } from './PostItem';
import { Loader } from './Loader';

const PostList = ({ posts }) => {
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

export { PostList };
