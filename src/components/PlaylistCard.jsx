import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import vectorof from '../assets/VectorOF.svg';
import vectoron from '../assets/VectorON.svg';
import { ScaleLoader } from 'react-spinners';
import { AddPlaylist, RemovePlaylist } from '../redux/PlaylistsSlice';
import { AddMusic } from '../redux/PlayMusicSlice';
import '../App.css'

function PlaylistCard(props) {
    const dispatch = useDispatch();
    const currentTrack = useSelector(state => state.playMusic.currentTrack);
    const [vector, setVector] = useState(false);

    useEffect(() => {
        JSON.parse(localStorage.getItem('playlists')) || [];
    }, [dispatch]);

    const handleVectorCLick = (data) => {
        setVector(!vector);
        if (!vector) {
            const playlists = {
                id: data.id,
                data: data,
                name: data.name,
                duration: data.duration_ms,
                preview_url: data.preview_url,
                albumCover: data.album.images[0]?.url,
                albumType: data.album.album_type
            };
            dispatch(AddPlaylist(playlists));
            let localPlaylists = JSON.parse(localStorage.getItem('playlists')) || [];
            localPlaylists.push(playlists);
            localStorage.setItem('playlists', JSON.stringify(localPlaylists));
        } else {
            dispatch(RemovePlaylist(data.id));
            let localPlaylists = JSON.parse(localStorage.getItem('playlists')) || [];
            localPlaylists = localPlaylists.filter(el => el.id !== data.id);
            localStorage.setItem('playlists', JSON.stringify(localPlaylists));
        }
    };

    const handleMusic = (data) => {
        const playlist = {
            data: data,
            id: data?.id,
            name: data?.name,
            duration: data?.duration_ms,
            preview_url: data?.preview_url,
            albumCover: data?.album.images[0]?.url,
            type: data?.album.album_type,
        };
        dispatch(AddMusic(playlist));
    };

    const isPlaying = currentTrack && currentTrack.id === props.data.track.id;

    return (
        <div className={`flex flex-col ${isPlaying ? 'bg-gray-800 py-8' : ''}`}>
            <div className={`PlaylistCard px-20`}>
                <div
                    onClick={() => handleMusic(props?.data.track)}
                    className="PlaylistCard__block1 ">
                    <div
                        className="img flex items-center gap-4 gap-[23px]">
                        <h2
                            className='text-[22px] gap-[23px]'>
                            {isPlaying ? <ScaleLoader color="red" /> : props.dataIndex + 1}
                        </h2>
                        <img
                            width={52}
                            height={52}
                            src={props.data.track.album?.images[0].url}
                            alt="audio picture"
                        />
                    </div>
                    <div
                        className="text">
                        <p
                            className='text-[18px]'>
                            Play It Safe
                        </p>
                        <p
                            className='text-[16px] w-24 text-[#B3B3B3]'>
                            {props?.data?.track?.name}
                        </p>
                    </div>
                </div>
                <div
                    onClick={() => handleMusic(props?.data.track)}
                    className="PlaylistCard__block2 text-[18px] relative right-[60px]">
                    <p>
                        {props.data.track.album.album_type}
                    </p>
                </div>
                <div
                    className="PlaylistCard__block3">
                    <span
                        className='cursor-pointer'
                        onClick={() => handleVectorCLick(props?.data.track)}
                    >
                        {vector ? <img width={29} height={29} src={vectorof} alt="vector icon" /> : <img width={29} height={29} src={vectoron} alt="vector icon" />}
                    </span>
                    <p
                        className='text-[20px]'>
                        {Math.floor(props?.data.track?.duration_ms / 60000)}:
                        {((props?.data.track?.duration_ms % 60000) / 1000)
                            .toFixed(0)
                            .padStart(2, "0")}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PlaylistCard;
