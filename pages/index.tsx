import React from "react";
import { GetStaticPropsResult } from "next";
import { orderBy } from "lodash/fp";

import Layouts from "components/Layout";
import Container from "components/Container";
import Row from "components/Row";
import Col from "components/Col";
import SectionHeader from "components/SectionHeader";
import { IPost } from "core/types";
import axios from "core/axios";
import { GET_ALL_POSTS } from "core/urls";
import BasePost from "components/BasePost";

interface IProp {
    posts: IPost[]
}

const Index: React.FC<IProp> = ({ posts }) => {
    return (
        <Layouts title="Simple MVP">
            <Container>
                <Row>
                    <Col>
                        <SectionHeader>Latest Posts</SectionHeader>
                    </Col>
                    {
                        posts.map(post => (
                            <Col
                                key={post.id}
                                xs={12}
                                marginY={3}
                            >
                                <BasePost post={post} isShort />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </Layouts >
    )
}


export async function getStaticProps(): Promise<GetStaticPropsResult<IProp>> {
    const res = await axios.get<IPost[]>(GET_ALL_POSTS);
    const posts: IPost[] = res.data;
    const filteredPosts: IPost[] = posts.filter(post => post.body && post.title && post.date && post.id);
    return {
        props: {
            posts: orderBy('date', 'desc', filteredPosts)
        },
        revalidate:1
    };
}



export default Index;
