import React from "react";
import PostListItem from "./PostListItem.jsx";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "react-router-dom";

const fetchPosts = async (pageParam, searchParams) => {
    const searchParamsObj = Object.fromEntries([...searchParams])

    console.log(searchParamsObj)

    const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
        params: { page: pageParam, limit: 10, ...searchParamsObj },
    });
    return res.data;
};

const PostList = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery({
        queryKey: ["posts", searchParams.toString()],
        queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam, searchParams),
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
                <React.Fragment key={post._id}>
                    <PostListItem key={post._id} post={post} />
                    <hr className="my-8 border-white opacity-30" />
                </React.Fragment>
            ))}
        </InfiniteScroll>
    );
};

export default PostList;
