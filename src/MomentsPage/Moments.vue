<template>
    <div class="row q-gutter-md justify-center">
        <div class="col-11 col-md-4" v-for="card in cards" :key="card.place">
            <q-card class="my-card">
                <q-img :src="card.imageUrl" basic>
                    <div class="absolute-bottom text-h5 text-center">
                        {{ card.place }} {{ card.date }}
                    </div>
                </q-img>
            </q-card>
        </div>
        <q-dialog v-model="showDialog">
            <q-card>
                <q-card-section>
                    <div class="text-h6">Save new moment</div>
                </q-card-section>

                <q-separator />

                <q-card-section style="max-height: 60vh" class="scroll">
                    <q-img v-if="outputImg" :src="outputImg" style="width: 100%" />
                    <q-file v-model="file" label="Choose an Image" filled />
                </q-card-section>

                <q-separator />

                <q-card-section>
                    <q-input bottom-slots v-model="formData.place" label="Place" counter clearable>
                        <template v-slot:prepend>
                            <q-icon name="place" />
                        </template>
                    </q-input>
                    <q-date v-model="formData.date" today-btn mask="DD/MM/YYYY" />
                </q-card-section>

                <q-separator />

                <q-card-actions align="right">
                    <q-btn flat label="Cancel" color="primary" v-close-popup />
                    <q-btn flat label="Save" color="primary" @click="saveForm()" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>
        <q-btn fab color="secondary" icon="cloud_upload" class="button-lower-right" @click="openForm()" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { CardObject } from './interfaces';
import { Watch } from 'vue-property-decorator';
import { data } from './data';

@Component
export default class Moments extends Vue {
  showDialog = false;
  file = null;
  cards: CardObject[] = data;
  outputImg = '';
  formData: CardObject = { imageUrl: '', place: '', date: '' };

  @Watch('file')
  onFileChange(val: File, oldVal: File) {
    this.formData.imageUrl = URL.createObjectURL(val);
  }

  openForm() {
    this.showDialog = true;
  }

  saveForm() {
    this.cards.push(this.formData);
  }
}
</script>


<style lang="sass" scoped>
.my-card
  width: 100%
</style>