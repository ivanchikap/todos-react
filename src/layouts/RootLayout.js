import {NavLink, Outlet, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {setIsAuthenticated} from "../redux/login/loginSlice";

const RootLayout = () => {
    // const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext)
    const isAuthenticated = useSelector((state) => state.login.isAuthenticated)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutHandler = () => {
        if (!isAuthenticated) {
            toast.warning('You are not logged in!')
            return
        }
        sessionStorage.setItem('logined', false)
        dispatch(setIsAuthenticated(false))

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