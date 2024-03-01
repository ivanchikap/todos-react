const Error = ({error}) => {
    return (
        <div>
            <h4>Error occurred!</h4>
            <p>{error.message}</p>
        </div>
    );
};

export default Error;