import { getModelById } from "@/app/lib/models";
import Image from "next/image";
import ModelImage from "@/public/assets/hero-image-2.png";
import EmptyHeart from "@/public/assets/heart-empty.svg";
import Link from "next/link";

export default async function ProductWithId({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const model = await getModelById(+id);

  if (!id || !model) {
    return <h1>No Model Found!</h1>;
  } else {
    return (
      <section className="px-4 pb-4 max-w-100.5 lg:-mt-15 lg:max-w-none lg:w-full h-screen mx-auto lg:mx-0 lg:flex lg:items-center">
        <Link
          href={"."}
          className="h-15 flex w-full justify-center items-center uppercase text-[14px] font-semibold text-[#606060] lg:hidden"
        >
          Back to overview
        </Link>
        <Image
          src={ModelImage}
          width={662}
          height={662}
          className="w-100"
          alt="Model Image"
        />
        <div>
          <div role="article" className="flex flex-col justify-evenly ">
            <div className="flex flex-col gap-4.5 p-5">
              <div className="flex items-center gap-1.5 text-[#606060]">
                <Image
                  src={EmptyHeart}
                  alt="Heart"
                  width={21}
                  height={17}
                  className="w-8 lg:w-5.25 h-auto"
                  aria-label="Total Likes"
                />
                <span className="text-[24px]">{model.likes}</span>
              </div>
              <h2 className="-mt-5 text-[32px] lg:text-[24px] font-bold">
                {model.name}
              </h2>
              <div className="border rounded-2xl px-3 py-1 border-[#A1A1A1] font-medium w-fit">
                {model.category}
              </div>
              <p className="text-[24px] font-medium">{model.description}</p>
            </div>
          </div>
          <p className="px-5">Added on {model.dateAdded}</p>
        </div>
      </section>
    );
  }
}
