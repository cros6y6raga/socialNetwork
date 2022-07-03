import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type DialogItemProps = {
    name: string,
    id: string
}
type MessageProps = {
    message: string
}

const DialogItem = (props:DialogItemProps) => {
    let path = '/dialogs/' + props.id;
    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props:MessageProps) => {
    return(
        <div className={s.dialog}>{props.message}</div>
    )
}
const Dialogs = () => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem name={'Vladimir'} id={'1'}/>
                    <DialogItem name={'Max'} id={'2'}/>
                    <DialogItem name={'Djon'} id={'3'}/>
                    <DialogItem name={'Bob'} id={'4'}/>
                    <DialogItem name={'Alex'} id={'5'}/>
                </div>
                <div className={s.messages}>
                  <Message message={'Hi'}/>
                  <Message message={'How is your it-kamasutra?'}/>
                  <Message message={'Yo'}/>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;