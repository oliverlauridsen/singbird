import React from "react";
import styled from "styled-components";
import PageHeader from "./PageHeader";
import manPlayingGuitar from "../img/man-playing-guitar.svg";
import Continue from "./Continue";
import aubio from "aubiojs";

console.log(aubio);

export default function Learn() {
	return (
		<MainContent>
			<PageHeader
				color='#783DA6'
				heading='Welcome, Oliver!'
				body='Keep on showing up & develop your dream voice'
				firstImage={manPlayingGuitar}
				optionalButton='WARMUP'
				optionalWarmupText="Let's get you warmed up!"
			/>
			<Continue />
		</MainContent>
	);
}

const MainContent = styled.section`
	width: 100%;
	padding: 50px 75px;
	background-color: #f9f4fc;
`;
