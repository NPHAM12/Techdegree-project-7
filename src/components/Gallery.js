import React from 'react';
import GalleryItem from './GalleryItem';
import NotFound from './NotFound';

// Render gallery field to webpage
const Gallery = (props) => {
  const results = props.data; // results is photo array in the photos object
  let gifList;
  //match with a search term
  if (results.length > 0){
    // console.log('farm:', results[0].farm);
    // console.log('server:', results[0].server);
    // console.log('id:', results[0].id);
    // console.log('secret:', results[0].secret);
    // console.log('title:', results[0].title);
    // console.log('Here');
    gifList = results.map(gif => <GalleryItem
                                              url={`https://farm${gif.farm}.staticflickr.com/${gif.server}/${gif.id}_${gif.secret}_m.jpg`}
                                              key={gif.id}/>);
  }
  //no any match with a search term
  else{
    gifList = <NotFound/>
  }
  // render specific photos on webpage
  // console.log("result:", props.result);

  return(
    <div className="photo-container">
      <h2>{props.result} Results</h2>
      <ul>
        {gifList}
      </ul>
    </div>
  );
}

export default Gallery;
