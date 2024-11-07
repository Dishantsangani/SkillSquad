import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Menu Button for Mobile View */}
      <button
        className="text-black fixed top-4 left-2 z-50 md:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <svg
            className="w-8 h-8 text-black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            className="w-8 h-8 text-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col w-48 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700 transform transition-transform duration-300 ease-in-out md:translate-x-0 fixed md:relative z-40`}
      >
        <Link to="/">
          <h1 className="text-xl ms-5 text-gray-500 font-bold sm:text-2xl">
            SkillSquad
          </h1>
        </Link>

        <div className="relative mt-6">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="w-5 h-5 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <input
            type="text"
            className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            placeholder="Search"
          />
        </div>

        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>
            {/* Dashboard */}
            <Link
              to="/"
              className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="mx-4 font-medium">Dashboard</span>
            </Link>

            {/* Marks */}
            <Link
              to="/marks"
              className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                />
              </svg>

              <span className="mx-4 font-medium">Marks</span>
            </Link>

            {/* Grade */}
            <Link
              to="/Grade"
              className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#494c4e"
                  d="M19 5.85c0-.9-.44-1.71-1.16-2.22-.1-1.31-1.16-2.36-2.47-2.47C14.89.45 14.08.02 13.15 0c-.06 0-.21 0-.36.03-.28.04-.54.12-.79.23-.55-.26-1.11-.33-1.81-.18-.65.17-1.18.56-1.55 1.08-.63.05-1.21.32-1.69.77-.45.46-.72 1.08-.78 1.7-.53.37-.91.9-1.09 1.53-.148.61-.078 1.27.182 1.84-.26.56-.34 1.22-.18 1.83.18.63.56 1.17 1.08 1.54.06.62.33 1.23.78 1.69.32.3.67.52 1.06.65v9.91c0 .33.12.66.35.92.44.5 1.26.61 1.82.21l1.83-1.66 1.72 1.57c.26.22.57.34.9.34.4 0 .77-.17 1.04-.47.22-.25.34-.58.34-.91v-9.91c.38-.13.74-.35 1.05-.64.45-.46.73-1.08.79-1.7.51-.37.9-.91 1.07-1.53.148-.61.088-1.27-.172-1.84.17-.36.26-.75.26-1.15zm-5 15.36l-2-1.82-2 1.82v-7.36c.05.03.11.04.17.06.72.17 1.27.09 1.83-.17.35.17.75.26 1.15.26.22 0 .42-.03.66-.08.07-.02.13-.04.19-.07v7.36zm2.94-12.9c-.12.45-.4.83-.77 1.1-.04.44-.24.88-.56 1.21-.34.32-.76.52-1.2.55-.26.37-.66.64-1.12.77-.17.04-.31.06-.47.06-.28 0-.57-.06-.82-.19-.4.19-.79.25-1.31.13-.45-.13-.84-.4-1.1-.77-.44-.03-.86-.23-1.21-.56-.32-.33-.51-.76-.55-1.2-.37-.27-.65-.65-.77-1.1-.108-.44-.058-.91.122-1.31-.18-.41-.23-.88-.12-1.32.12-.44.4-.83.78-1.09.04-.44.23-.88.55-1.21.35-.33.76-.52 1.21-.55.26-.38.65-.65 1.11-.77.5-.11.9-.06 1.29.13.18-.08.36-.14.56-.17.11-.02.22-.02.26-.02.66.02 1.24.32 1.59.83.94.08 1.69.82 1.76 1.76.508.36.828.95.828 1.59 0 .28-.06.57-.18.82.18.41.23.88.12 1.31z"
                />
                <circle fill="#494c4e" cx="12.001" cy={7} r={2} />
              </svg>

              <span className="mx-4 font-medium">Grade</span>
            </Link>

            {/* Report */}
            <Link
              to="/report"
              className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 463 463"
                className="w-5 h-5" // Add your preferred width and height using Tailwind classes
              >
                <g>
                  <path
                    d="M367.5,32h-57.734c-3.138-9.29-11.93-16-22.266-16h-24.416c-7.41-9.965-19.148-16-31.584-16c-12.435,0-24.174,6.035-31.585,16H175.5c-10.336,0-19.128,6.71-22.266,16H95.5C78.131,32,64,46.131,64,63.5v368c0,17.369,14.131,31.5,31.5,31.5h272c17.369,0,31.5-14.131,31.5-31.5v-368C399,46.131,384.869,32,367.5,32z M175.5,87h112c7.023,0,13.332-3.101,17.641-8H352v337H111V79h46.859C162.168,83.899,168.477,87,175.5,87z M175.5,31h28.438c2.67,0,5.139-1.419,6.482-3.727C214.893,19.588,222.773,15,231.5,15c8.728,0,16.607,4.588,21.079,12.272c1.343,2.308,3.813,3.728,6.482,3.728H287.5c4.687,0,8.5,3.813,8.5,8.5v24c0,4.687-3.813,8.5-8.5,8.5h-112c-4.687,0-8.5-3.813-8.5-8.5v-24C167,34.813,170.813,31,175.5,31z M384,431.5c0,9.098-7.402,16.5-16.5,16.5h-272c-9.098,0-16.5-7.402-16.5-16.5v-368C79,54.402,86.402,47,95.5,47H152v16.5c0,0.168,0.009,0.333,0.013,0.5H103.5c-4.143,0-7.5,3.358-7.5,7.5v352c0,4.142,3.357,7.5,7.5,7.5h256c4.143,0,7.5-3.358,7.5-7.5v-352c0-4.142-3.357-7.5-7.5-7.5h-48.513c0.004-0.167,0.013-0.332,0.013-0.5V47h56.5c9.098,0,16.5,7.402,16.5,16.5V431.5z"
                    className="fill-current text-gray-600" // You can change the color using Tailwind text classes
                  />
                  <path
                    d="M231.5,47c1.979,0,3.91-0.8,5.3-2.2c1.4-1.39,2.2-3.33,2.2-5.3c0-1.97-0.8-3.91-2.2-5.3c-1.39-1.4-3.32-2.2-5.3-2.2c-1.98,0-3.91,0.8-5.3,2.2c-1.4,1.39-2.2,3.32-2.2,5.3s0.8,3.91,2.2,5.3C227.59,46.2,229.52,47,231.5,47z"
                    className="fill-current text-gray-600"
                  />
                  <path
                    d="M183.5,159h136c4.143,0,7.5-3.358,7.5-7.5s-3.357-7.5-7.5-7.5h-136c-4.143,0-7.5,3.358-7.5,7.5S179.357,159,183.5,159z"
                    className="fill-current text-gray-600"
                  />
                  {/* Repeat the path elements as needed, adding `className="fill-current text-gray-600"` to each */}
                </g>
              </svg>
              <span className="mx-4 font-medium">Report </span>
            </Link>

            {/* About */}
            <Link
              to="/about"
              className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            >
              <svg
                fill="#000000"
                width="800px"
                height="800px"
                className="w-5 h-5"
                viewBox="0 0 128 128"
                id="Layer_1"
                version="1.1"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g>
                  <path d="M64,1C29.3,1,1,29.3,1,64s28.3,63,63,63s63-28.3,63-63S98.7,1,64,1z M64,119C33.7,119,9,94.3,9,64S33.7,9,64,9   s55,24.7,55,55S94.3,119,64,119z" />

                  <rect height="40" width="8" x="60" y="54.5" />

                  <rect height="8" width="8" x="60" y="35.5" />
                </g>
              </svg>
              <span className="mx-4 font-medium">About </span>
            </Link>
          </nav>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
