import { useGetPostByIdQuery } from "entities/post/api";
import { useParams } from "react-router-dom";
import PostDetails from "widgets/PostDetails"

const PostDetailsPage = () => {
    const { postId } = useParams();
    const { data, isLoading } = useGetPostByIdQuery(postId ? postId : '/')
    return <PostDetails postDetails={data} isLoading={isLoading}/>
}

export default PostDetailsPage