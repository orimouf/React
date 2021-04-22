import React from 'react';

const Profile = (props) => {
    return (
        <div className="Container">
            <div className="imgProfile">
                <img src={props.imgProfile} alt=""/>
            </div>
            <div className="name">
                <h1>{props.fullName}</h1>
            </div>
            <div className="bio">
                <label>Bio :</label>
                <p>{props.bio}</p>
            </div>
            <div className="profession">
                <label>Profession :</label>
                <p>{props.profession}</p>
            </div>
            <button onClick={props.onClick}>Handle Name</button>
        </div>
    )
}

export default Profile