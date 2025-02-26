import React from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Helper
import staticText from '../../../miscellaneous/staticTexts.json';

// Styled components
import { StyledButton } from '../button/customButtonStyles';

const DonateButton: React.FC = () => {
    const { lang } = useGlobalData();

    return (
        <form
            action="https://www.paypal.com/donate"
            method="post"
            target="_blank"
        >
            <input
                type="hidden"
                name="hosted_button_id"
                value={process.env.REACT_APP_PAYPAL_VALUE}
            />
            <StyledButton type="submit" $width="fit-content">
                {staticText.FOOTER_TITLES.links[lang].list[1]}
            </StyledButton>
        </form>
    );
};

export default DonateButton;
