const mongoose = require('../db/connection')

const ideaSchema = new mongoose.Schema(
    {
        username: {
            ref: "Username",
            type: mongoose.Schema.Types.ObjectId
        },
        isAnonymous: Boolean,
        title: { type: String, required: true },
        description: { type: String, required: true },
        pictures: [{
            src: String,
            alt: String
        }],
        keywords: Array,
        // should be an array of strings
        votes: { type: Number, default: 0 },
        // counter
    },
    {
        comments: [{
            ref: "Comment",
            type: mongoose.Schema.Types.ObjectId
    }]},
    {timestamps: true}
);

const Idea = mongoose.Model("Idea", ideaSchema);
module.exports = Idea;

