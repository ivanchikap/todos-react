import { Bars } from  'react-loader-spinner';
const Spinner = () => {
    return (
        <Bars
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass="spinner"
            visible={true}
        />
    );
};

export default Spinner;