import "./sidebar.css"
import {RssFeed,ShoppingCart,Redeem,LocalOffer,Event,AddTask,Forum} from "@mui/icons-material";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
export default function Sidebar(){ 
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                <li className="sidebarListItem">
                <RssFeed className="sidebarIcon"/>
                <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                <ShoppingCart className="sidebarIcon"/>
                <span className="sidebarListItemText">ShoppingCart</span>
                </li>
                <li className="sidebarListItem">
                <Redeem className="sidebarIcon"/>
                <span className="sidebarListItemText">Redeem</span>
                </li>
                <li className="sidebarListItem">
                <LocalOffer className="sidebarIcon"/>
                <span className="sidebarListItemText">LocalOffer</span>
                </li>
                <li className="sidebarListItem">
                <Event className="sidebarIcon"/>
                <span className="sidebarListItemText">Event</span>
                </li>
                <li className="sidebarListItem">
                <AddTask className="sidebarIcon"/>
                <span className="sidebarListItemText">AddTask</span>
                </li>
                <li className="sidebarListItem">
                <Forum className="sidebarIcon"/>
                <span className="sidebarListItemText">Forum</span>
                </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
        ))}
                </ul>
                </div>
                </div>
    )
}