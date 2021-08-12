import React, {useState, useRef, useEffect} from 'react';
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



const TypeInput = ({input, name,title, type, inputValue, updateValue}) => {

   


    return (
        <>
            {
                input
                ?   
                    <div className={styles.form__item}>
                        <label htmlFor={name} className={styles.form__item__label}>{title}</label>
                        <div className={styles.form__item__input}>
                            <input type={type} name={name} id={name} onChange={updateValue} ref={inputValue}/>
                            <span/>
                        </div>    
                    </div>
                :
                    <div className={styles.form__itemTA}>
                        <label htmlFor={name} className={styles.form__itemTA__label}>{title}</label>
                        <div className={styles.form__itemTA__textarea}>
                            <textarea name={name} id={name} rows="5"  onChange={updateValue} ref={inputValue}/>
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

const Note = ({titleValue, imgValue, leadValue, textNoteValue, inputValue,updateValue}) => {
    return (
        <form action="" className={styles.form}>
            <div className={styles.form__wrapper}>
                <TypeInput
                    input={true}
                    title='Title'
                    name='title'
                    type='text'
                    updateValue={updateValue}
                    inputValue={titleValue}
                />  
                <TypeInput
                    input={true}
                    title='Lead'
                    name='lead'
                    type='text'
                    updateValue={updateValue}
                    inputValue={leadValue}
                />
                <TypeInput
                    input={true}
                    title='Image URL'
                    name='image'
                    type='url'
                    updateValue={updateValue}
                    inputValue={imgValue}
                />
                <TypeInput
                    input={false}
                    title='Value of note'
                    name='valueNote'
                    updateValue={updateValue}
                    inputValue={textNoteValue}
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

        
    const inputValue = useRef(null);

    const titleValue = useRef(null);
    const leadValue = useRef(null);
    const imgValue = useRef(null);
    const textNoteValue = useRef(null);

    const updateValue = () => {
        const title = titleValue.current.value;
        const lead = leadValue.current.value;
        const img = imgValue.current.value;
        const textNote = textNoteValue.current.value;

    }


  


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
                    : <Note
                        inputValue={inputValue}
                        titleValue={titleValue}
                        leadValue={leadValue}
                        imgValue={imgValue}
                        textNoteValue={textNoteValue}
                        updateValue={updateValue}
                      />
                }
            </div>
        </div>
            <strong style={{ 'position': 'fixed', 'top': '0'}}>
            
        </strong>    
      
        </>    

    )
}
