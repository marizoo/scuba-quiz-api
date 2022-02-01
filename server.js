const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const { json } = require('body-parser');
const { nanoid } = require('nanoid');

dotenv.config({ path: './config.env' });

const app = express();

app.use(cors());
app.use(json());

let trivia = [
    refresher : [
{
    id: nanoid(),
    questionText: "What is the most important rule of scuba diving?",
    answerOptions: [
        {answerText:"Never dive alone, always dive with a buddy", isCorrect: false},
        {answerText:"Always perform a pre-dive safety check", isCorrect: false},
        {answerText:"Establish positive bouyancy and relax when at the surface", isCorrect: false},
        {answerText:"Breath continously and never hold your breath", isCorrect: true},
    ]
},
{
    id: nanoid(),
    questionText: "You should not dive if you have a cold or allergies because:",
    answerOptions: [
        {answerText:"You may become unconscious without warning", isCorrect: false},
        {answerText:"You may become tired or seasick easily", isCorrect: false},
        {answerText:"You may not be able to equalize pressure in your body air spaces", isCorrect: true},
        {answerText:"You will use your air up too fast", isCorrect: false},
    ]
},
{
    id: nanoid(),
    questionText: "Holding your breath while scuba diving can:",
    answerOptions: [
        {answerText:"Lead to life threatening injuries", isCorrect: false},
        {answerText:"Push air into the blood stream chest area", isCorrect: false},
        {answerText:"Cause lung injuries", isCorrect: false},
        {answerText:"All the above", isCorrect: true},
    ]
},
{
    id: nanoid(),
    questionText: "If your ears or sinuses hurt while you are descending, it usually means:",
    answerOptions: [
        {answerText:"You are feeling a squeeze and need to equalize", isCorrect: true},
        {answerText:"Your mask is too small", isCorrect: false},
        {answerText:"Your mask strap is too tight", isCorrect: false},
        {answerText:"Your air spaces are equalized properly", isCorrect: false},
    ]
},
{
    id: nanoid(),
    questionText: "If you are your buddy were separated underwater, what would you generally do?",
    answerOptions: [
        {answerText:"Go up right away, wait a minute and then go back down underwater", isCorrect: false},
        {answerText:"Search for about a minute underwater and then go up to find your buddy", isCorrect: true},
        {answerText:"Go to the surface right away and get out of the water", isCorrect: false},
        {answerText:"Try to find your buddy's bubbles and follow the bubbles to find your buddy", isCorrect: false},
    ]
},
    ],
    acronym : [
        {
    id: nanoid(),
    questionText: "A.G.E",
    answerOptions: [
        {answerText:"Auxiliary Ground Equipment", isCorrect: false},
        {answerText:"Arterial Gas Embolism", isCorrect: true},
        {answerText:"Auditory Gross Error", isCorrect: false},
        {answerText:"Air Gas Enrichment", isCorrect: false},
        {answerText:"Alternate Gas Exchange", isCorrect: false},
    ]
},
        {
    id: nanoid(),
    questionText: "A.T.A",
    answerOptions: [
        {answerText:"Advanced Test Accelerator", isCorrect: false},
        {answerText:"Actual Time of Arrival", isCorrect: false},
        {answerText:"Atmosphere Absolute", isCorrect: true},
        {answerText:"Adjust To Altitude", isCorrect: false},
    ]
},
        {
    id: nanoid(),
    questionText: "C.C.R",
    answerOptions: [
        {answerText:"Closed Circuit Rebreather", isCorrect: true},
        {answerText:"Central Contractor Registry", isCorrect: false},
        {answerText:"Computer Communication Review", isCorrect: false},
        {answerText:"Closed Computer Receiver", isCorrect: false},
        {answerText:"Creedence Clearwater Revival", isCorrect: false},
    ]
},
        {
    id: nanoid(),
    questionText: "C.E.S.A",
    answerOptions: [
        {answerText:"Controlle Environment Safety Assesment", isCorrect: false},
        {answerText:"Computational Engineering in SYstems Applications", isCorrect: false},
        {answerText:"California Endangered Species Act", isCorrect: false},
        {answerText:"Controlled Emergency Swimming Ascent", isCorrect: true},
    ]
},
        {
    id: nanoid(),
    questionText: "D.P.V",
    answerOptions: [
        {answerText:"Differential Pressure Valve", isCorrect: false},
        {answerText:"Diesel Powered Vehicle", isCorrect: false},
        {answerText:"Diver Propulsion Vehicle", isCorrect: false},
        {answerText:"Depth Pressure Valve", isCorrect: true},
    ]
},
    ]
	
];

app.get('/refresher', (req, res) => res.send(trivia.refresher));
app.get('/acronym', (req, res) => res.send(trivia.acronym));




const PORT = 7000;

app.listen(PORT, console.log(`SERVER RUNNING ON ${PORT}`.green.bold));
