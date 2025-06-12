import { useState } from "react";
import { Layout, Upload, Button, Table, message } from "antd";
import { UploadOutlined, ReloadOutlined } from "@ant-design/icons";
import api from "@/service/apiconfig";
import "antd/dist/reset.css";
import { recognizeImage } from "@/service/apis";

const { Header, Content } = Layout;
const { Dragger } = Upload;

const Main = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [apiResults, setApiResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [fileList, setFileList] = useState([]);

  const handleUpload = (info) => {
    const { status, originFileObj } = info.file;

    if (status === "done") {
      setUploadedImage(originFileObj);
      setShowResults(false);
      setFileList([info.file]);
    } else if (status === "error") {
      message.error(`${info.file.name} upload failed.`);
    }
  };

  const handleShowResult = async () => {
    if (!uploadedImage) {
      message.warning("Please upload an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("image", uploadedImage);

    setLoading(true);
    try {
      // const response = await api.post(
      //   "api/classify?model=food-classify",
      //   formData,
      // );
      const response = await recognizeImage(formData)
      console.log(response)
      const { data } = response.data;
      if (data) {
        const {
          predicted_label,
          confidence_score,
          message: apiMessage,
          uploaded_image,
        } = data;

        setApiResults([
          { key: "Predicted Label", value: predicted_label },
          { key: "Accuracy", value: confidence_score },
          { key: "Message", value: apiMessage },
        ]);
        setProcessedImage(uploaded_image);
        setShowResults(true);
        message.success("Results fetched successfully.");
      } else {
        message.error("Label not Found.");
      }
    } catch (error) {
      console.log(error , "response");
      message.error("Label not Found.");
    } finally {
      setLoading(false);
    }
  };
  const handleRefresh = () => {
    setShowResults(false);
    setApiResults([]);
    setProcessedImage(null);
    setFileList([]);

    setUploadedImage(null);
  };
  const columns = [
    {
      title: "Key",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
    },
  ];
  const uploadProps = {
    name: "file",
    multiple: false,
    accept: "image/*",
    maxCount: 1,
    fileList,
    customRequest: ({ onSuccess }) => {
      setTimeout(() => {
        onSuccess("ok");
      }, 0);
    },
    onChange: (info) => {
      const { status } = info.file;
      if (status === "done") {
        handleUpload(info);
      } else if (status === "error") {
        message.error(`${info.file.name} upload failed.`);
      }
      setFileList(info.fileList);
    },
    beforeUpload: (file) => {
      const isImage = file.type.startsWith("image/");
      if (!isImage) {
        message.error("You can only upload image files!");
      }
      return isImage || Upload.LIST_IGNORE;
    },
  };

  return (
    <Layout style={{ minHeight: "100%" }}>
      <Layout>
        <div className="flex  justify-end mr-9">
            <Button type="primary">
              <a
                href="https://poc.idsil.in/files/api/site/food_sentiments_dataset.zip"
                download
              >
                Sample Dataset
              </a>
            </Button>
          </div>
        <Content
          className="bg-white"
          style={{
            margin: "16px",
            padding: 20,
            minHeight: "460px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: "16px",
            borderRadius:"10px"
          }}
        >
          <Dragger {...uploadProps}>
            <p className="ant-upload-drag-icon">
              <UploadOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for single image upload. Strictly prohibit from uploading
              non-image files.
            </p>
          </Dragger>

          <div className="flex justify-center mt-4">
            <Button
              type="primary"
              onClick={handleShowResult}
              loading={loading}
              disabled={!uploadedImage}
              style={{ marginRight: 8 }}
            >
              Show Result
            </Button>
            <Button onClick={handleRefresh} icon={<ReloadOutlined />}>
              Refresh
            </Button>
          </div>

          {showResults && (
            <div >
              <div
                className=""
                style={{ display: "flex", gap: "16px", marginTop: 24 }}
              >
                <div>
                  <h3>Processed Image</h3>
                  <img
                    src={`data:image/jpeg;base64,${processedImage}`}
                    alt="Processed"
                    style={{
                      maxWidth: "100%",
                      maxHeight: 300,
                      borderRadius: 8,
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <h3>Results</h3>
                  <Table
                    dataSource={apiResults}
                    columns={columns}
                    bordered
                    pagination={false}
                  />
                </div>
              </div>
            </div>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Main;
