<script setup>
import { computed, reactive, ref, onMounted } from 'vue';
import { useFetch } from '@vueuse/core';

const url = ref('https://admin.drflora.kim/api/services');
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

const services = computed(() => {
 if (data.value) {
  const servicesjson = JSON.parse(data.value);
  console.log(servicesjson);
  return servicesjson.data;
 }
});

const servicetopics = computed(() => {
 if (isFinished) {
  let topics = services.value.map((a) => a.name);
  return topics;
 }
});

onMounted(() => {
 execute();
});
</script>

<template>
 <div v-if="isFinished">{{ services }}{{ servicetopics }}</div>
</template>
