import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: "50%",
    maxWidth: "50%",
  },
  selectBox: {
    color: "#ff2876",
    fontFamily: "CustomFont",
    maxHeight: "36px",
    "&::before": {
      borderBottom: "none !important", // Remove the bottom border
    },
    "&::after": {
      borderBottom: "none !important", // Remove the bottom border
    },
    "&:hover::before": {
      borderBottom: "none !important", // Remove the bottom border
    },
    "&:hover::after": {
      borderBottom: "none !important", // Remove the bottom border
    },
  },
  listItem: {
    margin: 0,
    padding: 0,
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 20 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

const names = [
  "Everything",
  "Suicide",
  "War",
  "Politics",
  "Sexual Abuse",
  "Exploitation",
  "Abuse",
  "Depression",
  "Sport",
  "Commercial",
  "Religion",
  "Bullying",
  "Racism",
  "Discrimination",
  "Love",
  "Love sickness",
  "Sexual orientation",
  "Disease",
  "Dead",
  "Positivity",
  "injustice",
  "Other",
];

export default function MultipleSelect() {
  const classes = useStyles();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
      <Select
        variant="standard"
        multiple
        displayEmpty
        value={personName}
        onChange={handleChange}
        input={<Input />}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return (
              <em style={{ fontStyle: "normal", color: "#ff287682" }}>
                Subject
              </em>
            );
          }

          return selected.join(", ");
        }}
        MenuProps={MenuProps}
        className={classes.selectBox}
      >
        <MenuItem disabled value="">
          <em>Subject</em>
        </MenuItem>
        {names.map((name) => (
          <MenuItem
            key={name}
            value={name}
            size="small"
            className={classes.menuItem}
          >
            <ListItemText primary={name} className={classes.listItem} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
