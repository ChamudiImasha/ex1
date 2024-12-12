import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import {signOut} from 'firebase/auth';

const Navbar = () => {
    const handleLogout = () => {
        signOut(auth);
    };
    return(
        <nav className=''>
            <div className=''>
                <Link to="/" className=''>Beauty Wishlist</Link>
                <div className=''>
                    <Link className=''>Home</Link>
                    <Link className=''>Wishlist</Link>
                    <button onClick={handleLogout} className=''>{auth.currentUser ? 'Logout' : 'Login'}</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
