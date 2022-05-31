import itemsData from '../../api/itemsData'

export default {
  namespaced: true,

  state: {
    header: [],
    products: [],
    blogs: [],
    stats:[],
    customers: [],
    whywe: [],
    authPartner: [],
    books: []
  },
  mutations: {
    setData (state, allData) {
      state.products = allData[0]
      state.blogs = allData[1]
      state.books = allData[2]
      state.header = allData[3]
      state.stats = allData[4]
      state.customers = allData[5]
      state.whywe = allData[6]
      state.authPartner = allData[7]
    }
  },
  actions: {
    fetchData({commit}) {
      return new Promise((resolve) => {
        itemsData.getData(allData => {
          commit('setData', allData)
          resolve()
        })
      })
    }
  },
  getters:{
    headerProducts (state) {
      return state.products.filter(product => product.header)
    },
    webProducts (state) {
      return state.products.filter(product => product.produkty)
    },
  }
}
