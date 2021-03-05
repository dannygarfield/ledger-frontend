import React from 'react';
import DateFilters from './DateFilters';
import BudgetEntriesTable from './BudgetEntriesTable';

class BudgetEntriesContainer extends React.Component {

  render() {
    return(
      <div>
        <DateFilters
          startDate={this.props.startDate}
          endDate={this.props.endDate}
          filterDates={this.props.filterDates} />
        <BudgetEntriesTable entries={this.props.entries}/>
      </div>
    );
  }
}

export default BudgetEntriesContainer;
