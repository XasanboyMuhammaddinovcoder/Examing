import { useNavigate } from 'react-router-dom'
import '../App.css'
function HomeHero(props) {
    const navigate = useNavigate();

    function hanldeRedirect() {
        navigate(`/playlist/${props.data.id}`)
    }
    return (
        <>
            <div
                onClick={hanldeRedirect}
                className="Home-hero cursor-pointer">
                <img className="rounded-lg" width={82} height={82} src={props.data.images[0].url} alt="" />
                <div>
                    <h4 className="text-[20px]">{props?.data?.name}</h4>
                </div>
            </div>
        </>
    )
}

export default HomeHero
