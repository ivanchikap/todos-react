import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h2>Ласкаво просимо до додатку todo List!</h2>
            <div className='my-3'>
                <h3>В додатку реалізовано:</h3>
                <ul className='list'>
                    <li className='list__item'>Додавання</li>
                    <li className='list__item'>Редагування</li>
                    <li className='list__item'>Видалення</li>
                    <li className='list__item'>Фільтрація та пошук</li>
                </ul>
            </div>
            <Link className='btn btn-primary' to='todo-list'>Розпочати</Link>
        </div>
    );
};

export default Home;