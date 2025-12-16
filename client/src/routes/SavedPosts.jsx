import React from "react";
import { useAuth } from "@clerk/clerk-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PostListItem from "../components/PostListItem";

const fetchSavedPosts = async (getToken) => {
    const token = await getToken();
    const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/users/saved/posts`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    return res.data;
};

const SavedPosts = () => {
    const { getToken } = useAuth();

    const { isPending, error, data } = useQuery({
        queryKey: ["savedPostsFull"],
        queryFn: () => fetchSavedPosts(getToken),
    });

    if (isPending) return "Loading saved posts...";
    if (error) return "Failed to load saved posts";

    if (!data || data.length === 0) {
        return <p className="text-center mt-12">No saved posts yet.</p>;
    }

    return (
        <div className="flex flex-col gap-8">
            <h1 className="text-2xl font-semibold">Saved Posts</h1>

            {data.map((post) => (
                <PostListItem key={post._id} post={post} />
            ))}
        </div>
    );
};

export default SavedPosts;
