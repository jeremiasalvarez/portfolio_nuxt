export const state = () => ({
    currentTab: 1
})

export const mutations = {
    setCurrentTab(state, tab) {
        state.currentTab = tab
    }
}