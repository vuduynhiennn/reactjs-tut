import moment from 'moment'
import './DateDisplay.css'

const DateDisplay = (props) => {
    const { date } = props
    return ( 
        <section className='date-display'>
            My Date is { moment(date).format('LL') }
        </section>
    )
}
 
export default DateDisplay