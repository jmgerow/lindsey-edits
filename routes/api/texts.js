const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const Text = require("../../models/Text");

// @route GET api/texts
// @desc Return text type per id
// @access Public
router.get("/", async (req, res) => {
    const query = req.query

    try {
        const texts = await Text.find({
            query
        }).exec();

        res.json(texts)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
});

// @route POST api/texts
// @desc Create new texts
// @access Public
router.post("/", [
    check("text", "text is required").not().isEmpty(),
    check("textTypeId", "text type id is required").not().isEmpty(),
], auth,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { text, textTypeId } = req.body;

        try {
            const enteredText = new Text({
                text,
                textTypeId
            });

            await enteredText.save();

            const payload = {
                enteredText: {
                    id: enteredText.id,
                    text: enteredText.text,
                    date: enteredText.date,
                    textTypeId: enteredText.textTypeId
                }
            }

            res.json(payload);
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server error");
        }
    });

// @route PUT api/texts
// @desc Update texts
// @access Public
router.put("/", [
    check("id", "id is required").not().isEmpty(),
    check("text", "text is required").not().isEmpty()
], auth,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id, text, textTypeId } = req.body;

        try {
            const updatedText = await Text.findByIdAndUpdate(id, {
                text
            })

            await updatedText.save();

            const payload = {
                updatedText: {
                    id: id,
                    text: text,
                    date: updatedText.date,
                    textTypeId: textTypeId
                }
            }

            res.json(payload);
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server error");
        }
    });

module.exports = router;