function CardTitle(props) {
    return (
        <div>
            <div
                className="title flex  items-center justify-between px-20 mt-[50px]">
                <h2
                    className="text-white text-[30px]">
                    {props.name}
                </h2>
                <span
                    className="text-[#ADADAD] text-[16px]">
                    SEE ALL
                </span>
            </div>
        </div>
    )
}

export default CardTitle
