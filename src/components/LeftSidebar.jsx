import home from "../assets/home.svg";
import likes from "../assets/likes.svg";
import linbary from "../assets/linbary.svg";
import playList from "../assets/playList.svg";
import Search from "../assets/Search.svg";
import { NavLink } from "react-router-dom";
function LeftSidebar() {
  return (
    <div
      className="w-[310px] min-h-[100vh] bg-black text-[#b3b3b3] py-[70px] px-[29px]">
      <div
        className="sideWrapeer_title">
        <div
          className="sideWrapeer_title_header">
          <div
            className="sideWrapper_header">
            <NavLink
              to='/'
              className="flex  items-center gap-5 mb-8"
            >
              <img
                width={32}

                height={32}
                className="w-[32px] h-[32px]"
                src={home}
                alt=""
              />
              <p
                className="text-[18px] text-white">Home</p>
            </NavLink>
            <div
              className="flex  items-center gap-5 mb-8 cursor-pointer">
              <img
                src={Search}
                alt=""
              />
              <p
                className="text-[18px] text-white">Search</p>
            </div>
            <div
              className="flex  items-center gap-5 mb-8 cursor-pointer">
              <img
                src={linbary}
                alt=""
              />
              <p
                className="text-[18px] text-white">Your Library</p>
            </div>
          </div>
          <div
            className="flex  items-center gap-5 mb-8 cursor-pointer">
            <img
              src={playList}
              alt=""
            />
            <p
              className="text-[18px] text-white">Create Playlist</p>
          </div>
          <NavLink
            to='/likes'
            className="flex  items-center gap-5 mb-8"
          >
            <img
              src={likes}
              alt=""
            />
            <p
              className="text-[18px] text-white">Liked Songs</p>
          </NavLink>
          <hr
            style={{ opacity: '0.4' }}
          />
        </div>

        <div
          className="flex  flex-col gap-4 mt-8">
          <p
            className="text-[18px] text-[#B3B3B3]">Chill Mix</p>
          <p
            className="text-[18px] text-[#B3B3B3]">Insta Hits</p>
          <p
            className="text-[18px] text-[#B3B3B3]">Your Top Songs 2021</p>
          <p
            className="text-[18px] text-[#B3B3B3]">Mellow Songs</p>
          <p
            className="text-[18px] text-[#B3B3B3]">Anime Lofi & Chillhop Music</p>
          <p
            className="text-[18px] text-[#B3B3B3]">BG Afro “Select” Vibes</p>
          <p
            className="text-[18px] text-[#B3B3B3]">Afro “Select” Vibes</p>
          <p
            className="text-[18px] text-[#B3B3B3]">Happy Hits!</p>
          <p
            className="text-[18px] text-[#B3B3B3]">Deep Focus</p>
          <p
            className="text-[18px] text-[#B3B3B3]">Instrumental Study</p>
          <p
            className="text-[18px] text-[#B3B3B3]">OST Compilations</p>
          <p
            className="text-[18px] text-[#B3B3B3]">Nostalgia for old souled mill...</p>
          <p
            className="text-[18px] text-[#B3B3B3]">Mixed Feelings</p>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
