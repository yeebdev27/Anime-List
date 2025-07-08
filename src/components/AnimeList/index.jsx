import Image from "next/image";
import Link from "next/link";

const AnimeList = ({api}) => {
  return (
          <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 mt-2 p-4 ">
            {api.data?.map((anime, index) => {
              return (
                    <Link href={`/${anime.mal_id}`}
                      key={index} 
                      className="bg-[var(--mute)] shadow-xl/20 custom-shadow hover:scale-110 transition-transform ease-in-out duration-300 delay-100 cursor-pointer rounded-xl">
                        <Image 
                          src={anime.images.webp.image_url} 
                          alt="Anime Image" 
                          className="w-full max-h-64 object-cover rounded-lg" 
                          width={350}
                          height={350}
                        />
                        <h3 className="text-center md:text-lg text-xs font-semibold text-[var(--secondary)]">{anime.title}</h3>
                    </Link>
                )
            })}
          </div>
  );
}

export default AnimeList;