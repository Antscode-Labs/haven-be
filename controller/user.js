const JournalEntry = require('../model/JournalEntry')
const Post = require('../model/Post')
const bycrpt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Mood = require('../model/Mood')
const Answers = require('../model/Answers')
const Medication = require('../model/Medication')
const Goal = require('../model/Goal')


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


exports.saveMood = async (req, res, next) => {

    const entry = new Mood({
        mood: req.body.entry.mood,
        trigger: req.body.entry.trigger,
        belief: req.body.entry.belief,
        newBelief: req.body.entry.newBelief,
        user: req.body.user,
    });

    console.log('here', entry)

    try {
        const savedMood = await entry.save();

        console.log(savedMood)

        res.status(200).send({ success: 'true', savedMood, message: 'Mood Saved Sucessfully' })
    } catch (err) {
        res.status(400).send({ status: 400, message: err })
    }

}

exports.getMoodHistory = async (req, res) => {

    let entries = []
    let entry = {}
    entries = await Mood.find({ user: req.params.id })
    console.log('here mood', req.params.id )
    // entries.push(entry)
    try {
        res.status(200).send({ success: 200, data : entries, message: 'Get Mood History Sucessfull' })
    } catch (err) {
        res.status(400).send({ error: err })
    }

}


exports.saveAnswers = async (req, res, next) => {
    console.log('here entry', )
    const entry = new Answers({
        entry: req.body.entry,
        user: req.body.user,
    });

    console.log('here', entry)

    try {
        const savedMood = await entry.save();

        res.status(200).send({ success: 'true', savedMood, message: 'Mood Saved Sucessfully' })
    } catch (err) {
        res.status(400).send({ status: 400, message: err })
    }

}

exports.getAnswersHistory = async (req, res) => {

    let entries = []
    let entry = {}
    entries = await Answers.find({ user: req.params.id })
    // entries.push(entry)
    try {
        res.status(200).send({ success: 200, data : entries, message: 'Get Mood History Sucessfull' })
    } catch (err) {
        res.status(400).send({ error: err })
    }

}


exports.addMedication = async (req, res) => {

    console.log(req, 'req')

    const medication = new Medication({
        name: req.body.name,
        quantity: req.body.quantity,
        dose: req.body.dose,
        frequency: req.body.frequency,
        usage: req.body.usage,
        when : req.body.when,
        user: req.body.user,
    });

    try {
        const addMedi = await medication.save();

        res.status(200).send({ success: 'true', data : addMedi, message: 'Medication Added Sucessfull' })
    } catch (err) {
        res.status(400).send({ status: 400, message: err })
    }

}

exports.getMedication = async (req, res) => {

    let entries = []
    let entry = {}
    entries = await Medication.find({ user: req.params.id })
    // entries.push(entry)
    try {
        res.status(200).send({ success: 200, data : entries, message: 'Get Medication Sucessfull' })
    } catch (err) {
        res.status(400).send({ error: err })
    }

}

exports.addGoal = async (req, res) => {

    console.log(req, 'req')

    const post = new Goal({
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

exports.getGoals = async (req, res) => {

    let entries = []
    let entry = {}
    entries = await Goal.find({ user: req.params.id })
    // entries.push(entry)
    try {
        res.status(200).send({ success: 200, data : entries, message: 'Get Medication Sucessfull' })
    } catch (err) {
        res.status(400).send({ error: err })
    }

}


