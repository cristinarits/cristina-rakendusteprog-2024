import React, { useEffect, useState } from "react";
import { Box, Button, List, ListItem, TextField, Typography, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, createTheme, ThemeProvider } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const theme = createTheme({
  palette: {
    primary: {
      main: '#C3E6CB',
    },
    secondary: {
      main: '#F9C2A3',
    },
  },
});

type Todo = {
  id: number;
  title: string;
  priority: number;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [editTodo, setEditTodo] = useState<Todo | null>(null);
  const [open, setOpen] = useState(false);

  const fetchTodos = async () => {
    const response = await fetch("http://localhost:8080/todo");
    const data = await response.json();
    setTodos(data);
  };

  const handleAddTodo = async () => {
    if (!todoTitle.trim()) {
      alert('Todo title cannot be empty!');
      return;
    }

    await fetch("http://localhost:8080/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: todoTitle, priority: 1 }),
    });
    setTodoTitle("");
    fetchTodos();
  };

  const handleDeleteTodo = async (id: number) => {
    await fetch(`http://localhost:8080/todo/${id}`, {
      method: "DELETE",
    });
    fetchTodos();
  };

  const handleEditTodo = async () => {
    if (editTodo) {
      await fetch(`http://localhost:8080/todo/${editTodo.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: editTodo.title }),
      });
      fetchTodos();
      handleClose();
    }
  };

  const handleOpenEdit = (todo: Todo) => {
    setEditTodo(todo);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditTodo(null);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ marginBottom: "40px" }}>
        <Typography variant="h3" sx={{ color: "#0000B", marginBottom: "20px" }}>to do:</Typography>
        <List>
          {todos.map((todo) => (
            <ListItem
              key={todo.id}
              sx={{
                backgroundColor: theme.palette.secondary.main,
                margin: "10px",
                padding: "15px",
                borderRadius: "10px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {todo.title}
              <Box>
                <IconButton onClick={() => handleOpenEdit(todo)}>
                  <EditIcon sx={{ color: theme.palette.primary.main }} />
                </IconButton>
                <IconButton onClick={() => handleDeleteTodo(todo.id)}>
                  <DeleteIcon sx={{ color: "#ff6347" }} />
                </IconButton>
              </Box>
            </ListItem>
          ))}
        </List>

        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '15px', marginBottom: "12px" }}>
          <TextField
            label="todo"
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
            sx={{ width: '300px' }}
          />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            onClick={handleAddTodo}
            sx={{ backgroundColor: theme.palette.primary.main, color: "white" }}
          >
            add todo
          </Button>
        </Box>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>edit todo</DialogTitle>
          <DialogContent>
            <TextField
              fullWidth
              label="Todo Title"
              value={editTodo?.title || ""}
              onChange={(e) => setEditTodo({ ...editTodo!, title: e.target.value })}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              cancel
            </Button>
            <Button onClick={handleEditTodo} sx={{ backgroundColor: theme.palette.primary.main, color: "white" }}>
              save
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </ThemeProvider>
  );
};

export default Todos;