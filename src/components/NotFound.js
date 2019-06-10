import React from 'react';

//show notification for no any match with the search term
const SearchNotFound = () => {
  return(
    <div className="not-found">
      <h3>No Results Found</h3>
      <p>You search did not return any results. Please try again.</p>
    </div>
  );
}

export default SearchNotFound;
