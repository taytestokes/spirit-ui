import { Node } from "unist";

export interface UnistNode extends Node {
  type: string;
  tagName?: string;
  name?: string;
  attributes?: {
    name: string;
    value: unknown;
    type?: string;
  }[];
  properties?: {
    [key: string]: unknown;
  };
  children?: UnistNode[];
}

export interface UnistTree extends Node {
  children: UnistNode[];
}
