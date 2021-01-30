import React from "react";
import {
    GetStaticProps,
    GetStaticPropsContext,
    GetStaticPropsResult,
    GetStaticPaths,
    GetStaticPathsResult,
} from 'next'

import Layout from "components/Layout";
import Container from "components/Container";
import Row from "components/Row";
import Col from "components/Col";
import { IPost } from "core/types";
import axios from "core/axios";
import { GET_ALL_POSTS, GET_POST_BY_ID } from "core/urls";
import BasePost from "components/BasePost";

interface IProp {
    post: IPost
}

const Post: React.FC<IProp> = ({ post }) => {
    return (
        <Layout title={post.title}>
            <Container>
                <Row>
                    <Col xs={12}>
                        <BasePost post={post} />
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async (): Promise<GetStaticPathsResult> => {
    const res = await axios.get<IPost[]>(GET_ALL_POSTS);
    const posts: IPost[] = res.data;
    const paths = posts
        .filter(post => post.body && post.title && post.date && post.id)
        .map(post => ({ params: { postId: post.id.toString() } }));

    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext): Promise<GetStaticPropsResult<IProp>> => {
    const res = await axios.get<IPost[]>(GET_POST_BY_ID + context?.params?.postId);
    return {
        props: {
            post: res.data[0]
        }
    }
}


export default Post;