<template>
    <v-app>
      <v-app-bar>
        <v-btn @click="drawer = !drawer">Menu</v-btn>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list>
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-app>
  </template>
  
  <script>
  export default {
    data: () => ({
      drawer: false,
      items: [
        { title: 'Home' },
        { title: 'About' },
        { title: 'Contact' },
      ],
    }),
  };
  </script>
  

<style>

</style>