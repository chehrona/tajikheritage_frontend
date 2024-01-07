import styled from "styled-components";

export const PageContainer = styled.div`
    box-sizing: border-box;
	background: white;
	padding: 2rem 7rem 2rem 7rem;
    min-height: 100svh;

    @media (max-width: 480px) {
		padding: 1.5rem 3.2rem 1.5rem 3.2rem;
    }

	@media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
		padding: 1.5rem 3.2rem;
    }
`;

export const MythBoxContainer = styled.div`
    gap: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: ${({ justify }) => justify && (justify <= 2 ? 'start' : 'center')};

    @media (max-width: 480px) {
        gap: 2rem;
        justify-content: center;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        justify-content: ${({ justify }) => justify && (justify <= 1 ? 'start' : 'center')};
    }
`;