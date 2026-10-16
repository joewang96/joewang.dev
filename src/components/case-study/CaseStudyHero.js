import React from 'react';
import styled from 'styled-components';

import H1 from '../../elements/H1';
import P from '../../elements/P';
import ItalicSubtitle from '../../elements/ItalicSubtitle';

import { SIZES, FONT_SIZE, FONTS, COLORS } from '../../tokens';
import CaseStudyImage from './CaseStudyImage';

const DetailContainer = styled.div`
  display: flex;
  gap: 60px;
`;

const DetailGroupContainer = styled.div``;

const DetailLabel = styled(P)`
  && {
    font-size: ${FONT_SIZE.XS};
  }
  font-family: ${FONTS.MONO};
`;

const DetailText = styled(P)`
  marign: 0px;
  color: ${COLORS.TEXT};

  font-weight: 600;
`;

const Wrapper = styled.div`
  position: relative;
  margin-top: 120px;

  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${H1} {
    margin-bottom: 4px;
  }

  @media (max-width: ${SIZES.BREAK_SM}) {
    margin-top: 80px;
  }
`;

class DetailGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { label, text, ...rest } = this.props;

    return (
      <DetailGroupContainer {...rest}>
        <DetailLabel>{label}</DetailLabel>
        <DetailText>{text}</DetailText>
      </DetailGroupContainer>
    );
  }
}

const CaseStudyHero = ({
  title,
  company,
  role,
  timeframe,
  image,
  bannerSlot,
}) => (
  <Wrapper>
    <H1>{title}</H1>
    <CaseStudyImage imageSrc={image} />
    <DetailContainer>
      <DetailGroup label="Company" text={company} />
      <DetailGroup label="Role" text={role} />
      <DetailGroup label="Timeframe" text={timeframe} />
    </DetailContainer>
    {bannerSlot && bannerSlot}
  </Wrapper>
);

export default CaseStudyHero;
