<script setup>
const props = defineProps(['data']);
</script>

<template>
 <div
  class="keen-slider__slide flex flex-col align-center justify-center px-10"
 >
  <div class="text-left w-full flex flex-col">
   <div>
    <font-awesome-icon
     icon="fa-sharp fa-quote-left"
     class="text-zinc-300"
     size="2x"
    />
   </div>
   <div
    class="text-zinc-700 font-light text-sm lg:text-lg my-4"
    v-html="data.content"
   ></div>
   <div class="flex items-end justify-end">
    <font-awesome-icon
     icon="fa-sharp fa-quote-right"
     class="text-zinc-300"
     size="2x"
    />
   </div>
  </div>
  <div class="text-center mt-20 flex flex-col space-y-2">
   <p class="font-title font-bold text-base text-zinc-700 tracking-[2px]">
    {{ data.initials }}
   </p>
   <p
    class="font-body tracking-[3px] uppercase text-xs font-light text-zinc-500"
   >
    {{ data.caption }}
   </p>
  </div>
 </div>
</template>
