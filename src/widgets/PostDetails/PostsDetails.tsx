import React from 'react'
import Button from 'shared/ui/Button';

import './PostDetails.scss'
import { Post } from 'entities/post/model/types';
import { useNavigate } from 'react-router-dom';

interface Props {
    postDetails?: Post
    isLoading: boolean
}

const PostDetails: React.FC<Props> = ({ postDetails, isLoading }) => {
    const navigate = useNavigate();

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <div className="PostDetails">
            <Button text='back' onClick={() => navigate(-1)} />
            <h2 className='PostCard-title'>{postDetails?.id}. {postDetails?.title}</h2>
            <p>{postDetails?.body}</p>
        </div>
    )
}

export default PostDetails
