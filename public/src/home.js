function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  return books.filter(book => !book.borrows[0].returned).length
}

function getMostCommonGenres(books) {
  let genres = []
  books.forEach(book => {
    if(!genres.some(genre => genre.name === book.genre)) {
      genres.push({'name': book.genre, 'count': 1})
    } else {
      genres.find(genre => genre.name === book.genre).count++
    }
  })

  return genres.sort((genreA, genreB) => genreA.count < genreB.count ? 1 : -1).splice(0, 5)
}

function getMostPopularBooks(books) {
  return books.map(book => ({'name': book.title, 'count': book.borrows.length})).sort((bookA, bookB) => bookA.count < bookB.count ? 1 : -1).splice(0, 5)
}

function getMostPopularAuthors(books, authors) {
  let popularAuthors = [];

  books.forEach(book => {
    if(!popularAuthors.some(author => author.id === book.authorId)) {
      popularAuthors.push({'id': book.authorId, 'count': book.borrows.length})
    } else {
      popularAuthors.find(author => author.id === book.authorId).count+=book.borrows.length
    }
  })
  
  return popularAuthors.map(entryId => {
    let {first, last} = authors.find(author => author.id === entryId.id).name
    return {
      'name': `${first} ${last}`,
      'count': entryId.count
  }
  }).sort((authorA, authorB) => authorA.count < authorB.count ? 1 : -1).splice(0, 5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
