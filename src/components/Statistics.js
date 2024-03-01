const Statistics = ({todos}) => {
    const allCounts = todos.length;
    const activeTodosCounts = todos.filter((todo) => !todo.checked).length
    const checkedTodosCounted = allCounts - activeTodosCounts

    return (
        <div className='stat'>
            <h4>Статистика завдань!</h4>
            <dl className='stat__list'>
                <div className='stat__list-item'>
                    <dd>Всього</dd>
                    <dt>{allCounts}</dt>
                </div>
                <div className='stat__list-item'>
                    <dd>Активні</dd>
                    <dt>{activeTodosCounts}</dt>
                </div>
                <div className='stat__list-item'>
                    <dd>Виконані</dd>
                    <dt>{checkedTodosCounted}</dt>
                </div>
            </dl>
        </div>
    );
};

export default Statistics;