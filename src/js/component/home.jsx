import React, { useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";

const Home = () => {
	const [test, setTest] = useState("");
	const [newtask, setNewtask] = useState("");
	const [todos, setTodos] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setTodos([...todos, { label: newtask, done: false }]);
		setNewtask("");
	};

	const handleChange = (e) => setNewtask(e.target.value);

	const handleDelete = (i) => {
		let aux = todos;
		aux = aux.filter((el, index) => i !== index);
		setTodos(aux);
	};

	return (
		<div className="card">

			
			<form onSubmit={handleSubmit}>
				<input type="text" value={newtask} onChange={handleChange} />
				<button type="submit">Add Task</button>

				<ul className="list-group list-group-flush" id="ulClass">
					{todos.length >= 1 ? todos.map((el, i) => (
						<li className="list-group-item" id="liId" key={i}>
							{el.label}
							<span onClick={() => handleDelete(i)}> <button className="btn btn-secondary">x</button></span>
						</li>
					)) : null}
				</ul>
			</form>
		</div>
	);
};

export default Home;