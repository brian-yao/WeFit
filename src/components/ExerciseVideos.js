import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {
	if (!exerciseVideos.length) return <Loader />;

	return (
		<Box sx={{ marginTop: { lg: "203px", xs: "20px" } }} p="20px">
			<Typography
				sx={{ fontSize: { lg: "44px", xs: "25px" } }}
				fontWeight={700}
				color="#000"
				mb="33px"
			>
				Watch <span style={{ color: "#40E0D0", textTransform: "capitalize" }}>{name}</span> exercise
				videos
			</Typography>
			<Stack
				sx={{ flexDirection: "row" }}
				justifyContent="center"
				flexWrap="wrap"
				alignItems="center"
			>
				{exerciseVideos?.slice(0, 3)?.map((item, index) => (
					<Box key={index} m={2} sx={[{ border: 3 }, { borderColor: "#40E0D0", borderRadius: 5 }]}>
						<a
							className="exercise-video"
							href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
							target="_blank"
							rel="noreferrer"
						>
							<img
								style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}
								src={item.video.thumbnails[0].url}
								alt={item.video.title}
							/>
							<Box textAlign="center">
								<Typography
									sx={{ fontSize: { lg: "28px", xs: "18px" } }}
									fontWeight={600}
									color="#000"
								>
									{item.video.title}
								</Typography>
								<Typography fontSize="14px" color="#000">
									{item.video.channelName}
								</Typography>
							</Box>
						</a>
					</Box>
				))}
			</Stack>
		</Box>
	);
};

export default ExerciseVideos;
