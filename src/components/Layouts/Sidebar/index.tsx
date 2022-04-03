import React, { useContext } from "react";
import { RiUserHeartLine } from "react-icons/ri";
import { IoSettingsOutline, IoPaperPlaneOutline } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import { SiXing } from "react-icons/si";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { BiCustomize } from 'react-icons/bi';
import Link from 'next/link';
import { AuthContext } from "../../../context/AuthContext";



interface Props {}

const Sidebar: React.FC<Props> = () => {
  const { loggedInUser } =  useContext(AuthContext);

  return (
    <section className="sidebar__menu">
      <div className="sidebar">
        <ul>
          <li>
            <Link href="/">
              <a><SiXing className="sidebar__icon" size={28} /></a>              
            </Link>
          </li>
          <li>
            <Link href="/Scream">
              <a><MdOutlineSlowMotionVideo className="sidebar__icon" size={28} /></a>
            </Link>
          </li>
          <li>
            <Link href="/Service">
              <a><BiCustomize className="sidebar__icon" size={28} /></a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a><IoMdAddCircleOutline className="sidebar__icon" size={36} /></a>
            </Link>
          </li>
          <li>
            <Link href="/Messenger">
              <a><IoPaperPlaneOutline className="sidebar__icon" size={28} /></a>
            </Link>
          </li>
          <li>
            <Link href={'/Profile'}>
              <a><RiUserHeartLine className="sidebar__icon" size={28} /></a>
            </Link>
          </li>
          <li>
            <Link href="/Setting">
              <a><IoSettingsOutline className="sidebar__icon" size={28} /></a>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
