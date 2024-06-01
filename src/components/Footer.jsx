import { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import play from '../assets/play__white.svg'
import pouse from '../assets/pouse__white.svg'
import union from '../assets/Union__white.svg'
import unionI from '../assets/Unions__white.svg'
import Volume from '../assets/Volume.svg'
import lenght from '../assets/lenght.svg'

function Footer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const Playslist = useSelector(state => state.playMusic.currentTrack);
    const currentTrack = useSelector(state => state.playMusic.currentTrack);

    useEffect(() => {
        if (currentTrack) {
            playPause();
        }
    }, [currentTrack]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.addEventListener('ended', handleEnded);
        }
        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener('ended', handleEnded);
            }
        };
    }, []);

    const handleEnded = () => {
        setIsPlaying(false);
    };

    const playPause = () => {
        if (!isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <>
            <div>
                <div>
                    {Playslist && (
                        <img
                            width={110}
                            height={110}
                            className='fixed left-12 bottom-60 rounded-lg object-cover right-24'
                            src={Playslist?.albumCover}
                            alt=""
                        />
                    )
                    }
                    {Playslist && (
                        <div
                            className='footer flex items-center text-white justify-between h-[112px] px-20 bg-[#181818]'>
                            <div
                                className='flex items-center gap-12'>
                                <div
                                    className='flex flex-col items-center'>
                                    <h4
                                        className='text-[16px]'>
                                        {Playslist.name}
                                    </h4>
                                    <p
                                        className='text-[14px]'>
                                        {Playslist.type}
                                    </p>
                                </div>
                            </div>
                           {
                            Playslist.preview_url ? ( <div
                                className='flex items-center gap-40'>
                                <button
                                    className='mx-2'>
                                    <img
                                        src={union}
                                        alt="Union icons"
                                    />
                                </button>
                                <button
                                    onClick={playPause}
                                    className=" text-black rounded mx-2">
                                    {isPlaying ? <img src={pouse} alt="Pouse icon" /> : <img src={play} alt="Play icon" />}
                                </button>
                                <button
                                    className='mx-2'>
                                    <img
                                        src={unionI}
                                        alt="Union icons"
                                    />
                                </button>
                            </div>)
                            : <h1>No music is played</h1>
                           }
                            <div
                                className='hidden'>
                                <audio
                                    ref={audioRef}
                                    src={Playslist.preview_url}
                                >
                                </audio>
                                <input
                                    type="range"
                                    onChange={(e) => (audioRef.current.currentTime = e.target.value)}
                                    className="w-full mt-4 text-black cursor-pointer"
                                />
                            </div>
                            <div
                                className='flex items-center gap-4'>
                                <img
                                    src={Volume}
                                    alt="icon"
                                />
                                <img
                                    src={lenght}
                                    alt="icon"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Footer;