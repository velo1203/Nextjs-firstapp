import { Suspense } from "react";
import { URL } from "../../(Home)/page";
import MovieInfo from "../../../components/get-movie";

async function getMovie(id: string) {
    const res = await fetch(URL + `/${id}`);
    return res.json();
}

async function getVideo(id: string) {
    const res = await fetch(URL + `/${id}/videos`);
    return res.json();
}

export default async function Page({
    params: { id },
}: {
    params: { id: string };
}) {
    const [movie, videos] = await Promise.all([getMovie(id), getVideo(id)]);
    return (
        <div>
            <Suspense fallback={<h1>Loading...</h1>}>
                {JSON.stringify(movie)}
            </Suspense>
        </div>
    );
}
