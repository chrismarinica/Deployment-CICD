import fs from 'fs';
import path from 'path';
import db from "../config/connection.js";
import Question from "../models/Question.js";
import cleanDB from "./cleanDb.js";
// Get the current file path and resolve the json file
const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);
const pythonQuestions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../seeds/pythonQuestions.json'), 'utf8'));
db.once('open', async () => {
    await cleanDB('Question', 'questions');
    await Question.insertMany(pythonQuestions);
    console.log('Questions seeded!');
    process.exit(0);
});
