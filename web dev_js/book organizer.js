let books=[
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald"
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960

    },
    {
        title: "1984",
        author: "George Orwell",
        year: 1949
    }
];  
function sortByYear (book1, book2) {
    if (book1.year < book2.year) {
        return -1;
    }
    if (book1.year > book2.year) {
        return 1;
    }
    return 0;
}
let filteredBooks = books.filter(book => book.year !== undefined);
filteredBooks.sort(sortByYear);
console.log(filteredBooks);