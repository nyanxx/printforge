import NavLink from "@/app/components/NavLink";
import { getAllCategories } from "@/app/lib/categories";

export default async function NavBar() {
  return (
    <div>
      <aside>
        <nav className="lg:fixed w-full text-[14px] font-medium text-[#606060] mask-soft-r lg:w-75">
          <ul className="flex gap-5 py-5.25 px-5 overflow-x-auto whitespace-nowrap uppercase scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:flex-col lg:h-screen lg:justify-center">
            <li>
              <NavLink
                activeClassName="text-[#F77429] lg:pl-2 lg:border-l-2 lg:border-l-[#F77429]"
                to={`/3d-models`}
              >
                All
              </NavLink>
            </li>
            {(await getAllCategories()).map((c) => (
              <li key={c.slug}>
                <NavLink
                  activeClassName="text-[#F77429] lg:pl-2 lg:border-l-2 lg:border-l-[#F77429]"
                  to={`/3d-models/categories/${c.slug}`}
                >
                  {c.displayName}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
