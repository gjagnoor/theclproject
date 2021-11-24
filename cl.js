#!/usr/bin/env node

const chalk = require("chalk");
const { exec } = require("child_process");
var figlet = require("figlet");

figlet("The Project", function (err, data) {
    if (err) {
        return;
    }
    console.log(chalk.whiteBright(`${data}`));
});
if (process.argv[2]) {
    if (process.argv[2].slice(5) === "d") {
        exec(
            'find . -type d | sed "s|[^/]*/|- |g"',
            (error, stdout, stderr) => {
                if (error) {
                    console.log(chalk.red(`error: ${error.message}`));
                    return;
                }
                if (stderr) {
                    console.log(chalk.red(`stderr: ${stderr}`));
                    return;
                }
                console.log(chalk.green(`stdout: ${stdout}`));
            }
        );
    } else if (process.argv[2].slice(5) === "f") {
        exec('find . | sed "s|[^/]*/|- |g"', (error, stdout, stderr) => {
            if (error) {
                console.log(chalk.red(`error: ${error.message}`));
                return;
            }
            if (stderr) {
                console.log(chalk.red(`stderr: ${stderr}`));
                return;
            }
            console.log(chalk.green(`stdout: ${stdout}`));
        });
    }
} else {
    exec('find . -type d | sed "s|[^/]*/|- |g"', (error, stdout, stderr) => {
        if (error) {
            console.log(chalk.red(`error: ${error.message}`));
            return;
        }
        if (stderr) {
            console.log(chalk.red(`stderr: ${stderr}`));
            return;
        }
        console.log(chalk.green(`stdout: ${stdout}`));
    });
}
