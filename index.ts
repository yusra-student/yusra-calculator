#!usr/bin/env-Node


import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation"
import { log } from "console";
const sleep =()=>{
    return new Promise((res)=>{
        setTimeout(res,2000)
    })
}



async function welcome() {
     let rainbowtitle=chalkanimation.rainbow('lets start calculation');
     await sleep ();
     rainbowtitle.stop();
    console.log(`
   _____________________
   |  _________________  |
   | | JO           0. | |
   | |_________________| |
   |  ___ ___ ___   ___  |
   | | 7 | 8 | 9 | | + | |
   | |___|___|___| |___| |
   | | 4 | 5 | 6 | | - | |
   | |___|___|___| |___| |
   | | 1 | 2 | 3 | | x | |
   | |___|___|___| |___| |
   | | . | 0 | = | | / | |
   | |___|___|___| |___| |
   |_____________________|`);
    

}
welcome();


async function askQuestion() {
    
const ans =await inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type:"list",
        name:"operator",
        message:"which operator you want to performance?/n",
        choices:["addition","subtraction","multiplication","division"]
    },
    {
        type:"number",
        name:"num1",
        message:"enter number 1:"
    },
    {
        type:"number",
        name:"num2",
        message:"enter number 2:"
    }
]);
  
    if
    (ans.operator=="addition"){
        console.log(`chalk.green${ans.num1}+ ${ans.num2}=${ans.num1+ans.num2}`);
        
    }
    else if
    (ans.operator=="subtraction"){
        console.log(`chalk.red${ans.num1}- ${ans.num2}=${ans.num1-ans.num2}`);
    }
    else if
    (ans.operator=="multiplication"){
        console.log(`chalk.blue${ans.num1}* ${ans.num2}=${ans.num1*ans.num2}`);
    }
    else if
    (ans.operator=="division"){
        console.log(`chalk.yellow${ans.num1}/ ${ans.num2}=${ans.num1/ans.num2}`);
    
  }

  };

//askQuestion();
async function startagain(){
    do{
        await askQuestion();
         var again=await inquirer
        .prompt({
            type:"input",
            name:"restart",
            message:"Do you want to continue? press y or n:"
        })
    }while(again.restart =='y'||again.restart =='Y'||again.restart =='yes'||again.restart =='YES')
}

function then(arg0: (answers: any) => void) {
    throw new Error("Function not implemented.");
}
startagain();
