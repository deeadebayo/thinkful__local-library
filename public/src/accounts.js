function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1)
}

function getTotalNumberOfBorrows(account, books) {
  return books.map(book => book.borrows).reduce((acc, book) => {
    acc.push(...book)
    return acc
  }, []).filter(borrowed => borrowed.id === account.id).length
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