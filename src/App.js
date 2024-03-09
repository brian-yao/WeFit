import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import "./App.css";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const App = () => {
	const [toggleDarkMode, setToggleDarkMode] = useState(false);
	const darkTheme = createTheme({
		palette: {
			mode: toggleDarkMode ? "dark" : "light",
		}
	});

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
				<Navbar toggleDarkMode={toggleDarkMode} setToggleDarkMode={setToggleDarkMode} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/exercise/:id" element={<ExerciseDetail />} />
				</Routes>
			</Box>
		</ThemeProvider>
	);
};

export default App;
