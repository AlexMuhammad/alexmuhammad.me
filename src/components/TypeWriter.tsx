import React from "react";
import Typewriter from "typewriter-effect";

const TypeWriter = () => {
  return (
    <Typewriter
      options={{
        strings: ["Hiring", "Collaborating"],
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default TypeWriter;
