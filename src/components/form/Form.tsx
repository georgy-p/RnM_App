"use client";

import {
  Button,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import "./styles.css";
import React, { FC, FormEvent, useState } from "react";
import { useStore } from "store/StoreProvider";
import { observer } from "mobx-react-lite";

const Form: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isNewest, setIsNewest] = useState<boolean>(false);
  const store = useStore();

  const handleSelect = () => setIsNewest(!isNewest);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const normalizedValue = inputValue.trim();
    store.setSearchValue(normalizedValue);
    store.setSubmitted(true);
    store.setNewest(isNewest);
    setInputValue("");
    setIsNewest(true);
  };

  const handleChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <div className={"form_container"}>
      <Typography variant='h4'>Find episodes</Typography>
      <form className={"form"} onSubmit={handleSubmit}>
        <TextField
          className={"input"}
          value={inputValue}
          inputRef={(input) => input && input.focus()}
          placeholder='Enter the name of the episode'
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(event.target.value)
          }
        />
        <FormGroup className={"group"}>
          <InputLabel id='filter'>Filtered by</InputLabel>
          <Select value={isNewest ? 1 : 2} onChange={handleSelect}>
            <MenuItem value={1}>newest</MenuItem>
            <MenuItem value={2}>oldest</MenuItem>
          </Select>
        </FormGroup>
        <Button type='submit' variant='contained' sx={{ height: "56px" }}>
          Search
        </Button>
      </form>
    </div>
  );
};

const FormObserve = observer(Form);
export default FormObserve;
