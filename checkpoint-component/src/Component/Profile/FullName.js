import React from 'react';

const userName = {
    firstName: "Harrouche",
    lastName: "Amir"
}

const FullName = () => {
    return (
        <div className="name">
            <h1>{userName.firstName} {userName.lastName}</h1>
        </div>
    )
}

export default FullName