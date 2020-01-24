<template>
    <div class="q-pa-sm">
        <q-carousel arrows animated v-model="slide" :height=height class="slider">
            <q-carousel-slide name="first" img-src="https://cdn.quasar.dev/img/mountains.jpg" @click="goTo('moments')">
                <div class="absolute-bottom custom-caption">
                    <div class="text-h2">Moments</div>
                    <div class="text-subtitle1">Our story</div>
                </div>
            </q-carousel-slide>
            <q-carousel-slide name="second" img-src="https://cdn.quasar.dev/img/parallax1.jpg" @click="goTo( 'quotes')">
                <div class="absolute-bottom custom-caption ">
                    <div class="text-h2 ">Interesting Quotes</div>
                </div>
            </q-carousel-slide>
            <q-carousel-slide name="third " img-src="https://cdn.quasar.dev/img/parallax2.jpg" @click="goTo( 'ideas')">
                <div class="absolute-bottom custom-caption ">
                    <div class="text-h2 ">Ideas</div>
                    <div class="text-subtitle1 ">Places to travel, to eat...</div>
                </div>
            </q-carousel-slide>
        </q-carousel>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class MainPage extends Vue {
  slide = 'first';
  height = +window.outerHeight - 20 + 'px';

  goTo(routeName: string): void {
    this.$router.push(routeName);
  }
}
</script>

<style lang="sass" scoped>
.slider
  max-height: 1000px
  height: 100%
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>