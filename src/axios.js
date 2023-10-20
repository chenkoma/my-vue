import axios from 'axios'
import Element from 'element-ui'
import router from './router'
import store from './store'

axios.defaults.baseURL = 'http://localhost:8081'

// 前置拦截
axios.interceptors.request.use(config => {
  return config
})

function greet () {
  var promise = new Promise(function (resolve, reject) {
    var greet = 'hello world'
    resolve(greet)
  })
  return promise
}
greet().then(v => {
  console.log(v)
})

axios.interceptors.request.use(response => {
  let res = response.data

  console.log('=================')
  console.log(res)
  console.log('=================')

  if (res.code === 200) {
    return response
  } else {
    Element.Message.error('错了哦,这是一条错误信息', {duration: 3 * 1000})

    return Promise.reject(response.data.msg)
  }
},
error => {
  console.log(error)
  if (error.response.data) {
    error.message = error.response.data.msg
  }

  if (error.response.status === 401) {
    store.commit('REMOVE_INFO')
    router.push('login')
  }

  Element.Message.error(error.message, {duration: 3 * 1000})
  return Promise.reject(error)
}
)
