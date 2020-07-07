<template>
  <div class="dashboard">
    <div class="left">
      <div class="chart1">
        <BorderBox title="报警">
          <div id="chart1"></div>
        </BorderBox>
      </div>
      <div class="chart2">
        <BorderBox>
          <div id="chart2"></div>
        </BorderBox>
      </div>
    </div>
    <div class="center">
      <!-- <BorderBox>
        
      </BorderBox>-->
      <baidu-map
        class="map"
        :center="map.center"
        :zoom="map.zoom"
        @ready="handler"
        :mapStyle="map.mapStyle"
      >
        <!--缩放-->
        <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
        <!--定位-->
        <bm-geolocation
          anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
          :showAddressBar="true"
          :autoLocation="true"
        ></bm-geolocation>
        <!--点-->
        <bm-marker
          :position="map.marker"
          @click="map.show=!map.show"
          animation="BMAP_ANIMATION_DROP"
        >
          <!-- 提示信息 -->
          <bm-info-window @close="infoWindowClose" @open="infoWindowOpen" :show="map.show">龙净环保排头园区</bm-info-window>
        </bm-marker>
      </baidu-map>
    </div>
    <div class="right">
      <div class="chart3">
        <BorderBox>
          <div id="chart3"></div>
        </BorderBox>
      </div>
      <div class="chart4">
        <BorderBox>
          <div id="chart4"></div>
        </BorderBox>
      </div>
    </div>
  </div>
</template>

