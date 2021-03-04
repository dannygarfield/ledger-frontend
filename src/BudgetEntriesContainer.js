import React from 'react';
import DateFilters from './DateFilters';

class BudgetEntriesContainer extends React.Component {

  render() {
    return(
      <div>
        <DateFilters
          startDate={this.props.startDate}
          endDate={this.props.endDate}
          filterDates={this.props.filterDates} />
      </div>
    );
  }
}

export default BudgetEntriesContainer;
