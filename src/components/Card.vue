<script setup lang="ts"></script>

<template>
  <div class="mainCard">
    
    <slot />
  </div>
</template>

<style>
.mainCard {
  position: relative;
  background-color: #fff;
  border: 2px solid #090808;
  border-radius: 10px;
  padding: 20px 12px;
  font-weight: 500;
  color: #e7dddd;
}
</style>
