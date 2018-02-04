import Vue from 'vue'
import App from './App.vue'

var component1 = {
  template: '<p>Component1</p>'
}

var component2 = {
  template: '<p>Component2</p>'
}

new Vue({
  el: '#app',
  components: {
    'component1': component1,
    'component2': component2
  }
 // render: h => h(App)
})
