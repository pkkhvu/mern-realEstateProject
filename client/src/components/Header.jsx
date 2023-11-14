import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    /*background color of light grey*/
    /*medium shadow*/
    <header className="bg-slate-200 shadow-md">
      {/*
      ## flex setup with equal spacing between elements pushing to them the start and end edges
      ## max width of 6xl
      ## auto margin left and right
      ## padding of 3
      */}
      <div className="flex justify-between items-center max-width-6xl mx-auto p-3">
        {/*
        ## bold font
        ## small text
        ## extra large text on small devices
        ## flex, flex-wrap
    */}
        <Link to={"/"}>
          <h1 className="fond-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Kevin</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        {/* 
          ## background color
          ## padding of 3
          ## rounded corners
          ## flex, items in the center
          */}
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search"
            /* transparent background, width of 24px, width of 64px on small devices, remove browser focus*/
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-500" />
        </form>
        {/* gap between each <li> element */}
        <ul className="flex gap-4">
          {/* 
          ## on smaller screens, element is hidden but is visible on larger screens
          ## 'hidden' and 'sm:inline' is a way to conditionally show or hide elements based on screen size
          ## shows the 'home' and 'about' links beside each other because of inline, rather than on a new line (like block)
          */}
          <Link to={"/"}>
            <li className="hidden sm:inline text-slate-700 hover: underline">
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="hidden sm:inline text-slate-700 hover: underline">
              About
            </li>
          </Link>
          <Link to={"/profile"}>
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile picture"
              />
            ) : (
              <li className=" text-slate-700 hover: underline">Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
