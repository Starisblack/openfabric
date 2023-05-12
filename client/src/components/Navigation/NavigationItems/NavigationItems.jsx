import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import { useSelector } from 'react-redux';
import { authToken } from '../../../reducers/auth/authReducers';

const NavigationItems = () => {
   const token = useSelector(authToken)

   return <ul className="NavigationItems">
        <NavigationItem link="/">Home</NavigationItem>
        <NavigationItem link="/shop">Shop</NavigationItem>
        { !token && <NavigationItem link="/auth/login">Login</NavigationItem>}
         <NavigationItem link="/product/add">Add Product</NavigationItem>
    </ul>
};

export default NavigationItems;