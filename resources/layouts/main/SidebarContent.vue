<template>
    <q-scroll-area class="fit">
        <q-list padding>
            <q-item clickable v-ripple>
                <q-item-section avatar>
                    <q-icon name="space_dashboard" />
                </q-item-section>
                <q-item-section>Dashboard</q-item-section>
            </q-item>

            <q-separator />

            <q-item clickable v-ripple>
                <q-item-section avatar>
                    <q-icon name="forklift" />
                </q-item-section>
                <q-item-section>Suppliers</q-item-section>
            </q-item>

            <q-item clickable v-ripple>
                <q-item-section avatar>
                    <q-icon name="precision_manufacturing" />
                </q-item-section>
                <q-item-section>Products</q-item-section>
            </q-item>

            <q-separator />

            <q-item clickable v-ripple>
                <q-item-section avatar>
                    <q-icon name="group" />
                </q-item-section>
                <q-item-section>Clients</q-item-section>
            </q-item>

            <q-item clickable v-ripple>
                <q-item-section avatar>
                    <q-icon name="directions_car" />
                </q-item-section>
                <q-item-section>Vehicles</q-item-section>
            </q-item>

            <q-item clickable v-ripple>
                <q-item-section avatar>
                    <q-icon name="shopping_bag" />
                </q-item-section>
                <q-item-section>Order</q-item-section>
            </q-item>

            <q-separator />

            <q-item clickable v-ripple>
                <q-item-section avatar>
                    <q-icon name="car_repair" />
                </q-item-section>
                <q-item-section>Services</q-item-section>
            </q-item>

            <q-item clickable v-ripple>
                <q-item-section avatar>
                    <q-icon name="store" />
                </q-item-section>
                <q-item-section>Workshops</q-item-section>
            </q-item>

            <q-item clickable v-ripple>
                <q-item-section avatar>
                    <q-icon name="person" />
                </q-item-section>
                <q-item-section>Users</q-item-section>
            </q-item>

            <q-item clickable v-ripple>
                <q-item-section avatar>
                    <q-icon name="remove_red_eye" />
                </q-item-section>
                <q-item-section>Audits</q-item-section>
            </q-item>
        </q-list>
    </q-scroll-area>
</template>
