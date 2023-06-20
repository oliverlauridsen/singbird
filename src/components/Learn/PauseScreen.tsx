import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import arrowBack from "../../img/arrow-back.svg";

interface Props {
	show: boolean;
	handleClick: () => void;
}

export default function PauseScreen(props: Props) {
	const { show, handleClick } = props;

	return (
		show && (
			<StyledModal>
				<Link className='back-wrapper' to='/'>
					<img src={arrowBack} alt='' />
					<p> Quit? </p>
				</Link>
				<section className='modal-main'>
					<h1>Pause menu</h1>
					<div>
						<button onClick={handleClick}>Resume</button>
						<button>Restart</button>
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

	.back-wrapper {
		display: flex;
		flex-direction: row;
		position: absolute;
		gap: 20px;
		text-decoration: none;
		margin-bottom: 20px;
		align-items: center;
		top: 25px;
		left: 25px;
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
				padding: 20px;
				width: 25%;
				border-radius: 20px;
				border: none;
				background-color: #ffffff;
				color: black;
				font-size: 20px;
				font-weight: 700;
				cursor: pointer;
				transition: 0.2s ease-in-out;

				&:hover {
					background-color: #783da6;
					color: white;
				}
			}
		}
	}
`;
