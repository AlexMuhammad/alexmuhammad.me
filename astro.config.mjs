import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import rehypePrettyCode from "rehype-pretty-code";

const prettyCodeOptions = {
  theme: "solarized-dark",
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [
        {
          type: "text",
          value: " ",
        },
      ];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["word"];
  },
  tokensMap: {},
};

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind(), react()],
  markdown: {
    extendDefaultPlugins: true,
    syntaxHighlight: false,
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
  }
});