import { create } from 'zustand'
import { ToggleCsrfState } from '@/types'

type CsrfState = {
  editedCsrfState: ToggleCsrfState
  updatedEditedCsrfState: (payload: ToggleCsrfState) => void
}

const useCsrfStore = create<CsrfState>((set) => ({
  editedCsrfState: {
    csrf_token_expire: false,
  },

  updatedEditedCsrfState: (payload) => {
    set({
      editedCsrfState: {
        csrf_token_expire: !payload.csrf_token_expire,
      },
    })
  },
}))

export default useCsrfStore
