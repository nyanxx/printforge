"use client";
// v1.0
import { useCallback, useEffect, useRef, type JSX } from "react";

type GoToTopProps = {
  content?: string | JSX.Element;
  activeFromTop?: number;
  title?: string;
};

function getTopSVG(): JSX.Element {
  return (
    <svg
      className="w-6.25 h-6.25 fill-none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="stroke-white dark:stroke-black stroke-2"
        // Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools
        d="M17 15L12 10L7 15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Reusable "go-to-top" / "scroll-to-top" button component in React with Tailwindcss and Typescript.
 * Appears once the user scrolls past a certain specified threshold ("activeFromTop")
 * smoothly scrolls back to the top when clicked.
 *
 * Usage:
 * ```tsx
 * <GoToTop content={"Up"} activeFromTop={20} title="lets go up" />
 * ```
 *
 * @param {GoToTopProps} props - Component props.
 * @param {string | JSX.Element} [props.content] - The content inside the button (defaults to an arrow SVG).
 * @param {number} [props.activeFromTop] - Scroll threshold in pixels (defaults to 20).
 * @param {string} [props.title] - Tooltip text for button (defaults to "Go to top").
 * @returns {JSX.Element} Element that scrolls the page to the top.
 */
export default function GoToTop({
  content = getTopSVG() || "↑",
  activeFromTop = 20,
  title = "Go to top",
}: GoToTopProps): JSX.Element {
  const goToTopBtnRef = useRef<HTMLButtonElement>(null);
  const scrollFunction = useCallback((): void => {
    if (goToTopBtnRef.current) {
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      // goToTopBtnRef.current.style.display = scrollTop > activeFromTop ? "block" : "none"
      if (scrollTop > activeFromTop) {
        goToTopBtnRef.current.classList.add("opacity-100", "visible");
      } else {
        goToTopBtnRef.current.classList.remove("opacity-100", "visible");
      }
    }
  }, [activeFromTop]);

  function goToTop(): void {
    /**
     * document.body.scrollTop = 0
     * document.documentElement.scrollTop = 0
     */
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    // window.onscroll = function () {
    //     scrollFunction()
    // };

    window.addEventListener("scroll", scrollFunction);
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, [scrollFunction]);

  return (
    <button
      ref={goToTopBtnRef}
      onClick={goToTop}
      /* https://www.w3schools.com/howto/howto_js_scroll_to_top.asp */
      className="
                fixed
                bottom-5 right-7.5
                z-99
                bg-black dark:bg-white hover:bg-gray-900 dark:hover:bg-gray-400 text-black hover:bg-button-hover hover:text-black 
                cursor-pointer 
                rounded-full 
                p-1 
                text-xl 
                opacity-0 
                transition-all duration-300 ease-in-out 
                invisible"
      title={title}
    >
      {content}
    </button>
  );
}
