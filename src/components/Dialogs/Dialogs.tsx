import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type DialogItemProps = {
    name: string,
    id: number,
}
type MessageProps = {
    message: string
}

const DialogItem = (props: DialogItemProps) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props: MessageProps) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}
const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: 'Vladimir'},
        {id: 2, name: 'Max'},
        {id: 3, name: 'Djon'},
        {id: 4, name: 'Bob'},
        {id: 5, name: 'Alex'},
    ]
    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ]
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                    <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                    <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                    <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                </div>
                <div className={s.messages}>
                    <Message message={messagesData[0].message}/>
                    <Message message={messagesData[1].message}/>
                    <Message message={'Yo'}/>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;