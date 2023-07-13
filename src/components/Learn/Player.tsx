import styled from "styled-components";

interface StyledPlayerProps {
	show: boolean;
}

export default function Player(props: StyledPlayerProps) {
	const { show } = props;

	return (
		<StyledPlayer show={show}>
			<div className='controls-wrapper'>
				<div className='progress-bar'>
					<div className='progress-knob'></div>
				</div>
			</div>
		</StyledPlayer>
	);
}

const StyledPlayer = styled.div<StyledPlayerProps>`
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
			width: 2%;
			border-radius: 10px;
			display: flex;
			justify-content: flex-end;

			//TODO: Replace 60s with the total length of the exercise
			animation: animatedWidth 60s linear 1 forwards;
			animation-play-state: ${(props) => (props.show ? "paused" : "running")};

			.progress-knob {
				background-color: #6f7395;
				height: 25px;
				width: 25px;
				border-radius: 50%;
				margin-top: -5px;
			}
		}

		@keyframes animatedWidth {
			from {
				width: 2%;
			}

			to {
				width: 100%;
			}
		}
	}
`;
