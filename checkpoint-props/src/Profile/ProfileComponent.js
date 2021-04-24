import React from 'react';
import imgDefault from '../Default-pic.png';
import PropTypes from 'prop-types';

const imgProfile = {
    gridRow: "1/4"
};
const imgProfileImg = {
    borderRadius: "10px",
    width: "100%",
    height: "100%"
};

const Profile = (props) => {
    return (
        <div className="Container">
            <div style={imgProfile}>
                <img src={props.imgProfile} style={imgProfileImg} alt=""/>
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

// Set default props
Profile.defaultProps = {
    bio: 'Your Bio',
    fullName: "Full Name",
    profession: 'Your Profession',
    imgProfile: imgDefault,
    onClick : () => {
        alert("No Profile!")
    }
}
// prop type definitions
Profile.propTypes = {
    bio: PropTypes.string,
    fullName: PropTypes.string,
    profession: PropTypes.string,
    imgProfile: PropTypes.any,
    onClick: PropTypes.func
}

export default Profile