import React, {useState} from "react";
import cn from "classnames";

const TableWrapper = ({children, className, headers}) => {
  const [tableHeaders, setTableHeaders] = useState(headers);

  function onSort(header) {
    let disablededActiveHeaders = tableHeaders.map((item) => {
      if (item.id !== header.id) {
        item.isDesc = false;
      }
      return item;
    });

    setTableHeaders(disablededActiveHeaders);

    header.sorting.bind(this, header.isDesc)();
    header.isDesc = !header.isDesc;
  }

  return (
    <div className={cn("table-module", className)}>
      <table>
        <thead>
          <tr>
            {tableHeaders.map((header) => (
              <th key={header.id}>
                {header.type !== "empty" && (
                  <div
                    className={cn(
                      "th-button th-button--sorting",
                      header.isDesc && "th-button--rotate"
                    )}
                    onClick={onSort.bind(this, header)}
                  >
                    <span>{header.title}</span>
                  </div>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default TableWrapper;
