<script setup>
</script>

<template>
 <div class="mt-3">
      <h6 class="text-center">Center alignment</h6>
      <b-pagination v-model="currentPage" :total-rows="rows" align="center"></b-pagination>
    </div>
</template>

<script>
export default {
    data() {
      return {
        rows: 100,
        currentPage: 3
      }
    }
  }
</script>