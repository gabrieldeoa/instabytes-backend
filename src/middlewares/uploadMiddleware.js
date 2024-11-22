import multer from "multer";

const storage = multer.diskStorage({
  destination: (_, file, cb) => {
    cb(null, process.env.UPLOAD_PATH);
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const singleUpload = (fieldName) => {
  return multer({ storage }).single(fieldName);
};

const multipleUpload = (fieldName, maxCount) => {
  return multer({ storage }).array(fieldName, maxCount);
};

export { singleUpload, multipleUpload };
