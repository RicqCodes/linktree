import React from "react";
import styled from "styled-components";

import { data } from "../data";
import Link from "./Link";

const LinkSection = () => {
  const links = data.map((info) => {
    return (
      <Link info={info} />
      //   <a key={info.id} href={info.link}>
      //     <h3>{info.title}</h3>
      //     <span>{info.subtext}</span>
      //   </a>
    );
  });

  return <LinkContainer>{links}</LinkContainer>;
};

export default LinkSection;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 24px;

  /* width: 1152px;
  height: 576px; */

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;
