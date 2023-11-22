/* eslint-disable react/prop-types */
import { DateRange } from 'react-date-range';

const Calender = ({ value, handleSelect }) => {
    const dateRangeWidth = {
        width: '300px'
    }
    return (
        <div>
            {/* react date-range package component here */}
            <DateRange
                rangeColors={['#F43F5E']}
                ranges={[value]}
                onChange={handleSelect}
                // date={value?.startDate}
                direction='horizontal'
                // // showDateDisplay={false}
                // minDate={value?.startDate}
                // maxDate={value?.endDate}
                style={dateRangeWidth}

            />
        </div>
    );
};

export default Calender;
