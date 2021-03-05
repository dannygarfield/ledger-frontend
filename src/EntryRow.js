import React from 'react';
import { formatDate } from './helpers';

class EntryRow extends React.Component {
  render() {
    const entry = this.props.entry
    const formattedAmount = (entry.Amount / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    const formattedDate = formatDate(entry.EntryDate);
    return (
      <tr>
        <td>{formattedDate}</td>
        <td>{formattedAmount}</td>
        <td>{entry.Category}</td>
        <td>{entry.Description}</td>
      </tr>
    );
  }
}

export default EntryRow;
