import { sectionsData } from './data/sections'
import { productsData } from './data/products'
import { blogsData } from './data/blogs'

const _allData = [
  sectionsData.header,
  productsData.products,
  blogsData.blogs,
  sectionsData.stats,
  sectionsData.customers,
  sectionsData.WhyWe,
  sectionsData.AuthPartner,
]
export default {
  getData (cb) {
    setTimeout(() => cb(_allData), 200)
  },
}