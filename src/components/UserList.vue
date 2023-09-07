<template>
  <div>
    <h2>test</h2>
    <table>
      <thead>
      <tr>
        <th>id</th>
        <th>name</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export default {
  name: 'UserList',
  data () {
    return {
      users: []
    }
  },
  created () {
    Vue.http.get('/demo/find?value=0')
      .then(response => {
        this.users = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>

</style>
