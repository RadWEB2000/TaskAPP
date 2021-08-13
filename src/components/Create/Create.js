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



const TypeInput = ({input, inputFunction, name,title, type, value}) => {

   


    return (
        <>
            {
                input
                ?   
                    <div className={styles.form__item}>
                        <label htmlFor={name} className={styles.form__item__label}>{title}</label>
                        <div className={styles.form__item__input}>
                            <input type={type} name={name} id={name} value={value} onChange={inputFunction} />
                            <span/>
                        </div>    
                    </div>
                :
                    <div className={styles.form__itemTA}>
                        <label htmlFor={name} className={styles.form__itemTA__label}>{title}</label>
                        <div className={styles.form__itemTA__textarea}>
                            <textarea name={name} id={name} rows="5" value={value} onChange={inputFunction} />
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

const Task = ({inputValue, inputFunction}) => {
    return (
       <form action="" className={styles.form}>
            <div className={styles.form__wrapper}>
                <TypeInput
                    input={true}
                    inputFunction={inputFunction}
                    title='Date task'
                    name='date'
                    type='date'
                    value={inputValue}
                />  
                <TypeInput
                    input={false}
                    inputFunction={inputFunction}
                    title='Value of task'
                    name='valueTask'
                    value={inputValue}
                />
            </div>
            <Button />
        </form>
    )
}

const Note = ({inputValue, inputFunction}) => {
    return (
        <form action="" className={styles.form}>
            <div className={styles.form__wrapper}>
                <TypeInput
                    input={true}
                    inputFunction={inputFunction}
                    title='Title'
                    name='title'
                    type='text'
                    value={inputValue}

                />  
                <TypeInput
                    input={true}
                    inputFunction={inputFunction}
                    title='Lead'
                    name='lead'
                    type='text'
                    value={inputValue}
                />
                <TypeInput
                    input={true}
                    inputFunction={inputFunction}
                    title='Image URL'
                    name='image'
                    type='url'
                    value={inputValue}
                />
                <TypeInput
                    input={false}
                    inputFunction={inputFunction}
                    title='Value of note'
                    name='valueNote'
                    value={inputValue}
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

        
    const [inputValue, inputToggle] = useState("");

    const inputFunction = e => {
        inputToggle(e.target.value);
        const inputName = e.target.name;
        // console.log('Wartosc przed warunkami: ' + inputName + ' = ' + inputValue);

        if (inputName === 'title') {
            console.log(inputValue)
        } else if (inputName === 'lead') {
            console.log(`nazwa inputa to value note ${inputName}`)
        } else if (inputName === 'image') {
            console.log(`nazwa inputa to value note ${inputName}`)
        } else if (inputName === 'valueNote') {
            console.log(`nazwa inputa to value note ${inputName}`)
        }
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
                            inputValue={inputValue}
                            inputFunction={inputFunction}
                        />
                    : <Note
                            inputValue={inputValue}
                            inputFunction={inputFunction}
                      />
                }
            </div>
        </div>
            <strong style={{ 'position': 'fixed', 'top': '0'}}>
            
        </strong>    
      
        </>    

    )
}
