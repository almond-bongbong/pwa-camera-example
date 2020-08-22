import React, { ChangeEvent, ReactElement, useState } from 'react';
import { Helmet } from 'react-helmet';
import styles from './Camera.module.scss';

function Camera(): ReactElement {
  const [preview, setPreview] = useState('');

  const upload = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (files && files.length > 0) {
      const url = window.URL.createObjectURL(files[0]);
      const image = new Image();
      image.src = url;
      image.onload = () => {
        setPreview(image.src);
        window.URL.revokeObjectURL(image.src);
      };
    }
  };

  return (
    <div>
      <Helmet>
        <link rel="manifest" href="/camera-manifest.json" />
      </Helmet>
      <div className={styles.camera}>
        <input
          id="take-photo"
          type="file"
          accept="image/*"
          capture="camera"
          onChange={upload}
        />
        <label htmlFor="take-photo">Take Photo</label>
      </div>

      <div className={styles.camera}>
        <input
          id="upload"
          type="file"
          accept="image/x-png,image/jpeg,image/gif"
          multiple={false}
          onChange={upload}
        />
        <label htmlFor="upload">Upload Photo</label>
      </div>

      {preview && (
        <img className={styles.preview} src={preview} alt="preview" />
      )}
    </div>
  );
}

export default Camera;
