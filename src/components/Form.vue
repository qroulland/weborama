<template>
  <div class="form">
    <input
      class="input"
      v-model="input"
      @change="$emit('search', input)"
    />
  </div>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      input: ''
    }
  }
}
</script>