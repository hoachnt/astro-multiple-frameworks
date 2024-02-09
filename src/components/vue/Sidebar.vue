<template>
  <v-navigation-drawer v-model="$isSideBarOpen">
    <v-list>
      <v-list-item title="Navigation drawer"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script setup lang="ts">
import { useStore } from "@nanostores/vue";
import { isSidebarOpen } from "src/stores/SidebarStore";

const $isSideBarOpen = useStore(isSidebarOpen);
</script>
