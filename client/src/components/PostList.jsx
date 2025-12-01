import React from "react";
import PostListItem from "./PostListItem.jsx";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const fetchPosts = async (pageParam) => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
        params: { page: pageParam, limit: 2 },
    });
    return res.data;
};

const PostList = () => {
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery({
        queryKey: ["posts"],
        queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam),
        initialPageParam: 1,
        getNextPageParam: (lastPage, pages) => lastPage.hasMore ? pages.length + 1 : undefined,
    });

    console.log(data)
    if (status === "loading") return "Loading...";

    if (status === "error")
        return "Chutiye ka website me error hua fix karne bol >:(" + error.message;

    const allPosts = data?.pages?.flatMap((page) => page.posts) || [];

    console.log(data);
    return (
        <InfiniteScroll
            dataLength={allPosts.length}
            next={fetchNextPage}
            hasMore={!!hasNextPage}
            loader={<h4>Loading more posts...</h4>}
            endMessage={
                <p>
                    <b>All posts loaded</b>
                </p>
            }
        >
            {allPosts.map(post => (
                <>
                    <PostListItem key={post._id} post={post} />
                    <hr className="my-8 border-white opacity-30" />
                </>
            ))}
        </InfiniteScroll>
    );
};

export default PostList;
