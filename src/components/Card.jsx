import { useNavigate } from "react-router-dom";
function Card(props) {
    const navigate = useNavigate()
    const { images, name, description, id } = props.data;
    function handleRedirect() {
        navigate(`/playlist/${id}`)
    }
    return (
        <>
            <div
                onClick={handleRedirect}
                className="gap-4 cursor-pointer">
                <div
                    className="w-[250px] p-12 rounded-lg  h-[324px] bg-[#1B1B1B] " >
                    <img
                        src={images[0].url}
                        alt={name}
                        width={192}
                        height={192}
                        className="w-[192px] mx-auto h-[192px] rounded-lg "
                        style={{ objectFit: "cover", }} />
                    <h1
                        className="text-[20px] text-white mt-8">
                        {name}
                    </h1>
                    <span
                        className="tetx-[18px] mt-6 text-[#B3B3B3]">
                        {description}
                    </span>
                </div>
            </div>
        </>
    )
}

export default Card
