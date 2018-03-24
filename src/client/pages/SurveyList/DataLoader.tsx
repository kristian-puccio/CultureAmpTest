import * as React from "react";

interface IncomingProps {
  children: RenderCallback;
}

type RenderCallback = (data: Object) => JSX.Element;

type Props = IncomingProps;

const DataLoader = (props: Props) => {
  const { children } = props;
  const data = { thing: true };
  return children(data);
};

export default DataLoader;
