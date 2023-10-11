<template>
 <TransitionRoot appear :show="isOpen" as="template">
  <Dialog as="div" @close="closeModal" class="relative z-[101]">
   <TransitionChild
    as="template"
    enter="duration-300 ease-out"
    enter-from="opacity-0"
    enter-to="opacity-100"
    leave="duration-200 ease-in"
    leave-from="opacity-100"
    leave-to="opacity-0"
   >
    <div class="fixed inset-0 bg-black bg-opacity-25" />
   </TransitionChild>

   <div class="fixed inset-0 overflow-y-auto">
    <div class="flex min-h-full items-center justify-center p-4 text-center">
     <TransitionChild
      as="template"
      enter="duration-300 ease-out"
      enter-from="opacity-0 scale-95"
      enter-to="opacity-100 scale-100"
      leave="duration-200 ease-in"
      leave-from="opacity-100 scale-100"
      leave-to="opacity-0 scale-95"
     >
      <DialogPanel
       class="bg-top bg-cover w-full transform max-w-4xl overflow-hidden rounded-2xl bg-black text-left align-middle shadow-xl transition-all p-10"
       style="
        background-image: url('https://assets.origin.drflora.kim/video/newyork_small.png');
       "
      >
       <div
        class="text-white flex flex-col justify-center items-center gap-10 lg:flex-row w-full"
       >
        <div
         class="w-full lg:w-1/3 max-w-[250px] rounded-xl overflow-hidden border-black border flex justify-center items-center"
        >
         <video-player
          src="https://assets.origin.drflora.kim/video/times_square.mp4"
          poster="https://assets.origin.drflora.kim/video/times_square.jpg"
          controls
          :loop="true"
          :volume="0.6"
          width="250"
         />
        </div>

        <div
         class="text-center lg:text-right text-white flex-1 flex justify-center items-center lg:items-end"
        >
         <div>
          <h4 class="text-zinc-300 uppercase">Dallas / NYC / The World</h4>
          <h2 class="text-4xl font-medium">Skin Journey</h2>
          <p class="text-white mt-6">
           It’s not every day you are featured in Times Square! <br />We
           couldn’t pass up this unique opportunity to shine bright like the
           city lights in this legendary location.
          </p>
          <p class="text-white text-sm">
           Looking to book an appointment? Whether it is virtual or in-person, a
           consultation is the first step toward healthier skin. Click on the
           button below to get started!
          </p>
          <a
           href="/pages/contact"
           class="c-button c-button--black c-button--black-xs mt-6"
           >Book An Appointment</a
          >
         </div>
        </div>
       </div>

       <div class="absolute -top-1 -right-1">
        <button
         type="button"
         class="aspect-square inline-flex justify-center items-center rounded-full border border-transparent w-10 h-10 p-0 bg-zinc-200 leading-none text-sm font-medium text-black hover:bg-white hover:opacity-100 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
         @click="closeModal"
        >
         x
        </button>
       </div>
      </DialogPanel>
     </TransitionChild>
    </div>
   </div>
  </Dialog>
 </TransitionRoot>
</template>

<script setup>
import { ref } from 'vue';
import {
 TransitionRoot,
 TransitionChild,
 Dialog,
 DialogPanel,
 DialogTitle
} from '@headlessui/vue';
import { VideoPlayer } from '@videojs-player/vue';
import 'video.js/dist/video-js.css';

const isOpen = ref(true);

function closeModal() {
 isOpen.value = false;
}
function openModal() {
 isOpen.value = true;
}
</script>
