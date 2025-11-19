<template>
  <div style="padding:20px">
    <h1>FrontEnd Vue — Integrado a BackEnd B</h1>
    <button @click="load">Cargar personas</button>
    <ul>
      <li v-for="p in persons" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { getPersons } from './api';
const persons = ref([]);

async function load(){
  try {
    persons.value = await getPersons();
  } catch(e){
    console.error(e);
    alert('Error al obtener personas');
  }
}
</script>
