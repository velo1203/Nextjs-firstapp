import { URL } from "../app/(Home)/page";

async function getVideo(id: string) {
    const res = await fetch(URL + `/${id}/videos`);
    return res.json();
}

export default async function MovieInfo({ id }: { id: string }) {
    const video = await getVideo(id);
    return <h5>{JSON.stringify(video)}</h5>;
}
