import styled from "styled-components";

export const PageContainer = styled.div`
	box-sizing: border-box;
    min-height: 100svh;
	padding: 2rem 7rem 2rem 7rem;
	background: #f8f8f8;

	@media (max-width: 480px) {
        padding: 1.5rem 3.2rem 1.5rem 3.2rem;
    }

	@media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
		padding: 1.5rem 3.2rem;
    }
`;

export const PoetBoxContainer = styled.div`
    gap: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: ${({ justify }) => justify && (justify <= 2 ? 'start' : 'center')};

    @media (max-width: 480px) {
        gap: 1rem;
        justify-content: space-between;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
       gap: 2rem;
    }
`;

export const TempPageContainer = styled.div`
    min-height: 100svh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TempImg = styled.img`
    height: 20rem;
`;

export const TempTitle = styled.div`
    color: #fcf6e9;
    margin: 2.5% 0% 5% 0%;
    font-size: 1.5rem;
`;