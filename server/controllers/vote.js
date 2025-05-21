const { validationResult } = require("express-validator");
const Vote = require("../models/Vote");

// add new vote
exports.addNewVote = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      isSuccess: false,
      message: "something went wrong",
    });
  }

  const { name } = req.body;
  try {
    const voteDoc = await Vote.create({
      name,
    });
    return res.status(201).json({
      isSuccess: true,
      message: "Vote added to  list",
      voteDoc,
    });
  } catch (err) {
    return res.status(422).json({
      isSuccess: false,
      message: err.message,
    });
  }
};

// get all votes
exports.getAllVotes = async (req, res) => {
  try {
    const votes = await Vote.find();
    return res.status(200).json({
      isSuccess: true,
      message: "Votes fetched successfully",
      votes,
    });
  } catch (err) {
    return res.status(422).json({
      isSuccess: false,
      message: err.message,
    });
  }
};
// get all results
exports.getAllResults = async (req, res) => {
  try {
    const votes = await Vote.find().sort({ vote_count: -1 });
    return res.status(200).json({
      isSuccess: true,
      message: "Votes fetched successfully",
      votes,
    });
  } catch (err) {
    return res.status(422).json({
      isSuccess: false,
      message: err.message,
    });
  }
};
// update votes
exports.updateVote = async (req, res) => {
  const { vote_id } = req.body;
  if (!vote_id) {
    return res.status(400).json({ error: "Missing voting id" });
  }
  try {
    const vote = await Vote.findById(vote_id);
    if (!vote) {
      return res.status(404).json({ error: "Missing voting_id" });
    }
    vote.vote_count += 1;
    vote.save();
    return res.status(200).json({
      isSuccess: true,
      message: "You voted",
      vote,
    });
  } catch (error) {
    return res.status(422).json({
      isSuccess: false,
      message: err.message,
    });
  }
};
