<template>

  <div @mouseover="showOptions = true"
    @mouseleave="showOptions = false">
      <form class="small" v-show="showOptions">
        <label for="selectBox">Font size: </label>
        <select id="selectBox" class="cc-custom-select" v-model="setFontSize">
            <option value="42">42px</option>
            <option value="48">48px</option>
            <option value="56">56px</option>
            <option value="64">64px</option>
        </select>
        <div class="form-check form-check-inline">
            <label class="form-check-label">
                <input type="radio" class="form-check-input" value="left" v-model="setTextAlign"> Left
            </label>      
        </div> 
         <div class="form-check form-check-inline">
            <label class="form-check-label">
                <input type="radio" class="form-check-input" value="center" v-model="setTextAlign"> Centre
            </label>      
        </div> 
         <div class="form-check form-check-inline">
            <label class="form-check-label">
                <input type="radio" class="form-check-input" value="right" v-model="setTextAlign"> Right
            </label>      
        </div> 

        <div class="form-check form-check-inline">
            <label class="form-check-label">
                <input type="checkbox" class="form-check-input" value="bold" v-model="setBold"> Bold
            </label>      
        </div> 

         <div class="form-check form-check-inline">
            <label class="form-check-label">
                <input type="checkbox" class="form-check-input" value="italic" v-model="setItalic"> Italic
            </label>      
        </div> 



      </form>
      <p :style="styleObject" :class="{ bold:setBold, italic:setItalic}">
          {{ displayText}}
      </p>
  </div>
</template>
<script>
    export default {
        props: {
            displayText: [String],
            containerHeight: {
                type: Number,
                default: 200
            }
        },
        data: function () {
            return {
                showOptions: false,
                setFontSize: '',
                setTextAlign: '',
                setBold: false,
                setItalic: false

            }
        },
        computed: {
            styleObject: function () {
                return {

                    textAlign: this.setTextAlign,
                    fontSize: this.setFontSize + 'px',
                    height: this.containerHeight + 'px'
                }
            }
        }
    }
</script>
<style scoped>
    p {
        /*font-family: 'Libre Barcode 39 Extended Text', cursive;*/
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
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
        .custom-select {
        display: inline-block;
        width: 15%;
        height: calc(2.25rem + 2px);
        padding: .375rem 1.75rem .375rem .75rem;
        line-height: 1.5;
        color: #495057;
        vertical-align: middle;
        background: #fff url(data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' v…0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E) no-repeat right .75rem center;
        background-size: 8px 10px;
        border: 1px solid #ced4da;
        border-radius: .25rem;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        }
    .bold {
        font-weight: 800;
    }
    .italic {
        font-style: italic;
    }
    form {
        position: absolute;
        border: 1px dotted grey;
        margin: 10px 0 5px 0;
        padding: 5px 0;
    }
    select {
        height: 40%;
    }
</style>
