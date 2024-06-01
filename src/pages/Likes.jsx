import { useState } from 'react';
import right from '../assets/arrow__right.svg';
import left from '../assets/arrow_left.svg';
import likes from "../assets/likes.svg";
import blackUser from '../assets/black_user.svg';
import dash from '../assets/..svg';
import play from '../assets/Play.svg';
import pouse from '../assets/Pause.svg';
import vectorof from '../assets/VectorOF.svg';
import vectoron from '../assets/VectorON.svg';
import Download from '../assets/Download.svg';
import Union from '../assets/Unionx.svg';
import Search from '../assets/Search.svg';
import Clock from '../assets/Clock.svg';
import { AddMusic, RemoveMusic } from '../redux/PlayMusicSlice';

import '../App.css';

import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';

function Likes() {
  const [data, setData] = useState(JSON.parse(localStorage.getItem('playlists')));
  const [run, setRun] = useState(false);
  const [vector, setVector] = useState(false);
  const [vectors, setVectors] = useState(false);
  const dispatch = useDispatch();

  function handleRunCLick() {
    setRun(!run);
  }

  function handleVectorCLick(id) {
    if (id && !vector) {
      let localPlaylists = JSON.parse(localStorage.getItem('playlists')) || [];
      localPlaylists = localPlaylists.filter(el => el.id !== id);
      localStorage.setItem('playlists', JSON.stringify(localPlaylists));
      setData(localPlaylists);
    }
  }

  function handleVectorsCLick() {
    setVectors(!vectors);
  }

  const handleMusic = (data) => {
    const playlist = {
      id: data?.id,
      name: data?.name,
      duration: data?.duration,
      preview_url: data?.preview_url,
      albumCover: data.albumCover,
      type: data?.albumType,
    };
    dispatch(RemoveMusic()); // Stop currently playing music
    dispatch(AddMusic(playlist)); // Start new m  
  };

  return (
    <>
      <div
        className='bg-[#121212] w-[1072px] h-[400vh]'>
        <header

          className="header bg-[#604EC1]">
          <div
            className="nav flex gap-10 px-20 py-10">
            <Link
              className="w-20 h-20 bg-black rounded-[50%] flex justify-center items-center"
              to='/playlist/37i9dQZF1DWWY64wDtewQt'>
              <img
                src={left}
                alt=""
              />
            </Link>
            <Link
              className="w-20 h-20 bg-black rounded-[50%] flex justify-center items-center"
              to='/'><img src={right}
                alt=""
              />
            </Link>
          </div>
        </header>
        <div
          className="Likes__hero text-white mb-20 flex px-20 pb-20 pt-[28px] items-end gap-[32px]">
          <div
            className="hero_blok1">
            <img
              width={297}
              height={297}
              src={likes}
              alt=""
            />
          </div>
          <div
            className="hero_blok2">
            <p
              className='text-[16px]'>
              PUBLIC <br /> PLAYLIST
            </p>
            <h2
              className='text-[75px] font-bold'>
              Liked Songs
            </h2>
            <h4
              className='text-[20px] flex irtems-center gap-4 mt-4'>
              <img
                src={blackUser}
                alt=""
              />davedirect3
              <img
                src={dash}
                alt=""
              />
              34 songs
            </h4>
          </div>
        </div>
        <div
          className="run__Music px-20 flex justify-between">
          <div
            className="run__Music__block1 flex items-center gap-[20px]">
            <span
              className='cursor-pointer'
              onClick={handleRunCLick}>
              {run ?
                <img
                  width={72}
                  height={72}
                  src={pouse}
                  alt="pause icon"
                /> :
                <img width={72}
                  height={72}

                  src={play}
                  alt="play icon"
                />
              }
            </span>
            <span
              className='cursor-pointer'
              onClick={handleVectorsCLick}>
              {
                vectors ?
                  <img
                    width={29}
                    height={29}
                    src={vectorof}
                    alt="vector icon" /> :
                  <img
                    width={29}
                    height={29}
                    src={vectoron}
                    alt="vector icon"
                  />
              }
            </span>
            <span
              className='cursor-pointer'>
              <img
                width={40}
                height={40}
                src={Download}
                alt="Download icon"
              />
            </span>
            <span
              className='cursor-pointer'>
              <img
                width={25}
                height={25}
                src={Union}
                alt="Union icon"
              />
            </span>
          </div>
          <div
            className="run__Music__block2 flex items-center gap-5">
            <span
              className='cursor-pointer'>
              <img
                width={25}
                height={25}
                src={Search}
                alt="Union icon"
              />
            </span>
            <select
              className='bg-transparent outline-none text-white text-[16px] cursor-pointer'>
              <option
                className='bg-transparent text-[16px] text-white'
                value="Custom order">
                Custom order
              </option>
            </select>
          </div>
        </div>
        <div
          className="table_r text-white flex justify-between mt-16 px-20">
          <p
            className='text-[16px] list-none'>
            #
          </p>
          <p
            className='text-[16px] list-none'>
            TITLE
          </p>
          <p
            className='text-[16px] list-none relative left-12'>
            ALBUM
          </p>
          <p
            className='text-[16px] list-none'>
            DATE ADDED
          </p>
          <p
            className='text-[16px] list-none'>
            <img
              src={Clock}
              alt=""
            />
          </p>
        </div>
        <div
          className='px-20 mt-8'>

          <hr />
        </div>
        <div
          className="playlist__wrapper flex flex-col gap-20 my-20">
          {data?.map((el, index) => (
            <div
              key={index}>
              <div
                onClick={() => { handleMusic(el) }}
                className={`PlaylistCard text-white flex items-center cursor-pointer justify-between px-20`}>
                <div
                  className="PlaylistCard__block1 items-center flex gap-[21px]">
                  <div
                    className="img flex items-center gap-4 gap-[23px]">
                    <h2
                      className='text-[22px] gap-[23px]'>
                      {index + 1}
                    </h2>
                    <img
                      width={52}
                      height={52}
                      src={el.albumCover}
                      alt=""
                    />
                  </div>
                  <div
                    className="text">
                    <p
                      className='text-[16px] w-24 text-[#B3B3B3]'>
                      {el.name}
                    </p>
                    <p
                      className='text-[18px]'>
                      {el.type}
                    </p>
                  </div>
                </div>
                <div
                  className="PlaylistCard__block2 text-[18px] relative right-[60px]">
                  <p>
                    {el.name}
                  </p>
                </div>
                <div
                  className="PlaylistCard__block3 flex gap-[34px]">
                  <span
                    className='cursor-pointer'
                    onClick={() => { handleVectorCLick(el.id) }}>
                    {vector ?
                      <img
                        width={29}
                        height={29}
                        src={vectoron}
                        alt="vector icon"
                      /> :
                      <img
                        width={29}
                        height={29}
                        src={vectorof}
                        alt="vector icon"
                      />
                    }
                  </span>
                  <p
                    className='text-[20px]'>
                    {Math.floor(el.duration / 60000)}:
                    {((el.duration % 60000) / 1000)
                      .toFixed(0)
                      .padStart(2, "0")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Likes;