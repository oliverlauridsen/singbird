import React from "react";
import styled from "styled-components";
import TrainingCard from "./TrainingCard";
import pitch from "../../img/pitch.svg";
import interval from "../../img/interval.svg";
import rangeExtension from "../../img/range-extension.svg";
import scales from "../../img/scales.svg";
import song from "../../img/song.svg";
import breathSupport from "../../img/breath-support.svg";
import { Link } from "react-router-dom";

export const trainingCardData = [
	{
		title: "Pitch",
		description:
			"Practicing pitch is the key to unlocking a powerful and persuasive voice.",
		icon: pitch,
		slug: "pitch",
		id: 0,
		color: "#6B6FDB",
	},
	{
		title: "Interval",
		description:
			"Intervals hones the musical ear, unveiling melodic connections and fostering fluency.",
		icon: interval,
		slug: "interval",
		id: 1,
		color: "#3D4073",
	},
	{
		title: "Range Extension",
		description:
			"Range extension practice expands vocal horizons, unlocking expressive power.",
		icon: rangeExtension,
		slug: "range-extension",
		id: 2,
		color: "#A964DF",
	},
	{
		title: "Scales",
		description:
			"Scale practice fuels musical fluency, unlocking boundless melodic potential.",
		icon: scales,
		slug: "scales",
		id: 3,
		color: "#F21D92",
	},
	{
		title: "Song",
		description:
			"Practicing songs brings melodies to life with personal resonance.",
		icon: song,
		slug: "song",
		id: 4,
		color: "#F291B5",
	},
	{
		title: "Breath Support",
		description:
			"Practising breath support unleashes vocal prowess and voice control.",
		icon: breathSupport,
		slug: "breath-support",
		id: 5,
		color: "#A61F82",
	},
];
export default function ChooseTrainingType() {
	return (
		<MainContent>
			<h2>Choose training type</h2>
			<div className='training-types-wrapper'>
				{trainingCardData.map((cardData) => (
					<Link to={`/training-type/${cardData.slug}`} key={cardData.id}>
						<TrainingCard
							slug={cardData.slug}
							title={cardData.title}
							description={cardData.description}
							icon={cardData.icon}
						/>
					</Link>
				))}
			</div>
		</MainContent>
	);
}

const MainContent = styled.section`
	display: flex;
	flex-direction: column;
	margin-top: 50px;
	justify-content: space-between;

	h2 {
		margin-top: 0;
	}

	.training-types-wrapper {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
		grid-auto-rows: 1fr;

		a {
			color: #000;
			text-decoration: none;
		}
	}
`;
