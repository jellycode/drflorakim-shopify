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
  console.log(servicesjson);
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

const serviceImage = () => {
 if (!subCategories.value[currentSubTab.value]?.image) {
  return props.background;
 }
 let image =
  'https://admin.drflora.kim/images/' +
  subCategories.value[currentSubTab.value].image;
 console.log(image);
 return image;
};

const subCategories = computed(() => {
 return services.value[currentTab.value].services;
});

onMounted(() => {
 execute();
});
</script>
