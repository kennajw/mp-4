"use client";
import styled from "styled-components";
import Link from "next/link";

const StyledHeader = styled.header`
    display: flex;
    background-color: black;
    width: 100%;
    margin: 0;
    padding: 0;
`;

const StyledH1 = styled.h1`
    padding: 5px;
    padding-bottom: 0;
    font-weight: bold;
    font-size: 4xl;
    color: white;
`;

const StyledDiv = styled.div`
    flex-direction: column;
    justify-content: center;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

export default function Header() {
    return (
        <StyledHeader>
            <StyledDiv>
                <StyledLink href="/">
                    <StyledH1>Find That Movie!</StyledH1>
                </StyledLink>
            </StyledDiv>
        </StyledHeader>
    );
}