
  module.exports = {
    name: {
      type: String,
      required: true
    },
    status: {
      type: Boolean,
      required: true,
      "default": true
    },
    filename: {
      type: String,
      required: true
    },
    extension: {
      type: String,
      required: true
    }
  };
