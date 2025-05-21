const { Schema, model } = require("mongoose");

const voteSchema = new Schema(
  {
    name: {
      required: true,
      type: String,
    },
    vote_count: {
      required: true,
      type: Number,
      default: 0,
    },
    images: {
      required: true,
      type: String,
      default:
        "https://cdn.vectorstock.com/i/500p/29/53/gray-silhouette-avatar-for-male-profile-picture-vector-56412953.jpg",
    },
  },
  {
    timestamps: true,
  }
);

const voteModel = model("Vote", voteSchema);

module.exports = voteModel;
