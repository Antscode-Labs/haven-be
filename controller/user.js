const JournalEntry = require('../model/JournalEntry')
const Post = require('../model/Post')
const bycrpt = require('bcryptjs')
const jwt = require('jsonwebtoken')


exports.addJournalEntry = async (req, res, next) => {

    const entry = new JournalEntry({
        entry: req.body.entry,
        user: req.body.user,
    });

    console.log('here', entry)

    try {
        const addJournalEntry = await entry.save();

        res.status(200).send({ success: 'true', addJournalEntry, message: 'JournalEntry Added Sucessfully' })
    } catch (err) {
        res.status(400).send({ status: 400, message: err })
    }

}

exports.getEntries = async (req, res) => {

    let entries = []
    let entry = {}
    entries = await JournalEntry.find({ user: req.params.id })
    // console.log('here', entry)
    // entries.push(entry)
    try {
        res.status(200).send({ success: 200, data : entries, message: 'Get JournalEntry Sucessfull' })
    } catch (err) {
        res.status(400).send({ error: err })
    }

}


exports.addPost = async (req, res, next) => {

    const post = new Post({
        entry: req.body.entry,
        user: req.body.user,
    });

    console.log('here', post)

    try {
        const addPost = await post.save();

        res.status(200).send({ success: 'true', addPost, message: 'Post Added Sucessfully' })
    } catch (err) {
        res.status(400).send({ status: 400, message: err })
    }

}

exports.getPosts = async (req, res) => {

    let posts = []
    let entry = {}
    posts = await Post.find({ })
    // console.log('here', entry)
    // entries.push(entry)
    try {
        res.status(200).send({ success: 200, data : posts, message: 'Get Posts Sucessfull' })
    } catch (err) {
        res.status(400).send({ error: err })
    }

}
