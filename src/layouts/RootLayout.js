import {NavLink, Outlet} from "react-router-dom";

const RootLayout = () => {
    return (
        <>
            <header className='header'>
                <div className="container">
                    <h1 className='text-center pb-2'>Todos APP</h1>
                    <nav className='nav'>
                        <NavLink className='nav__item' to='/'>Home</NavLink>
                        <NavLink className='nav__item' to='todo-list'>Todos</NavLink>
                        <NavLink className='nav__item' to='about'>About</NavLink>
                    </nav>
                </div>
            </header>
            <main className='py-4'>
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </>
    );
};

export default RootLayout;