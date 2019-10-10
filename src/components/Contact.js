import React from 'react';
import './Contact.css';
import './QuoteCard.css';


const Contact = ({avatar, alt, name,status,online}) => {
    return(
        <div className="Contact">
            <img src={avatar} alt={alt} className="avatar"/>
            <div>
                <h1 className="name">{name}</h1>
                <div className="status stats">
                    <div className={online ? "status-online" : "status-offline"}></div>
                    <div className="status-text">{status ? 'online': 'offline'}</div>
                </div>

            </div>
        </div>
    )
}

export default Contact;