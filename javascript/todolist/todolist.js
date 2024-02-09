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

	return {
		getTodos,
		getTodo,
		deleteTodo,
	};
})();

// * ~~~~~~~~~~~~~~~~~~~~~~~~~ View ~~~~~~~~~~~~~~~~~~~~~~~~~
const View = (() => {
	const tmpString = {
		todolist: ".todolist-container",
		deleteBtn: ".delete-btn",
	};

	const render = (ele, tmp) => {
		ele.innerHTML = tmp;
	};
	const createTmp = (arr) => {
		let tmp = "";
		arr.forEach(({ title, id }) => {
			tmp += `
        <li>
          <span>${title}</span>
          <button id="${id}" class="delete-btn" onClick="">X</button>
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

    get todos() {
      return this.#todolist;
    }

    set todos(newList) {
      this.#todolist = [...newList];

      const elementUl = document.querySelector(view.tmpString.todolist);
		  const tmp = view.createTmp(this.#todolist);
		  view.render(elementUl, tmp);
    }
  }

	return {
		...api,
    State
	};
})(APIs, View);

// * ~~~~~~~~~~~~~~~~~~~~~~~~~ Controller ~~~~~~~~~~~~~~~~~~~~~~~~~
const Controller = ((model, view) => {
  const state = new model.State();

	const deleteTodo = () => {
		const elementUl = document.querySelector(view.tmpString.todolist);
		elementUl.addEventListener("click", (e) => {
			if (e.target.className === "delete-btn") {
        state.todos = state.todos.filter(ele => +ele.id !== +e.target.id);
			}
		});
	};

	const init = async () => {
		state.todos = await model.getTodos();
	};

	const bootstrap = async () => {
		await init();
		deleteTodo();
		// addTodo();
	};

	return { bootstrap };
})(Model, View);

Controller.bootstrap();
