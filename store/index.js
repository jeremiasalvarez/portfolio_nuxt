export const state = () => ({
    currentTab: 0
})

export const mutations = {
    setCurrentTab(state, tab) {
        state.currentTab = tab
    }
}