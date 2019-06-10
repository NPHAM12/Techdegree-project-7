import React from 'react';

const intro ='This web app will display photos by fetching API from Flickr';
const desc = 'Please, select one of selections above or search any photos you are interesting in!';

const HomePage = () =>{
  return(
    <div className="main-content">
      <h2>{intro}</h2>
      <h3><i>{desc}</i></h3>
    </div>
  );
}

export default HomePage;
