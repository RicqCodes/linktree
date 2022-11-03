import React from "react";
import styled from "styled-components";

import { data } from "../data";
import LinkMain from "./Link";

const LinkSection = () => {
  const links = data.map((info) => {
    return <LinkMain info={info} key={info.id} />;
  });

  return <LinkContainer>{links}</LinkContainer>;
};

export default LinkSection;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 1.4rem;
    line-height: 2rem;
    color: inherit;
    font-weight: 500;
    filter: drop-shadow(0px 1px 2px rgba(16, 24, 40, 0.05));

    &:link,
    &:visited {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 2rem 3.2rem;
      gap: 12px;
      background: #eaecf0;
      border: 1px solid #eaecf0;
      border-radius: 8px;
      width: 100%;
    }

    &:focus {
      border: 1px solid #98a2b3;
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #ebe9fe;
      border-radius: 8px;
    }

    @media (hover: hover) and (any-pointer: fine) {
      &:hover {
        background: #d0d5dd;
        border: 1px solid #d0d5dd;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
        border-radius: 8px;
      }
    }

    @media (hover: hover) and (any-pointer: coarse) {
      &:hover {
        background: #d0d5dd;
        border: 1px solid #d0d5dd;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
        border-radius: 8px;
      }
    }
  }
`;
