<template>
   <v-row style="background-color: #080A21;">
              <v-col cols="3" sm="3" >
                <v-card class="mx-auto my-12 pb-4" max-width="374" flat color="#080A21">


                  <v-card-item class="top-day">
                    <v-card-title class="text-center"
                      >Deals of the day</v-card-title
                    >
                  </v-card-item>

                  <v-card-text>
                    <div class="text-center">
                      <h1>08:32:29</h1>
                    </div>

                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="3" sm="3" v-for="(client, i) in clients" :key="i">
                <v-card class="mx-auto my-12 pb-4" max-width="374">
                  <v-img
                    height="250"
                    class="mx-4"
                    :src="client.img"
                  ></v-img>

                  <v-card-item class="mt-n4">
                    <v-card-title class="text-center"
                      >{{client.title}}</v-card-title
                    >
                  </v-card-item>

                  <v-card-text>
                    <div class="text-center">
                      {{client.bio}}
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
                      <div class="text-grey ms-4">{{client.price}}</div>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>

            </v-row>
</template>

<script>
export default {
  data : ()=> ({
  clients: [
      {
        img: "image/9.png",
        title: "Appel Mac Book Pro",
        price: "$ 93.358.01",
        bio: "  Id aliqua quis pariatur velit sunt in. Nostrud velit irure pariatur ipsum proident velit aliqua. ",
      },
      {
        img: "image/10.png",
        title: "Appel Mac Book Pro",
        price: "$ 93.358.01",
        bio: "  Id aliqua quis pariatur velit sunt in. Nostrud velit irure pariatur ipsum proident velit aliqua. ",
      },
      {
        img: "image/11.jpg",
        title: "Appel Mac Book Pro",
        price: "$ 93.358.01",
        bio: "  Id aliqua quis pariatur velit sunt in. Nostrud velit irure pariatur ipsum proident velit aliqua. ",
      },

    ]
})
}
</script>

<style>
.top-day {
  margin-top: 120px;
}
</style>
