<template>
    <q-btn flat dense round>
        <q-avatar size="2rem" color="primary" text-color="white" class="cursor-pointer">J</q-avatar>

        <q-menu class="full-width q-pa-md" max-width="14rem">
            <div class="row no-wrap q-mb-md align-items-center">
                <q-avatar color="primary" text-color="white" size="2.5rem">J</q-avatar>
                <div class="q-ml-md">
                    <div class="text-subtitle2">John Doe</div>
                    <div class="text-caption">Master</div>
                </div>
            </div>

            <q-list bordered>
                <q-item clickable v-close-popup>
                    <q-item-section avatar>
                        <q-icon name="account_circle" />
                    </q-item-section>
                    <q-item-section>My Account</q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                    <q-item-section avatar>
                        <q-icon name="logout" />
                    </q-item-section>
                    <q-item-section>Logout</q-item-section>
                </q-item>
            </q-list>
        </q-menu>
    </q-btn>
</template>
