let isCorrectText = true;

let checkingText = new Promise((resolve) => {
    if (isCorrectText){
        resolve('Your text is correct');
    }
});
