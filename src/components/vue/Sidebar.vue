<template>
  <v-navigation-drawer v-model="$isSideBarOpen" expand-on-hover rail>
    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-chevron-left"
        nav
        @click.stop="isSidebarOpen.set(false)"
      >
      </v-list-item>
      <v-list-item
        prepend-icon="mdi-home-city"
        title="Home"
        value="home"
        @click.stop="isSidebarOpen.set(false)"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account"
        title="My Account"
        value="account"
        @click.stop="isSidebarOpen.set(false)"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-group-outline"
        title="Users"
        value="users"
        @click.stop="isSidebarOpen.set(false)"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script setup lang="ts">
import { useStore } from "@nanostores/vue";
import { isSidebarOpen } from "src/stores/SidebarStore";

const $isSideBarOpen = useStore(isSidebarOpen);
</script>
