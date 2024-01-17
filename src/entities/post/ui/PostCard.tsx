import React from 'react'
import Button from 'shared/ui/Button';
import type { Post } from '../model/types'
import './PostCard.scss'
import { useNavigate } from 'react-router-dom';

interface Props {
    post: Post
}

const PostCard: React.FC<Props> = ({ post }) => {
    const navigate = useNavigate();
    return (
        <div className='PostCard'>
            <h2 className='PostCard-title'>{post.id}. {post.title}</h2>
            <p className='PostCard-body'>
                {post.body.length > 150 ?
                    <>
                        {post.body.substring(0, 150) + '...'}
                        <Button text='view' onClick={() => navigate(`/${post.id}`)} />
                    </>
                    : post.body}
            </p>
        </div>
    );
};

export default PostCard
