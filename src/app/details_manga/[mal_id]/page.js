"use client";

import {useParams} from "next/navigation";
import {useEffect, useState} from "react";
import Image from "next/image";

const DetailsPage = async () => {
    const [anime, setAnime] = useState({});
    const { mal_id } = useParams();

    useEffect(() => {
        const fetchAnime = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/manga/${mal_id}`);
            const api = await response.json();

            setAnime(api.data);
        }
        fetchAnime();
    }, [mal_id]);

    return (
        <div className="text-color-primary transition-all p-4">
            <div className="col-auto">
                <Image src={anime?.images?.webp?.image_url} alt="..." width={200} height={100} className="object-fit" />
                <div className="ml-1 mt-5">
                    <h1 className="font-bold text-xl mb-2">{anime.title}</h1>
                    <p>{anime.synopsis}</p>
                </div>
            </div>
        </div>
    );
}

export default DetailsPage
