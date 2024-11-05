const Todos = require("../models/todo");

exports.createTodo = async (req, res) => {
  try {
    const {
      title,
      due_date,
      activity,
      assigned_by,
      assigned_to,
      status,
      priority,
      description,
      reminder,
    } = req.body;

    const newTodo = new Todos({
      title,
      due_date: new Date(due_date),
      activity,
      assigned_by,
      assigned_to,
      status,
      priority,
      description,
      reminder: reminder ? new Date(reminder) : null 
    });

    await newTodo.save();
    res
      .status(201)
      .json({ message: "Todo created successfully", todo: newTodo });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating todo", error: error.message });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedTodo = await Todos.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res
      .status(200)
      .json({ message: "Todo updated successfully", todo: updatedTodo });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating todo", error: error.message });
  }
};

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todos.find().populate("assigned_by assigned_to");
    res.status(200).json(todos);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving todos", error: error.message });
  }
};

exports.getTodosByUserId = async (req, res) => {
  try {
    const { userId } = req.query;

    const todos = await Todos.find({ assigned_to: userId }).populate(
      "assigned_by assigned_to"
    );

    if (!todos || todos.length === 0) {
      return res.status(404).json({ message: "No todos found for this user" });
    }

    res.status(200).json(todos);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving todos", error: error.message });
  }
};

exports.getTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todos.findById(id).populate("assigned_by assigned_to");

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json(todo);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving todo", error: error.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTodo = await Todos.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res
      .status(200)
      .json({ message: "Todo deleted successfully", todo: deletedTodo });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting todo", error: error.message });
  }
};
