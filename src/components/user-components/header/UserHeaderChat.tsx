import { useNavigate } from "react-router-dom"
import { IconProfileInfoNotification } from "../../svg/IconProfileInfo"
import {
    IconsNewsfeedMessenger,
    IconsNewsfeedPlus,
} from "../../svg/IconsNewsfeed"
import { UserHeader } from "./UserHeader"
import { useState } from "react"
import { IconNeibs } from "../../svg/IconPassEye"

export const UserHeaderChat = (props:{
    // notification:()=>void
    // messenger:()=>void
    // publish:()=>void
}) => {

    const navigate = useNavigate()
    const [openPublish, setOpenPublish] = useState(false)
    const messenger = () => {
        navigate('/user/messeges')
    }
    const  publish = () => {

    }
    return (
        <UserHeader>
            <div className="user__header-main">
                <h5 className="user__header-title">NeighborHarbor</h5>
                <div className="user__header-main-buttons">
                    <button className="user__header-main-button"
                           onClick={messenger}
                    >
                        <IconNeibs />
                    </button>
                    <button className="user__header-main-button"
                         onClick={publish}
                    >
                        <IconsNewsfeedPlus />
                    </button>
                </div>
            </div>
        </UserHeader>
    )
}
