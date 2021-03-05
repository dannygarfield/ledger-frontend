import React from 'react';

class TableHeader extends React.Component {
  render() {
    return (
      <th>{this.props.name}</th>
    );
  }
}

export default TableHeader;
