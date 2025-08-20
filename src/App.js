import logo from "./logo.svg";
import "./App.css";
import AccordionUsage from "./Accordian";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#c21a1aff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

function App() {
  return (
    <>
      <div className="App">
        <AccordionUsage />
      </div>
    </>
  );
}

export default App;
