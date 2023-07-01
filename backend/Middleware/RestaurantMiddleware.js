import multer from "multer";

let destination;
let filename;

const RestaurantImageUpload = async ({ state, city, name, category }) => {
  destination = `../uploads/${state}/${city}${category}/${name}`;
  filename = `${name}-${Date.now()}`;
};

const RestaurantImageUploadPath = async (file) => {
  return file?.path;
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, destination);
  },
  filename: function (req, file, cb) {
    RestaurantImageUploadPath(file);
    cb(null, filename);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(null, true);
    }
  },
});

const RestaurantMultersend = async (req, res, next) => {
  return upload.single("Image")(req, res, () => {
    if (!req.file) {
      return res.json({ errorMessaage: "File not uploaded" });
    }
    next();
  });
};

export { RestaurantImageUpload, RestaurantMultersend, RestaurantImageUploadPath };
