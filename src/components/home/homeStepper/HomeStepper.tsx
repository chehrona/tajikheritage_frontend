import React, { useEffect, useState } from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';
import { useMediaQuery } from 'react-responsive';

// Helper
import staticText from '../../../miscellaneous/staticTexts.json';

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
    Link,
    ImageSemiCircle,
} from './homeStepperStyles';

const HomeStepper: React.FC<HomeStepperProps> = ({
    containerRef,
    divRefs,
    opacities,
}) => {
    const stepInfo = staticText.HOME_STEPPER as HomeStepperType;
    const { lang } = useGlobalData();
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });
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
                <NumLine />
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
                                <LargeTitle
                                    $fontSize={step.title[lang].font}
                                    $margin={step.title[lang]?.margin}
                                >
                                    {step?.title[lang].text}
                                </LargeTitle>
                                <Desc>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: step?.desc[lang].text,
                                        }}
                                    />
                                    <Link
                                        href={step?.desc[lang].link}
                                        target="_blank"
                                    >
                                        <StyledButton $lang={lang}>
                                            {lang === 'ru'
                                                ? 'УЗНАТЬ БОЛЬШЕ'
                                                : lang === 'tj'
                                                ? 'БИСЁРТАР ОМӮЗЕД'
                                                : 'EXPLORE'}
                                        </StyledButton>
                                    </Link>
                                </Desc>
                            </TitleWrapper>
                        </StepperBox>
                    );
                })}
                {isMobile && (
                    <ImageSemiCircle
                        src={stepInfo[visibleStepIndex]?.inner[2].img}
                    />
                )}
            </StepperContainer>
            <OtherSteps $bottom={true}>
                <Step>
                    {stepInfo[visibleStepIndex + 1]?.num || stepInfo[0]?.num}
                </Step>
                <NumLine />
            </OtherSteps>
        </MainContainer>
    );
};

export default HomeStepper;
