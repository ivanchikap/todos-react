export const inc = (state) => {
    state.value += 1
}

export const dec = (state) => {
    state.value -= 1
}

export const incByAmount = (state, action) => {
    state.value += action.payload
}