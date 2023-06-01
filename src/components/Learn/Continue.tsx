import React from "react";
import styled from "styled-components";
import TrainingCard from "./TrainingCard";
import arrowRight from "../../img/arrow-right.svg";
import TrainingLevel from "./TrainingLevel";
import { secondarySharedButtonStyles } from "../../styles/sharedButtonStyles";

export default function Continue() {
	return (
		<StyledContinue>
			<h2>Continue where you left off?</h2>
			<div className='content-wrapper'>
				<TrainingCard />
				<img className='arrow-right' src={arrowRight} alt='' />
				<TrainingLevel />
				<button>GO</button>
			</div>
		</StyledContinue>
	);
}

const StyledContinue = styled.div`
	border-radius: 20px;
	background-color: white;
	padding: 40px;
	margin-top: 50px;
	display: flex;
	flex-direction: column;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);

	h2 {
		margin-top: 0;
	}

	.content-wrapper {
		display: flex;
		flex-direction: row;
		width: 100%;

		.arrow-right {
			margin: 0 50px;
		}
	}

	button {
		${secondarySharedButtonStyles};
	}
`;
