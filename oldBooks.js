function oldBooks(input){
    let index = 0;
    let targetBook = input[index];
    index++;
    let counter = 0;
    let bookFound = false;
    let currentBook = input[index];
    while(bookFound === false){
        
        if(currentBook === targetBook){
            console.log(`You checked ${counter} books and found it.`);
            bookFound = true;
            break;
        }
        if(currentBook === 'No More Books'){
            break;
        }
        counter++;
        index++
        currentBook = input[index];
        
    }
    if (bookFound === false){
        console.log(`The book you search is not here!`);
        console.log(`You checked ${counter} books.`);
    }
}

oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])


