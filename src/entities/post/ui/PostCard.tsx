import React from 'react'
import Button from 'shared/ui/Button';
import type { Post } from '../model/types'
import './PostCard.scss'

interface Props {
    post: Post
}
const PostCard: React.FC<Props> = ({ post }) => {
    return (
        <div className='PostCard'>
            <h2 className='PostCard-title'>{post.id}. {post.title}</h2>
            <p className='PostCard-body'>
                {post.body.length > 150 ?
                    <>
                        {post.body.substring(0, 150) + '...'}
                        <Button text='view' onClick={() => console.log('click')} />
                    </>
                    : post.body}
            </p>
        </div>
    );
};

PostCard.displayName = "PostCard";

export default PostCard
