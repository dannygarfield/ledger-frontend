import React from 'react';
import TableHeader from './TableHeader'

class TableHeaderRow extends React.Component {
  render() {
    const headers = this.props.headers.map(h =>
      <TableHeader key={h} name={h} />
    );

    return (
      <thead>
        <tr>
          {(this.props.addCol) && <th></th>}
          {headers}
        </tr>
      </thead>
    );
  }
}

export default TableHeaderRow;
