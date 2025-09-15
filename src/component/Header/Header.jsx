import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='mt-2 mb-2' >
            <Link className='ml-2 p-2 bg-orange-300 text-black rounded-xl hover:bg-red-500 hover:text-white' to={'/'}>Home</Link>
            <Link  className='ml-2 p-2 bg-orange-300 text-black rounded-xl hover:bg-red-500 hover:text-white' to={'/Dashboard'}>DashBoard</Link>
            <Link className='ml-2 p-2 bg-orange-300 text-black rounded-xl hover:bg-red-500 hover:text-white' to={"/login"}>Login</Link>
            
        </div>
    );
};

export default Header;