import Image from "next/image";
import Hero from "../public/assets/hero-image.png";
import Link from "next/link";

export default async function Home() {
  return (
    <section className="flex flex-col items-center lg:gap-25 justify-between lg:py-10 lg:px-23 lg:flex-row w-full lg:items-center ">
      <div className="p-5 my-5 max-w-110  lg:w-150">
        <p className="uppercase tracking-wider text-sm hidden lg:block">
          Your go-to platform for 3D printing files
        </p>
        <h1 className="font-bold text-[40px] leading-11 mt-5">
          Discover what&apos;s possible with 3D printing
        </h1>
        <p className="text-[24px] leading-8 mt-5">
          Join our community of creators and explore a vast library of
          user-submitted models.
        </p>
        <div className="mt-10 tracking-wide text-[18px] p-2 font-semibold border-3 cursor-pointer uppercase w-fit hover:bg-[#000000] hover:text-[#ffffff] hover:border-[#000000] transition-all duration-300">
          <Link href="/3d-models" className="p-2">
            Browse Models
          </Link>
        </div>
      </div>
      <Image
        src={Hero}
        className="w-97 lg:w-110 h-auto"
        alt="Hero Image"
        width={500}
        height={400}
        priority
      />
    </section>
  );
}