<script>
import BorderBox from "../../components/BorderBox";
export default {
  name: "dashboard",
  components: {
    BorderBox
  },
  data() {
    return {
      map: {
        marker: { lng: 117.01201, lat: 25.098969 },
        center: { lng: 105.200945, lat: 33.658614 },

        zoom: 5,
        show: false,
        dragging: true,
        mapStyle: {
          styleJson: [
            {
              featureType: "land",
              elementType: "geometry",
              stylers: {
                color: "#104390ff",
                visibility: "on"
              }
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: {
                color: "#104390ff",
                visibility: "on"
              }
            },
            {
              featureType: "building",
              elementType: "geometry.fill",
              stylers: {
                color: "#053781ff",
                visibility: "on"
              }
            },
            {
              featureType: "building",
              elementType: "geometry.stroke",
              stylers: {
                color: "#002568ff",
                visibility: "on"
              }
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: {
                color: "#ade1f5ff",
                visibility: "on"
              }
            },
            {
              featureType: "village",
              elementType: "labels",
              stylers: {
                visibility: "off"
              }
            },
            {
              featureType: "town",
              elementType: "labels",
              stylers: {
                visibility: "off"
              }
            },
            {
              featureType: "district",
              elementType: "labels",
              stylers: {
                visibility: "off"
              }
            },
            {
              featureType: "country",
              elementType: "labels.text.fill",
              stylers: {
                color: "#ade1f5ff",
                visibility: "on"
              }
            },
            {
              featureType: "city",
              elementType: "labels.text.fill",
              stylers: {
                color: "#ade1f5ff",
                visibility: "on"
              }
            },
            {
              featureType: "continent",
              elementType: "labels.text.fill",
              stylers: {
                color: "#ade1f5ff",
                visibility: "on"
              }
            },
            {
              featureType: "poilabel",
              elementType: "labels",
              stylers: {
                visibility: "on"
              }
            },
            {
              featureType: "poilabel",
              elementType: "labels.icon",
              stylers: {
                visibility: "on"
              }
            },
            {
              featureType: "scenicspotslabel",
              elementType: "labels.icon",
              stylers: {
                visibility: "off"
              }
            },
            {
              featureType: "scenicspotslabel",
              elementType: "labels.text.fill",
              stylers: {
                color: "#ade1f5ff",
                visibility: "on"
              }
            },
            {
              featureType: "transportationlabel",
              elementType: "labels.text.fill",
              stylers: {
                color: "#ade1f5ff",
                visibility: "on"
              }
            },
            {
              featureType: "transportationlabel",
              elementType: "labels.icon",
              stylers: {
                visibility: "off"
              }
            },
            {
              featureType: "airportlabel",
              elementType: "labels.text.fill",
              stylers: {
                color: "#ade1f5ff",
                visibility: "on"
              }
            },
            {
              featureType: "airportlabel",
              elementType: "labels.icon",
              stylers: {
                visibility: "off"
              }
            },
            {
              featureType: "road",
              elementType: "geometry.fill",
              stylers: {
                color: "#2399edff",
                visibility: "on"
              }
            },
            {
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: {
                color: "#0576c5ff",
                visibility: "on"
              }
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: {
                weight: 3
              }
            },
            {
              featureType: "green",
              elementType: "geometry",
              stylers: {
                color: "#37a383ff",
                visibility: "on"
              }
            },
            {
              featureType: "scenicspots",
              elementType: "geometry",
              stylers: {
                color: "#104390ff",
                visibility: "on"
              }
            },
            {
              featureType: "scenicspots",
              elementType: "labels.text.fill",
              stylers: {
                color: "#ade1f5ff",
                visibility: "on"
              }
            },
            {
              featureType: "scenicspots",
              elementType: "labels.text.stroke",
              stylers: {
                weight: 1,
                color: "#646363ff",
                visibility: "on"
              }
            },
            {
              featureType: "continent",
              elementType: "labels.text.stroke",
              stylers: {
                color: "#646363ff",
                visibility: "on",
                weight: 1
              }
            },
            {
              featureType: "country",
              elementType: "labels.text.stroke",
              stylers: {
                color: "#646363ff",
                visibility: "on",
                weight: 1
              }
            },
            {
              featureType: "city",
              elementType: "labels.text.stroke",
              stylers: {
                color: "#646363ff",
                visibility: "on",
                weight: 1
              }
            },
            {
              featureType: "city",
              elementType: "labels.icon",
              stylers: {
                visibility: "off"
              }
            },
            {
              featureType: "scenicspotslabel",
              elementType: "labels.text.stroke",
              stylers: {
                color: "#646363ff",
                visibility: "on",
                weight: 1
              }
            },
            {
              featureType: "airportlabel",
              elementType: "labels.text.stroke",
              stylers: {
                color: "#646363ff",
                visibility: "on",
                weight: 1
              }
            },
            {
              featureType: "transportationlabel",
              elementType: "labels.text.stroke",
              stylers: {
                color: "#646363ff",
                visibility: "on",
                weight: 1
              }
            },
            {
              featureType: "railway",
              elementType: "geometry",
              stylers: {
                visibility: "off"
              }
            },
            {
              featureType: "subway",
              elementType: "geometry",
              stylers: {
                visibility: "off"
              }
            },
            {
              featureType: "highwaysign",
              elementType: "labels",
              stylers: {
                visibility: "off"
              }
            },
            {
              featureType: "nationalwaysign",
              elementType: "labels",
              stylers: {
                visibility: "off"
              }
            },
            {
              featureType: "nationalwaysign",
              elementType: "labels.icon",
              stylers: {
                visibility: "off"
              }
            },
            {
              featureType: "provincialwaysign",
              elementType: "labels",
              stylers: {
                visibility: "off"
              }
            },
            {
              featureType: "provincialwaysign",
              elementType: "labels.icon",
              stylers: {
                visibility: "off"
              }
            },
            {
              featureType: "tertiarywaysign",
              elementType: "labels",
              stylers: {
                visibility: "off"
              }
            },
            {
              featureType: "tertiarywaysign",
              elementType: "labels.icon",
              stylers: {
                visibility: "off"
              }
            },
            {
              featureType: "subwaylabel",
              elementType: "labels",
              stylers: {
                visibility: "off"
              }
            },
            {
              featureType: "subwaylabel",
              elementType: "labels.icon",
              stylers: {
                visibility: "off"
              }
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: {
                color: "#ade1f5ff",
                visibility: "on",
                weight: 90
              }
            },
            {
              featureType: "road",
              elementType: "labels.text.stroke",
              stylers: {
                color: "#646363ff",
                visibility: "on",
                weight: 1
              }
            },
            {
              featureType: "shopping",
              elementType: "geometry",
              stylers: {
                visibility: "off"
              }
            },
            {
              featureType: "scenicspots",
              elementType: "labels",
              stylers: {
                visibility: "on"
              }
            },
            {
              featureType: "scenicspotslabel",
              elementType: "labels",
              stylers: {
                visibility: "off"
              }
            },
            {
              featureType: "manmade",
              elementType: "geometry",
              stylers: {
                visibility: "off"
              }
            },
            {
              featureType: "manmade",
              elementType: "labels",
              stylers: {
                visibility: "off"
              }
            },
            {
              featureType: "highwaysign",
              elementType: "labels.icon",
              stylers: {
                visibility: "off"
              }
            },
            {
              featureType: "water",
              elementType: "labels.text.stroke",
              stylers: {
                color: "#37a38300",
                visibility: "on"
              }
            },
            {
              featureType: "road",
              stylers: {
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "6"
              }
            },
            {
              featureType: "road",
              stylers: {
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "7"
              }
            },
            {
              featureType: "road",
              stylers: {
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "8"
              }
            },
            {
              featureType: "road",
              stylers: {
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "9"
              }
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: {
                visibility: "off",
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "6"
              }
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: {
                visibility: "off",
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "7"
              }
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: {
                visibility: "off",
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "8"
              }
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: {
                visibility: "off",
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "9"
              }
            },
            {
              featureType: "road",
              elementType: "labels",
              stylers: {
                visibility: "off",
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "6"
              }
            },
            {
              featureType: "road",
              elementType: "labels",
              stylers: {
                visibility: "off",
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "7"
              }
            },
            {
              featureType: "road",
              elementType: "labels",
              stylers: {
                visibility: "off",
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "8"
              }
            },
            {
              featureType: "road",
              elementType: "labels",
              stylers: {
                visibility: "off",
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "9"
              }
            },
            {
              featureType: "road",
              elementType: "labels.text",
              stylers: {
                fontsize: 24
              }
            },
            {
              featureType: "highway",
              elementType: "labels.text.stroke",
              stylers: {
                color: "#646363ff",
                visibility: "on",
                weight: 1
              }
            },
            {
              featureType: "highway",
              elementType: "geometry.fill",
              stylers: {
                color: "#2399edff",
                visibility: "on"
              }
            },
            {
              featureType: "highway",
              elementType: "geometry.stroke",
              stylers: {
                color: "#1c4f7eff"
              }
            },
            {
              featureType: "highway",
              elementType: "labels.text.fill",
              stylers: {
                color: "#ade1f5ff",
                visibility: "on"
              }
            },
            {
              featureType: "highway",
              elementType: "geometry",
              stylers: {
                weight: 3
              }
            },
            {
              featureType: "nationalway",
              elementType: "geometry.fill",
              stylers: {
                color: "#2399edff",
                visibility: "on"
              }
            },
            {
              featureType: "nationalway",
              elementType: "geometry.stroke",
              stylers: {
                color: "#1c4f7eff"
              }
            },
            {
              featureType: "nationalway",
              elementType: "labels.text.fill",
              stylers: {
                color: "#ade1f5ff",
                visibility: "on"
              }
            },
            {
              featureType: "nationalway",
              elementType: "labels.text.stroke",
              stylers: {
                color: "#646363ff",
                visibility: "on",
                weight: 1
              }
            },
            {
              featureType: "nationalway",
              elementType: "geometry",
              stylers: {
                weight: 3
              }
            },
            {
              featureType: "provincialway",
              elementType: "geometry.fill",
              stylers: {
                color: "#2399edff",
                visibility: "on"
              }
            },
            {
              featureType: "cityhighway",
              elementType: "geometry.fill",
              stylers: {
                color: "#2399edff",
                visibility: "on"
              }
            },
            {
              featureType: "arterial",
              elementType: "geometry.fill",
              stylers: {
                color: "#2399edff",
                visibility: "on"
              }
            },
            {
              featureType: "tertiaryway",
              elementType: "geometry.fill",
              stylers: {
                color: "#2399edff",
                visibility: "on"
              }
            },
            {
              featureType: "fourlevelway",
              elementType: "geometry.fill",
              stylers: {
                color: "#2399edff",
                visibility: "on"
              }
            },
            {
              featureType: "local",
              elementType: "geometry.fill",
              stylers: {
                color: "#2399edff",
                visibility: "on"
              }
            },
            {
              featureType: "provincialway",
              elementType: "geometry.stroke",
              stylers: {
                color: "#0576c5ff",
                visibility: "on"
              }
            },
            {
              featureType: "cityhighway",
              elementType: "geometry.stroke",
              stylers: {
                color: "#0576c5ff",
                visibility: "on"
              }
            },
            {
              featureType: "arterial",
              elementType: "geometry.stroke",
              stylers: {
                color: "#0576c5ff",
                visibility: "on"
              }
            },
            {
              featureType: "tertiaryway",
              elementType: "geometry.stroke",
              stylers: {
                color: "#0576c5ff",
                visibility: "on"
              }
            },
            {
              featureType: "fourlevelway",
              elementType: "geometry.stroke",
              stylers: {
                color: "#0576c5ff",
                visibility: "on"
              }
            },
            {
              featureType: "local",
              elementType: "geometry.stroke",
              stylers: {
                color: "#0576c5ff",
                visibility: "on"
              }
            },
            {
              featureType: "local",
              elementType: "labels.text.fill",
              stylers: {
                color: "#ade1f5ff",
                visibility: "on"
              }
            },
            {
              featureType: "local",
              elementType: "labels.text.stroke",
              stylers: {
                color: "#646363ff",
                visibility: "on",
                weight: 1
              }
            },
            {
              featureType: "fourlevelway",
              elementType: "labels.text.fill",
              stylers: {
                color: "#ade1f5ff",
                visibility: "on"
              }
            },
            {
              featureType: "tertiaryway",
              elementType: "labels.text.fill",
              stylers: {
                color: "#ade1f5ff",
                visibility: "on"
              }
            },
            {
              featureType: "arterial",
              elementType: "labels.text.fill",
              stylers: {
                color: "#ade1f5ff",
                visibility: "on"
              }
            },
            {
              featureType: "cityhighway",
              elementType: "labels.text.fill",
              stylers: {
                color: "#ade1f5ff",
                visibility: "on"
              }
            },
            {
              featureType: "provincialway",
              elementType: "labels.text.fill",
              stylers: {
                color: "#ade1f5ff",
                visibility: "on"
              }
            },
            {
              featureType: "provincialway",
              elementType: "labels.text.stroke",
              stylers: {
                color: "#646363ff",
                visibility: "on",
                weight: 1
              }
            },
            {
              featureType: "cityhighway",
              elementType: "labels.text.stroke",
              stylers: {
                color: "#646363ff",
                visibility: "on",
                weight: 1
              }
            },
            {
              featureType: "arterial",
              elementType: "labels.text.stroke",
              stylers: {
                color: "#646363ff",
                visibility: "on",
                weight: 1
              }
            },
            {
              featureType: "tertiaryway",
              elementType: "labels.text.stroke",
              stylers: {
                color: "#646363ff",
                visibility: "on",
                weight: 1
              }
            },
            {
              featureType: "fourlevelway",
              elementType: "labels.text.stroke",
              stylers: {
                color: "#646363ff",
                visibility: "on",
                weight: 1
              }
            },
            {
              featureType: "fourlevelway",
              elementType: "geometry",
              stylers: {
                weight: 1
              }
            },
            {
              featureType: "tertiaryway",
              elementType: "geometry",
              stylers: {
                weight: 1
              }
            },
            {
              featureType: "local",
              elementType: "geometry",
              stylers: {
                weight: 1
              }
            },
            {
              featureType: "provincialway",
              elementType: "geometry",
              stylers: {
                weight: 3
              }
            },
            {
              featureType: "cityhighway",
              elementType: "geometry",
              stylers: {
                weight: 3
              }
            },
            {
              featureType: "arterial",
              elementType: "geometry",
              stylers: {
                weight: 3
              }
            },
            {
              featureType: "highway",
              stylers: {
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "6"
              }
            },
            {
              featureType: "highway",
              stylers: {
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "7"
              }
            },
            {
              featureType: "highway",
              stylers: {
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "8"
              }
            },
            {
              featureType: "highway",
              stylers: {
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "9"
              }
            },
            {
              featureType: "highway",
              elementType: "geometry",
              stylers: {
                visibility: "off",
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "6"
              }
            },
            {
              featureType: "highway",
              elementType: "geometry",
              stylers: {
                visibility: "off",
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "7"
              }
            },
            {
              featureType: "highway",
              elementType: "geometry",
              stylers: {
                visibility: "off",
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "8"
              }
            },
            {
              featureType: "highway",
              elementType: "geometry",
              stylers: {
                visibility: "off",
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "9"
              }
            },
            {
              featureType: "highway",
              elementType: "labels",
              stylers: {
                visibility: "off",
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "6"
              }
            },
            {
              featureType: "highway",
              elementType: "labels",
              stylers: {
                visibility: "off",
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "7"
              }
            },
            {
              featureType: "highway",
              elementType: "labels",
              stylers: {
                visibility: "off",
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "8"
              }
            },
            {
              featureType: "highway",
              elementType: "labels",
              stylers: {
                visibility: "off",
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "9"
              }
            },
            {
              featureType: "nationalway",
              stylers: {
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "6"
              }
            },
            {
              featureType: "nationalway",
              stylers: {
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "7"
              }
            },
            {
              featureType: "nationalway",
              stylers: {
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "8"
              }
            },
            {
              featureType: "nationalway",
              stylers: {
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "9"
              }
            },
            {
              featureType: "nationalway",
              elementType: "geometry",
              stylers: {
                visibility: "off",
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "6"
              }
            },
            {
              featureType: "nationalway",
              elementType: "geometry",
              stylers: {
                visibility: "off",
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "7"
              }
            },
            {
              featureType: "nationalway",
              elementType: "geometry",
              stylers: {
                visibility: "off",
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "8"
              }
            },
            {
              featureType: "nationalway",
              elementType: "geometry",
              stylers: {
                visibility: "off",
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "9"
              }
            },
            {
              featureType: "nationalway",
              elementType: "labels",
              stylers: {
                visibility: "off",
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "6"
              }
            },
            {
              featureType: "nationalway",
              elementType: "labels",
              stylers: {
                visibility: "off",
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "7"
              }
            },
            {
              featureType: "nationalway",
              elementType: "labels",
              stylers: {
                visibility: "off",
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "8"
              }
            },
            {
              featureType: "nationalway",
              elementType: "labels",
              stylers: {
                visibility: "off",
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "9"
              }
            },
            {
              featureType: "provincialway",
              stylers: {
                curZoomRegionId: "0",
                curZoomRegion: "8,10",
                level: "8"
              }
            },
            {
              featureType: "provincialway",
              stylers: {
                curZoomRegionId: "0",
                curZoomRegion: "8,10",
                level: "9"
              }
            },
            {
              featureType: "provincialway",
              elementType: "geometry",
              stylers: {
                visibility: "off",
                curZoomRegionId: "0",
                curZoomRegion: "8,10",
                level: "8"
              }
            },
            {
              featureType: "provincialway",
              elementType: "geometry",
              stylers: {
                visibility: "off",
                curZoomRegionId: "0",
                curZoomRegion: "8,10",
                level: "9"
              }
            },
            {
              featureType: "provincialway",
              elementType: "labels",
              stylers: {
                visibility: "off",
                curZoomRegionId: "0",
                curZoomRegion: "8,10",
                level: "8"
              }
            },
            {
              featureType: "provincialway",
              elementType: "labels",
              stylers: {
                visibility: "off",
                curZoomRegionId: "0",
                curZoomRegion: "8,10",
                level: "9"
              }
            },
            {
              featureType: "cityhighway",
              stylers: {
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "6"
              }
            },
            {
              featureType: "cityhighway",
              stylers: {
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "7"
              }
            },
            {
              featureType: "cityhighway",
              stylers: {
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "8"
              }
            },
            {
              featureType: "cityhighway",
              stylers: {
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "9"
              }
            },
            {
              featureType: "cityhighway",
              elementType: "geometry",
              stylers: {
                visibility: "off",
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "6"
              }
            },
            {
              featureType: "cityhighway",
              elementType: "geometry",
              stylers: {
                visibility: "off",
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "7"
              }
            },
            {
              featureType: "cityhighway",
              elementType: "geometry",
              stylers: {
                visibility: "off",
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "8"
              }
            },
            {
              featureType: "cityhighway",
              elementType: "geometry",
              stylers: {
                visibility: "off",
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "9"
              }
            },
            {
              featureType: "cityhighway",
              elementType: "labels",
              stylers: {
                visibility: "off",
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "6"
              }
            },
            {
              featureType: "cityhighway",
              elementType: "labels",
              stylers: {
                visibility: "off",
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "7"
              }
            },
            {
              featureType: "cityhighway",
              elementType: "labels",
              stylers: {
                visibility: "off",
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "8"
              }
            },
            {
              featureType: "cityhighway",
              elementType: "labels",
              stylers: {
                visibility: "off",
                curZoomRegionId: "0",
                curZoomRegion: "6,9",
                level: "9"
              }
            },
            {
              featureType: "arterial",
              stylers: {
                curZoomRegionId: "0",
                curZoomRegion: "9,9",
                level: "9"
              }
            },
            {
              featureType: "arterial",
              elementType: "geometry",
              stylers: {
                visibility: "off",
                curZoomRegionId: "0",
                curZoomRegion: "9,9",
                level: "9"
              }
            },
            {
              featureType: "arterial",
              elementType: "labels",
              stylers: {
                visibility: "off",
                curZoomRegionId: "0",
                curZoomRegion: "9,9",
                level: "9"
              }
            }
          ]
        }
      }
    };
  },
  methods: {
    infoWindowClose() {
      this.map.show = false;
    },
    infoWindowOpen() {
      this.map.show = true;
    },
    // eslint-disable-next-line no-unused-vars
    handler({ BMap, map }) {
      // eslint-disable-next-line no-unused-vars
      let me = this;
      // console.log(BMap, map);
      // 鼠标缩放
      map.enableScrollWheelZoom(true);

      // 点击事件获取经纬度
      map.addEventListener("click", function(e) {
        console.log(e.point.lng, e.point.lat);
      });
    }
  },
  mounted() {
    let self = this;
    setTimeout(() => {
      self.map.center = self.map.marker;
      self.map.zoom = 17;
    }, 2000);
  },
  created() {}
};
</script>

