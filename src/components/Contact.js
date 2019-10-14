import React from 'react';
import './Contact.css';
import './QuoteCard.css';


class Contact extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            online: this.props.online
        }
    }

    render(){
        const {avatar, alt, name} = this.props;
        const {online} = this.state;
        
        return(
            <div className="Contact">
                <img src={avatar} alt={alt} className="avatar"/>
                <div>
                    <h1 className="name">{name}</h1>
                    <div className="status stats">
                        <div className={online ? "status-online" : "status-offline"}
                        onClick={() => {
                            const newOnline = !online;
                            this.setState({online : newOnline});
                        }}
                        ></div>
                        <div className="status-text">{online ? 'online': 'offline'}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;