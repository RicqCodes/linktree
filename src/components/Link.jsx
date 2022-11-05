import React from "react";
import { Link } from "react-router-dom";

const LinkMain = ({ info }) => {
  if (info.link.startsWith("http")) {
    return (
      <a
        title={info.subtext}
        id={info.id}
        href={info.link}
        target="_blank"
        rel="noreferrer noopener"
      >
        {info.title}
      </a>
    );
  } else {
    return (
      <Link id={info.id} to={info.link}>
        Contact
      </Link>
    );
  }
};

export default LinkMain;
