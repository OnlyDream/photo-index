import React from 'react';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThLarge, faSearch, faBell, faPaperPlane, faSignOutAlt, faCog } from "@fortawesome/free-solid-svg-icons";

import profile from '../../../assets/images/profile.jpg';

import './Sidebar.scss';

function Sidebar(props) {
    return (
        <div className="sidebar">
            <div className="sidebar__profile">
                <div className="sidebar__profile-image">
                    <img src={profile} alt="profile picture" />
                </div>
                <div className="sidebar__profile-name">Telmo Martins</div>
                <div className="sidebar__profile-username">@telmoenmartins</div>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stats-item">
                    <div className="sidebar__stats-item-number">13</div>
                    <div className="sidebar__stats-item-text">Posts</div>
                </div>
                <div className="sidebar__stats-item">
                    <div className="sidebar__stats-item-number">212</div>
                    <div className="sidebar__stats-item-text">Followers</div>
                </div>
                <div className="sidebar__stats-item">
                    <div className="sidebar__stats-item-number">201</div>
                    <div className="sidebar__stats-item-text">Following</div>
                </div>
            </div>
            <div className="sidebar__nav">
                <ul className="sidebar__nav-items">
                    <li className="sidebar__nav-item sidebar__nav-item--active"><FontAwesomeIcon icon={faThLarge} className="sidebar__nav-item-icon" /> <span className="sidebar__nav-item-text">Feed</span></li>
                    <li className="sidebar__nav-item"><FontAwesomeIcon icon={faSearch} className="sidebar__nav-item-icon" /><span className="sidebar__nav-item-text">Explore</span></li>
                    <li className="sidebar__nav-item">
                        <FontAwesomeIcon icon={faBell} className="sidebar__nav-item-icon" />
                        <span className="sidebar__nav-item-text">
                            <p className="sidebar__nav-item-text--title">Notifications</p>
                            <p className="sidebar__nav-item-text--number">3</p>
                        </span>
                    </li>
                    <li className="sidebar__nav-item"><FontAwesomeIcon icon={faPaperPlane} className="sidebar__nav-item-icon" /><span className="sidebar__nav-item-text">
                        <span className="sidebar__nav-item-text">
                            <p className="sidebar__nav-item-text--title">Direct</p>
                            <p className="sidebar__nav-item-text--number">12</p>
                        </span></span></li>
                    <li className="sidebar__nav-item"><FontAwesomeIcon icon={faCog} className="sidebar__nav-item-icon" /><span className="sidebar__nav-item-text">Settings</span></li>
                    <div className="sidebar__separator"></div>
                    <li className="sidebar__nav-item"><FontAwesomeIcon icon={faSignOutAlt} className="sidebar__nav-item-icon" /><span className="sidebar__nav-item-text">Logout</span></li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;