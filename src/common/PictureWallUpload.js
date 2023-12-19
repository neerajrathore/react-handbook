import { Modal, Upload, ConfigProvider } from 'antd';
import { useState } from 'react';
import PropTypes from 'prop-types';

const PictureWallUpload = ({ fileList, setFileList, listType = "picture-card", disabled = false, accept = "image/*", alt = "image preview", ...props }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const handleCancel = () => setPreviewOpen(false);
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <div>
      <ion-icon name="add-outline" />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <ConfigProvider
      theme={{
        components: {
          Upload: {
            colorBorder: 'var(--gray---gray-300)',
            colorPrimary: 'var(--primary---primary--main)',
            fontFamily: 'var(--primary---primary--font-family)',
            colorText: 'var(--gray---gray-700)',
          },
        },
      }}
    >
      <Upload
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        accept={accept}
        disabled={disabled}
        {...props}
      //iconRender={() => (<IoAmericanFootballOutline/>)}
      >
        {uploadButton}
      </Upload>
      <Modal open={previewOpen} style={{ top: 20 }} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img
          alt={alt}
          style={{
            width: '100%',
          }}
          src={previewImage}
        />
      </Modal>
    </ConfigProvider>
  );
};

PictureWallUpload.propTypes = {
  /**
   * Built-in stylesheets, support for one types: <code>picture-card</code>
   */
  listType: PropTypes.string,
  /**
   * Disable upload button
   */
  disabled: PropTypes.bool,
  /**
  * File types that can be accepted.
  */
  accept: PropTypes.string,
  /**
  * Set to <code>false</code> to tell the component to only accept a single file on upload.
  */
  multiple: PropTypes.bool
}

export default PictureWallUpload;
