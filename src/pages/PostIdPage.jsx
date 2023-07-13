import React, { useEffect, useState } from 'react';
import {useParams } from 'react-router-dom';
import { useFetching } from '../components/hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';

function PostIdPage() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const responce = await PostService.getById(id)
    setPost(responce.data)
  })

  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const responce = await PostService.getCommentsByPostId(id)
    setComments(responce.data)
  })

  useEffect(() => {
    fetchPostById(params.id)
    fetchComments(params.id)
  }, [])

  return (
    <div>
      <h1>The user got to the post with ID = {params.id}</h1>
      {isLoading 
          ? <Loader/>
          : <div>{post.id}. {post.title}</div>
      }
      <h2>
        Comments:
      </h2>
      {isComLoading 
          ? <Loader/>
          : <div>
            {comments.map(comm => 
                <div key={comm.id} style={{marginTop: '10px'}}>
                    <h5>{comm.email}</h5>
                    <p>{comm.body}</p>
                </div>
            )}
          </div>
      }
    </div>
  );
}

export default PostIdPage;
