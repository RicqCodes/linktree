import React from "react";
import styled from "styled-components";

const Link = ({ info }) => {
  return (
    <LinkContainer>
      <a title={info.subtext} href={info.link}>
        <p>{info.title}</p>
      </a>
    </LinkContainer>
  );
};

export default Link;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  filter: drop-shadow(0px 1px 2px rgba(16, 24, 40, 0.05));

  p {
    font-size: 1.4rem;
    line-height: 2rem;
  }

  a:link,
  a:visited {
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

  a:focus {
    border: 1px solid #98a2b3;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #ebe9fe;
    border-radius: 8px;
  }

  @media (hover: hover) and (any-pointer: fine) {
    a:hover {
      background: #d0d5dd;
      border: 1px solid #d0d5dd;

      /* Shadow/xs */
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
      border-radius: 8px;
    }
  }

  @media (hover: hover) and (any-pointer: coarse) {
    a:hover {
      background: #d0d5dd;
      border: 1px solid #d0d5dd;

      /* Shadow/xs */
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
      border-radius: 8px;
    }
  }

  a:disabled {
    background: #fcfcfd;

    /* Gray/100 */
    border: 1px solid #f2f4f7;

    /* Shadow/xs */
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
  }

  p {
    /* font-family: "Inter"; */
    font-style: normal;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 2.8rem;

    display: flex;
    align-items: center;
    text-align: center;

    /* Gray/900 */
    color: #101828;

    /* Inside auto layout */
    flex: none;
    order: 0;
  }
`;
