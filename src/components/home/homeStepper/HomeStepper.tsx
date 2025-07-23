import React, { useEffect, useState } from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Helper
import staticTexts from '../../../miscellaneous/staticTexts.json';

// Types
import { HomeStepperProps } from './types/componentTypes';
import { HomeStepperType } from '../../../landingPages/home/types/componentTypes';

// Styled components
import {
    MainContainer,
    SemiCircle,
    NumLine,
    StepperBox,
    Step,
    Desc,
    IndicatorStep,
    TitleWrapper,
    LargeTitle,
    OtherSteps,
    StepperContainer,
    StyledButton,
    StyledLink,
    ImageSemiCircle,
} from './homeStepperStyles';

const HomeStepper: React.FC<HomeStepperProps> = ({
    containerRef,
    divRefs,
    opacities,
}) => {
    const stepInfo = staticTexts.HOME_STEPPER as HomeStepperType;
    const { lang } = useGlobalData();
    const [visibleStepIndex, setVisibleStepIndex] = useState<number>(0);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.7,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setVisibleStepIndex(index);
                }
            });
        }, options);

        if (containerRef && containerRef.current) {
            const stepElements = Array.from(containerRef.current.children);
            stepElements.forEach((element) => {
                observer.observe(element);
            });

            return () => {
                observer.disconnect();
            };
        }
    }, [divRefs]);

    return (
        <MainContainer>
            <SemiCircle />
            <OtherSteps $bottom={false}>
                <NumLine src="./arrows/home.svg" />
                <Step>
                    {stepInfo[visibleStepIndex - 1]?.num ||
                        stepInfo[stepInfo.length - 1]?.num}
                </Step>
            </OtherSteps>
            <StepperContainer ref={containerRef}>
                {stepInfo.map((step, i) => {
                    return (
                        <StepperBox
                            key={i}
                            ref={divRefs[i]}
                            $opacity={opacities[i]}
                        >
                            <IndicatorStep>{step?.num}</IndicatorStep>
                            <TitleWrapper>
                                <LargeTitle $fontSize={step.title[lang].font}>
                                    {step?.title[lang].text}
                                </LargeTitle>
                                <Desc>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: step?.desc.text[lang],
                                        }}
                                    />
                                    <StyledLink to={step?.desc.link}>
                                        <StyledButton
                                            $length={
                                                staticTexts.HOME_EXPLORE[lang]
                                                    .length
                                            }
                                        >
                                            {staticTexts.HOME_EXPLORE[lang]}
                                        </StyledButton>
                                    </StyledLink>
                                </Desc>
                            </TitleWrapper>
                        </StepperBox>
                    );
                })}
                <ImageSemiCircle
                    src={stepInfo[visibleStepIndex]?.inner.big.img}
                />
            </StepperContainer>
            <OtherSteps $bottom={true}>
                <Step>
                    {stepInfo[visibleStepIndex + 1]?.num || stepInfo[0]?.num}
                </Step>
                <NumLine src="./arrows/home.svg" $bottom={true} />
            </OtherSteps>
        </MainContainer>
    );
};

export default HomeStepper;
