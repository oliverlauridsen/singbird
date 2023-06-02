import styled from "styled-components";

interface TrainingCardProps {
	title: string;
	description?: string;
	icon: string;
	slug?: string;
}

export default function TrainingCard(props: TrainingCardProps) {
	const { description } = props;
	const { title } = props;
	const { icon } = props;

	return (
		<StyledTrainingCard>
			<div className='top-wrapper'>
				<img src={icon} alt='' />
				<p>{title}</p>
			</div>
			{description ? <p className='description'>{description}</p> : null}
		</StyledTrainingCard>
	);
}

const StyledTrainingCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
	width: fit-content;
	min-width: 30%;
	height: 100%;
	padding: 20px;
	border-radius: 20px;
	background-color: white;
	cursor: pointer;

	.top-wrapper {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;
	}

	.description {
		font-weight: 500;
		margin: 0;
		width: 100%;
		margin-top: 25px;
		padding: 0;
	}
	img {
		margin-right: 20px;
	}

	p {
		font-weight: 700;
		padding-right: 50px;
	}
`;
