import React, { useEffect, useState } from "react";

// interface LoaderProps {
//   children: React.ReactNode;
//   className?: string; // Make load prop optional
// }

const Loader = ({ children }: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return <>{isLoading ? <span>loading</span> : <div>{children}</div>}</>;
};

export default Loader;
