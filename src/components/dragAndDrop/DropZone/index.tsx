import React from "react";

interface IProps {
  onDrop: (dataTransferred: string) => void;
  keyDataTransfer: string;
  id?: string;
  className?: string;
}

const DropZone: React.FC<IProps> = (props) => {
  const { onDrop, className, keyDataTransfer, children, ...rest } = props;

  function handleOnDrop(e: React.DragEvent<HTMLElement>) {
    e.stopPropagation();
    const dataTransferred = e.dataTransfer.getData(keyDataTransfer);
    onDrop(dataTransferred);
  }

  return (
    <div
      className={`drop-zone ${className}`}
      onDrop={handleOnDrop}
      onDragEnter={(e) => e.preventDefault()}
      onDragOver={(e) => e.preventDefault()}
      {...rest}
    >
      {children}
    </div>
  );
};

export default DropZone;
