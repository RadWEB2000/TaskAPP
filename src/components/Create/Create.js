import React, {useState} from 'react';
import styles from './Create.module.scss';
import { noteAPI } from '../../data/noteAPI'
import { taskAPI } from '../../data/taskAPI'

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

const Task = ({submitForm, date, dateFunction, task, taskFunction}) => {
    return (
       <form action="" className={styles.form}>
            <div className={styles.form__wrapper}>
                <TypeInput
                    input={true}
                    inputFunction={dateFunction}
                    title='Date task'
                    name='date'
                    type='date'
                    value={date}
                />  
                <TypeInput
                    input={false}
                    inputFunction={taskFunction}
                    title='Value of task'
                    name='valueTask'
                    value={task}
                />
            </div>
            <Button behave={submitForm} />
        </form>
    )
}

const Note = ({submitForm, title, titleFunction, lead, leadFunction, img, imgFunction, note, noteFunction}) => {
    return (
        <form action="" className={styles.form}>
            <div className={styles.form__wrapper}>
                <TypeInput
                    input={true}
                    inputFunction={titleFunction}
                    title='Title'
                    name='title'
                    type='text'
                    value={title}

                />  
                <TypeInput
                    input={true}
                    inputFunction={leadFunction}
                    title='Lead'
                    name='lead'
                    type='text'
                    value={lead}
                />
                <TypeInput
                    input={true}
                    inputFunction={imgFunction}
                    title='Image URL'
                    name='image'
                    type='url'
                    value={img}
                />
                <TypeInput
                    input={false}
                    inputFunction={noteFunction}
                    title='Value of note'
                    name='valueNote'
                    value={note}
                />
            </div>
            <Button
                behave={submitForm}
            />
        </form>
    )
}



export const Create = () => {

    const [create, toggleCreate] = useState(true);
    const createTask = () => toggleCreate(true);
    const createNote = () => toggleCreate(false);

 
    const [title, updateTitle] = useState('');
    const titleFunction = e => updateTitle(e.target.value);

    const [lead, updateLead] = useState('');
    const leadFunction = e => updateLead(e.target.value);

    const [img, updateImg] = useState('');
    const imgFunction = e => updateImg(e.target.value);
    
    const [note, updateNote] = useState('');
    const noteFunction = e => updateNote(e.target.value);
    
    const [date, updateDate] = useState('');
    const dateFunction = e => updateDate(e.target.value);
    
    const [task, updateTask] = useState('');
    const taskFunction = e => updateTask(e.target.value);
    
    const noteObject = {
        title: title,
        lead: lead,
        img: img,
        text: note
    }
    
    const taskObject = {
        date: date,
        text: task
    }


    

    console.log(noteObject.title + '\n' + noteObject.lead + '\n' + noteObject.img + '\n' + noteObject.text)
    console.log(taskObject.date + '\n' + taskObject.text)

    const addNote = e => {
        e.preventDefault();

        if (noteObject.title !== '' && (noteObject.lead !== '' && noteObject.lead.length < 50 && noteObject.lead.length > 2)) {
            console.log('Wszystko zostało poprawnie dodane')
            noteAPI.unshift(noteObject);
        } else {
            console.log('Uzupełnij brakujące pola')
        }

    }

  
    const addTask = e => {
        // e.preventDefault();
        taskAPI.unshift(taskObject);
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
                    ? <Task
                        dateConst={date}
                        dateFunction={dateFunction}
                        taskConst={task}
                        taskFunction={taskFunction}
                        submitForm={addTask}  
                    />
                    : <Note
                        titleConst={title}
                        titleFunction={titleFunction}
                        leadConst={lead}
                        leadFunction={leadFunction}
                        imgConst={img}
                        imgFunction={imgFunction}
                        noteConst={note}
                        noteFunction={noteFunction}
                        submitForm={addNote}
                      />
                }
            </div>
        </div>
      
        </>    

    )
}
