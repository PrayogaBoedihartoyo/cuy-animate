"use client";

import {useParams} from "next/navigation";
import {useEffect, useState} from "react";
import Image from "next/image";

const DetailsPage = async () => {
    const [anime, setAnime] = useState({});
    const { mal_id } = useParams();

    useEffect(() => {
        const fetchAnime = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/anime/${mal_id}`);
            const api = await response.json();

            setAnime(api.data);
        }
        fetchAnime();
    }, [mal_id]);

    return (
        <div className="cursor-pointer text-color-primary hover:text-color-accent transition-all p-4">
            <Image src={anime?.images?.webp?.image_url} alt="..." width={200} height={100} className="object-fit"/>
        </div>
    );
}

export default DetailsPage
