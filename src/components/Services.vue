<template>
  <div class="service-container">
    <h2 class="title">Services</h2>
    <ServiceButton
      selectedButton
      v-for="{ price, title, id, active } in servicesData"
      :class="`${active ? 'selectedButton' : ''}`"
      :key="id"
      :title="title"
      :price="price"
      :active="active"
      @click="selected(id)"
    />
    <div class="service-total">
      <span class="total">Total:</span>
      <span class="total">{{ `$${total.toFixed(2)}` }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ServiceButton from "../components/servicebutton/ServiceButton.vue";

export default defineComponent({
  name: "ServicePlanner",
  components: { ServiceButton },

  data: () => {
    return {
      total: 0,
      servicesData: [
        {
          id: 1,
          title: "Web Development",
          price: 300.0,
          active: false,
        },
        {
          id: 2,
          title: "Design",
          price: 400.0,
          active: false,
        },
        {
          id: 3,
          title: "Integration",
          price: 250.0,
          active: false,
        },
        {
          id: 4,
          title: "Training",
          price: 220.0,
          active: false,
        },
      ],
    };
  },
  methods: {
    selected(id: number) {
      this.servicesData = this.servicesData.map((service) => {
        if (service.id === id) {
          service.active = !service.active;
          `${
            service.active
              ? (this.total += service.price)
              : (this.total -= service.price)
          }`;
        }
        return service;
      });
    },
  },
});
</script>

<style scoped lang="scss">
@import "Services.scss";
</style>
