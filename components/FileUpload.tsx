import React, { useRef } from 'react';

interface FileUploadProps {
  setFile: Function;
  accept: string;
  children: React.ReactNode;
}

const FileUpload: React.FC<FileUploadProps> = ({ setFile, accept, children }) => {
  const ref = useRef<HTMLInputElement>();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files[0]);
  };

  return (
    <div onClick={() => ref.current.click()}>
      <input type="file" accept={accept} style={{ display: 'none' }} ref={ref} onChange={(e) => onChange(e)} />
      {children}
    </div>
  );
};

export default FileUpload;
