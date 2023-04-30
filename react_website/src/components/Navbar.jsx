import Button from './Button.jsx';
import './Navbar.css';

function Navbar(){
    return(
    <div className='navbar'>
        <Button button='navbarButton Home'></Button>
        <Button button='navbarButton Projects'></Button>
        <Button button='navbarButton Education'></Button>
    </div>
    )
}

export default Navbar