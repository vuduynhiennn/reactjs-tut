import './header.css'
import DateContainer from '../DateContainer/DateContainer';
const Header = () => {
    return ( 
        <header className="date-header">
            My Date picker
            <div className="date-header">
                <DateContainer />
            </div>
        </header>
    );
}
 
export default Header;