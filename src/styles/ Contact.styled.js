import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem 12rem;

  @media (max-width: 55em) {
    padding: 0;
  }
`;

export const Intro = styled.div`
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 55em) {
    margin-top: 3rem;
  }

  & h1 {
    max-width: 85%;
    font-size: 2.6rem;
    color: #101828;
  }

  & p {
    margin-top: 2rem;
    font-size: 1.5rem;
    max-width: 100%;
  }
`;

export const Form = styled.form`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  position: relative;

  button {
    border: none;
    width: 100%;
    padding: 1.5rem 0;
    background: #1570ef;
    color: #fff;
    border: 1px solid #1570ef;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;

    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);

    @media (hover: hover) and (any-pointer: fine) {
      &:hover {
        background: #175cd3;
        border: 1px solid #175cd3;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
        border-radius: 8px;
      }
    }

    @media (hover: hover) and (any-pointer: coarse) {
      &:hover {
        background: #175cd3;
        border: 1px solid #175cd3;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
        border-radius: 8px;
      }
    }

    &:focus {
      background: #1570ef;
      border: 1px solid #1570ef;
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #d1e9ff;
    }

    &:disabled {
      background: #b2ddff;
      border: 1px solid #b2ddff;
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    }
  }
`;

export const Names = styled.div`
  ${Form} & {
    display: flex;
    width: 100%;
    gap: 2rem;
    /* justify-content: space-between; */
    align-items: center;
  }

  @media (max-width: 55em) {
    flex-direction: column;
    gap: 3.2rem;
    align-items: flex-start;
  }
`;

export const Name = styled.div`
  position: relative;
  ${Form} ${Names} & {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  .error {
    color: #f83f23;
    position: absolute;
    bottom: -1.4rem;
    font-size: 1.2rem;
  }

  & label {
    font-size: 1.2rem;
    color: #344054;
    font-weight: 500;
  }

  & input[type="text"] {
    width: 100%;
    padding: 0.9rem;
    background-color: #fff;
    border: 1px solid #d0d5dd;
    border-radius: 6px;
    outline: none;
    color: #101828;
    font-size: 1.6rem;

    ::placeholder {
      font-size: 1.4rem;
      font-weight: 400;
      color: #667085;
      line-height: 2.4rem;
    }
  }

  & input[type="text"]:focus {
    border: 1px solid #84caff;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  }
`;

export const Email = styled.div`
  ${Form} & {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .error {
      color: #f83f23;
      position: absolute;
      bottom: -1.4rem;
      font-size: 1.2rem;
    }

    & label {
      font-size: 1.2rem;
      color: #344054;
      font-weight: 500;
    }

    & input[type="email"] {
      width: 100%;
      padding: 0.9rem;
      background-color: #fff;
      border: 1px solid #d0d5dd;
      border-radius: 6px;
      color: #101828;
      font-size: 1.6rem;

      outline: none;

      ::placeholder {
        font-size: 1.4rem;
        font-weight: 400;
        color: #667085;
        line-height: 2.4rem;
      }
    }

    & input[type="email"]:focus {
      border: 1px solid #84caff;
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    }
  }
`;

export const Message = styled.div`
  ${Form} & {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .error {
      color: #f83f23;
      position: absolute;
      bottom: -1.4rem;
      font-size: 1.2rem;
    }

    & label {
      font-size: 1.2rem;
      color: #344054;
      font-weight: 500;
    }

    & textarea {
      display: flex;
      width: 100%;
      padding: 0.9rem;
      background-color: #fff;
      border: 1px solid #d0d5dd;
      border-radius: 6px;
      height: 12rem;
      max-height: 18rem;
      outline: none;
      font-family: "inter", sans-serif;
      color: #101828;
      font-size: 1.6rem;

      &[data-error="error"] {
        border: 1px solid #f89687;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);

        :focus {
          border: 1px solid #f89687;
          box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
            0px 0px 0px 4px #ffd3cc;
        }
      }

      ::placeholder {
        font-family: "inter", sans-serif;
        align-items: flex-start;
        justify-content: flex-start;
        font-size: 1.4rem;
        font-weight: 400;
        color: #667085;
        line-height: 2.4rem;
      }

      :focus {
        border: 1px solid #84caff;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #d1e9ff;
      }
    }
  }
`;

export const Select = styled.div`
  ${Form} & {
    display: flex;
    align-items: center;
    gap: 1rem;

    div {
      margin-right: 1rem;
    }

    & label {
      font-size: 1.4rem;
      font-weight: 400;
      position: relative;
    }

    & label::before,
    & label::after {
      position: absolute;
    }

    & label::before {
      content: "";
      display: inline-block;

      height: 16px;
      width: 16px;
      background: #ffffff;
      border: 1px solid #d0d5dd;
      border-radius: 5px;
      left: -2.4rem;
    }

    & label::after {
      content: "";
      display: inline-block;
      height: 6px;
      width: 9px;
      border-left: 2px solid #1570ef;
      border-bottom: 2px solid #1570ef;
      left: -2.1rem;
      top: 0.3rem;

      transform: rotate(-45deg);
    }

    input[type="checkbox"] {
      opacity: 0;
      /* position: absolute;
      left: -9999px; */
    }

    & input[type="checkbox"]:checked + label::before {
      background: #f9fafb;
      border: 1px solid #1570ef;
    }

    /* Hide the checkmark on the checked state */
    & input[type="checkbox"] + label::after {
      content: none;
    }

    /*Unhide the checkmark on the checked state*/
    & input[type="checkbox"]:checked + label::after {
      content: "";
    }

    & input[type="checkbox"]:focus + label::before {
      border: 1px solid #84caff;
      box-shadow: 0px 0px 0px 4px #d1e9ff;
    }

    & input[type="checkbox"]:disabled + label::before {
      background: #f2f4f7;
      border: 1px solid #d0d5dd;
    }
  }
`;
