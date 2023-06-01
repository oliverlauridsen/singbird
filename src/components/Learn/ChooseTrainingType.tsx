import React from "react";
import styled from "styled-components";
import TrainingCard from "./TrainingCard";
import pitch from "../../img/pitch.svg";
import interval from "../../img/interval.svg";
import rangeExtension from "../../img/range-extension.svg";
import scales from "../../img/scales.svg";
import song from "../../img/song.svg";
import breathSupport from "../../img/breath-support.svg";

export default function ChooseTrainingType() {
	const trainingCardData = [
		{
			title: "Pitch",
			description: "Lorem ipsum dolores antes.. ipsum dolores antes lorem..",
			icon: pitch,
		},
		{
			title: "Interval",
			description: "Lorem ipsum dolores antes.. ipsum dolores antes lorem..",
			icon: interval,
		},
		{
			title: "Range Extension",
			description: "Lorem ipsum dolores antes.. ipsum dolores antes lorem..",
			icon: rangeExtension,
		},
		{
			title: "Scales",
			description: "Lorem ipsum dolores antes.. ipsum dolores antes lorem..",
			icon: scales,
		},
		{
			title: "Song",
			description: "Lorem ipsum dolores antes.. ipsum dolores antes lorem..",
			icon: song,
		},
		{
			title: "Breath Support",
			description: "Lorem ipsum dolores antes.. ipsum dolores antes lorem..",
			icon: breathSupport,
		},
	];
	return (
		<MainContent>
			<h2>Choose training type</h2>
			<div className='training-types-wrapper'>
				{trainingCardData.map((cardData, index) => (
					<TrainingCard
						key={index}
						title={cardData.title}
						description={cardData.description}
						icon={cardData.icon}
					/>
				))}
			</div>
		</MainContent>
	);
}

const MainContent = styled.section`
	display: flex;
	flex-direction: column;
	margin-top: 50px;

	h2 {
		margin-top: 0;
	}

	.training-types-wrapper {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
		grid-auto-rows: 1fr;
	}
`;
