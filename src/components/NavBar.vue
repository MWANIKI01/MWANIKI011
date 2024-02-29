<template>
  <v-app-bar flat  style="position: inherit;">
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-app-bar-title class="title" style="display: inline-block; vertical-align: top;">Kabesh shop</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-text-field @click:append="search" class="search" style="display:block; vertical-align: top;"
      v-model="search"
      density="compact"
      variant="solo"
      label="Search products"
      single-line
      hide-detailss
      flat
    > <v-btn @click="search" class="iconSearch" append-icon="mdi-magnify"></v-btn></v-text-field>
    <v-spacer></v-spacer>
    <v-btn prepend-icon="mdi mdi-download-circle-outline" >
      <template v-slot:prepend>
        <v-icon color="success"></v-icon>
      </template>
      <p class="download"> Download App</p>  
    </v-btn>
    <v-btn to="/SignupForm" class="sign">Sign Up</v-btn>
    <v-btn to="/loginForm" class="log">Login</v-btn>
  </v-app-bar>
  <v-drawer class="sidebar">
  <v-navigation-drawer v-model="drawer" absolute temporary >
    <v-list>
      <v-list-item v-for="itemList in itemLists" :key="itemList.title" link>
        <v-list-item-content>
          <v-list-item-title>{{ itemList.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</v-drawer>
  <!-- Display the filtered items -->
  <div v-if="searchedItems.length">
    <h2>Searched Items</h2>
    <ul>
      <li v-for="item in searchedItems" :key="item.title">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const drawer = ref(false);
    const search = ref('');
    const itemLists = ref([
      { title: 'Home' },
      { title: 'About' },
      { title: 'Contact' },
      { title: 'Contact' },
      { title: 'Contact' },
      { title: 'Contact' },
    ]);
    const items = ref([
      { title: "Appel Mac Book Pro",},
      { title: "Samsung Galaxy S21 Ultra"},
      { title: "Iphone 14",},
      { title: "Lenovo Mac Book Pro",}
    ]);

    const searchedItems = computed(() => {
      if (search.value) {
        return items.value.filter(item => item.title.toLowerCase().includes(search.value.toLowerCase()));
      } else {
        return [];
      }
    });

    return {
      drawer,
      search,
      itemLists,
      items,
      searchedItems,
    };
  },
};
</script>


<style>
@media screen and (max-width: 2000px){
  .iconSearch{
  display:none;
}
.search{
  display: block;
}
}
@media screen and (max-width: 1400px){

.title{
  font-size : 15px;
}
.download{
  font-size: 15px;
}
.iconSearch{
  display:none;
}
}

@media screen and (max-width: 960px){
  .download{
  font-size: 11px;
}
 .sign{
  font-size: 11px;
}
.log{
  font-size:11px;
}
.iconSearch{
  display:none;
}
.search{
  display: block;
}
}

@media screen and (max-width: 700px){
  .download{
  display: none;
}
.sign{
display: block;
   position: inherit; 
}
.iconSearch{
  display:block;
}
.log{
  display: block;
   position: absolute; 
   margin-top: 70px;
   font-size:15px;
   
  }
  .iconSearch{
  display:block;
}
.search{
  display: none;
}
.images li{
  width: 100%;
  display: block;
  margin: 20px auto;
}

}

@media screen and (max-width: 560px){
  .download{
  display: none;
}
.search{
  display: none;
}
}
header, nav{
  position: relative;
  top: 0;
}

</style>
