import { create } from 'zustand'
import { Schedule } from '@/types'

export type State = {
  editedSchedule: Schedule
  updatedEditedSchedule: (payload: Schedule) => void
  resetEditedSchedule: () => void
}

const now = new Date()

const useStore = create<State>((set) => ({
  editedSchedule: {
    id: 0,
    user_id: 0,
    period_start: now,
    period_end: now,
    title: '',
    memo: '',
  },

  updatedEditedSchedule: (payload) =>
    set({
      editedSchedule: {
        id: payload.id,
        user_id: payload.user_id,
        period_start: payload.period_start,
        period_end: payload.period_end,
        title: payload.title,
        memo: payload.memo,
      },
    }),
  resetEditedSchedule: () =>
    set({
      editedSchedule: {
        id: 0,
        user_id: 0,
        period_start: now,
        period_end: now,
        title: '',
        memo: '',
      },
    }),
}))
export default useStore
