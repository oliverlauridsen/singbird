import React from "react";
import styled from "styled-components";
export default function Player() {
	return (
		<StyledPlayer>
			<div className='controls-wrapper'>
				<div className='progress-bar'>
					<div className='progress-knob'></div>
				</div>
			</div>
		</StyledPlayer>
	);
}

const StyledPlayer = styled.div`
	width: 100%;
	background-color: #ffffff;
	z-index: 2;
	height: 50px;
	position: absolute;
	bottom: 0;
	display: flex;

	.controls-wrapper {
		background-color: #f3f3f3;
		width: 90%;
		margin: auto;
		height: 15px;
		border-radius: 10px;
		display: flex;

		.progress-bar {
			background-color: #6f7395;
			width: 20%;
			border-radius: 10px;
			display: flex;
			justify-content: flex-end;

			.progress-knob {
				background-color: #6f7395;
				height: 25px;
				width: 25px;
				border-radius: 50%;
				margin-top: -5px;
			}
		}
	}
`;
