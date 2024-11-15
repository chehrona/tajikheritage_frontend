// Styles
import { StyledContainer } from './customToastContainerStyles';

const CustomToastContainer = () => {
    return (
        <StyledContainer
            position="top-right"
            hideProgressBar
            closeButton={false}
            autoClose={2000}
            limit={5}
        />
    );
};

export default CustomToastContainer;
