<template>
  <div class="row">
      <p>{{ displayText}}</p>
  </div>
</template>
<script>
    export default {
        props: ['displayText']
    }
</script>
<style scoped>
    p {
        font-family: 'Libre Barcode 39 Extended Text', cursive;
        font-size: 3rem;
        line-height: 3rem;
        font-stretch: wider;
        box-shadow: 2px 2px 2px #aaa;
        color: #4d4d4d;
        margin: 5px 0;
        border: 1px dotted grey;
        white-space: pre-line;
        padding: 1rem 2rem;
        width: 100%;

    }
</style>
