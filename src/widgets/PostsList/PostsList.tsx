import { useEffect, useRef, useState } from 'react'
import { useGetPostsQuery } from 'entities/post/api/postApi'
import PostCard from 'entities/post/ui/PostCard'

import './PostsList.scss'

const PostsList = () => {
    const [start, setStart] = useState(0)
    const { data = [], isLoading } = useGetPostsQuery({ limit: 10, start });

    const beginRef = useRef(null)
    const endRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !isLoading) {
                    setStart(prev => prev + 3)
                }
            }, { threshold: 0 })

        if (endRef.current) {
            observer.observe(endRef.current)
        }

        return () => {
            if (endRef.current) {
                observer.unobserve(endRef.current)
            }
        }
    }, [isLoading])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setStart(prev => prev - 3 < 0 ? 0 : prev - 3)
                }
            }, { threshold: 0 })

        if (beginRef.current) {
            observer.observe(beginRef.current)
        }

        return () => {
            if (beginRef.current) {
                observer.unobserve(beginRef.current)
            }
        }
    }, [])

    return (
        <div className='PostsList'>
            <div className='PostsList-begin' ref={beginRef}></div>
            {data.map(post => <PostCard post={post} key={post.id} />)}
            <div className='PostsList-end' ref={endRef}></div>
            {isLoading && <div>Loading...</div>}
        </div>
    );
};

export default PostsList
