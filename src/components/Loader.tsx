import React, { useEffect, useState } from "react";

const Loader = (props: { children: React.ReactNode }) => {
  const [load, setLoad] = useState<boolean>(true);

  useEffect(() => {
    setLoad(false);
  });

  return (
    <>
      {load ? (
        <div className="h-[50vh] space-x-1 flex justify-center items-center w-full">
          <span className="sr-only">Loading...</span>
          <div className="h-3 w-3 bg-red-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-3 w-3 bg-red-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-3 w-3 bg-red-500 rounded-full animate-bounce"></div>
        </div>
      ) : (
        props.children
      )}
    </>
  );
};

export default Loader;
