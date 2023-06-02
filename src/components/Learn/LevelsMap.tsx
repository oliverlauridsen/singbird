import { useParams } from "react-router-dom";
import { trainingCardData } from "./ChooseTrainingType";
import PageHeader from "./PageHeader";
import manPlayingGuitar from "../../img/man-playing-guitar.svg";
import styled from "styled-components";
import arrowBack from "../../img/arrow-back.svg";
import { Link } from "react-router-dom";
export default function LevelsMap() {
	const { trainingType } = useParams();

	const trainingTypeData = trainingCardData.find(
		(cardData) => cardData.slug === trainingType
	);

	console.log(trainingTypeData);

	return (
		<MainContent>
			<Link className='back-wrapper' to='/'>
				<img src={arrowBack} alt='' />
				<p>Back</p>
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
`;
