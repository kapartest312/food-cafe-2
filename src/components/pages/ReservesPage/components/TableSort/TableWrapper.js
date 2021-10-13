// import React, {useState} from "react";
// import cn from "classnames";
//
// const TableWrapper = ({children, className, headers}) => {
//   const [tableHeaders, setTableHeaders] = useState(headers);
//
//   function onSort(header) {
//     let disablededActiveHeaders = tableHeaders.map((item) => {
//       if (item.id !== header.id) {
//         item.isDesc = false;
//       }
//       return item;
//     });
//     setTableHeaders(disablededActiveHeaders);
//     header.sorting.bind(this, header.isDesc)();
//     header.isDesc = !header.isDesc;
//   }
//
//   return (
//     <div className={cn("reserves-page_table__wrapper", className)}>
//       <div className="reserves-page_table__head _wrapper">
//         {tableHeaders.map((header) => (
//           <div
//             key={header.id}
//             className={cn("reserves-page_table__head _item-col", `_${header.id}`)}
//           >
//             {header.type !== "empty" && (
//               <div
//                 className={cn(
//                   "th-button th-button--sorting",
//                   header.isDesc && "th-button--rotate"
//                 )}
//                 onClick={onSort.bind(this, header)}
//               >
//                 <span>{header.title}</span>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//       <div>{children}</div>
//     </div>
//   );
// };
//
// export default TableWrapper;
