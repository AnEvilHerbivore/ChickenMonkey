const numList = [];
const multiple1 = 5;
const multiple2 = 7;
const word1 = "Chicken";
const word2 = "Monkey";

function printNum (number) {
    let compWord = "";
    if (number % multiple1 === 0 ) {
        compWord += word1;
    }
    if (number % multiple2 === 0) {
        compWord += word2;
    }
    if (compWord.length > 0) {
        return compWord;
    } else {
        return number;
    }
}


for (let i = 1; i <= 100; i++) {
    let value = printNum(i);
    numList.push(value);
    console.log(numList[i-1]);
}