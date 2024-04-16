#!/usr/bin/env node
//Import the 'Inquirer' 
import inquirer from 'inquirer'
import chalk from 'chalk'
console.log(chalk.blue("Welcome to Word Counter!"))
let  answers: {
    Sentence : string
} = await inquirer.prompt(
    [
        {
            name: "Sentence",
            type: "input",
            message : chalk.green("Enter Your Sentence to Count the Word.")
        }
    ]
);

const words = answers.Sentence.trim().split(" ")

//Print the array of words to the console
console.log(words);

//Print the word count of the sentence to console
console.log(chalk.yellow(`Your Sentence word count is ${words.length}`));