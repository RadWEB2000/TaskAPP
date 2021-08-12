import React, {useState} from 'react';
import styled from 'styled-components'
import { IoCloseOutline as CloseIcon, IoTrashBinOutline as DeleteIcon } from "react-icons/io5";
import { CgArrowsExpandUpRight as ExpandIcon } from "react-icons/cg";
import styles from './Notes.module.scss';

const NoteButton = ({ behave,children,style }) => {
    return (
        <button onClick={behave} className={style}>
            {children}
        </button>
    )
}

const NoteImageBackground = styled.div`
    /* background-color:#333; */
    background-image:url(${ (props) => props.img});
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
`;

const NoteImage = ({bgImg, style, styleChildren}) => {
    return (
        <figure className={style}>
            <NoteImageBackground img={bgImg} className={styleChildren}/>
        </figure>
    )
}


const NoteTitle = ({style,title}) => {
    return (
        <h2 className={style}>
            {title}
        </h2>
    )
}
 
const NoteLead = ({ lead, style }) => {
    return (
        <h4 className={style}>
            {lead}
        </h4>
    )
}

const NoteText = ({ text, style }) => {
    return (
        <p className={style}>
            {text}
        </p>
    )
}


export const Notes = ({img,title,lead,text}) => {
        const [isOpenPost, toggleOpenPost] = useState(false);
        const expandPost = () => toggleOpenPost(true);
        const hidePost = () => toggleOpenPost(false);
return (
        <>
            <div className={styles.noteSnap}>
                <NoteButton style={styles.noteSnap__del}>
                        <DeleteIcon className={styles.noteSnap__del__icon}/>
                </NoteButton>
                <NoteButton behave={expandPost} style={styles.noteSnap__expand}>
                        <ExpandIcon className={styles.noteSnap__expand__icon}/>
                </NoteButton>
                <NoteImage
                    bgImg={img}
                    style={styles.noteSnap__img}
                    styleChildren={styles.noteSnap__imgChildren}
                />
                <div className={styles.noteSnap__wrapper}>
                    <NoteTitle title={title} style={styles.noteSnap__wrapper__title}/>
                    <NoteLead lead={lead} style={styles.noteSnap__wrapper__lead} />
                </div>    
            </div>
            { isOpenPost &&
                <div className={styles.noteFull}>
                    <NoteButton behave={hidePost} style={styles.noteFull__close}>
                        <CloseIcon style={styles.noteFull__close__icon}/>
                    </NoteButton>
                    <NoteImage
                        bgImg={img}
                        style={styles.noteFull__img}
                        styleChildren={styles.noteFull__imgChildren}
                    />
                    <div className={styles.noteFull__wrapper}>
                        <NoteTitle title={title} style={styles.noteFull__wrapper__title}/>
                        <NoteLead lead={lead} style={styles.noteFull__wrapper__lead}/>  
                        <NoteText text={text} style={styles.noteFull__wrapper__text}/>
                    </div>
                </div>
            }
        </>
            
    )
}