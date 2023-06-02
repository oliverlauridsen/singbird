import styled from "styled-components";
import questOne from "../../img/quest-1.svg";
import questTwo from "../../img/quest-2.svg";
import questThree from "../../img/quest-3.svg";
import diamond from "../../img/diamond.svg";
import { StyledProgressBar } from "./ProgressBar";

export default function DailyQuests() {
	return (
		<StyledDailyQuests>
			<h2> Daily Quests </h2>
			<p> Finish 1 exercise</p>
			<div className='daily-quest'>
				<img src={questOne} alt='' />
				<StyledProgressBar progressBarPercentage={50} />
				<img src={diamond} alt='' />
			</div>
			<p> Score 90% or higher </p>
			<div className='daily-quest'>
				<img src={questTwo} alt='' />
				<StyledProgressBar progressBarPercentage={20} />
				<img src={diamond} alt='' />
			</div>
			<p>Finish 3 exercises</p>

			<div className='daily-quest'>
				<img src={questThree} alt='' />
				<StyledProgressBar progressBarPercentage={70} />
				<img src={diamond} alt='' />
			</div>
		</StyledDailyQuests>
	);
}

const StyledDailyQuests = styled.div`
	padding: 25px;
	border: 2px solid #d0ccd5;
	border-radius: 20px;
	margin-top: 50px;
	display: flex;
	flex-direction: column;

	p {
		font-size: 16px;
		line-height: 24px;
		font-weight: 700;
	}

	.daily-quest {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 10px;
	}
`;
