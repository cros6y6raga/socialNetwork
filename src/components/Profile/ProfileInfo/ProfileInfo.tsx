import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div >
            <div>
                <img src='https://football-fun.ru/uploads/40/posts/djevid-bekhjem-pozdravil-inter-majami-s-debjutom-v-mls.jpg' alt=''/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo;