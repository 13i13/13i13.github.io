import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import LockIcon from "@mui/icons-material/Lock";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import Paper from "@mui/material/Paper";
import ReactFlagsSelect from "react-flags-select";
import MultipleSelect from "./MultipleSelect";
import {
  Typography,
  FormControl,
  TextField,
  InputAdornment,
  OutlinedInput,
  FormHelperText,
  InputLabel,
  Button,
} from "@mui/material";
import { Gradient } from "@mui/icons-material";

function App() {
  const [select, setSelect] = useState("SE");
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const onSelect = (code) => setSelect(code);

  return (
    <div className="App">
      <div className="App-header">
        <div className="searchbar">
          <div className="searchInput justify-center flex lg:justify-between gap-4 lg:inline-block">
            <Typography
              className="hidden sm:inline-block"
              sx={{
                fontFamily: "Customfont",
                color: "white",
                fontSize: "24px",
              }}
            >
              Search stories
            </Typography>
            <Paper
              component="form"
              sx={{
                p: "0px 4px",
                display: "flex",
                alignItems: "center",
                borderRadius: "16px",
                boxShadow: "0px 0px 4px 1px rgb(255 81 163)",
                width: {
                  xs: "100%", // on extra small screens, width is set to 100%
                  sm: 300,
                },
                height: 40,
              }}
            >
              <IconButton
                type="button"
                sx={{
                  p: "10px",
                }}
                aria-label="search"
              >
                <SearchIcon sx={{ fill: "#ff2876" }} />
              </IconButton>
              <InputBase
                sx={{
                  ml: 1,
                  flex: 1,
                  color: "#ff2876",
                  fontFamily: "CustomFont",
                }}
                placeholder="Keyword"
                inputProps={{ "aria-label": "Keyword" }}
              />
              <Divider
                sx={{ height: 20, width: 2, m: 0.5, background: "#ff2876" }}
                orientation="vertical"
              />
              <MultipleSelect />
            </Paper>
          </div>
          <ReactFlagsSelect
            selected={select}
            onSelect={onSelect}
            countries={["fi", "GB", "IE", "IT", "NL", "SE"]}
            showSelectedLabel={false}
            showOptionLabel={false}
            selectedSize={20}
            optionsSize={20}
            fullWidth={true}
            className="flag-select hidden sm:inline-block"
          />
        </div>
        <div className="buttons hidden lg:flex">
          <button class="btn-hover round nocolor">Log in</button>
          <button class="btn-hover round color">Sign Up</button>
          <button class="btn-hover round color">Download</button>
        </div>
        <div className="navbar-button flex-1 text-end lg:hidden">
          <IconButton
            type="button"
            sx={{
              p: "10px",
              backgroundColor: "white",
              boxShadow: "0px 0px 6px 0px rgb(255 105 238 / 75%)",
              zIndex: 50,
              "&:hover": {
                backgroundColor: "#e1e1e1",
              },
            }}
            aria-label="search"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <DensityMediumIcon sx={{ fill: "#ff2876" }} />
          </IconButton>
        </div>
      </div>
      <div
        className={`fixed top-0 z-40 w-full bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-4  origin-top duration-700 ${
          !toggleMenu ? "h-0" : "h-full"
        }`}
      >
        <div className="App-mobile-header">
          <img src={logo} className="App-mobile-logo" alt="logo" />
          <p className="logo-text">Welcome to the world of free speech</p>
        </div>
        <div className="px-8">
          <div className="flex flex-col gap-4 font-bold tracking-wider font-[CustomFont] justify-center items-center">
            <a href="#" className="text-[24px] text-[#e92c71]">
              Login to 13i13
            </a>
            <div className="block max-w-[400px]">
              <FormControl sx={{ m: 1 }} variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">
                  Username
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={"text"}
                  startAdornment={
                    <InputAdornment position="start">
                      <PersonIcon sx={{ color: "#e92c71" }} />
                    </InputAdornment>
                  }
                  sx={{ borderRadius: 0 }}
                  label="Username"
                />
              </FormControl>
              <FormControl sx={{ m: 1 }} variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  startAdornment={
                    <InputAdornment position="start">
                      <LockIcon sx={{ color: "#e92c71" }} />
                    </InputAdornment>
                  }
                  sx={{ borderRadius: 0 }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <Button
                className="btn-hover"
                sx={{
                  m: 1,
                  paddingY: 2,
                  borderRadius: 0,
                  color: "white",
                  backgroundImage:
                    "linear-gradient(to right, #ff5b6a, #690493, #d32485, #f15158)",
                  transition: "all 0.4s ease-in-out",
                }}
                // variant="outlined"
                fullWidth
              >
                Login
              </Button>
              <div
                style={{
                  width: "100%",
                  textAlign: "left",
                  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                  fontSize: "12px",
                  fontWeight: "normal",
                  marginInline: "8px",
                  float: "left",
                  padding: "4px",
                  color: "#e92c71",
                }}
              >
                Forgot your password?
              </div>
              <Divider
                sx={{
                  marginInline: "8px",
                  width: "100%",
                  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                  fontSize: "12px",
                  fontWeight: "normal",
                }}
              >
                or
              </Divider>
              <Button
                className="btn-hover"
                sx={{
                  m: 1,
                  paddingY: 1.5,
                  color: "#797979",
                  borderImage:
                    "linear-gradient(to right, #f15158, #d32485, #690493)",
                  borderImageSlice: 1,
                  borderStyle: "solid",
                  borderWidth: 3,
                  background: "transparent",
                  transition: "all 0.4s ease-in-out",
                }}
                // variant="outlined"
                fullWidth
              >
                Create an Account
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="App-body">
        <img src={logo} className="App-logo" alt="logo" />

        <p className="logo-text">
          Everyone has a story to tell<br></br>
          Let your voice to heard
        </p>
        <button class="btn-hover normal color">Tell Your Story</button>
      </div>
      <div className="App-footer text-[10px] sm:text-[16px]">
        <p className="App-link">Terms of Services</p>
        <p className="App-link">Privacy policy</p>
        <p className="App-link">About 13i13</p>
        <p className="App-link">© 2023 13i13</p>
      </div>
    </div>
  );
}

export default App;
