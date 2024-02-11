<template>
  <v-layout>
    <Sidebar />
    <v-app-bar
      :elevation="0"
      scroll-behavior="hide"
      class="!bg-white/50 backdrop-blur-md top-0 left-0"
    >
      <template v-slot:prepend>
        <v-btn
          variant="outlined"
          @click.stop="isSidebarOpen.set(!$isSideBarOpen)"
          >Menu</v-btn
        >
      </template>

      <v-app-bar-title>Application Bar</v-app-bar-title>
      <template v-slot:append>
        <v-btn href="/" variant="elevated" color="black" class="mx-1"
          >Home</v-btn
        >
        <v-btn href="/about" variant="elevated" color="black" class="mx-1"
          >About</v-btn
        >
        <v-btn href="/table" variant="elevated" color="black" class="ml-1"
          >Table</v-btn
        >
      </template>
    </v-app-bar>
  </v-layout>
</template>
<script setup lang="ts">
import { useStore } from "@nanostores/vue";
import { isSidebarOpen } from "src/stores/SidebarStore";
import Sidebar from "./Sidebar.vue";

const $isSideBarOpen = useStore(isSidebarOpen);
</script>
