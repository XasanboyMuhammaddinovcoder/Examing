import Union from '../assets/Union.svg'
import Union1 from '../assets/Union1.svg'
import Frame from '../assets/Frame.svg'
function RightSidebar() {
    return (
        <div
            className='w-[346px] min-h-[100vh] bg-black text-[#b3b3b3] py-[29px] px-[20px]'>
            <div
                className='min-h-[100vh] bg-black text-[#B3B3B3]'>
                <div
                    className='flex items-center justify-between'>
                    <h1
                        className='text-[20px]'>
                        Friend Activity
                    </h1>
                    <div
                        className='flex items-center'>
                        <span>
                            <img
                                className='cursor-pointer'
                                src={Union}
                                alt=""
                            />
                        </span>
                        <span>
                            <img
                                className='cursor-pointer'
                                src={Union1}
                                alt=""
                            />
                        </span>
                    </div>
                </div>
                <div
                    style={
                        { marginTop: "25px" }
                    }>
                    <div>
                        <p
                            className='text-[18px]'>
                            Let friends and followers on Spotify see what you’re listening to.
                        </p>
                    </div>
                    <div
                        className='flex flex-col gap-[25px] my-[25px]'>
                        <img
                            width={179}
                            height={62}
                            src={Frame}
                            alt=""
                        />
                        <img
                            width={179}
                            height={62}
                            src={Frame}
                            alt=""
                        />
                        <img
                            width={179}
                            height={62}
                            src={Frame}
                            alt=""
                        />
                    </div>
                    <div >
                        <p
                            className='text-[18px]'>
                            Go to Settings {'>'} Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.
                        </p>
                    </div>
                </div>
                <div
                    className='btn mt-12'>
                    <button
                        className='text-black bg-white w-[233px] h-[62px] flex justify-center items-center mx-auto rounded-[40px] text-[18px] tracking-[4px]'>
                        SETTINGS
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RightSidebar
