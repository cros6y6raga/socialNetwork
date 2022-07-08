import React from 'react';
import s from './Post.module.css'

type PostType = {
    message: string,
    likesCount: number,
}

const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img src="https://avatarko.ru/img/kartinka/1/multfilm_gomer.png"/>
            {props.message}
            <div>
            <span>like</span>
            </div>
        </div>
    )
}
export default Post;