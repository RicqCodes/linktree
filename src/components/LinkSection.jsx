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

const LinkContainer = styled.section`
  display: flex;
  margin: 3rem auto;
  /* margin-top: 3rem; */
  align-items: center;
  gap: 1rem;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;
