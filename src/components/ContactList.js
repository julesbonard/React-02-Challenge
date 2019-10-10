import React from 'react';
import './QuoteCard.css';
import Contact from "./Contact"
const contact5 = [{
      character: "Kristin Kennedy",
      image:
        "https://randomuser.me/api/portraits/women/66.jpg",
      online:true,
      status:true
    },
    {
      character: "Rebecca Jacobs",
      image:
        "https://randomuser.me/api/portraits/women/30.jpg"
    },
    {
      character: "Ricky Ramos",
      image:
        "https://randomuser.me/api/portraits/men/9.jpg"
    },
    {
      character: "Diane Riley",
      image:
        "https://randomuser.me/api/portraits/women/91.jpg",
      online:true,
      status: true
    },
    {
        character: "Patrick Stone",
        image:
          "https://randomuser.me/api/portraits/men/81.jpg"
    }
  ];
  
  const ContactList = () => (
    <div>
        {contact5.map(item => (
            <Contact 
            avatar={item.image} 
            name={item.character} 
            online={item.online}
            status={item.status}/>
        ))}
    </div>
  );


export default ContactList