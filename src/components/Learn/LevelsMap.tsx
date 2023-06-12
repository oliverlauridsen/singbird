import { useParams } from "react-router-dom";
import { trainingCardData } from "./ChooseTrainingType";
import PageHeader from "./PageHeader";
import manPlayingGuitar from "../../img/man-playing-guitar.svg";
import styled from "styled-components";
import arrowBack from "../../img/arrow-back.svg";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

export default function LevelsMap(): JSX.Element {
	const { trainingType } = useParams();
	const svgRef = useRef<SVGPathElement>(null);
	const [startingPoint, setStartingPoint] = useState<DOMPoint | null>(null);
	const [points, setPoints] = useState<DOMPoint[] | null>(null);

	const trainingTypeData = trainingCardData.find(
		(cardData) => cardData.slug === trainingType
	);

	useEffect(() => {
		const svgElement = svgRef.current;
		const buttonElement = document.getElementById("myButton");

		if (svgElement) {
			const startPoint = svgElement.getPointAtLength(0);
			setStartingPoint(startPoint);
			const totalLength = svgElement.getTotalLength();
			const halfWay = svgElement.getPointAtLength(totalLength / 2);

			// Create an array and store 10 points along the path at equal intervals by dividing the total length by 10 and getting the point at each interval along the path
			const points = Array.from({ length: 10 }, (_, i) =>
				svgElement.getPointAtLength((i + 1) * (totalLength / 10))
			);

			setPoints(points);
		}
	}, []);

	return (
		<MainContent>
			<Link className='back-wrapper' to='/'>
				<img src={arrowBack} alt='' />
				<p> Back </p>
			</Link>
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
					viewBox='0 0 498 784'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						ref={svgRef}
						d='M239.628 8.39941H92.956C46.0361 8.39941 8 46.4355 8 93.3555V93.3555C8 140.275 46.0361 178.312 92.9561 178.312H389.848C445.076 178.312 489.848 223.15 489.848 278.378V278.378C489.848 333.607 445.076 378.445 389.848 378.445H104.373C51.1477 378.445 8 421.593 8 474.818V474.818C8 528.044 51.1477 571.191 104.373 571.191H389.848C445.076 571.191 489.848 615.963 489.848 671.191V676.382C489.848 731.611 445.076 776.382 389.848 776.382H17.9271'
						stroke='#EBE4FE'
						strokeWidth='15'
					/>
					<foreignObject
						width='40'
						height='40'
						x={startingPoint?.x}
						y={startingPoint?.y}>
						<button style={{ width: "100%", height: "100%" }}>Click me</button>
					</foreignObject>

					<foreignObject
						width='40'
						height='40'
						x={points?.[0].x}
						y={points?.[0].y}>
						<button style={{ width: "100%", height: "100%" }}>Click me</button>
					</foreignObject>
					<foreignObject
						width='40'
						height='40'
						x={points?.[1].x}
						y={points?.[1].y}>
						<button style={{ width: "100%", height: "100%" }}>Click me</button>
					</foreignObject>
					<foreignObject
						width='40'
						height='40'
						x={points?.[2].x}
						y={points?.[2].y}>
						<button style={{ width: "100%", height: "100%" }}>Click me</button>
					</foreignObject>
					<foreignObject
						width='40'
						height='40'
						x={points?.[3].x}
						y={points?.[3].y}>
						<button style={{ width: "100%", height: "100%" }}>Click me</button>
					</foreignObject>
					<foreignObject
						width='40'
						height='40'
						x={points?.[4].x}
						y={points?.[4].y}>
						<button style={{ width: "100%", height: "100%" }}>Click me</button>
					</foreignObject>
					<foreignObject
						width='40'
						height='40'
						x={points?.[5].x}
						y={points?.[5].y}>
						<button style={{ width: "100%", height: "100%" }}>Click me</button>
					</foreignObject>
				</svg>
			</div>
		</MainContent>
	);
}

const MainContent = styled.section`
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

		img {
			margin: auto;
		}
	}
`;
