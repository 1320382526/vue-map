<template>
    <el-amap vid="amapDemo" :zoom="zoom">
        <el-amap-marker v-for="marker in markers" :position="marker.position" :vid="marker.id" :key="marker.id"></el-amap-marker>
    </el-amap>
</template>



<script>

import { getAllData } from "../api/mapData";
import { mapState } from "vuex";


export default {
  data() {
    return {
      
    };
  },
  computed: {
    ...mapState(["zoom", "markers"])
  },
  methods: {

  },
  mounted() {
   
    const self = this;
    getAllData(this.$route.params.id).then(res => {
      if (res.data.data.length > 0) {
        self.$store.dispatch(
          "setMarkers",
          res.data.data.map(item => {
            return {
              ...item,
              position: item.point.split(",")
            };
          })
        );
      } else {
        alert("没有任何点位数据！");
      }
    });

  }
};
</script>

<style lang="css">
</style>