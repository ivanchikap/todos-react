import { Audio } from 'react-loader-spinner'

const Spinner = () => {
    return (
        <Audio
            height="40"
            width="40"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperClass="spinner"
        />
    )
};

export default Spinner;

