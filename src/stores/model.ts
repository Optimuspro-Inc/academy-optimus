import { defineStore } from 'pinia'

export const useModelStore = defineStore({
  id: 'modelCreateAccount',
  state: () => ({
    open: false
  }),
  getters: {
    doubleCount: (state) => state.open
  },
  actions: {
    updateModelState() {
      (!this.open ? this.open = true : this.open = false)
    }
  }
})
