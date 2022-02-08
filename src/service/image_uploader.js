import { database } from "firebase";

class ImageUploader {
  async upload(file) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "pw8k7z4w");
    const result = await fetch(
      "https://api.cloudinary.com/v1_1/dlrflzwzr/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    return await result.json();
  }
}

export default ImageUploader;