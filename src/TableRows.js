import React from 'react';
import EntryRow from './EntryRow';

class TableRows extends React.Component {
  render() {
    const rows = [];
    if (this.props.entries) {
      this.props.entries.forEach((entry, index) => {
        rows.push(
          <EntryRow
            entry={entry}
            key={index} />
        );
      });
    }
    return (
        <tbody>
          {rows}
        </tbody>
    );
  }
}

export default TableRows;
