import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import close from "../../img/close.svg";
import play from "../../img/play.svg";
import restart from "../../img/restart.svg";
interface Props {
	show: boolean;
	handleClick: () => void;
}

export default function PauseScreen(props: Props) {
	const { show, handleClick } = props;

	return (
		show && (
			<StyledModal>
				<div className='logo'>singbird</div>
				<section className='modal-main'>
					<h1>Pause menu</h1>
					<div>
						<button onClick={handleClick}>
							<img src={play} alt='' />
							Play
						</button>
						<button>
							<img src={restart} alt='' />
							Restart
						</button>
						<Link className='back-wrapper' to='/'>
							<button>
								<img src={close} alt='' />
								Quit
							</button>
						</Link>
					</div>
				</section>
			</StyledModal>
		)
	);
}

const StyledModal = styled.div`
	position: absolute;
	background: rgba(0, 0, 0, 0.5);
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	margin: auto;
	backdrop-filter: blur(8px);
	z-index: 3;
	display: flex;
	transition: 0.5s;

	.back-wrapper {
		display: flex;
		flex-direction: row;
		gap: 20px;
		text-decoration: none;
		margin-bottom: 20px;
		align-items: center;
		z-index: 5;

		img {
			width: auto;
			height: 20px;
			filter: brightness(100);
		}

		p {
			color: white;
			font-weight: 600;
			font-size: 20px;
		}
	}

	.modal-main {
		margin: auto;
		width: 50%;
		height: 50%;

		h1 {
			color: white;
			font-size: 40px;
			text-align: center;
			font-weight: 800;
		}

		div {
			display: flex;
			flex-direction: column;
			justify-content: center;

			button {
				margin: 10px auto;
				padding: 10px;
				width: 20%;
				border-radius: 20px;
				border: none;
				background-color: transparent;
				border: 2px solid white;
				color: white;
				font-size: 20px;
				font-weight: 700;
				cursor: pointer;
				transition: 0.2s ease-in-out;
				display: flex;
				align-items: center;

				&:hover {
					color: white;
					filter: brightness(0.7);
				}

				img {
					filter: brightness(0) invert(1);
					transition: 0.2s ease-in-out;
					width: auto;
					height: 25px;
					margin-right: 20px;
				}
			}
		}
	}
`;
