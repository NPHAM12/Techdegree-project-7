import React from 'react';

// Stateless Component GalleryItem is for a specific photo
const GalleryItem = (props) =>{
  return(
    <li>
      <img src={props.url} alt=''/>
    </li>
  );
}
export default GalleryItem;
