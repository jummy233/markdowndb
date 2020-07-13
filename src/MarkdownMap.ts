import {Markdown} from './types';

// customized Map
// if it holds value generated from "static mode", everytime calling
// `get` method it will call the lambda function and return a
// Promise.
// if it holds value generated from "runtime mode", it will behaves
// just like a normal Map.
export class MarkdownMap extends Map<number, Markdown> {
  constructor(other: Map<number, Markdown>) {
    super(other);
  }
}