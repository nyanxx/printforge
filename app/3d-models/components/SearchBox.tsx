"use client";
// My version of search box
import { Category } from "@/app/lib/categories";
import {
  //  getModelBySearch,
  Model,
} from "@/app/lib/models";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type SearchBoxProps = {
  displayName: Category["displayName"];
  models: Model[];
};

export default function SearchBox(props: SearchBoxProps) {
  const [searchValue, setSearchValue] = useState(""); // may be can be shift to sepecate componenet
  const [modelsFound, setModelsFound] = useState<Model[] | undefined>(
    undefined,
  );

  const sbRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    function handleOutsideClickOfSbRef(event: MouseEvent) {
      if (sbRef.current && !sbRef.current.contains(event.target as Node)) {
        setModelsFound(undefined);
      }
    }
    if (modelsFound?.length) {
      document.addEventListener("mousedown", handleOutsideClickOfSbRef);
    } else {
      document.removeEventListener("mousedown", handleOutsideClickOfSbRef);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClickOfSbRef);
    };
  }, [modelsFound?.length]);

  useEffect(() => {
    async function getSearchResult() {
      if (!searchValue) return;
      if (searchValue.length > 1) {
        // const response = await getModelBySearch(searchValue);
        const response = props.models.filter((m) =>
          m.name.toLowerCase().includes(searchValue.toLowerCase()),
        );
        console.log(response);
        if (response.length === 0) setModelsFound(undefined);
        setModelsFound(response);
      } else {
        setModelsFound(undefined);
      }
    }

    getSearchResult();
  }, [props.models, searchValue]);

  return (
    <div className="relative mb-8 w-full lg:w-75">
      <form method="post">
        <label htmlFor="search-model" className="sr-only">
          Search for a model
        </label>
        {/* <div role="alert" className="text-sm text-red-600"></div> */}
        <input
          type="text"
          id="search-model"
          name="search-model"
          placeholder={`Search in ${props.displayName === "3D Models" ? "all models" : `${props.displayName?.toLowerCase()} models`}`}
          onChange={(e) => {
            e.preventDefault();
            setSearchValue(e.currentTarget.value);
          }}
          value={searchValue}
          autoComplete="off"
          className="border rounded-4xl py-1.75 px-5 w-full placeholder:text-[#000000] placeholder:text-[14px] text-[14px]"
        />
      </form>
      {modelsFound && modelsFound.length !== 0 && (
        <ul
          ref={sbRef}
          className="absolute right-0 top-12 bg-[#FAFAFA] overflow-hidden w-full z-100 rounded-2xl"
        >
          {modelsFound.map((m) => (
            <li
              key={m.id}
              className="text-[14px] font-bold hover:bg-[#DCDCDC] cursor-pointer"
            >
              <Link
                href={`/3d-models/${m.id}`}
                className="py-2 pl-5 w-full h-full inline-flex"
              >
                {m.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
