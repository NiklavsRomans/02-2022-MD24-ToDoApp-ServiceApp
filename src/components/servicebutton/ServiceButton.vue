<template>
  <button class="service-button">
    <span>{{ title }}</span>
    <span>{{ `$${price.toFixed(2)}` }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ServiceButton",
  props: {
    title: String,
    price: Number,
    active: Boolean,
  },
});
</script>

<style scoped lang="scss">
@import "ServiceButton.scss";
</style>
