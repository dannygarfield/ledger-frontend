import DateFilters from './DateFilters';
import BudgetEntriesTable from './BudgetEntriesTable';

function BudgetEntriesContainer(props) {
    return(
      <div>
        <DateFilters
          startDate={props.startDate}
          endDate={props.endDate}
          filterDates={props.filterDates} />
        <BudgetEntriesTable entries={props.entries}/>
      </div>
    );
}

export default BudgetEntriesContainer;
