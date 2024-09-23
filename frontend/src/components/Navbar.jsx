import { useState } from "react";
import MainMenu from "./MainMenu";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const navigate = useNavigate();

  console.log("open");
  console.log(openMenu);
  return (
    <div className="bg-pink-100 bg-opacity-40 blur-backdrop backdrop-blur-sm  fixed top-0 left-0 right-0 shadow-md">
      <div className="navbar bg-base-100x max-w-7xl mx-auto">
        <div className="flex-1">
          <a
            className="btn btn-ghost sm:text-3xl text-2xl"
            onClick={() => navigate("/")}
          >
            Daily News
          </a>
          {/* category */}
          <ul className="flex gap-4 overflow-y-hidden bg-green-300x max-lg:hidden">
            <li>Music</li>
            <li className="dropdown dropdown-hover cursor-pointer hover:underline decoration-cyan-400 decoration-4 underline-offset-8">
              <a tabIndex={0} className="flex items-center">
                Sports
              </a>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-boxx rounded-sm z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Cricket</a>
                </li>
                <li>
                  <a>Football</a>
                </li>
                <li>
                  <a>Basketball</a>
                </li>
                <li>
                  <a>Tennis</a>
                </li>
              </ul>
            </li>
            <li>international</li>
            <li>Entertainment</li>
          </ul>
        </div>

        <div className="flex-none gap-2">
          <div className="form-control max-lg:hidden">
            {/* <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            /> */}
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          <div className="dropdown dropdown-end max-lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Menu icon */}

        <label className="btn btn-circle btn-ghost swap swap-rotate lg:hidden">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />

          {/* hamburger icon */}
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          {/* close icon */}
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>

        {openMenu ? <MainMenu setOpenMenu={setOpenMenu} /> : null}

        {/* end icon menu */}
      </div>
    </div>
  );
};

export default Navbar;
