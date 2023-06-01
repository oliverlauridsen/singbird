import React from "react";
import styled from "styled-components";

export default function DailyQuests() {
	return (
		<StyledDailyQuests>
			<h2> Daily Quests </h2>
			<div className='daily-quest'>
				<p> 1 </p>
				<p> ========= </p>
				<p> ICON</p>
			</div>
			<div className='daily-quest'>
				<p> 2 </p>
				<p> ========= </p>
				<p> ICON</p>
			</div>
			<div className='daily-quest'>
				<p> 3 </p>
				<p> ========= </p>
				<p> ICON</p>
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

	.daily-quest {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
`;
