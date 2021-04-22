import React from 'react';
import imgProfile from './ProfilePhoto.jpg';

const ProfilePhoto = () => {
    return (
        <div className="imgProfile">
            <img src={imgProfile} alt=""/>
        </div>
    )
}

export default ProfilePhoto