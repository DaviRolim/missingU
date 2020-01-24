<template>
    <div class="q-pa-md row q-gutter-md">
        <q-card class="my-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDvcIrnQ0RFS__OyO7-hKwyBiEDvt1BTd2oJayhaFalI-VjEjL">
            <q-card-section>
                <div class="text-h6">Chile</div>
                <div class="text-subtitle2">Santiago</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
                {{ lorem }}
            </q-card-section>
        </q-card>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Ideas extends Vue {
  lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  openForm() {
    console.log('will open form to upload image');
  }
}
</script>


<style lang="sass" scoped>
.my-card
  width: 100%
</style>