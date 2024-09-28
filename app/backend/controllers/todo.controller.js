const todo = [
    {
        "id": 1,
        "title": "do the dishes",
        "priority": 3,
        "createdAt": 1727099325223,
        "updatedAt": null,
        "deleted": false
    }
];

exports.create = (req, res) => {
    const { title, priority } = req.body;

    if (!title || !priority) {
      return res.status(400).send({ message: "Title and priority are required" });
    }

    const newTodo = {
      id: todo.length + 1,
      title,
      priority: parseInt(priority),
      createdAt: Date.now(),
      updatedAt: null,
      deleted: false
    };

    todo.push(newTodo);
    res.send(newTodo);
};

exports.read = (req, res) => {
    const nonDeletedTodos = todo.filter(t => !t.deleted);
    res.send(nonDeletedTodos);
};

exports.readOne = (req, res) => {
    const { id } = req.params;
    const todoItem = todo.find(t => t.id === parseInt(id));

    if (!todoItem) {
      return res.status(404).send({ message: "TODO not found" });
    }

    res.send(todoItem);
};

exports.update = (req, res) => {
    const { id } = req.params;
    const { title, priority } = req.body;

    const todoItem = todo.find(t => t.id === parseInt(id));

    if (!todoItem) {
      return res.status(404).send({ message: "TODO not found" });
    }

    if (title) todoItem.title = title;
    if (priority) todoItem.priority = parseInt(priority);
    todoItem.updatedAt = Date.now();

    res.send(todoItem);
};

exports.delete = (req, res) => {
    const { id } = req.params;

    const todoItem = todo.find(t => t.id === parseInt(id));

    if (!todoItem) {
      return res.status(404).send({ message: "TODO not found" });
    }

    todoItem.deleted = true;
    todoItem.updatedAt = Date.now();
    res.send(todoItem);
};