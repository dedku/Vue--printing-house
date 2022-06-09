import { sectionsData } from './data/sections'
import { productsData } from './data/products'
import { blogsData } from './data/blogs'
import { booksData } from './data/books'

const _allData = [
  productsData.products,
  blogsData.blogs,
  booksData.books,
  sectionsData.header,
  sectionsData.stats,
  sectionsData.customers,
  sectionsData.WhyWe,
  sectionsData.AuthPartner,
]
export default {
  getData (cb) {
    setTimeout(() => cb(_allData), 800)
  },
}