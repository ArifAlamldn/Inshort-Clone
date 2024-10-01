import { Container } from '@mui/material';
import React from 'react';
import './NewsContent.css'; 
import NewsCard from '../NewsCard/NewsCard';

const 
NewsContent = ({ newsArray, totalResult, loadMore, setLoadMore }) => (
  
  <Container maxWidth="md" className='parent-div'>
   
    <div className='contener'>
      <div className='downloadMessage'>
        <span>For the best experience, use <b>Inshort</b> app on your smartphone.</span>
        <img src="https://assets.inshorts.com/website_assets/images/appstore.png" alt="App Store Logo" />
        <img src="https://assets.inshorts.com/website_assets/images/playstore.png" alt="Google Play Logo" />
      </div>
    </div>
    
    <div className='data'>
      {
        newsArray.map((newitem, index) => {
        
          return (
            <NewsCard key={index} newitem={newitem} />
          )
         
        })
      }
    </div>
    {
      loadMore <= totalResult && (
        <>
           <hr />
           <button
           className='loadMoreButton'
           onClick={() => setLoadMore(loadMore + 10)}
           >
             Load More
           </button>
        </>
      )
    }
  </Container>
);

export default NewsContent;
