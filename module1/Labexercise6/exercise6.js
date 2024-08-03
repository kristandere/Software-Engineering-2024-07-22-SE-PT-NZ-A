
const book = {
    "title" : "Little Sammy",
    "description" : "A book about it is what it is",
    "author" : "Sammy",
    "number of pages" : 987,
    "table of content pages" : 100
    }

    console.log(book.title);
    console.log(book.description); 
    console.log(book["author"]);
    book.description = "a book about life"; 
    book.location = 'Pacific Ocean'; 

    console.log(book)