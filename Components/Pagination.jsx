


import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';


const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15,16,17,18,19,20];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <p>
            <h3>Number {item}</h3>
          </p>
        ))}
    </>
  );
}
export const Pagination=({ selected })=>{
 <h1>Pagination</h1>
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    
    const endOffset = itemOffset + selected;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / selected));
  }, [itemOffset, selected]);

  
  const handlePageClick = (event) => {
    const newOffset = (event.selected * selected) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
       data-testid="customButton"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}


export default Pagination;