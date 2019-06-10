import React from 'react';

const title = 'My React Gallery App';
const desc =  'Select a categorie which you would like to see';

// Title of the webpage
const Header = () =>{
  return(
    <header>
      <div className="container">
        <div>
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
