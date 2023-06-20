import { useParams } from "react-router-dom";
import { trainingCardData } from "./ChooseTrainingType";
import PageHeader from "./PageHeader";
import manPlayingGuitar from "../../img/man-playing-guitar.svg";
import styled from "styled-components";
import singleWhiteNote from "../../img/singleWhiteNote.svg";
import whiteLock from "../../img/whiteLock.svg";

import arrowBack from "../../img/arrow-back.svg";

import { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

interface StyledMainContent {
	color: string;
}

export default function LevelsMap(): JSX.Element {
	const { trainingType } = useParams();
	const svgRef = useRef<SVGPathElement>(null);
	const nextLevelToCompleteRef = useRef<SVGForeignObjectElement>(null);
	const [startingPoint, setStartingPoint] = useState<DOMPoint | null>(null);
	const [points, setPoints] = useState<DOMPoint[] | null>(null);

	const trainingTypeData = trainingCardData.find(
		(cardData) => cardData.slug === trainingType
	);

	useEffect(() => {
		const svgElement = svgRef.current;
		if (svgElement) {
			let startingPoint = svgElement.getPointAtLength(0);
			startingPoint.y -= 40;
			startingPoint.x -= 40;

			setStartingPoint(startingPoint);
			const totalLength = svgElement.getTotalLength();

			// Create an array and store 10 points along the path at equal intervals by dividing the total length by 10 and getting the point at each interval along the path
			const points = Array.from({ length: 14 }, (_, i) =>
				svgElement.getPointAtLength((i + 1) * (totalLength / 14))
			);

			let offsetPoints = points.map((point) => {
				return new DOMPoint(point.x - 40, point.y - 40);
			});

			setPoints(offsetPoints);
		}
	}, []);

	const levelsList = points?.map((point, index) => {
		// MAKE LOGIC HERE THAT CHECKS IF THE LEVEL IS UNLOCKED OR NOT
		let unlocked = false;

		return unlocked ? (
			<NavLink
				key={index}
				to={`/training-type/${trainingType}/level-${index + 2}`}>
				<foreignObject
					key={index}
					width='85'
					height='85'
					x={point.x}
					y={point.y}>
					<button style={{ width: "100%", height: "100%" }}>
						{unlocked ? (
							<img src={singleWhiteNote} alt='' />
						) : (
							<img src={whiteLock} alt='' />
						)}
					</button>
				</foreignObject>
			</NavLink>
		) : (
			<foreignObject
				key={index}
				width='85'
				height='85'
				x={point.x}
				y={point.y}
				onClick={() => triggerAnimation()}>
				<button style={{ width: "100%", height: "100%" }}>
					{unlocked ? (
						<img src={singleWhiteNote} alt='' />
					) : (
						<img src={whiteLock} alt='' />
					)}
				</button>
			</foreignObject>
		);
	});

	const triggerAnimation = () => {
		if (nextLevelToCompleteRef.current) {
			nextLevelToCompleteRef.current.classList.add("large");

			// Remove the animation class after the animation is completed
			setTimeout(() => {
				nextLevelToCompleteRef.current?.classList.remove("large");
			}, 500);
		}
	};

	return (
		<MainContent color={trainingTypeData!.color}>
			<NavLink className='back-wrapper' to='/'>
				<img src={arrowBack} alt='' />
				<p> Back </p>
			</NavLink>
			<div className='header-wrapper'>
				<img src={trainingTypeData?.icon} alt='' />
				<PageHeader
					color={trainingTypeData!.color}
					heading={trainingTypeData!.title + " trainer"}
					body={trainingTypeData!.description}
					firstImage={manPlayingGuitar}
				/>
			</div>
			<div className='levels-map-container'>
				<svg
					viewBox='0 0 817 784'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M393.047 8H92.958C46.0369 8 8 46.037 8 92.958V92.958C8 139.879 46.037 177.916 92.958 177.916H709C764.228 177.916 809 222.757 809 277.985V277.985C809 333.214 764.228 378.054 709 378.054H104.375C51.1487 378.054 8 421.203 8 474.429V474.429C8 527.656 51.1487 570.805 104.375 570.805H709C764.228 570.805 809 615.576 809 670.805V676C809 731.228 764.228 776 709 776H24.5024'
						stroke='#EBE4FE'
						strokeWidth='15'
						ref={svgRef}
					/>
					<NavLink key={1} to={`/training-type/${trainingType}/level-${1}`}>
						<foreignObject
							ref={nextLevelToCompleteRef}
							id='starting-point'
							width='85'
							height='85'
							x={startingPoint?.x}
							y={startingPoint?.y}>
							<button style={{ width: "100%", height: "100%" }}>
								<img src={singleWhiteNote} alt='' />
							</button>
						</foreignObject>
					</NavLink>
					{levelsList}
				</svg>
			</div>
		</MainContent>
	);
}

const MainContent = styled.section<StyledMainContent>`
	width: 100%;
	padding: 50px 75px;
	background-color: #f9f4fc;

	.back-wrapper {
		display: flex;
		flex-direction: row;
		gap: 20px;
		text-decoration: none;
		margin-bottom: 20px;

		p {
			color: #432759;
			font-weight: 600;
		}
	}
	.header-wrapper {
		display: flex;
		flex-direction: row;
		gap: 30px;
	}

	.levels-map-container {
		width: 80%;
		margin: 75px auto;
		display: flex;
		justify-content: center;

		svg {
			overflow: visible;
			width: 100%;
			height: auto;
		}

		button {
			background-color: ${(props) => props.color};
			transition: all 0.5s ease;
			border-radius: 50%;
			padding: 17.5px;
			border: 7.5px solid #ebe4fe;
			width: 100px;
			height: 100px;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;

			img {
				width: 100%;
				height: 100%;
			}

			&:hover {
				filter: brightness(95%);

				img {
					filter: brightness(95%);
				}
			}
		}
	}

	.large {
		button {
			background-color: ${(props) => props.color};
			transition: all 0.5s ease;
			border: 0.5px solid ${(props) => props.color};
			padding: 30px;
		}
	}
`;
