







<div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                dates[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
         </div>

const [openDate, setOpenDate] = useState(false);
const [dates, setDates] = useState([
  {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  }
]);