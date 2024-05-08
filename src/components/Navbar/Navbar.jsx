"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdNotifications } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { CgMenuLeft, CgMenuRight } from 'react-icons/cg';

import Style from './Navbar.module.css';
import { Discover, HelpCenter, Notification, Profile, Sidebar } from './index';
import { Button } from '../componentsindex';
import logo from '../img/logo.png';

const Navbar = () => {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSidemenu, setOpenSidemenu] = useState(false);

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    console.log("Button clicked:", btnText);
    if (btnText === 'Discover') {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText === 'Help Center') {
      setDiscover(false);
      setHelp(true);
      setNotification(false);
      setProfile(false);
    } else {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    }
  };

  const openNotification = () => {
    setNotification(!notification);
    setDiscover(false);
    setHelp(false);
    setProfile(false);
  };

  const openProfile = () => {
    setProfile(!profile);
    setHelp(false);
    setDiscover(false);
    setNotification(false);
  };

  const openSidebar = () => {
    setOpenSidemenu(!openSidemenu);
  };

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image src={logo} alt='NFT MARKETPLACE' width={100} height={100} />
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search NFT" />
              <BsSearch className={Style.search_icon} />
            </div>
          </div>
        </div>

        <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_discover}>
            <p onClick={openMenu}>Discover</p>
            {discover && <div className={Style.navbar_container_right_discover_box}><Discover /></div>}
          </div>

          <div className={Style.navbar_container_right_help}>
            <p onClick={openMenu}>Help Center</p>
            {help && <div className={Style.navbar_container_right_help_box}><HelpCenter /></div>}
          </div>

          <div className={Style.navbar_container_right_notify}>
            <MdNotifications className={Style.notify} onClick={openNotification} />
            {notification && <Notification />}
          </div>

          <div className={Style.navbar_container_right_button}>
            <Button btnText="Create" />
          </div>

          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image src={''} alt="Profile" width={40} height={40} onClick={openProfile} />
              {profile && <Profile />}
            </div>
          </div>

          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight className={Style.menuIcon} onClick={openSidebar} />
          </div>
        </div>
      </div>

      {openSidemenu && (
        <div className={Style.Sidebar}>
          <Sidebar setOpenSidemenu={setOpenSidemenu} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
