<template>
 <div class="row">
     <div class="form-check form-check-inline">
         <div class="form-check-label">
             <!-- Removed v-model="checked" from the below input-->
             <input
                 type="checkbox"
                 class="form-check-input"
                 @click="sectionCompleted"
             > Mark section as completed
         </div>
     </div>
 </div>
</template>
 
<script>
import { EventBus } from '../../main.js'
 
export default {
 data () {
     return {
         // checked: ''
     }
 },
 methods: {
     sectionCompleted (e) {
         EventBus.$emit('mark-as-completed', e.target.checked)
     }
  }
}
</script>
 
<style>
</style>