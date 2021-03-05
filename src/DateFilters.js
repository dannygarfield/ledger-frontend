import React from 'react';
import { formatDate } from './helpers'

  class DateFilters extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }

    render() {
      const startDate = formatDate(this.props.startDate);
      const endDate = formatDate(this.props.endDate);
      return (
        <form>
          <label>start:</label>
          <input
            type="date"
            name="startDate"
            value={startDate}
            onChange={this.handleChange} />
          <br />
          <label>end:</label>
          <input
            type="date"
            name="endDate"
            value={endDate}
            onChange={this.handleChange} />
        </form>
      );
    }

    handleChange(e) {
      const name = e.target.name;
      const value = e.target.value;
      let start = name === "startDate" ? value : this.props.startDate;
      let end = name === "endDate" ? value : this.props.endDate;
      this.props.filterDates(start, end);
    }

  }

export default DateFilters;
