function findAuthorById(authors, id) {
  return authors.find(author => author.id === id)
}

function findBookById(books, id) {
  return books.find(book => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  const isReturned = [], isNotReturned=[];
  books.map(book => book.borrows[0].returned ? isReturned.push(book) : isNotReturned.push(book))
  return [isNotReturned, isReturned]
}

function getBorrowersForBook(book, accounts) {
  //return array of all transactions from a book's borrows key with the person who borrowed it and the returned key
  return book.borrows.map(borrower => {
    return {
      ...borrower,
      ...accounts.find(account => account.id===borrower.id)
    }
  }).splice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
