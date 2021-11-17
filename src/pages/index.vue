<script setup>
import { ref } from "vue";
import { useAdvice } from "../composables/useAdvice";

const { jokes, search } = useAdvice();

const searchItem = ref("");
</script>

<template>
  <div>
    <input
      v-model="searchItem"
      @change="search(searchItem)"
      type="text"
      placeholder="Search an Advise..."
      class="w-full py-4 mt-16 text-xl text-center bg-gray-600 rounded-full"
    />
    <div class="grid grid-cols-2 gap-16 pt-16">
      <div v-for="(joke, index) in jokes" :key="index">
        <p>
          {{ joke.value }}
        </p>
      </div>
    </div>
  </div>
</template>
