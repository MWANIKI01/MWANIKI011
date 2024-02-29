<template>
  <v-row>
    <v-col cols="3" sm="3" v-for="(feature, i) in featured" :key="i">
      <v-card class="mx-auto my-12 pb-4" max-width="374">
        <v-img height="250" class="mx-4" :src="feature.img"></v-img>

        <v-card-item class="mt-n4">
          <v-card-title class="text-center">{{ feature.title }}</v-card-title>
        </v-card-item>

        <v-card-text>
          <div class="text-center">
            {{ feature.bio }}
          </div>
          <v-row align="center" class="mx-0 mt-2">
            <v-rating
              :model-value="4.5"
              color="amber"
              density="compact"
              half-increments
              readonly
              size="small"
            ></v-rating>
            <v-spacer></v-spacer>
            <div class="text-grey ms-4">{{ feature.price }}</div>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    featured: [
      {
        img: "image/5.png",
        title:"Iphone 14",
        price: "$ 93.358.01",
        bio: " Id aliqua quis pariatur velit sunt in. Nostrud velit irure pariatur ipsum proident velit aliqua. ",
      },
      {
        img: "image/6.png",
        title: "Lenovo Pro",
        price: "$ 93.358.01",
        bio: " Id aliqua quis pariatur velit sunt in. Nostrud velit irure pariatur ipsum proident velit aliqua. ",
      },
      {
        img: "image/7.png",
        title: "Appel Mac Book Pro",
        price: "$ 93.358.01",
        bio: " Id aliqua quis pariatur velit sunt in. Nostrud velit irure pariatur ipsum proident velit aliqua. ",
      },
      {
        img: "image/8.png",
        title: "Appel Mac Book Pro",
        price: "$ 93.358.01",
        bio: " Id aliqua quis pariatur velit sunt in. Nostrud velit irure pariatur ipsum proident velit aliqua. ",
      },
    ],
  }),
};
</script>

<style></style>
