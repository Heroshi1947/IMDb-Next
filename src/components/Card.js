import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHeart } from "react-icons/fa";

const Card = ({ result }) => {
  return (
    <div
      className="cursor-pointer sm:p-3
sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 group sm:m-2 transition-shadow duration-200"
    >
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          alt="movie image"
          style={{ maxWidth: "100%", height: "auto" }}
        ></Image>
        <div className="p-2">
          <h2 className="text-lg font-bold">{result.title || result.name}</h2>
          <p>{result.overview.substring(0, 40)} ...</p>
          <h1 className="flex items-center mt-4  ">
            {result.first_air_date || result.release_date}
            <FaHeart className="text-red-500 ml-7 mr-1" /> {result.vote_count}
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default Card;
