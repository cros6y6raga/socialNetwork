import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return  <div className= {s.content}>
        <div>
            <img src="https://vjoy.cc/wp-content/uploads/2020/10/dlya_dushi_35_13130628.jpg" alt=""/>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts />
    </div>
}
export default Profile;