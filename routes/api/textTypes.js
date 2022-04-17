const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const TextType = require("../../models/TextType")

// @route GET api/textTypes
// @desc Return all text types
// @access Public
router.get("/", async (req, res) => {
    try {
        const textTypes = await TextType.find();
        res.json(textTypes)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
});

// @route POST api/textTypes
// @desc Create new textTypes
// @access Public
router.post("/", [
    check("type", "TextType is required").not().isEmpty(),
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { type } = req.body;

        try {
            let textType = await TextType.findOne({ type })

            if (textType) {
                return res.status(400).json({ errors: [{ msg: "TextType already exists" }] });
            }

            textType = new TextType({
                type
            });

            await textType.save();

            const payload = {
                textType: {
                    id: textType.id,
                    type: textType.type,
                    date: textType.date
                }
            }

            res.json(payload);
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server error");
        }

    });

module.exports = router;