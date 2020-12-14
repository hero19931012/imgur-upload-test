const { render } = require("ejs");
const axios = require('axios')
const { CLIENT_ID } = require('../.env/env');
const FormData = require('form-data');
const AccessToken = "4547bcf72bd154f6cb79c1209d2bb164ecaaa945"


const imageController = {
  upload: (req, res) => {
    res.render('upload');
  },

  handleUpload: (req, res) => {
    const name = req.body.name
    const image = req.file.buffer.toString("base64")

    const formData = new FormData()
    formData.append("image", image)
    formData.append("album", "mzjS4yw")

    axios({
      method: "POST",
      url: "https://api.imgur.com/3/image",
      headers: {
        "Authorization": `Client-ID 6f3c155594f8a5b`,
        "Content-Type": "multipart/form-data",
        ...formData.getHeaders()
      },
      data: formData
    })
      .then(res => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log("err.response.data", err.response.data);
        res.status(err.response.status).end()
      })
  }
}

module.exports = imageController;