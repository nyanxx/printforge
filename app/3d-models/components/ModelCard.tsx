import Image from "next/image";
// import ProductImage from "../../../public/assets/hero-image-2.png";
import EmptyHeart from "@/public/assets/heart-empty.svg";
import { Model } from "@/app/lib/models";
import Link from "next/link";

export default function ModelCard(props: Model) {
  return (
    // block group
    <div className="mx-auto max-w-90.5 lg:max-w-67 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_5px_12px_rgba(0,0,0,0.1)] hover:-translate-y-0.75 transition-all">
      <Link
        href={`/3d-models/${props.id}`}
        aria-labelledby={`model-${props.id}-title`}
      >
        <Image
          src={props.image}
          alt="Product image"
          width={217}
          height={217}
          // rounded-t-lg
          unoptimized
          className="w-100 xl:w-54.25 h-auto"
          // className="w-100 h-auto"
          // className="realtive aspect-square"
        />
        {/* rounded-b-lg border-b border-x border-[#A1A1A1] */}
        <div role="article" className="flex flex-col gap-4.5 p-4 ">
          <h2 className="text-[24px] font-bold">{props.name}</h2>
          <p className="text-[20px] font-medium">{props.description}</p>
          <button className="border rounded-2xl px-2 py-px border-[#A1A1A1] font-medium w-fit">
            {props.category}
          </button>
          <div className="flex items-center gap-1.5 text-[#606060]">
            <Image
              src={EmptyHeart}
              alt="Heart"
              width={21}
              height={17}
              className="w-5.25 h-auto"
            />
            <span>{props.likes}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
