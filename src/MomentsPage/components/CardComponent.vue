<template>
    <div class="row q-gutter-md justify-center">
        <div class="col-10 col-md-4">
            <q-card class="my-card">
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" basic>
                    <div class="absolute-bottom text-subtitle1 text-center">
                        Moments
                    </div>
                </q-img>
            </q-card>
        </div>
        <div class="col-10 col-md-4">
            <q-card class="my-card">
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" basic>
                    <div class="absolute-bottom text-subtitle1 text-center">
                        Quotes
                    </div>
                </q-img>
            </q-card>
        </div>
        <div class="col-10 col-md-4">
            <q-card class="my-card">
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" basic>
                    <div class="absolute-bottom text-subtitle2 text-center">
                        About Us
                    </div>
                </q-img>
            </q-card>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class CardComponent extends Vue {}
</script>


<style lang="sass" scoped>
.my-card
  width: 100%
</style>