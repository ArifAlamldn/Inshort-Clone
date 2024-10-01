import React from 'react';
import './NewsCard.css';

const NewsCard = ({ newitem }) => {

     const fullDate = new Date(newitem.publishedAt)
     let   date = fullDate.toString().split(" ")
     let hour = parseInt(date[4].substring(0,2))
     const time = hour>12?true:false
  return (
    <div className='card'>
      
      <img className="rounded-image"  src={newitem.urlToImage?newitem.urlToImage:"data:image/jpeg;base64,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"} alt={newitem.title}  />
    
      <div className='image-text'>
         <span className='title'>{newitem.title}</span>
         <span className='short'><b>Shot</b> <span>by {newitem.author?newitem.author:"Unknown"} /
            {
              time?`${hour-12}:${date[4].substring(3,5)} pm`:`${hour}:${date[4].substring(3,5)} am `}
            on {date[2]} {date[1]} {date[3]} {date[0]}
           </span></span>
         <h3 className='content'>{newitem.content}</h3>
         <a href={newitem.url} target='__blank' className='url'><b>More news in details</b></a>

      </div>
      
    </div>
 
  );
};

export default NewsCard;
