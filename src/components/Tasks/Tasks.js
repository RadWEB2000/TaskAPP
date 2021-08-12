import React, {useState} from 'react';
import { FaTimes as CloseTask } from 'react-icons/fa';
import styles from './Tasks.module.scss';
import { MdDone as DoneIcon } from "react-icons/md";




export const Tasks = ({date,id, value}) => {

    const [done, toggleDone] = useState(false);

    const isDone = () => toggleDone(!done);

    return (
        <>
            <div className={done ? (styles.task__done) : (styles.task)}>
                <div className={styles.task__check}>
                    <input type="checkbox" name="check" onChange={isDone} id={id} className={styles.task__check__input} />
                    <label htmlFor={id} className={styles.task__check__label}><DoneIcon/></label>
                </div>
                <button className={styles.task__button}>
                    <CloseTask className={styles.task__button__icon}/>
                </button>
                <div className={styles.task__wrapper}>
                    <small className={styles.task__wrapper__date}>
                        {date}
                    </small>
                    <p className={styles.task__wrapper__text}>
                        { value}
                    </p>
                </div>
           </div> 
        </>
    )
}