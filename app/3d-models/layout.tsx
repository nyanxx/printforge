import { ReactNode } from "react";
import NavBar from "./components/NavBar";
import GoToTop from "../components/GoToTop";

export default async function ProductLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <section className="flex flex-col w-full -mt-7 h-full lg:flex-row">
        <NavBar />
        <section className="lg:ml-75 w-full h-full">{children}</section>
        <GoToTop />
      </section>
    </>
  );
}
