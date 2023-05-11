import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className="NavigationItems">
        <NavigationItem link="/">Home</NavigationItem>
       { props.isAuth && <NavigationItem link="/shop">Shop</NavigationItem>}
       { props.isAuth ? <NavigationItem>Logout</NavigationItem>
         : <NavigationItem link="/auth/login">Login</NavigationItem>}
    </ul>
);

export default navigationItems;