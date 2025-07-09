import { notFound } from "next/navigation";
import { getImages } from "./utils/api";
import Image from "next/image";
import Pagination from './components/Pagination';
import { PageProps } from "../../.next/types/app/layout";
type HomeProps = { page?: string };
type imgObj =  {
  "id": string,
  "author": string,
  "width": number,
  "height": number,
  "url": string,
  "download_url": string,
}

export default async function Home({ searchParams } : { searchParams : HomeProps}) {
  const pageNum = parseInt(searchParams?.page ?? "1");
  const images = await getImages(pageNum);

  if (!images || images.length === 0) {
    notFound();
  }

  return (
    <div className="w-full flex flex-col items-center gap-5 py-5">
      <h1 className="text-2xl font-semibold tracking-tighter">Image Gallery</h1>
      <Pagination currentPage={pageNum} totalPages={66} />
      <div className="w-6xl grid grid-cols-5 gap-5">
        {images.map((image: imgObj) => (
          <div key={image.id} className="relative h-48 w-full">
            <Image
              src={image.download_url}
              alt={image.author}
              fill
              sizes="(max-width: 768px) 100vw, 20vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
