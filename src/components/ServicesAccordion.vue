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
 execute
} = useFetch(url, { refetch }).get();

const services = computed(() => {
 if (data.value) {
  const servicesjson = JSON.parse(data.value);
  //console.log(servicesjson);
  return servicesjson.data;
 }
});

const servicecategories = computed(() => {
 let topics = services.value.map((a) => a.name);
 return topics;
});

const tabClicked = (index) => {
 //console.log('click');

 currentSubTab.value = 0;
 currentTab.value = index;
};

const subTabClicked = (index) => {
 currentSubTab.value = index;
};

const serviceTitle = () => {
 return subCategories.value[currentSubTab.value]?.name;
};

const serviceContent = () => {
 return subCategories.value[currentSubTab.value]?.content;
};

const serviceImage = () => {
 if (!subCategories.value[currentSubTab.value]?.image) {
  return props.background;
 }
 let image =
  'https://admin.drflora.kim/images/' +
  subCategories.value[currentSubTab.value].image;
 //console.log(image);
 return image;
};

const subCategories = computed(() => {
 //console.log('subs');
 //console.log(services.value[currentTab.value].services);
 return services.value[currentTab.value].services;
});

onMounted(() => {
 execute();
});
</script>

<template>
 <div v-if="isFinished">
  <slot name="header"></slot>
  <div class="service_container relative mt-0 lg:mt-32">
   <div class="left_content">
    <div class="tabs">
     <div class="tab_title">
      <p
       v-for="(category, index) in servicecategories"
       :key="category.slug"
       :class="{ active: index === currentTab }"
       @click="tabClicked(index)"
      >
       {{ category }}
      </p>
     </div>
     <div class="tab_content">
      <div
       class="tab_content-wrapper"
       v-for="(cat, index) in subCategories"
       :key="cat.name"
       :class="{ active: index === currentSubTab }"
      >
       <p @click="subTabClicked(index)">
        <span>{{ cat.name }}</span>
       </p>
      </div>
     </div>
    </div>

    <div class="tabs-mobile">
     <div class="tab_title-mobile">
      <p
       v-for="(category, index) in servicecategories"
       :key="category.slug"
       :class="{ active: index === currentTab }"
       @click="tabClicked(index)"
      >
       {{ category }}
      </p>
     </div>
     <div class="tab_content-mobile">
      <div
       class="tab_content-wrapper-mobile"
       v-for="(cat, index) in subCategories"
       :key="cat.name"
       :class="{ active: index === currentSubTab, 'mid-active': subTabDrop }"
      >
       <p @click="subTabClicked(index)">
        <span>{{ cat.name }}</span>
       </p>
      </div>
      <i
       class="fa fa-caret-down fa-fw w-10 inline-block origin-center absolute top-0 right-0"
       :class="{ 'fa-flip-vertical': subTabDrop }"
       style="font-size: 24px"
       @click="subTabDrop = !subTabDrop"
      ></i>
     </div>
    </div>
   </div>
   <div class="right_image">
    <img
     loading="lazy"
     :src="serviceImage()"
     style="width: 100%; height: 100%; object-fit: cover"
    />
    <div class="overlay">
     <h3>{{ serviceTitle() }}</h3>
     <div v-html="serviceContent()"></div>
    </div>
   </div>
   <div class="block md:hidden container border-0 m-auto">
    <h3>{{ serviceTitle() }}</h3>
    <div v-html="serviceContent()"></div>
   </div>
  </div>
 </div>
</template>
