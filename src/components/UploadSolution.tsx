import React from "react";
import type { UploadProps } from 'antd';
import { Upload, message } from 'antd';
import Button from 'react-bootstrap/Button';
import { FileEarmarkCode } from "react-bootstrap-icons";

interface Props{
    setCode: (code: any) => void,
}

const UploadSolution = ({setCode}: Props) => {
    const handleChange: UploadProps["onChange"] = (info) => {

        if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
        }
      };
    const beforeUpload: UploadProps['beforeUpload'] = (file) => {
            return new Promise((resolve) => {
              const reader = new FileReader();
              reader.readAsText(file);
              reader.onload = () => {
                const file_content = reader.result;
                setCode(file_content);
                console.log("FILE CONTENT:", file_content)
              }
            });
    }
    
    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        multiple: false,
        onChange: handleChange,
        beforeUpload: beforeUpload,
      };
  return (
    <Upload {...props} >
      {/* <Button icon={<UploadOutlined />}>Upload</Button> */}
      <Button size="sm" className="btn btn-secondary">
        <FileEarmarkCode/> Upload
     </Button>
    </Upload>
  );
};

export default UploadSolution;