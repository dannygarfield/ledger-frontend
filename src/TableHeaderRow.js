import React from 'react';
import TableHeader from './TableHeader'

function TableHeaderRow(props) {
    const headers = props.headers.map(h =>
      <TableHeader key={h} name={h} />
    );

    return (
      <thead>
        <tr>
          {(props.addCol) && <th></th>}
          {headers}
        </tr>
      </thead>
    );
}

export default TableHeaderRow;
