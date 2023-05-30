import React from "react";
import styled from "styled-components";
import PageHeader from "./PageHeader";

export default function Learn() {
	return (
		<MainContent>
			<PageHeader color='#783DA6' />
		</MainContent>
	);
}

const MainContent = styled.section`
	width: 100%;
	padding: 50px 75px;
`;
