const Todos = require("../models/todo");

exports.createTodo = async (req, res) => {
  try {
    const {
      title,
      due_date,
      end_date,
      activity,
      assigned_by,
      assigned_to,
      status,
      priority,
      description,
      reminder,
    } = req.body;
    console.log(req.body)
    const newTodo = new Todos({
      title,
      due_date: new Date(due_date),
      end_date,
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
      .json({success:true, message: "Todo created successfully", todo: newTodo });
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({success:false, message: "Error creating todo", error: error.message });
  }
};

exports.updateTodo = async (req, res) => {
  try {
 
    const {id,updates} = req.body;

    const todo = await Todos.findById(id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    if (updates.title) todo.title = updates.title;
    if (updates.due_date) todo.due_date = updates.due_date;
    if (updates.end_date) todo.end_date = updates.end_date;
    if (updates.activity && ['Call', 'Task'].includes(updates.activity)) {
      todo.activity = updates.activity;
    }
    if (updates.status && ['Open', 'Rescheduled', 'Cancelled', 'Completed'].includes(updates.status)) {
      todo.status = updates.status;
    }
    if (updates.priority) todo.priority = updates.priority;
    if (updates.description) todo.description = updates.description;
    if (updates.reminder) todo.reminder = updates.reminder;
    if (updates.assigned_to && Array.isArray(updates.assigned_to))  todo.assigned_to = updates.assigned_to;
    

    // Save the updated Todo
    const updatedTodo = await todo.save();

    res.status(200).json({
      success:true,
      message: "Todo updated successfully",
      todo: updatedTodo,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating todo", error: error.message });
  }
};


exports.getAllTodos = async (req, res) => {
  try {
    let { filters = {}, page = 1, limit = 10, title } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);

    filters = typeof filters === 'string' ? JSON.parse(filters) : filters;
    console.log(filters);

    if (title) {
      filters.title = { $regex: title, $options: "i" };
    }

    const skip = (page - 1) * limit;

    const todos = await Todos.find(filters)
      .populate("assigned_by assigned_to")
      .sort({createdAt:-1})
      .skip(skip)
      .limit(limit);

    const total = await Todos.countDocuments(filters);

    res.status(200).json({
      success: true,
      total,
      totalPages: Math.ceil(total / limit),
      data: todos,
    });
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
    const { id } = req.query;

    const todo = await Todos.findById(id).populate("assigned_by assigned_to");

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json({success:true,data:todo});
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving todo", error: error.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.body;

    const deletedTodo = await Todos.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res
      .status(200)
      .json({success:true, message: "Todo deleted successfully", todo: deletedTodo });
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ message: "Error deleting todo", error: error.message });
  }
};
