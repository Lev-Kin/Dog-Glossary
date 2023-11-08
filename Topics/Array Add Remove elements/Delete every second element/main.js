function deleteEverySecond(){
    const myArray = ['John', 'Kate', 'Igor', 'Sam', 'Stan', 'William'];

    return myArray.filter((element, index) => index % 2 === 0);

}