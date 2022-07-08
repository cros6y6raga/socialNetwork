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
    let dialogs = [
        {id: 1, name: 'Vladimir'},
        {id: 2, name: 'Nikolay'},
        {id: 3, name: 'Ivan'},
        {id: 4, name: 'Aleksandr'},
        {id: 5, name: 'Irina'},
    ]
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your cros6y6raga?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ]
    let dialogsElements = dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = messages.map((m) => <Message message={m.message}/>)
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                    {/*<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>*/}
                    {/*<DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>*/}
                    {/*<DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>*/}
                    {/*<DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>*/}
                    {/*<DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>*/}
                </div>
                <div className={s.messages}>
                    {/*<Message message={messagesData[0].message}/>*/}
                    {/*<Message message={messagesData[1].message}/>*/}
                    {/*<Message message={messagesData[2].message}/>*/}
                    {/*<Message message={messagesData[2].message}/>*/}
                    {/*<Message message={messagesData[2].message}/>*/}
                </div>
            </div>
        </div>
    );
};

export default Dialogs;