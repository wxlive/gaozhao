import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from "../router/router.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    keywords:"",
    description:"",
    title:"",
  },
  mutations: {
    changeTKD(state,canshu){
      state.keywords = canshu.key_words
      state.description = canshu.description
      state.title = canshu.title

      window.document.title += state.title 
      document.querySelector('meta[name="keywords"]').setAttribute('content', state.keywords)
      document.querySelector('meta[name="description"]').setAttribute('content',state.description)
    }
  },
  actions: {
    getSEO({commit}) {
      axios.get("/api/pc/getSeo",{})
      .then(res => {
        commit('changeTKD',res.data)
      }).catch((err) =>{
          console.log(err);
      })
  }
  },
  modules: {
  }
})
