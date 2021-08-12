import React from 'react';
import { BiTask as TaskIcon } from "react-icons/bi";
import { GrNotes as NoteIcon } from "react-icons/gr";
import { HiViewGridAdd as CreateIcon } from "react-icons/hi";
import styles from './Nav.module.scss';
import {NavLink} from 'react-router-dom';

const NavItem = ({link, linkName,children}) => {
    return(
        <NavLink to={link} className={styles.nav__item}>
           {children} 
           <p className={styles.nav__item__text}>{linkName}</p>
        </NavLink>
    )
}


export const Nav = () => {
    return(
        <nav className={styles.nav}>
            <NavItem 
                link='/tasks'
                linkName='Tasks'
            >
                <TaskIcon className={styles.nav__item__icon}/>
            </NavItem>
            <NavItem 
                link='/notes'
                linkName='Notes'
            >
                <NoteIcon className={styles.nav__item__icon}/>
            </NavItem>
            <NavItem 
                link='/create'
                linkName='Create'
            >
                <CreateIcon className={styles.nav__item__icon}/>
            </NavItem>
        </nav>
    )
}