import Link from 'next/link';
import Image from 'next/image';

export default function Movie({ title, poster_path, id, release_date }) {
  const imagePath = 'https://image.tmdb.org/t/p/original/';
  return (
    <div>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <Link href={`/${id}`}>
        <Image
          src={imagePath + poster_path}
          width={800}
          height={800}
          alt={title}
        />
        {/* <img src={imagePath + poster_path} alt="" /> */}
      </Link>
    </div>
  );
}
