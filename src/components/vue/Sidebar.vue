<template>
  <v-navigation-drawer v-model="$isSideBarOpen">
    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-home-city"
        title="Home"
        value="home"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account"
        title="My Account"
        value="account"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-group-outline"
        title="Users"
        value="users"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script setup lang="ts">
import { useStore } from "@nanostores/vue";
import { isSidebarOpen } from "src/stores/SidebarStore";

const $isSideBarOpen = useStore(isSidebarOpen);
</script>
