<script setup>
import { computed, reactive, ref, onMounted } from 'vue';
import { useFetch } from '@vueuse/core';

const url = ref('https://admin.drflora.kim/api/services');
const refetch = ref(false);
const currentTab = ref(0);
const currentSubTab = ref(0);
const subTabDrop = ref(false);
const props = defineProps(['background']);

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

const services = computed(() => {
 if (data.value) {
  const servicesjson = JSON.parse(data.value);

  return servicesjson.data;
 }
});

const servicecategories = computed(() => {
 let topics = services.value.map((a) => a.name);
 return topics;
});

const serviceTitle = () => {
 return subCategories.value[currentSubTab.value]?.name;
};

const serviceContent = () => {
 return subCategories.value[currentSubTab.value]?.content;
};

const getImage = (img) => {
 if (!img) {
  return props.background;
 }
 let image = 'https://admin.drflora.kim/images/' + img;

 return image;
};

const serviceImage = (index) => {
 if (!services.value[index]?.image) {
  return props.background;
 }
 let image =
  'https://admin.drflora.kim/images/' +
  subCategories.value[currentSubTab.value].image;

 return image;
};

const subCategories = computed(() => {
 return services.value[currentTab.value].services;
});

onMounted(() => {
 execute();
});
</script>

<template>
 <div
  v-if="isFinished"
  class="container m-auto border-0 lazy-bg"
  v-for="(service, index) in services"
  :key="service.slug"
 >
  <h3 class="mb-10">{{ service.name }}</h3>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
   <div
    v-for="(subservice, subindex) in service.services"
    :key="subservice.name"
    data-aos="fade-up"
    data-aos-delay="50"
   >
    <div class="h-72 w-full mb-6">
     <img
      class="object-cover w-full h-full"
      :src="getImage(subservice.image)"
     />
    </div>
    <h4 class="mb-2">{{ subservice.name }}</h4>
    <div v-html="subservice.content"></div>
   </div>
  </div>
 </div>
</template>
