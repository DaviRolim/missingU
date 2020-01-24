<template>
    <div class="row q-gutter-md justify-left">
        <div class="col-11 text-center">
            <h2>Interesting Quotes</h2>
        </div>
        <div class="col-11 q-pa-md" v-for="quote in quotes" :key=quote.quote>
            <p class="text-h5 quote-font">“{{ quote.quote }}” - {{ quote.author }}</p>
        </div>
        <q-dialog v-model="showDialog">
            <q-card>
                <q-card-section>
                    <div class="text-h6">Save new quote</div>
                </q-card-section>

                <q-separator />

                <q-card-section style="max-height: 60vh" class="scroll">
                    <q-input v-model="formData.quote" filled type="textarea" class="q-pa-md" />
                    <q-separator />
                    <q-input filled v-model="formData.author" label="Author" />
                </q-card-section>

                <q-card-actions align="right">
                    <q-btn flat label="Cancel" color="primary" v-close-popup />
                    <q-btn flat label="Save" color="primary" @click="saveForm()" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>
        <q-btn fab color="secondary" icon="add" class="button-lower-right" @click="openForm()" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { data } from './data';
import { iQuotes } from './interfaces';

@Component
export default class Quotes extends Vue {
  showDialog = false;
  formData: iQuotes = { quote: '', author: '' };
  quotes: iQuotes[] = data;
  openForm() {
    this.showDialog = true;
  }
  saveForm() {
    this.quotes.push(this.formData);
  }
}
</script>


<style lang="sass" scoped>
</style>