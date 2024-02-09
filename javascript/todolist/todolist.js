// * ~~~~~~~~~~~~~~~~~~~~~~~~~ APIs ~~~~~~~~~~~~~~~~~~~~~~~~~
const APIs = (() => {
	const baseUrl = "https://jsonplaceholder.typicode.com";
	const todo = "todos";

	const getTodos = () =>
		fetch([baseUrl, todo].join("/")).then((response) =>
			response.json()
		);
	const getTodo = (id) =>
		fetch([baseUrl, todo, id].join("/")).then((response) =>
			response.json()
		);
	const deleteTodo = (id) =>
		fetch([baseUrl, todo, id].join("/"), {}).then((response) =>
			response.json()
		);
	const addTodo = (newTodo) =>
		fetch([baseUrl, todo].join("/"), {
			method: "POST",
			body: JSON.stringify(newTodo),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		}).then((response) => response.json());

	return {
		getTodos,
		getTodo,
		deleteTodo,
		addTodo,
	};
})();

// * ~~~~~~~~~~~~~~~~~~~~~~~~~ View ~~~~~~~~~~~~~~~~~~~~~~~~~
const View = (() => {
	const tmpString = {
		todolist: ".todolist-container",
		deleteBtn: ".delete-btn",
    inputbox: '.todolist-input'
	};

	const render = (ele, tmp) => {
		ele.innerHTML = tmp;
	};
	const createTmp = (arr) => {
		let tmp = "";
		arr.forEach(({ title, id }) => {
			tmp += `
        <li>
          <span>${id}-${title}</span>
          <button id="${id}" class="delete-btn">X</button>
        </li>
      `;
		});
		return tmp;
	};

	return {
		render,
		createTmp,
		tmpString,
	};
})();

// * ~~~~~~~~~~~~~~~~~~~~~~~~~ Model ~~~~~~~~~~~~~~~~~~~~~~~~~
const Model = ((api, view) => {
	class State {
		#todolist = [];
		#elementUl = document.querySelector(view.tmpString.todolist);

		// constructor(view) {
		//   this.view = view;
		// }

		get todos() {
			return this.#todolist;
		}

		set todos(newList) {
			this.#todolist = [...newList];

			const tmp = view.createTmp(this.#todolist);
			view.render(this.#elementUl, tmp);
		}
	}
  class Todo {
    constructor(title) {
      this.completed = false;
      this.userId = 6;
      this.title = title;
    }
  }

	return {
		...api,
		State,
    Todo
	};
})(APIs, View);

// * ~~~~~~~~~~~~~~~~~~~~~~~~~ Controller ~~~~~~~~~~~~~~~~~~~~~~~~~
const Controller = ((model, view) => {
	const state = new model.State();

  const addTodo = () => {
    const inputBox = document.querySelector(view.tmpString.inputbox);
    inputBox.addEventListener('keyup', async e => {
      if (e.key === 'Enter' && e.target.value.trim() !== '') {
        const createTodo = new model.Todo(e.target.value);
        const todo = await model.addTodo(createTodo);

        state.todos = [todo, ...state.todos];
        e.target.value = '';
      }
    });
  }

	const deleteTodo = () => {
		const elementUl = document.querySelector(view.tmpString.todolist);
		elementUl.addEventListener("click", async (e) => {
			if (e.target.className === "delete-btn") {
				state.todos = state.todos.filter(
					(ele) => +ele.id !== +e.target.id
				);
				await model.deleteTodo(e.target.id);
			}
		});
	};

	const init = async () => {
		state.todos = (await model.getTodos()).reverse();
	};

	const bootstrap = async () => {
		await init();
		deleteTodo();
		addTodo();
	};

	return { bootstrap };
})(Model, View);

Controller.bootstrap();

