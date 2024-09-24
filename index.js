var readlineSync = require('readline-sync');

var boyName = "";
var girlName = "";

crushOnSomeone()
.then(function(crushName){
    console.log(`All the best with ${crushName}.`);
    return proposeTheCrush(crushName);
})
.then(function(yesORNo){
    console.log(`${girlName} said Yes 💘`);
    return wantToMarry(yesORNo);
})
.then(function(greetings){
    return loveLifeAnalyze(greetings);
})
.catch(function(err){
    console.error(err);
});

function crushOnSomeone(){
    return new Promise((resolve, reject) => {
        boyName = readlineSync.question('May I have your name? ');
        girlName = readlineSync.question('So, What is her name? 😀')

        const isSingle = readlineSync.question('Is she single?').toLowerCase();
        if(isSingle === "no"){
            var error = new Error("Sorry man, she is taken 😥");
            reject(error);
        }
        console.log("Don't wait go and ask her out 😉");
        resolve(girlName);
    });
}
// love her? -> propose her 
function proposeTheCrush(girlName){
    return new Promise((resolve, reject) => {
        const izhaareBayan = readlineSync.question(`Hey, ${girlName} I love you ❤. Will you go out with me?`);
        console.log(`${girlName}: Hmm...`);
        if(izhaareBayan.toLowerCase() === 'yes'){
            setTimeout(() => {
                console.log("I love you too!");
                console.log(`${boyName}: 😳`);
                const marryMe = readlineSync.question("Will you marry me? 🌹🥺");
                resolve(marryMe.toLowerCase() === "yes");
            }, 3000);
        }else{
            const error = new Error("Sorry, man she said NO 😭");
            reject(error);
        }
    });
}

// is valid to Marry? -> marry her
function wantToMarry(wantToMarry){
    return new Promise((resolve, reject) => {
        if(wantToMarry){
            if(!legalToMarriage()){
                reject("Not Legal for marriage! 👨‍⚖️,  why not date each other till then");
            }

            console.log(`You are married to ${girlName} 🎉🤗`);
            resolve("Wish you happy married life");
        }
        else{
            reject("Sadly 🥱, She don't want to marry you 💔");
        }
    });
}
// love life analysis
function loveLifeAnalyze(greetings){
    return new Promise((resolve, reject) => {
        console.log(greetings);
        const loveTest = readlineSync.question(`${girlName} are you happy with ${boyName}?`);
        if(loveTest.toLowerCase() === "yes"){
            console.log(`Congratulations🎊, ${boyName} you had successful love life with your crush ${girlName}.`);
            resolve("Best of luck! 😁");
        }else{
            reject(`Better luck next time in love ${boyName} 😏💞`);
        }
    })
}

function legalToMarriage(){
    const girlAge = readlineSync.questionInt("your age ma'am?");
    const boyAge = readlineSync.questionInt("And your age sir?");

    if(girlAge >= 18 && boyAge >= 21){
        return true;
    }
    return false;
}