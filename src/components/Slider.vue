<script setup>
import { computed, ref } from 'vue';
import { useKeenSlider } from 'keen-slider/vue.es';
import Slide from './Slide.vue';
import 'keen-slider/keen-slider.min.css';
const props = defineProps(['slides']);

const current = ref(1);
const dotHelper = computed(() =>
 slider.value ? [...Array(slider.value.track.details.slides.length).keys()] : []
);
const [container, slider] = useKeenSlider({
 initial: current.value,
 slideChanged: (s) => {
  current.value = s.track.details.rel;
 },
});
</script>

<template>
 <div class="relative">
  <div ref="container" class="keen-slider">
   <Slide v-for="slide in slides" :data="slide"></Slide>
  </div>
  <font-awesome-icon
   icon="fa-thin fa-angle-left"
   class="text-zinc-500 hidden md:block"
   size="3x"
   v-if="slider"
   @click="slider.prev()"
   :class="{
    arrow: true,
    'arrow--left': true,
    'arrow--disabled': current === 0,
   }"
  />
  <font-awesome-icon
   icon="fa-thin fa-angle-right"
   class="text-zinc-500 hidden md:block"
   size="3x"
   v-if="slider"
   @click="slider.next()"
   :class="{
    arrow: true,
    'arrow--right': true,
    'arrow--disabled': current === slider.track.details.slides.length - 1,
   }"
  />
  <div v-if="slider" class="dots flex md:hidden">
   <button
    v-for="(_slide, idx) in dotHelper"
    @click="slider.moveToIdx(idx)"
    :class="{ dot: true, active: current === idx }"
    :key="idx"
   ></button>
  </div>
 </div>
</template>

<style>
.arrow {
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 -webkit-transform: translateY(-50%);
 fill: #fff;
 cursor: pointer;
}
.arrow--left {
 @apply -left-6;
}
.arrow--right {
 left: auto;
 @apply -right-6;
}
.arrow--disabled {
 @apply text-zinc-100 cursor-not-allowed;
}

.dots {
 padding: 10px 0;
 justify-content: center;
}
.dot {
 border: none;
 width: 10px;
 height: 10px;
 background: #c5c5c5;
 border-radius: 50%;
 margin: 0 5px;
 padding: 5px;
 cursor: pointer;
}
.dot:focus {
 outline: none;
}
.dot.active {
 background: #000;
}
</style>
