<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { check } from './Services/accountService';
import { useRoute } from 'vue-router';
import { watch, onMounted } from 'vue';
import { useAccountStore } from './stores/account';

const route = useRoute();
const account = useAccountStore();

//로그인 여부 확인
const checkAccount = async () => {
  console.log('로그인 체크');
  const res = await check();
  if (res.status === 200) {
    account.setChecked(true);
    account.setLoggedIn(true);
  } else {
    account.setChecked(false);
  }
};

onMounted(() => {
  checkAccount();
});

watch(
  () => route.path,
  () => {
    checkAccount();
    // console.log('라우팅!');
  }
);
</script>

<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<style scoped></style>
