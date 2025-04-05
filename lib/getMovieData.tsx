"use server";
import { MovieProps } from "@/types";

export default async function getMovieData(req : string): Promise<MovieProps> {
    const API = process.env.API_KEY;
    const res = await fetch(`http://www.omdbapi.com/?apikey=${API}&t=${req}`);
    const data = await res.json();
    console.log(data);

    return data;
}