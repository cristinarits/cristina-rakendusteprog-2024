import React, { useEffect, useState } from "react";
import { Box, Button, List, ListItem, TextField, Typography, IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

type Cat = {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const Cats = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [catName, setCatName] = useState("");
  const [editCat, setEditCat] = useState<Cat | null>(null);
  const [open, setOpen] = useState(false);

  const fetchCats = async () => {
    const response = await fetch("http://localhost:8080/cats");
    const data = await response.json();
    setCats(data);
  };

  const handleAddCat = async () => {
    await fetch("http://localhost:8080/cats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: catName }),
    });
    setCatName("");
    fetchCats();
  };

  const handleDeleteCat = async (id: string) => {
    await fetch(`http://localhost:8080/cats/${id}`, {
      method: "DELETE",
    });
    fetchCats();
  };

  const handleEditCat = async () => {
    if (editCat) {
      await fetch(`http://localhost:8080/cats/${editCat.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: editCat.name }),
      });
      fetchCats();
      handleClose();
    }
  };

  const handleOpenEdit = (cat: Cat) => {
    setEditCat(cat);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditCat(null);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <Box 
      sx={{ 
        marginBottom: "40px" 
      }}
    >
      <Typography 
        variant="h3" 
        sx={{ 
          color: "#0000B", 
          marginBottom: "20px" 
        }}
      >
        cats:
      </Typography>
      <List>
        {cats.map((cat) => (
          <ListItem
            key={cat.id}
            sx={{
              backgroundColor: "#ffb6c1",
              margin: "10px",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {cat.name}
            <Box>
              <IconButton onClick={() => handleOpenEdit(cat)}>
                <EditIcon sx={{ color: "#ff69b4" }} />
              </IconButton>
              <IconButton onClick={() => handleDeleteCat(cat.id)}>
                <DeleteIcon sx={{ color: "#ff6347" }} />
              </IconButton>
            </Box>
          </ListItem>
        ))}
      </List>

      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginTop: '15px', 
          marginBottom: "12px" 
        }}
      >
        <TextField
          label="cat name"
          value={catName}
          onChange={(e) => setCatName(e.target.value)}
          sx={{ 
            width: '300px' 
          }}
        />
      </Box>
      
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center' 
        }}
      >
        <Button
          variant="contained"
          onClick={handleAddCat}
          sx={{ 
            backgroundColor: "#ff69b4", 
            color: "white" 
          }}
        >
          add cat
        </Button>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>edit cat</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="cat name"
            value={editCat?.name || ""}
            onChange={(e) => setEditCat({ ...editCat!, name: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={handleClose} 
            color="primary"
          >
            cancel
          </Button>
          <Button 
            onClick={handleEditCat} 
            sx={{ 
              backgroundColor: "#ff69b4", 
              color: "white" 
            }}
          >
            save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Cats;