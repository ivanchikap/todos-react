import {Link, useNavigate} from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='not-found'>
            <h2>Page Not Found</h2>
            <div className='not-found__links'>
                <Link className='btn btn-primary' to='/'>На домашню</Link>
                <button className='btn btn-secondary' onClick={() => navigate(-1)}>Назад</button>
            </div>
        </div>
    );
};

export default NotFound;