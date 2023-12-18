import * as React from "react";
import Giscus from "@giscus/react";

const id = "inject-comments";

const Comment = () => {
  const [mounted, setMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return <div id={id}>{mounted && <Giscus id={id} repo="AlexMuhammad/alexmuhammad.me" repoId="724053489" />}</div>;
};
