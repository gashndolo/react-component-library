import { IoIosWarning } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import { IoMdInformationCircle } from "react-icons/io";
import clsx from "clsx";
/*
<FaCheckCircle />
            <IoIosWarning />
            <FaCircleXmark />
            <IoMdInformationCircle />*/


export default function Banner({variant, topic, subtopic}) {
    
    let icon
    if (variant == "success") {
        icon = <FaCheckCircle />
    } else if (variant == "warning") {
        icon = <IoIosWarning />
    } else if (variant == "danger") {
        icon = <IoIosWarning />
    } else if (variant == "neutral") {
        icon = <IoMdInformationCircle />
    }


    return (
        <div className={clsx('banner', `banner-${variant}`)}>
            <div className="topics"><p className="icon">{icon}</p><p className="topictext"><strong>{topic}</strong></p></div>
            {subtopic ? <p className="subtopic">{subtopic}</p> : null}
        </div>
    )
} 