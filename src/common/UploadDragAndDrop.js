import React, { useState } from 'react'
import { Upload, Modal, message } from 'antd'
import PropTypes from 'prop-types';


const DragAndDrop = ({ setFilesData, listType = 'text', description = "Support Text", disabled = false, accept = "image/*", ...restProps }) => {

  const { Dragger } = Upload

  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewFile, setPreviewFile] = useState({})

  const props = {
    name: 'file',
    multiple: true,
    onChange(info) {
      const { status } = info.file
      if (status !== 'uploading') { }
      if (status === 'done') {
        setFilesData(info.fileList)
        message.success(`${info.file.name} file uploaded successfully.`)
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files)
    },
  }

  return (
    <>
      <Dragger {...props}
        accept={accept}
        disabled={disabled}
        listType={listType}
        className='customdragger'
        style={{ fontFamily: 'var(--primary---primary--font-family)', padding: 8 }}
        onPreview={(file) => {
          setPreviewFile(file)
          setPreviewOpen(true)
        }}
        {...restProps}
      >
        <span className='ant-upload-drag-icon' style={{ fontSize: 24, lineHeight: 'normal' }}>
          <ion-icon name="cloud-upload-outline" style={{ fontSize: 24 }} />
        </span>
        <h5 style={{ fontSize: 14, color: 'var(--gray---gray-900)', fontWeight: 500, lineHeight: '20px', margin: '4px 0 0' }}>Click or drag the file in the area to upload</h5>
        <span style={{ fontSize: 12, color: 'var(--gray---gray-500)', fontWeight: 500, lineHeight: '20px' }}>{description}</span>
      </Dragger>
      <Modal
        open={previewOpen}
        footer={null}
        onCancel={() => setPreviewOpen(false)}
        style={{ top: 20 }}
      >
        {previewFile?.type == 'application/pdf' ?
          <object data={previewFile?.url} type='application/pdf' width='100%' height='600px' style={{ marginTop: 18 }} /> :
          <img alt="example" style={{ width: '100%', marginTop: 18 }} src={previewFile?.url} />
        }
      </Modal>

    </>
  )
}

DragAndDrop.propTypes = {
  /**
  * Support text for Drag & Drop.
  */
  description: PropTypes.string,
  /**
   * Built-in stylesheets, support for four types: <code>text</code>, <code>picture</code>, <code>picture-card</code> or <code>picture-circle</code>
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

export default DragAndDrop
