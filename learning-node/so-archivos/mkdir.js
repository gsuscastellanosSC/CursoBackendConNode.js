const fs = require("fs");

fs.mkdir("../so-archivos/algo", { recursive: true }, err => {
  if (err) {
    return console.log(err);
  }
});
