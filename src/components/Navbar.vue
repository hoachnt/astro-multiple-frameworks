<template>
    <nav>
        <ul>
            <li v-if="$isSideBarOpen" @click="() => {
                isSidebarOpen.set(false)
            }">
                <a>
                    Close sidebar
                </a>
            </li>
            <li v-if="!$isSideBarOpen" @click="isSidebarOpen.set(true)">
                <a>
                    Open sidebar
                </a>
            </li>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/table">Table</a>
            </li>
        </ul>
    </nav>
</template>
<script setup lang="ts">
import { useStore } from '@nanostores/vue';
import { isSidebarOpen } from '../stores/SidebarStore';

const $isSideBarOpen = useStore(isSidebarOpen)
</script>
<style scoped>
nav {
    position: sticky;
    top: 0;
    left: 0;
    min-height: var(--navbar-height);
    min-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    z-index: 999;
}

ul {
    display: flex;
    align-items: center;
}

li {
    margin: 0 5px;
    list-style-type: none;
}

a {
    background: #000;
    padding: 10px;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    transition: .3s ease-in-out;

}

a:hover {
    text-decoration: underline;
    padding: 10px 20px;
}
</style>
