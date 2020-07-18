import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import VueAMap from 'vue-amap'
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
    key: '7b6fd164dc929b5075f7511d1ffefce0',
    plugin: ['AMap.MarkerClusterer', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PlaceSearch', 'AMap.Geolocation', 'AMap.Geocoder'],
    v: '1.4.4',
    uiVersion: '1.0'
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
