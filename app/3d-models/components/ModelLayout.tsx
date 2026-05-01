import { Model } from "@/app/lib/models";
import ModelCard from "./ModelCard";
import { Category } from "@/app/lib/categories";
// import SearchBox from "./SearchBox";
import Form from "next/form"

type ModelLayout = {
  displayName: Category["displayName"];
  models: Model[];
};

export default function ModelLayout(props: ModelLayout) {
  return (
    <section className="container mx-auto px-5">
      <header className="flex justify-between">
        <h1 className="hidden lg:block mb-8 text-3xl font-bold">
          {props.displayName}
        </h1>
        {/* <SearchBox models={props.models} displayName={props.displayName} /> */}
        {/* Other version of search box */}
        {props.displayName == "3D Models" && (
          <Form action={"/3d-models/"} className="mb-8 w-full lg:w-75">
            <label htmlFor="search-model" className="sr-only">
              Search for a model
            </label>
            {/* <div role="alert" className="text-sm text-red-600"></div> */}
            <input
              type="text"
              id="search"
              name="search"
              // placeholder={`Search in ${props.displayName === "3D Models" ? "all models" : `${props.displayName?.toLowerCase()} models`}`}
              placeholder={`e.g. solar system`}
              autoComplete="off"
              // defaultValue={query} if you want to remember the past query based on searchParams — you need to pass from a parent here
              className="border rounded-4xl py-1.75 px-5 w-full placeholder:text-[#000000] placeholder:text-[14px] text-[14px]"
            />
          </Form>
        )}
      </header>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-5 w-full"
        role="region"
        aria-label="3D Models Gallery"
      >
        {props.models.map((m) => (
          <ModelCard key={m.id} {...m} />
        ))}
      </div>
    </section>
  );
}
