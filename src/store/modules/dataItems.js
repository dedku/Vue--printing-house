import itemsData from '../../api/itemsData'

export default {
  namespaced: true,

  state: {
    sections: [],
    products: [],
    blogs: [],
    stats:[],
    customers: [],
    whywe: [],
    authPartner: []
  },
  mutations: {
    setData (state, allData) {
      state.sections = allData[0]
      state.products = allData[1]
      state.blogs = allData[2]
      state.stats = allData[3]
      state.customers = allData[4]
      state.whywe = allData[5]
      state.authPartner = allData[6]
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
    }
  }
}
