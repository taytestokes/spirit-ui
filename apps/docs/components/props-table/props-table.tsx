import React from "react";
import path from "path";
import { parse as docgen, PropItem } from "react-docgen-typescript";

import * as classes from "./props-table.css";

interface PropsTableProps {
  component: string;
}

const getPropTypes = (component: string) => {
  const componentsDirPath = path.resolve(
    __dirname,
    "..",
    "..",
    "..",
    "..",
    "..",
    "..",
    "..",
    "packages",
    "design-system",
    "src",
    "components",
    component,
    `${component}.tsx`
  );

  console.log(componentsDirPath);

  const types = docgen(componentsDirPath, {
    shouldExtractValuesFromUnion: true,
    shouldExtractLiteralValuesFromEnum: true,
    shouldRemoveUndefinedFromOptional: true,
  });

  return types.reduce((acc, type) => {
    Object.entries(type.props).forEach(([_, propVal]) => {
      acc.push({
        defaultValue: propVal.defaultValue,
        description: propVal.description,
        name: propVal.name,
        required: propVal.required,
        type: propVal.type,
      });
    });

    return acc;
  }, [] as Array<PropItem>);
};

export const PropsTable = ({ component }: PropsTableProps) => {
  const propTypes = getPropTypes(component);

  return (
    <div className={classes.propsTable}>
      <table className={classes.table}>
        <thead className={classes.thead}>
          <tr className={classes.tr}>
            {["Prop", "Default", "Type"].map((header) => (
              <th className={classes.th} key={header}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={classes.tbody}>
          {propTypes.map(({ defaultValue, name, type, required }) => (
            <tr className={classes.tr} key={name}>
              <td className={classes.td}>
                {name}
                {required && (
                  <span aria-label="Required" className={classes.required}>
                    *
                  </span>
                )}
              </td>
              <td className={classes.td}>
                {defaultValue?.value.toString() ?? "-"}
              </td>
              <td className={classes.td}>{type.raw ?? type.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
