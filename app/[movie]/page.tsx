import { MovieProps } from "@/types";
import getMovieData from "@/lib/getMovieData";
import { StyledDiv, StyledH1, StyledP, StyledImg, Container } from "@/components/Styles";

export default async function Movie({params}: {params: Promise<{movie: string}>}) {
    const { movie } = await params;
    const response : MovieProps = await getMovieData(movie);
    console.log(response);

    return (
        <Container>
            <StyledDiv>
                {response.Response === "True" &&
                    <div>
                        <StyledH1>{response.Title} - {response.Year}</StyledH1>
                        <StyledP>Director: {response.Director}</StyledP>
                        <StyledP>Rating: {response.Rated}</StyledP>
                        <StyledImg src={response.Poster} alt="Poster of ${response.Title}" />
                    </div>
                }
                {response.Response === "False" &&
                    <div>
                        <StyledH1>Uh oh! It appears something went wrong:</StyledH1>
                        <StyledP>{response.Error}</StyledP>
                    </div>
                }
            </StyledDiv>
        </Container>
    )
}