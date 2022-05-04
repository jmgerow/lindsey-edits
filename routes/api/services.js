const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const Service = require("../../models/Service");

// @route GET api/services
// @desc Return array of services
// @access Public
router.get("/", async (req, res) => {
    const query = req.query

    try {
        const services = await Service.find().exec();

        res.json(services)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
});

// @route POST api/services
// @desc Create new services
// @access Public
router.post("/", [
    check("text", "text is required").not().isEmpty(),
    check("title", "title is required").not().isEmpty(),
    check("sequence", "sequence is required").not().isEmpty(),
], auth,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { text, title, sequence } = req.body;

        try {
            const enteredService = new Service({
                text,
                title,
                sequence
            });

            await enteredService.save();

            const payload = {
                enteredService: {
                    id: enteredService.id,
                    text: enteredService.text,
                    title: enteredService.title,
                    sequence: enteredService.sequence,
                    date: enteredService.date
                }
            }

            res.json(payload);
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server error");
        }
    });

// @route PUT api/services
// @desc Update services
// @access Public
router.put("/", [
    check("id", "id is required").not().isEmpty(),
    check("text", "text is required").not().isEmpty(),
    check("title", "title is required").not().isEmpty(),
    check("sequence", "sequence is required").not().isEmpty()
], auth,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id, text, title, sequence } = req.body;

        try {
            const updatedService = await Service.findByIdAndUpdate(id, {
                text,
                title,
                sequence
            })

            await updatedService.save();

            const payload = {
                updatedService: {
                    id: id,
                    text: text,
                    title: title,
                    sequence: sequence,
                    date: updatedService.date
                }
            }

            res.json(payload);
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server error");
        }
    });

// @route DELETE api/services
// @desc Delete services
// @access Public
router.delete("/:id", [], auth,
    async (req, res) => {
        const id = req.params.id
        try {
            const service = await Service.findById(id);

            await service.remove();
            res.json(`Service ${id} removed successfully`);
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server error");
        }
    });

module.exports = router;