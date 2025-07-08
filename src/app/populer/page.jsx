"use client";

import AnimeList from "@/components/AnimeList";
import SideBar from "@/components/SideBar";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "../libs/api-libs";

const Page = () => {
    const [page, setPage] = useState(1);
    const [topAnime, setTopAnime] = useState({});

    const fetchData = async () => {
        const populerAnime = await getAnimeResponse("top/anime", `page=${page}`);
        setTopAnime(populerAnime);
    }

    useEffect(() => {
        fetchData();
    }, [page]);

    return (
        <div className="min-h-screen flex ">
                <SideBar />
                <main className="flex-1 mt-16 m-4 pt-16 md:ml-64 bg-[var(--color-base)] rounded-3xl">
                  <HeaderMenu title={`Populer #${page}`} />
                  <AnimeList api={topAnime} />
                  <Pagination page={page} 
                  lastPage={topAnime.pagination?.last_visible_page || 1}
                  setPage={setPage} />
                </main>
        </div>
    )
}

export default Page;