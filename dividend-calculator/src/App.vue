<template>
  <CalculationPage />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import CalculationPage from './pages/CalculationPage.vue';

export default defineComponent({
  name: 'App',
  components: {
    CalculationPage
  }
});
</script>

<style>
</style>
