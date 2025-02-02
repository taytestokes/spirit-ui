import path from "path";
import { readFile, readdir } from "fs/promises";

import ts from "typescript";

const main = async () => {
  const componentsDirectoryPath = path.resolve(
    __dirname,
    "..",
    "..",
    "..",
    "packages",
    "design-system",
    "src",
    "components"
  );

  const componentsDirectory = await readdir(componentsDirectoryPath);

  const componentsList = componentsDirectory.filter(
    (compDir) => !compDir.endsWith(".ts")
  );

  const content = await readFile(
    path.join(componentsDirectoryPath, "text", "index.ts"),
    "utf8"
  );

  const exported = {};

  const exportTypeRegex = /export type\s*{([^}]+)}/g;

  let match = exportTypeRegex.exec(content);

  // Pick up here - We are reading exported types
  while (match !== null) {
    const types = match[1].split(",").map((type) => type.trim());

    types.forEach((type) => {
      let [typeName] = type.split(" ") ?? [];
      exported[typeName] = true;
    });

    match = exportTypeRegex.exec(content);
  }

  const exportedTypes = Object.keys(exported).filter(Boolean);

  console.log(exportedTypes);

  //   console.log();

  //   console.log(designSystemComponentDir);
};

main();
