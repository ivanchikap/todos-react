import {useDispatch, useSelector} from "react-redux";
import {increment, decrement, incrementByAmount} from "../redux/counterSlice";
import {counterSelector} from "../redux/counterSelector";

const AboutPage = () => {
    const dispatch = useDispatch()
    const counterValue = useSelector(counterSelector)


    const incrementHandler = () => {
        dispatch(increment())
    }
    const decrementHandler = () => {
        dispatch(decrement())
    }
    const incrementByAmountHandler = (amount) => {
        dispatch(incrementByAmount(amount))
    }

    return (
        <div>
            <h2>About pgae!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi aut commodi debitis deleniti
                doloremque dolores dolorum esse maxime non nulla, obcaecati officia pariatur perferendis quaerat quod
                saepe vel vero!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi aut commodi debitis deleniti
                doloremque dolores dolorum esse maxime non nulla, obcaecati officia pariatur perferendis quaerat quod
                saepe vel vero!</p>
            <div className='my-4'>
                <p>counter: {counterValue}</p>
                <button onClick={incrementHandler} className='btn btn-primary'>increment</button>
                <button onClick={decrementHandler} className='btn btn-primary'>decrement</button>
                <button onClick={() => incrementByAmountHandler(5)} className='btn btn-primary'>incrementByAmount</button>
            </div>
        </div>
    );
};

export default AboutPage;