<style lang="less">
.dashboard {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "left center right";

  .left {
    // background-color: aqua;
    grid-area: left;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr;
    grid-template-areas:
      "chart1"
      "chart2";
    .chart1 {
      grid-area: chart1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .chart2 {
      grid-area: chart2;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .anchorBL {
    display: none;
  }
  .center {
    grid-area: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid #2399ed;
    overflow: hidden;
    border-radius: 50px;
    box-shadow: 2px 2px 10px 1px #111;
    margin: 5px;
    opacity: 0.8;
    .map {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: inset 2px 2px 10px 1px #111;
    }
  }
  .right {
    grid-area: right;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "chart3"
      "chart4";
    .chart3 {
      grid-area: chart3;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .chart4 {
      grid-area: chart4;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  #chart1,
  #chart2,
  #chart3,
  #chart4 {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

/*地图标题*/
.BMap_bubble_title {
  color: white;
  font-size: 13px;
  font-weight: bold;
  text-align: left;
  padding-left: 5px;
  padding-top: 5px;
  border-bottom: 1px solid gray;
  background-color: #0066b3;
}
/* 消息内容 */
.BMap_bubble_content {
  background-color: white;
  padding-left: 5px;
  padding-top: 5px;
  padding-bottom: 10px;
}
/* 内容 */
.BMap_pop div:nth-child(9) {
  top: 35px !important;
  border-radius: 7px;
}
/* 左上角删除按键 */
.BMap_pop img {
  top: 43px !important;
  left: 215px !important;
}
.BMap_top {
  display: none;
}
.BMap_bottom {
  display: none;
}
.BMap_center {
  display: none;
}
/* 隐藏边角 */

.BMap_pop div:nth-child(1) div {
  display: none;
}
.BMap_pop div:nth-child(3) {
  display: none;
}

.BMap_pop div:nth-child(5) {
  display: none;
}

.BMap_pop div:nth-child(7) {
  display: none;
}
@media screen and (max-width: 900px) {
  .dashboard {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "center";
    .left {
      display: none;
    }
    .right {
      display: none;
    }
  }
}
</style>