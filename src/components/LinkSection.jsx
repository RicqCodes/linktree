import React from "react";
import styled from "styled-components";

import { data } from "../data";
import Link from "./Link";

const LinkSection = () => {
  const links = data.map((info) => {
    return <Link info={info} key={info.id} />;
  });

  return <LinkContainer>{links}</LinkContainer>;
};

export default LinkSection;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;
