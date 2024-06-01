function MusicCard(props) {
    return (
        <div>
            <div
                className="hero text-white  mb-20 flex px-20 pb-20 pt-[28px] items-end gap-[32px]">
                <div
                    className="hero_blok1">
                    {props.images?.[0]?.url ? (
                        <img
                            width={297}
                            height={297}
                            className="playlist_cover w-[397px]"
                            src={props.images[0].url}
                            alt="Playlist Cover"
                        />
                    ) : (
                        <div
                            className="playlist_cover no_image">
                            No Image
                        </div>
                    )}
                </div>
                <div
                    className="hero_blok2">
                    <p
                        className='text-[16px]'>
                        PUBLIC PLAYLIST
                    </p>
                    <h2
                        className='text-[60px]'>
                        {props.name}
                    </h2>
                    <h4
                        className='text-[20px] mt-4'>
                        {props.desc}
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default MusicCard
