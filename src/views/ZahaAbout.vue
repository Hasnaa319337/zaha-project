<template>
  <section class="about">
    <offer-card />
    <div class="container">
      <div class="row">
        <!-- logo -->
        <div class="col-lg-6 col-md-6 col-xs-12">
          <div class="aboutlogo">
            <img :src="image" />
          </div>
        </div>
        <!-- info -->
        <div class="col-lg-6 col-md-6 col-xs-12">
          <div v-html="info" class="info"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      info: null,
      image: null,
    };
  },
  methods: {
    aboutdata() {
        axios({
            method: "GET",
            url: "https://backend.zahaaksa.com/api/general/settings",
        })
        .then((res) => {
          this.info = res.data.data.about;
          this.image = res.data.data.about_image;
          console.log(this.info);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  created() {
    this.aboutdata();
  },
};
</script>

<style>
.info {
  direction: rtl;
}
.info h2 {
  color: #52004a;
  margin: 20px 0;
}
.info p {
  text-align: justify;
}
</style>
