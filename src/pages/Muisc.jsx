import { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"

import play from '../assets/Play.svg'
import pouse from '../assets/Pause.svg'
import right from '../assets/arrow__right.svg'
import left from '../assets/arrow_left.svg'
import MusicCard from '../components/MusicCard'
import PlaylistCard from '../components/PlaylistCard'
import vectorof from '../assets/VectorOF.svg'
import vectoron from '../assets/VectorON.svg'
import Download from '../assets/Download.svg'
import Union from '../assets/Unionx.svg'
import Search from '../assets/Search.svg'
import Clock from '../assets/Clock.svg'
import '../App.css'
import { PuffLoader } from 'react-spinners'

function Muisc() {
  const params = useParams()
  const token = localStorage.getItem("token");
  const [dataMain, setDataMain] = useState([])
  const [run, setRun] = useState(false)
  const [vector, setVector] = useState(false)
  const [playlistItems, setPlaylisItems] = useState([])
  useEffect(() => {

    if (params.id) {
      fetch(`${import.meta.env.VITE_API_MUSIC}playlists/${params.id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setPlaylisItems(data.tracks.items);
          setDataMain(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [])
  if (!dataMain) {
    <div className="flex justify-center mt-96"><PuffLoader color="orange"></PuffLoader></div>;
  }
  function handleRunCLick() {
    setRun(!run)
  }
  function handleVectorCLick() {
    setVector(!vector)
  }
  return (
    <>
      <div
        className='bg-[#121212] w-[1072px] min-h-[100vh]'>
        <header
          className="header bg-[#DDF628] w-full h-40">

          <div
            className="nav flex gap-10 px-20 pt-10">
            <Link
              className="w-20 h-20 bg-black rounded-[50%] flex justify-center items-center"
              to='/'>
              <img
                src={left}
                alt=""
              />
            </Link>
            <Link
              className="w-20 h-20 bg-black rounded-[50%] flex justify-center items-center"
              to='/likes'>
              <img
                src={right}
                alt=""
              />
            </Link>
          </div>
        </header>
        <MusicCard
          name={dataMain?.name}
          desc={dataMain?.description}
          images={dataMain?.images}>
        </MusicCard>
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
                <img
                  width={72}
                  height={72}
                  src={play}
                  alt="play icon"
                />
              }
            </span>
            <span
              className='cursor-pointer'
              onClick={handleVectorCLick}>
              {vector ?
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
          className="playlist__wrapper flex flex-col gap-20 mb-60 mt-20">
          {
            playlistItems.map((el, index) => {
              return (
                <PlaylistCard
                  data={el}
                  key={index}
                  dataIndex={index}
                >
                </PlaylistCard>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Muisc


