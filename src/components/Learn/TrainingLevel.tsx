import styled from "styled-components";
interface TrainingLevelProps {
	icon: string;
	lesson: number;
}

export default function TrainingLevel(props: TrainingLevelProps) {
	const { icon } = props;
	const { lesson } = props;

	return (
		<StyledTrainingLevel>
			<img src={icon} alt='' />
			<p>Lesson {lesson}</p>
		</StyledTrainingLevel>
	);
}

const StyledTrainingLevel = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
	width: fit-content;
	min-width: 30%;
	height: fit-content;
	padding: 20px;
	border-radius: 20px;
	cursor: pointer;

	img {
		margin-right: 20px;
	}

	p {
		font-weight: 700;
		padding-right: 50px;
	}
`;
