import { useState } from "react";
import logo2 from '../../../assets/logo-2.svg'
import NotitficationBadge from "../../../components/NotificationBadge/NotificationBadge";
import NotificationList from "../../../components/NotificationList/NotificationList";
import ProfileBtn from "../../../components/ProfileBtn/ProfileBtn";
import './UserProfile.scss'


const notifList = [
    {
        img: logo2,
        descr: "Регистрация успешно завершена",
    },
    {
        img: logo2,
        descr: "Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    },
];

function UserProfile() {
    const [isLogged, setIsLogged] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div className="user-profile">
            {isLogged ? (
                <>
                    <NotitficationBadge
                        onClick={() => setIsClicked(!isClicked)}
                        badgeCount={notifList.length}
                    />
                    <ProfileBtn onClick={() => setIsLogged(!isLogged)}>ВЫЙТИ</ProfileBtn>
                    {
						isClicked && <NotificationList data={notifList} />
					}
                </>
            ) : (
                <ProfileBtn onClick={() => setIsLogged(!isLogged)}>ВОЙТИ</ProfileBtn>
            )}
        </div>
    );
}

export default UserProfile;
