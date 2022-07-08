import React from 'react';
import s from './Post.module.css'

type PostType = {
    message: string,
    likesCount: number,
}

const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img src='https://medialeaks.ru/wp-content/uploads/2019/04/boooy-334x500.jpg'/>
            {props.message}
            <div>
            <span>like</span>
            </div>
        </div>
    )
}
export default Post;