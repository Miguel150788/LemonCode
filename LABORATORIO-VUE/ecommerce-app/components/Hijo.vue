  <template>
   <form @submit.prevent>
    <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value) "
      />
      <button @click="apiGitHub.onSubmit(modelValue)">Pulsar</button>
   </form>
  </template>
<script  lang="ts">
export default {
  props: ['modelValue'],
  emits: ['update:modelValue']
}
</script>
<script setup lang="ts">
import { placeholder } from '@babel/types';


console.log();
const apiGitHub = useCartStore();
</script>