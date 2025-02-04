import Category from "./Category";
import { useNavigate } from "react-router-dom";

const MainMenu = ({ setOpenMenu }) => {
  const navigate = useNavigate();
  return (
    <div className="z-50 h-screen bg-white absolute top-16 left-0 right-0 glassx scroll-smooth overflow-auto">
      <div className=" h-full w-full max-w-4xl mx-auto">
        {/* search */}
        <form className=" p-2">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
              placeholder="Search Mockups, Logos..."
              required=""
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg--700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>

        {/* signup signin */}
        <div className="flex p-2  justify-between gap-2">
          <div className="btn grow  btn-active">Sign Up</div>
          <div
            className="btn grow bg-red-600 text-white "
            onClick={() => {
              setOpenMenu((prev)=>!prev);
              navigate("/signin");
            }}
          >
            Sign In
          </div>
        </div>

        {/* category */}

        <Category />
      </div>
    </div>
  );
};

export default MainMenu;
