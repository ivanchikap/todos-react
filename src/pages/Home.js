import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h2>Home page of TODOS App!</h2>
            <p className='my-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi consectetur cumque distinctio ea enim error et ex exercitationem explicabo inventore laborum maxime nesciunt officia quas quia tempora tempore tenetur.</p>
            <Link className='btn btn-primary' to='login'>Login</Link>
            <Link to='todos' className='btn btn-primary mx-2'>Розпочати</Link>
            <Link to='register' className='btn btn-primary mx-2'>Зареєструватися</Link>
        </div>
    );
};

export default Home;