import {NavLink, Outlet, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {toast} from "react-toastify";

const RootLayout = () => {
    const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext)
    const navigate = useNavigate()

    const logoutHandler = () => {
        if (!isAuthenticated) {
            toast.warning('You are not logged in!')
            return
        }
        sessionStorage.setItem('logined', false)
        setIsAuthenticated(false)
        toast('Logged out!')
        navigate('/', {replace: true})
    }

    return (
        <>
            <header className='header'>
                <div className="container">
                    <nav className='nav'>
                        <NavLink className='nav__item' to='/'>Home</NavLink>
                        {isAuthenticated && <>
                            <NavLink className='nav__item' to='todos'>Todos</NavLink>
                            <NavLink className='nav__item' to='about'>About</NavLink>
                            <button onClick={logoutHandler} className='btn btn-secondary'> Log out</button>
                        </>
                        }
                    </nav>
                </div>
            </header>
            <main className='py-4'>
                <div className="container">
                    <Outlet/>
                </div>
            </main>

        </>
    );
};

export default RootLayout;