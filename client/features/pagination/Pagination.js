// import React, { useState, useEffect } from "react";
// import Pagination from "react-bootstrap/Pagination";

// const AllPagination = ({
//   cards,
//   pageLimit,
//   type,
//   rarity,
//   filter,
//   dataLimit,
// }) => {
//   const [pages, setPages] = useState(Math.round(cards.length / dataLimit));
//   const [activePage, setActivePage] = useState(1);

//   const nextPage = () => {
//     setActivePage((page) => page + 1);
//   };

//   const previousPage = () => {
//     setActivePage((page) => page - 1);
//   };

//   const changePage = (event) => {
//     const pageNumber = Number(event.target.textContent);
//     setActivePage(pageNumber);
//   };

//   const getPaginatedData = () => {
//     const start = activePage * dataLimit - dataLimit;
//     const end = start + dataLimit;
//     return cards.slice(start, end);
//   };

//   const getPaginationGroup = () => {
//     let start = Math.floor((activePage - 1) / pageLimit) * pageLimit;
//     return new Array(pages).fill().map((_, idx) => start + idx + 1);
//   };

//   useEffect(() => {
//     setActivePage(1);
//     setPages(Math.round(cards.length / dataLimit));
//   }, [type, rarity, filter]);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [activePage]);

//   return (
//     <div>
//       <ProductPaginated products={getPaginatedData()} />

//       <div className="pagination">
//         {/* previous button */}
//         <button
//           onClick={previousPage}
//           className={`prev ${activePage === 1 ? "disabled" : ""}`}
//         >
//           prev
//         </button>

//         {/* show page numbers */}
//         {getPaginationGroup().map((item, index) => (
//           <button
//             key={index}
//             onClick={changePage}
//             className={`paginationItem ${
//               activePage === item ? "active" : null
//             }`}
//           >
//             <span>{item}</span>
//           </button>
//         ))}

//         {/* next button */}
//         <button
//           onClick={nextPage}
//           className={`next ${
//             activePage === pages ? "disabled" : pages === 0 ? "disabled" : ""
//           }`}
//         >
//           next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AllPagination;
