import React, { Fragment } from "react";
import styled from "styled-components";

const Link = ({ info }) => {
  return (
    <LinkContainer>
      <a href={info.link}>
        <p>{info.title}</p>
      </a>
    </LinkContainer>
  );
};

export default Link;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 12px;

  /* width: 1152px;
  height: 76px; */

  /* Shadow/xs */

  filter: drop-shadow(0px 1px 2px rgba(16, 24, 40, 0.05));

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  a:link,
  a:visited {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 24px 32px;
    gap: 8px;


/* Gray/200 */
background: #EAECF0;

border: 1px solid #EAECF0;
border-radius: 8px;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 1;
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
  }
`;
