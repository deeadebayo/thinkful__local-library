function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1)
}

function getTotalNumberOfBorrows(account, books) {
  let counter = 0;
  books.forEach(book => book.borrows.forEach(borrowed => borrowed.id === account.id ? counter++ : counter+0))
  return counter
}

function getBooksPossessedByAccount(account, books, authors) {
  return (books.filter(book => book.borrows[0].id === account.id)
  .map(book => {
    return {
      ...book,
      author: authors.find(guy => guy.id === book.authorId)
    }
  }))
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};


// let posessed = books.filter(book => {
  //   let borrowed = book.borrows.filter(borrow => !borrow.returned)
  //   console.log(borrowed, Array.isArray(borrowed))
  // })
  // console.log(Array.isArray(posessed))
  // console.log(posessed)