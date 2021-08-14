import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import { RiFacebookLine as FacebookIcon, RiInstagramLine as InstagramIcon, RiDiscordFill as DiscordIcon, RiYoutubeLine as YouTubeIcon, RiGithubLine as GithubIcon } from "react-icons/ri";
import { TasksView } from '../TasksView/TasksView';
import styles from './AboutView.module.scss';







const Header = styled.header`
    background-attachment: fixed;
    background-image: url('https://cdn.pixabay.com/photo/2015/06/24/15/45/code-820275_960_720.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;




const Social = ({children, link}) => {
    return (
        <a href={link} target='_blank'  className={styles.socials__item}>
            {children}
        </a>
    )
}

export const AboutView = () => {
    return (
        <>
            <Header className={styles.header}>
                <h2>Application support</h2>
            </Header>

            <div className={styles.description}>
                <ul className={styles.description__list}>
                    <li className={styles.description__list__item}>
                        Go to the tab Create. 
                    </li>
                    <li className={styles.description__list__item}>
                        Create your own assignment / note.
                    </li>
                    <li className={styles.description__list__item}>
                        Click SUBMIT to add a note / task
                    </li>
                </ul>
            </div>

            <div className={styles.hero}/>
            <div className={styles.about}>
                <h2>About me</h2>
                <p>
                    My name is Radosław Adamczyk and I live in the Greater Poland Province . Since 2019, I am a graduate of KPALO in Śrem with a mathematical, physical, IT and historical profile. As far as I can remember, I have always been interested in websites, since 2016 I started my adventure with front-end technologies. HTML, CSS and the SASS / SCSS preprocessor, Bootstrap and JavaScript along with the React framework are no strangers. I also know the basics of C ++, Wordpress and MySQL queries. I am writing to you with a point of reference for an internship in the field of WebDevelopment / FrontEnd Development to get the opportunity to get a point of reference which is essential for point development. 
                </p>
            </div> 
            <div className={styles.socials}> 
                <Social link=''><FacebookIcon className={styles.socials__item__icon} /></Social>
                <Social link=''><InstagramIcon className={styles.socials__item__icon} /></Social>
                <Social link=''><DiscordIcon className={styles.socials__item__icon} /></Social>
                <Social link=''><YouTubeIcon className={styles.socials__item__icon} /></Social>
                <Social link=''><GithubIcon className={styles.socials__item__icon} /></Social>
            </div>
            <div className={styles.button}>
                <Link to='/tasks' className={styles.button__text}>NEXT</Link>
                <span className={styles.button_span_1}/>
                <span className={styles.button_span_2}/> 
                <span className={styles.button_span_3}/> 
                <span className={styles.button_span_4}/>
            </div>
        </>
    )
}