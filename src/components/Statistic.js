const Statistic = ({todos}) => {
    const allTodosCount = todos.length;
    const doneTodosCount = todos.filter((todo) => todo.checked).length;
    const activeTodosCount = allTodosCount - doneTodosCount;
    return (
        <dl className='statistic'>
            <div className='statistic__item'>
                <dd>Кількість завдань:</dd>
                <dt>{allTodosCount}</dt>
            </div>
            <div className='statistic__item'>
                <dd>Кількість активних:</dd>
                <dt>{activeTodosCount}</dt>
            </div>
            <div className='statistic__item'>
                <dd>Кількість виконаних:</dd>
                <dt>{doneTodosCount}</dt>
            </div>
        </dl>
    );
};

export default Statistic;