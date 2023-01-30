import Image from 'next/image';

// export async function generateStaticParams() {
//   const data = await fetch(
//     `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
//   );
//   const res = await data.json();
//   return res.results.map((movie) => ({
//     movie: toString(movie.id),
//   }));
// }

export default async function MovieDetail({ params }) {
  //   console.log(params);
  const { movie } = params;
  const imagePath = 'https://image.tmdb.org/t/p/original/';
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  return (
    <div>
      {/* <h1>Movie detail</h1> */}
      <div>
        <h2 className="text-2xl">{res.title}</h2>
        <h2 className="text-lg">{res.release_date}</h2>
        <h2>Runtime: {res.runtime} minutes</h2>
        <h2 className="bg-green-600 inline-block my-2 py-2 px-4 rounded-md text-sm">
          {res.status}
        </h2>
        <Image
          className="my-12 w-full"
          src={imagePath + res.backdrop_path}
          width={1000}
          height={1000}
          priority
        />
        <p>{res.overview}</p>
      </div>
    </div>
  );
}
