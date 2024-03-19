import Link from "next/link";

export const metadata = {
    title: "Home",
};
export const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
async function getMovies() {
    const res = await fetch(URL);
    const json = await res.json();
    return json;
}
export default async function Homepage() {
    const movies = await getMovies();
    return (
        <div>
            {movies.map((movie) => (
                <li>
                    <Link href={`/movie/${movie.id}`}>{movie.title}</Link>
                </li>
            ))}
        </div>
    );
}
