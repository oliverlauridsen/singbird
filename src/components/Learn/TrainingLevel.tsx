import React from "react";
import styled from "styled-components";
import pitch from "../../img/pitch.svg";

export default function TrainingLevel() {
	return (
		<StyledTrainingLevel>
			<img src={pitch} alt='' />
			<p>Lesson 3</p>
		</StyledTrainingLevel>
	);
}

const StyledTrainingLevel = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
	width: fit-content;
	min-width: 30%;
	height: fit-content;
	padding: 10px;
	border-radius: 20px;

	img {
		margin-right: 20px;
	}

	p {
		font-weight: 700;
		padding-right: 50px;
	}
`;
