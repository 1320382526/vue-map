<template>
    <div class="amap-page-container">
      <el-amap
        vid="amapDemo"  
        :zoom="zoom"
        class="amap-demo"
        :events="events">
        <el-amap-marker v-for="(marker, index) in markers" :icon="marker.icon" :position="marker.position" :content="marker.content" :events="marker.events" :key="index"></el-amap-marker>
      </el-amap>
    </div>
</template>


<script>
import { getAllData } from "../api/mapData";
import { mapState } from "vuex";


    export default {
      data: function() {
        let self = this;
        return {
          markerRefs: [],
          events: {
            init(o) {
              setTimeout(() => {
                new AMap.MarkerClusterer(o, self.markerRefs,{
                  gridSize: 80,
                  renderCluserMarker: self._renderCluserMarker
                });
              }, 1000);
            }
          }
        };
      },
      computed: {
        ...mapState(["zoom", "markers"])
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
                  content: null,
                  position: item.point.split(","),
                  events: {
                    init(o) {
                      self.markerRefs.push(o);
                    }
                  }
                };
              })
            );
          } else {
            alert("没有任何点位数据！");
          }
        });

      },

      methods: {
        _renderCluserMarker(context) {
          const count = this.markers.length;
          let factor = Math.pow(context.count/count, 1/18)
          let div = document.createElement('div');
          let Hue = 180 - factor* 180;
          let bgColor = 'hsla('+Hue+',100%,50%,0.7)';
          let fontColor = 'hsla('+Hue+',100%,20%,1)';
          let borderColor = 'hsla('+Hue+',100%,40%,1)';
          let shadowColor = 'hsla('+Hue+',100%,50%,1)';
          div.style.backgroundColor = bgColor
          let size = Math.round(30 + Math.pow(context.count/count,1/5) * 20);
          div.style.width = div.style.height = size+'px';
          div.style.border = 'solid 1px '+ borderColor;
          div.style.borderRadius = size/2 + 'px';
          div.style.boxShadow = '0 0 1px '+ shadowColor;
          div.innerHTML = context.count;
          div.style.lineHeight = size+'px';
          div.style.color = fontColor;
          div.style.fontSize = '14px';
          div.style.textAlign = 'center';
          context.marker.setOffset(new AMap.Pixel(-size/2,-size/2));
          context.marker.setContent(div)
        }
      }
    };
</script>

<style>
    .amap-page-container,.amap-demo {
      height: 100%;
    }
</style>