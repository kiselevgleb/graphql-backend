const initialDB = [
{
  title: '123',
  author: '1'
},
{
    title: '234',
    author: '2'
  }
]
const booksDB = new Map(initialDB);

export const getBooks = () => booksDB;