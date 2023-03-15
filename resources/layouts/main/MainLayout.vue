<template>
    <q-layout view="hHh lpR fFf">
        <q-header bordered class="bg-white text-dark">
            <q-toolbar>
                <q-btn dense flat round icon="menu" class="q-mr-sm" @click="drawerOpen = !drawerOpen" />
                <q-avatar size="2rem">
                    <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-black.svg">
                </q-avatar>
                <q-toolbar-title>Mechanical Workshop</q-toolbar-title>
                <menu-profile />
            </q-toolbar>
        </q-header>

        <q-drawer show-if-above v-model="drawerOpen" side="left" bordered :mini="drawerMini" @mouseover="drawerMini = false"
            @mouseout="drawerMini = true" mini-to-overlay :width="200">
            <sidebar-content />
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MenuProfile from './MenuProfile.vue';
import SidebarContent from './SidebarContent.vue';

const drawerOpen = ref(false);
const drawerMini = ref(true);
</script>
