<script setup>
import Slider from './Slider.vue';
import icons from '../scripts/icons.js';

import { computed, reactive, ref, onMounted } from 'vue';
import { useFetch } from '@vueuse/core';

const url = ref('https://admin.drflora.kim/api/sliders');
const refetch = ref(false);

const {
 data,
 error,
 abort,
 statusCode,
 isFetching,
 isFinished,
 canAbort,
 execute,
} = useFetch(url, { refetch }).get();

const slides = computed(() => {
 if (data.value) {
  const slidesjson = JSON.parse(data.value);
  return slidesjson.data[0].slides;
 }
});

onMounted(() => {
 execute();
});
</script>

<template>
 <div
  class="font-body px-0 md:px-14 md:mr-10 py-4 m-auto max-w-2xl border-none bg-neutral-50 rounded-md"
  id="testimonialslider"
 >
  <slider v-if="isFinished" :slides="slides"></slider>
 </div>
</template>

<style>
#testimonialslider {
}
</style>
