import {createSelector} from '@reduxjs/toolkit'

const getCounter = (state) => state.counter

export const counterSelector = createSelector([getCounter], state => state.value)