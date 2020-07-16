import React, { ChangeEvent, useState } from 'react';
import styles from './App.module.scss';

function App() {
  const [preview, setPreview] = useState('');

  const upload = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
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
    <div className={styles.app}>
      <div className={styles.camera}>
        <input
          id="take-photo"
          type="file"
          accept="image/*;capture=camera"
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
        <label htmlFor="upload">Upload</label>
      </div>

      {preview && (
        <img className={styles.preview} src={preview} alt="preview" />
      )}
    </div>
  );
}

export default App;
