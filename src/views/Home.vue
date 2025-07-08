<script setup>
import { getItems } from '@/Services/itemService';
import { onMounted } from 'vue';

onMounted(async () => {


  const res = await getItems();
  console.log(res.data);
});

/*


마운트 될떄 따한번getItems 통신하고 데이터 콘솔에 뿌리기
*/
</script>

<template>
  <div class="container">
    <h1 class="mt-5">Hello, Home</h1>
  </div>
</template>

<style scoped></style>
