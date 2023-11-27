import React from "react";
import Typewriter from "typewriter-effect";

const TypeWriter = () => {
  return (
    <Typewriter
      options={{
        strings: ["Hire", "Collab"],
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default TypeWriter;
