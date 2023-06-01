import React from "react";
import styled from "styled-components";
import { sharedButtonStyles } from "../styles/sharedButtonStyles";

export default function UnlockPremium() {
	return (
		<StyledUnlockPremium>
			<h2>Unlock Premium</h2>
			<p>No ads, personlized exercises and..</p>
			<button>UNLOCK</button>
		</StyledUnlockPremium>
	);
}

const StyledUnlockPremium = styled.div`
	border-radius: 20px;
	background-color: #783da6;
	display: flex;
	flex-direction: column;
	color: white;
	padding: 20px;
	margin-top: 50px;

	h2 {
		margin: 0;
		padding: 0;
	}

	p {
		margin: 10px 0 0 0;
		padding: 0;
	}

	button {
		${sharedButtonStyles}
		width:100%;
	}
`;
