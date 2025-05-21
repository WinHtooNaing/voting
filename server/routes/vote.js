const { Router } = require("express");
const { body } = require("express-validator");
const router = Router();
const voteController = require("../controllers/vote");
// POST /vote
router.post(
  "/create-vote",
  [body("name").trim().notEmpty().withMessage(" name must have.")],
  voteController.addNewVote
);

// get all votes
router.get("/get-votes", voteController.getAllVotes);

// get all results
router.get("/get-results", voteController.getAllResults);
// update votes
router.post("/update-vote", voteController.updateVote);

module.exports = router;
