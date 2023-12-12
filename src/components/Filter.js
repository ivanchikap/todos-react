import { useState, useEffect } from "react";

const Filter = ({ todos, onFilterChange }) => {
    const [selectedOption, setSelectedOption] = useState("all");
    const [filterText, setFilterText] = useState("");

    const options = [
        { value: "all", text: "Всі" },
        { value: "done", text: "Виконані" },
        { value: "active", text: "Активні" }
    ];

    useEffect(() => {
        filterTodos(selectedOption, filterText);
    }, [selectedOption, filterText, todos]);

    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedOption(selectedValue);
    };

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setFilterText(inputValue);
    };

    const filterTodos = (selectedValue, inputValue) => {
        let filtered = [...todos];

        if (selectedValue !== "all") {
            filtered = filtered.filter((todo) =>
                selectedValue === "done" ? todo.checked : !todo.checked
            );
        }

        if (inputValue.trim() !== "") {
            filtered = filtered.filter((todo) =>
                todo.title?.toLowerCase().includes(inputValue.toLowerCase())
            );
        }

        // Передача відфільтрованих todos до батьківського компонента
        onFilterChange(filtered);
    };

    return (
        <div className="filter mb-4">
            <h2>Фільтер завдань</h2>
            <select
                className="form-select"
                aria-label="select todos"
                name="select"
                value={selectedOption}
                onChange={handleSelectChange}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.text}
                    </option>
                ))}
            </select>
            <label className="input-group my-3">
                <div className="input-group-prepend">
          <span className="input-group-text" id="todo title">
            type title to filter
          </span>
                </div>
                <input
                    type="text"
                    className="form-control"
                    placeholder="todo title"
                    aria-label="todo title"
                    aria-describedby="todo title"
                    value={filterText}
                    onChange={handleInputChange}
                />
            </label>
        </div>
    );
};

export default Filter;