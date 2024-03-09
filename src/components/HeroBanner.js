import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.jpeg";

const HeroBanner = () => (
	<Box sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }} position="relative" p="20px">
		<Typography color="#40E0D0" fontWeight="600" fontSize="26px">
			Welcome to WeFit
		</Typography>
		<Typography
			fontFamily={"Josefin Sans"}
			fontWeight={700}
			sx={{ fontSize: { lg: "44px", xs: "40px" } }}
			mb="23px"
			mt="30px"
		>
			Watch, Learn <br />
			And Exercise
		</Typography>
		<Typography fontSize="16px" fontFamily="sans-serif" lineHeight="35px">
			Search and watch videos of the most effective exercises.
		</Typography>
		<Stack>
			<a
				href="#exercises"
				style={{
					marginTop: "45px",
					textDecoration: "none",
					width: "200px",
					textAlign: "center",
					background: "#40E0D0",
					padding: "14px",
					fontSize: "22px",
					textTransform: "none",
					color: "white",
					borderRadius: "4px",
				}}
			>
				Explore Exercises
			</a>
		</Stack>
		<Typography
			fontWeight={600}
			color="#43daca"
			sx={{ opacity: "0.1", display: { lg: "block", xs: "none" }, fontSize: "200px" }}
		>
			Exercise
		</Typography>
		<Box sx={{position: 'absolute', top: '2rem', right: '3rem'}} >
			<img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" style={{borderRadius: '0 0 5% 20%'}} />
		</Box>
	</Box>
);

export default HeroBanner;
