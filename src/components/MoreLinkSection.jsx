import React from "react";
import styled from "styled-components";

const MoreLinkSection = () => {
  return <Section>MoreLinkSection</Section>;
};

export default MoreLinkSection;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0px;
  gap: 64px;

  width: 1216px;
  height: 72px;

  /* Base/White */
  background: #ffffff;

  /* Inside auto layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;
