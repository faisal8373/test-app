import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./AddUserStyle.css";

function AddUser() {
  return (
    <div>
      <form className="form">
        <Typography>Fill the Form for Sign Up</Typography>
        <TextField
          className="text-field"
          label="Name"
          name="name"
          margin="normal"
          type="text"
          variant="outlined"
          required
          fullWidth 
        />
        <TextField
          className="text-field"
          label="Email"
          margin="normal"
          type="email"
          variant="outlined"
          required
          fullWidth
        />
        <TextField
          className="text-field"
          label="Mobile"
          margin="normal"
          type="text"
          variant="outlined"
          required
          fullWidth
        />
        <TextField
          className="text-field"
          label="Age"
          margin="normal"
          type="number"
          min="18"
          max="60"
          variant="outlined"
          required
          fullWidth
        />
        <br />
        <Button type="submit" variant="contained" fullWidth >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default AddUser;
