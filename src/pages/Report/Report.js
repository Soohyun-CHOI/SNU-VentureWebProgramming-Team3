import React from "react";
import { url } from "../../services/api";
import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";

const Report = () => {
  const name = "";

  const handleSubmit = () => {};
  const getAnimal = (name) => {
    axios.get(url, { params: { animal_name: name } });
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    setinitState({
      ...initState,
      [name]: value,
    });
  };

  return (
    <div id="report">
      <form className="form" onSubmit={handleSubmit}>
        <TextField
          label="name of animal"
          id="name"
          name="name"
          placeholder="choco"
          value={name}
          variant="outlined"
          type="text"
          onChange
        />
      </form>
    </div>
  );
};

export default Report;
