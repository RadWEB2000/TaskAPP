import React, {useState, useEffect } from 'react';
import styles from './Create.module.scss';

const Menu = ({create,createTask,createNote}) => {
    return (
        <menu className={styles.menu}>
            <button onClick={createTask} className={create ? (styles.menu__item__choose) : (styles.menu__item)}>
                TASK
            </button>
            <button onClick={createNote} className={create ? (styles.menu__item) : (styles.menu__item__choose)}> 
                NOTE
            </button>
        </menu>
    )
}



const TypeInput = ({input, name,title, type, refValue}) => {
    return (
        <>
            {
                input
                ?   
                    <div className={styles.form__item}>
                        <label htmlFor={name} className={styles.form__item__label}>{title}</label>
                        <div className={styles.form__item__input}>
                            <input type={type} name={name} id={name} ref={refValue}/>
                            <span/>
                        </div>    
                    </div>
                :
                    <div className={styles.form__itemTA}>
                        <label htmlFor={name} className={styles.form__itemTA__label}>{title}</label>
                        <div className={styles.form__itemTA__textarea}>
                            <textarea name={name} id={name} rows="5" ref={refValue}/>
                        </div>    
                    </div>
                    
            }
        </>
    )
}

const Button = ({ behave }) => {
    return (
        <button onClick={behave} className={styles.form__submit}> 
            Submit
        </button>
    )
}



const Task = () => {
    return (
       <form action="" className={styles.form}>
            <div className={styles.form__wrapper}>
                <TypeInput
                    input={true}
                    title='Date task'
                    name='date'
                    type='date'
                />  
                <TypeInput
                    input={false}
                    title='Value of task'
                    name='valueTask'
                />
            </div>
            <Button />
        </form>
    )
}

const Note = ({title,lead,img,text}) => {
    return (
        <form action="" className={styles.form}>
            <div className={styles.form__wrapper}>
                <TypeInput
                    input={true}
                    title='Title'
                    name='title'
                    type='text'
                    refValue={title}
                />  
                <TypeInput
                    input={true}
                    title='Lead'
                    name='lead'
                    type='text'
                    refValue={lead}
                />
                <TypeInput
                    input={true}
                    title='Image URL'
                    name='image'
                    type='url'
                    refValue={img}
                />
                <TypeInput
                    input={false}
                    title='Value of note'
                    name='valueNote'
                    refValue={text}
                />
            </div>
            <Button/>
        </form>
    )
}



export const Create = () => {

    const [create, toggleCreate] = useState(true);
    const createTask = () => toggleCreate(true);
    const createNote = () => toggleCreate(false);

    const noteValues = {
        title: 'Avengers',
        lead: 'dsasdkjma kjmsdjjafaiojsfjajf',
        img: '',
        text:'asdasduaf ajsjdujauhsfh huahsdfuajisrfd aid fiiasfijkaispf apisodi opakpok pokaposkdpo poaskpokdpoaskokaok oapdfko'
    }

    // const taskValues = {
    //     title: 'Avengers',
    //     lead: 'Zgraja plastikolubów',
    //     img: '',
    //     text:'Bedą się napierdalać'
    // }


    return (
        <>
        <div className={styles.create}>
            <Menu
                create={create}
                createTask={createTask}
                createNote={createNote}
            />
            <div className={styles.wrapper}>
                {
                    create 
                    ?  <Task
                                
                        />
                    :   <Note
                            title={noteValues.title}
                            lead={noteValues.lead}
                            img={noteValues.img}
                            text={noteValues.text}
                        />
                }
            </div>
        </div>
            <strong style={{ 'position': 'fixed', 'top': '0'}}>
            {noteValues.title}
                <br></br>
            {noteValues.lead}
                <br></br>
            {noteValues.img}
                <br></br>
            {noteValues.text}
        </strong>    
        </>    

    )
}
