import React from "react";
import {toJS} from "mobx";
import {inject, observer} from "mobx-react";
import TableWrapper from "./TableWrapper";

const TableSort = inject("store")(
  observer(({skeleton, data}) => {
    const {headers, rows} = skeleton;
    return (
      <TableWrapper headers={headers}>
        {rows(toJS(data))?.map((row) => (
          <tr>
            {headers.map((header) => (
              <td>{row[header.id]()}</td>
            ))}
          </tr>
        ))}
      </TableWrapper>
    );
  })
);

export default TableSort;
