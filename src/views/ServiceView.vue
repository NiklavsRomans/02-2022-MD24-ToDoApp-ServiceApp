<template>
  <ServicePlanner />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ServicePlanner from "@/components/Services.vue";

export default defineComponent({
  name: "ServiceView",
  components: { ServicePlanner },
});
</script>
