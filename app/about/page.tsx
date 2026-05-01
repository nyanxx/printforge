import Image from "next/image";
import HeroImage from "@/public/assets/hero-image-2.png";
import Stack from "@/public/assets/Stack.svg";
import Globe from "@/public/assets/GlobeSimple.svg";
import Flag from "@/public/assets/Flag.svg";
import Watermark from "@/public/assets/watermark.svg";

export default function About() {
  return (
    <main className="w-full flex flex-col -mt-7">
      <section className=" px-5 py-5  lg:gap-25 flex flex-col items-center lg:py-10 lg:px-23 lg:flex-row w-full lg:items-center lg:justify-center border-b border-zinc-300">
        <Image
          src={HeroImage}
          alt="Hero Image"
          width={500}
          height={400}
          className="w-125 h-auto"
        />
        <div className="my-5 max-w-150">
          <p className="uppercase tracking-wider text-sm ">About printforge</p>
          <h1 className="font-bold text-[40px] leading-11 mt-5">
            Empowering makers worldwide
          </h1>
          <p className="text-[24px] leading-7 mt-5">
            Founded in 2023, PrintForge has quickly become the go-to platform
            for 3D printing enthusiasts, makers, and professional designers to
            share and discover amazing STL files for 3D printing.
          </p>
          <p className="text-[24px] leading-7 mt-5">
            Our mission is to foster a vibrant community where creativity meets
            technology, enabling anyone to bring their ideas to life through 3D
            printing.
          </p>
        </div>
      </section>

      <section className="px-5 lg:px-15 mt-10 pb-10 border-b border-zinc-300 flex flex-col lg:flex-row">
        <article className="mb-6 lg:my-6">
          <div className="flex items-center">
            <Image
              src={Stack}
              alt="Stack Image"
              width={32}
              height={32}
              className="w-8 h-auto"
            />
            <h2 className=" ml-2 text-[27px] font-bold">100K+ Models</h2>
          </div>
          <p className="text-[19px] leading-6">
            Access our vast library of community-created 3D models, from
            practical tools to artistic creations.
          </p>
        </article>

        <div className=" bg-linear-to-b from-[#010101] to-[#666666] p-px mx-10 hidden lg:block"></div>

        <article className="my-6">
          <div className="flex items-center">
            <Image
              src={Globe}
              alt="Globe Image"
              width={32}
              height={32}
              className="w-8 h-auto"
            />
            <h2 className=" ml-2  text-[27px] font-bold">Active Community</h2>
          </div>

          <p className="text-[19px] leading-6">
            Join thousands of makers who share tips, provide feedback, and
            collaborate on projects.
          </p>
        </article>

        {/* <div className=" bg-gradient-to-b from-[#010101] to-[#666666] p-[0.5px] mx-12 hidden lg:block"></div> */}
        <div className=" bg-linear-to-b from-[#010101] to-[#666666] p-px mx-10 hidden lg:block"></div>

        <article className="mt-6 lg:my-6 ">
          <div className="flex items-center">
            <Image
              src={Flag}
              alt="Flag Image"
              width={32}
              height={32}
              className="w-8 h-auto"
            />
            <h2 className=" ml-2  text-[27px] font-bold">Free to Use</h2>
          </div>
          <p className="text-[19px] leading-6">
            Most models are free to download, with optional premium features for
            power users.
          </p>
        </article>
      </section>

      <section className="px-5 my-10 md:max-w-175 mx-auto">
        <h2 className=" text-[38px] mb-5 font-bold">Our vision</h2>
        <p className="text-[24px] leading-7 mb-5">
          At PrintForge, we believe that 3D printing is revolutionizing the way
          we create, prototype, and manufacture. Our platform serves as a bridge
          between designers and makers, enabling the sharing of knowledge and
          creativity that pushes the boundaries of what&apos;s possible with 3D
          printing.
        </p>
        <div className="flex w-full justify-center py-5">
          <div
            id="h-seperator"
            className="w-61.25 border border-zinc-400"
          ></div>
        </div>
        <p className="text-[24px] leading-7 mt-5">
          Whether you&apos;re a hobbyist looking for your next weekend project,
          an educator seeking teaching materials, or a professional designer
          wanting to share your creations, PrintForge provides the tools and
          community to support your journey in 3D printing.
        </p>
      </section>
      <div className="mx-auto w-34 h-33 mb-27.5 mt-13.25 hidden lg:block">
        <Image
          src={Watermark}
          alt="Site Logo Watermark"
          width={140}
          height={135}
          className="w-35 h-auto"
        />
      </div>
    </main>
  );
}
