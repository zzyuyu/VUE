import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import TimeEntries from './components/TimeEntries.vue'

Vue.use(VueRouter)

var routes=[
   {path:'/time-entries',component:TimeEntries},
   {path:'/time-entries/log-time',component:TimeEntries}
];

var router=new VueRouter({
	routes
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
