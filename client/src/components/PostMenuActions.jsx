import React from 'react'
import { useUser, useAuth } from "@clerk/clerk-react";
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from "axios"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const PostMenuActions = ({ post }) => {

  const { user } = useUser();
  const { getToken } = useAuth()
  const navigate = useNavigate()

  const { isPending, error, data: savedPosts } = useQuery({
    queryKey: ["savedPosts"],
    queryFn: async () => {
      const token = await getToken();
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/users/saved`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data;
    },
  });

  const isAdmin = user?.publicMetadata?.role === "admin" || false;
  const isSaved = savedPosts?.some((p) => p === post._id) || false;

  const deleteMutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return axios.delete(`${import.meta.env.VITE_API_URL}/posts/${post._id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    },
    onSuccess: () => {
      toast.success("Post deleted successfully")
      navigate("/")
    },
    onError: (error) => {
      toast.error(error.response.data)
    }
  })

  const queryClient = useQueryClient()

  const saveMutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return axios.patch(`${import.meta.env.VITE_API_URL}/users/save`,
        {
          postId: post._id
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['savedPosts'] })
    },
    onError: (error) => {
      toast.error(error.response.data)
    }
  })

  const handleDelete = () => {
    deleteMutation.mutate()
  }
  const handleSave = () => {
    if (!user) {
      return navigate("/login");
    }
    saveMutation.mutate();
  }

  return (
    <div>
      <h1 className='mt-8 mb-4 text-sm font-medium'>
        Actions
      </h1>
      {isPending ? "Loading..." : error ? "Saved posts fetch failed" : <div className='flex items-center gap-2 py-2 text-sm cursor-pointer' onClick={handleSave}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 48 48'
          width='20px'
          height='20px'
        >
          <path
            d='M12 4C10.3 4 9 5.3 9 7v34l15-9 15 9V7c0-1.7-1.3-3-3-3H12z'
            stroke='white'
            strokeWidth='2'
            fill={saveMutation.isPending ? isSaved ? "none" : "white" : isSaved ? "white" : "none"}
          />
        </svg>
        <span>
          Save this post
        </span>
        {saveMutation.isPending && <span className='text-xs'>(In Progress..)</span>}
      </div>}
      {user && (post.user.username === user.username || isAdmin) && (<div className='flex items-center gap-2 py-2 text-sm cursor-pointer' onClick={handleDelete}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20px"
          height="20px"
          fill="red"
        >
          <path d="M9 3V4H4V6H5V19C5 20.1 5.9 21 7 21H17C18.1 21 19 20.1 19 19V6H20V4H15V3H9ZM7 6H17V19H7V6ZM9 8V17H11V8H9ZM13 8V17H15V8H13Z" />
        </svg>
        <span>
          Delete this post
        </span>
        {deleteMutation.isPending && <span className='text-xs'>(in progress)</span>}
      </div>)}
    </div>
  )
}

export default PostMenuActions
