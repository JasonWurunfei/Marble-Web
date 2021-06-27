<template>
  <div class="animation-input" ref="field">
    <label :for="fieldName" ref="label" >{{labelText}}</label>
    <input :id="fieldName" type="text" class="animation-input__input"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @focus="active"
      @blur="deactive">
  </div>
</template>

<script>
export default {
  props: ['fieldName', 'labelText', 'modelValue'],
  emits: ['update:modelValue'],
  methods: {
    active() {
      this.$refs.label.classList.add("active")
       this.$refs.field.classList.add("active")
    },
    deactive() {
      if (this.modelValue.length === 0) {
        this.$refs.label.classList.remove("active")
        this.$refs.field.classList.remove("active")
      }
    }
  }
}
</script>

<style>
.animation-input {
  position: relative;
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
}

.animation-input__input {
  border: none;
  height: 2rem;
  background: transparent;
  border-bottom: 3px solid white;
  outline: none;
  width: 100%;
  font-size: 1.4rem;
  color: white;
  position: relative;
}

.animation-input::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 5px;
  left: 0;
  bottom: 0px;
  background-color: #8ab3ff;
  transition: transform 0.5s ease-out;
  transform: translateX(-100%);
}

.animation-input.active::after {
  transform: translateX(0);
}

.animation-input label {
  color: white;
  font-size: 1.4rem;
  position: absolute;
  bottom: 2px;
  left: 0;
  transition: all 0.5s ease-out;
}

label.active {
  color: #8ab3ff;
  font-size: 1.1rem;
  transform: translateY(-2rem);
}
</style>