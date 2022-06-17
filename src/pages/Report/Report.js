import React, { useState } from "react";
import { url } from "../../services/api";
import { Button, TextField } from "@mui/material";
import axios from "axios";

const Report = () => {
  const [reportInput, setReportInput] = useState({ animal_name: "", img: "" });
  const { animal_name, img } = reportInput;
  console.log(animal_name);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const getAnimal = (name) => {
    axios.get(url, { params: { animal_name: name } });
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    setReportInput({
      ...reportInput,
      [name]: value,
    });
  };

  return (
    <div id="report">
      <form className="form" onSubmit={handleSubmit}>
        <TextField
          label="name of animal"
          id="animal_name"
          name="animal_name"
          placeholder="choco"
          value={animal_name}
          variant="outlined"
          type="text"
          onChange={onChange}
        />
      </form>
      <Button
        className="button"
        type="submit"
        variant="contained"
        disabled={!animal_name}
      >
        submit
      </Button>
    </div>
  );
};

export default Report;
