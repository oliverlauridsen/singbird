import styled from "styled-components";
import linesBackground from "../../img/linesBackground.svg";
import Player from "./Player";
import trophy from "../../img/trophy.svg";
import { useEffect, useState } from "react";
import PauseScreen from "./PauseScreen";

export default function Level() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		document.addEventListener(
			"keydown",
			(e: any) => e.key === "Escape" && setShow(!show)
		);
	}, [show]);

	const resume = () => {
		setShow(!show);
	};

	return (
		<StyledLevel>
			<img src={linesBackground} alt='' />
			<div className='logo'>singbird</div>
			<div className='score'>
				<img src={trophy} alt='' />
				Your best: 0
			</div>
			<PauseScreen show={show} handleClick={resume} />
			<Player />
		</StyledLevel>
	);
}

const StyledLevel = styled.div`
	background: linear-gradient(
		164.08deg,
		#474c71 15.21%,
		rgba(84, 89, 126, 0.85) 52.53%
	);
	width: 100%;
	height: 100vh;
	overflow: hidden;
	position: relative;
	z-index: 1;

	.logo {
		font-size: 30px;
		font-weight: 700;
		color: white;
		cursor: pointer;
		position: absolute;
		top: 50px;
		left: 50px;
	}
	.score {
		font-size: 20px;
		font-weight: 700;
		color: white;
		position: absolute;
		top: 50px;
		right: 50px;
		display: flex;
		align-items: center;

		img {
			width: 25px;
			height: 25px;
			margin-right: 15px;
		}
	}

	img {
		width: 100%;
		height: 100%;
		background-repeat: no-repeat;
		object-fit: cover;
	}
`;
