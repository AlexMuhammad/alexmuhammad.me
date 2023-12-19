import * as React from "react";
import Giscus from "@giscus/react";

const id = "inject-comments";

const Comment = () => {
  const [mounted, setMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div id={id} className="mt-10 w-full">
      {mounted && (
        <Giscus
          id={id}
          repo="AlexMuhammad/alexmuhammad.me"
          repoId="R_kgDOKygt8Q"
          category="Q&A"
          categoryId="DIC_kwDOKygt8c4Cb1-v"
          mapping="pathname"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          lang="en"
          loading="lazy"
        />
      )}
    </div>
  );
};

export default Comment