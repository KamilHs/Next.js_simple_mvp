import React from "react";
import styled from "styled-components";
import format from "date-fns/format";
import Link from "next/link";

import { IPost } from "../core/types";

interface IProp {
    post: IPost;
    isShort?: boolean;
}

const PostTitle = styled.h3`
text-align:center;
`
const PostBody = styled.p` 
margin: 10px 0;
font-size:18px;
`
const PostDate = styled.span`
color:#aaa;
`

const PostBottomSection = styled.div`
display:flex;
align-items:center;
justify-content:flex-end;
`

const PostLink = styled.div`
    margin: 0 10px;
    color:blue;
    font-weight:600;
    text-decoration:underline;
`

const Post: React.FC<IProp> = ({ post, isShort = false }) => {

    return (
        <>
            <PostTitle>{post.title}</PostTitle>
            <PostBody>
                {
                    isShort && post.body.length > 300
                        ? post.body.substr(0, 300) + "..."
                        : post.body
                }

            </PostBody>
            <PostBottomSection>
                <PostDate>{format(Date.parse(post.date), "dd.MM.yyy HH:mm")}</PostDate>
                {isShort &&
                    <PostLink>
                        <Link href={`/posts/${post.id}`}>View more...</Link>
                    </PostLink>
                }
            </PostBottomSection>
        </>
    )
}

export default Post;