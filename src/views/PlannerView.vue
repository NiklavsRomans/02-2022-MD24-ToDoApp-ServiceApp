<template>
  <PlannerApp />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PlannerApp from "@/components/Planner.vue";

export default defineComponent({
  name: "PlannerView",
  components: {
    PlannerApp,
  },
});
</script>
