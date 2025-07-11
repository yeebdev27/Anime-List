import { getAnimeResponse } from "@/app/libs/api-libs";
import SideBar from "@/components/SideBar";
import Image from "next/image";

const Page = async ({ params }) => {
    const { id } = await params;
    const anime = await getAnimeResponse(`anime/${id}`);

    console.log(anime);

    return (
        <>
            <div className="min-h-screen flex ">
                <SideBar />
                <main className="flex-1 mt-16 m-4 pt-16 md:ml-64 bg-[var(--color-base)] rounded-3xl">
                    <h3 className="flex justify-center items-center text-[var(--primary)] text-2xl font-bold">{anime.data.title}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-5 grid-rows-auto gap-4 bg-[var(--tertiary)] m-4 rounded-2xl shadow-lg">
                        <div className="md:col-span-2"> 
                            <Image
                                src={anime.data.images.webp.image_url}
                                alt="Anime Image"
                                className="md:w-full object-cover rounded-xl m-4 "
                                width={250}
                                height={250}
                            />
                        </div>

                        <div className="md:col-span-3">
                            <p className="m-4 text-justify ">{anime.data.synopsis}</p>
                        </div>
                        <div className="md:col-span-5">
                            <div className="grid grid-cols-2 md:flex md:flex-row md:w-full m-4 gap-3">
                                <div className="border border-gray-700 p-4">{anime.data.episodes}</div>
                                <div className="border border-gray-700 p-4">{anime.data.members}</div>
                                <div className="border border-gray-700 p-4">{anime.data.status}</div>
                                <div className="border border-gray-700 p-4">{anime.data.type}</div>
                                <div className="border border-gray-700 p-4">{anime.data.rating}</div>
                            </div>
                        </div>
                    </div>

                </main>
            </div>
        </>
    )
}

export default Page;