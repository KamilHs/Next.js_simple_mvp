import React from "react";
import styled from "styled-components";
import Link from "next/link";

import Container from "./Container";

const Wrapper = styled.div`
width:100%;
position:fixed;
background:white;
left:0;
top:0;
box-shadow: 0 0 6px 0 #000;
padding: 15px;
`

const NavList = styled.div`
    display:flex;
`

const NavItem = styled.div`
    margin: 0 15px 0 0;
    color:#545454;
    font-weight: 600;
    & a{
        transition:color 0.3s ease;
    }
    & a:hover{
        color:#175fb9 !important;
    }
    & a{
        color: #545454 !important;
    }
`

const Nav: React.FC = () => {
    return (
        <Wrapper>
            <Container>
                <NavList>
                    <NavItem>
                        <Link href="/">Posts</Link>
                    </NavItem>
                    <NavItem>
                        <Link href="/posts/new">Create Post</Link>
                    </NavItem>
                </NavList>
            </Container>
        </Wrapper>
    )
}

export default Nav;