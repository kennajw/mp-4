"use client";
import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
    text-decoration: none;
    padding: 5px;
    background-color: black;
    color: white;
    border-radius: 5px;
    margin: 5px
`;

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const StyledInput = styled.input`
    margin: 5px;
    padding: 5px;
    border: solid black;
    border-radius: 5px;
    width: 300px;
`;

const StyledSpan = styled.span`
    padding: 5px;
    background-color: black;
    color: white;
    border-radius: 5px;
    margin: 5px
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0;
    padding: 0;
`;

export function Search() {
    const [movie, setMovie] = useState("");

    return (
        <Container>
            <StyledDiv>
                <StyledInput 
                    type="text" 
                    placeholder="Movie Title e.g.: Clueless"
                    value={movie}
                    onChange={(e) => setMovie(e.target.value)}/>
                
                {movie ? (
                    <StyledLink href={`/${movie}`}>find movie!</StyledLink>
                ) : (
                    <StyledSpan>find movie!</StyledSpan>
                )}
            </StyledDiv>
            <p>**titles are case-sensitive**</p>
        </Container>
    );
}