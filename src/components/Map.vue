<template>
  <div>
    <div id="event-handling">
      <p>Current Latitude: {{ startLocation.lat }}</p>
      <p>Current Longitude: {{ startLocation.lng }}</p>
      <input type="text" v-model="demolat" placeholder="Demo LAt" />
      <input type="text" v-model="demolng" placeholder="Demo LNg" />&nbsp;&nbsp;
      <button v-on:click="reverseMessage" class="btn btn-primary">
        Change Map Start position
      </button>
    </div>
    <center>
      <input
        type="number"
        v-model="txtlat"
        @change="fnset()"
        style="margin-top: 50px; width: 200px"
        placeholder="Latitude"
      />
      <input
        type="number"
        v-model="txtlng"
        @change="fnset()"
        style="margin-top: 50px; width: 200px"
        placeholder="Longitude"
      />
      <button
        @click="removemark()"
        class="btn btn-danger"
        style="height: 28px"
        v-if="showremove"
      >
        Remove Mark
      </button>
      <p style="color: red" v-if="errmsg">{{ errmsg }}</p>
      <hr />
      <gmap-map
        ref="mymap"
        :center="startLocation"
        :zoom="2"
        style="width: 800px; height: 500px"
      >
        <gmap-marker
          v-for="(item, key) in coordinates"
          :key="key"
          :position="getPosition(item)"
          :clickable="true"
        />
      </gmap-map>
      <hr />
    </center>
  </div>
</template>

<script>
export default {
  name: "Map",

  data() {
    return {
      message: null,
      message1: null,
      demolat: null,
      demolng: null,
      showremove: false,
      txtlat: null,
      txtlng: null,

      startLocation: {
        lat: null,
        lng: null,
      },
      coordinates: [
        //set the mark coordinates
        {
          lat: Number,
          lng: Number,
        },
      ],
      infoPosition: null,
      infoContent: null,
      infoOpened: false,
      infoCurrentKey: null,

      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
    };
  },
  mounted() {
    this.$getLocation({})
      .then((coordinates) => {
        this.startLocation = coordinates;
      })
      .catch((error) => alert(error));
  },
  methods: {
    reverseMessage() {
      //   this.message = this.demolat;
      //   this.message1 = this.demolng;
      if (this.demolat!=null && this.demolng != null) {
        this.startLocation.lat = this.demolat;
        this.startLocation.lng = this.demolng;
      }
      else
      {
          alert('Please select the Field');
      }

      //this.message = this.message.split("").reverse().join("");
    },
    getPosition: function (marker) {
      return {
        lat: parseFloat(marker.lat),
        lng: parseFloat(marker.lng),
      };
    },

    fnset: function () {
      this.showremove = true;
      this.coordinates.pop({
        lat: null,
        lng: null,
      });

      this.coordinates.push({
        lat: this.txtlat,
        lng: this.txtlng,
      });
    },

    removemark: function () {
      this.showremove = false;
      this.txtlat = null;
      this.txtlng = null;
      this.coordinates.pop({
        lat: null,
        lng: null,
      });
    },
  },
};
</script>