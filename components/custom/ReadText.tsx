"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import "react-quill-new/dist/quill.snow.css";

const ReadText = ({ value }: { value: string }) => {
  const ReactQuillNew = useMemo(
    () => dynamic(() => import("react-quill-new"), { ssr: false }),
    []
  );

  return <ReactQuillNew theme="snow" value={value} readOnly />;
};

export default ReadText;
