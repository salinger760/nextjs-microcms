import { DependencyList, useEffect } from 'react'

const useWindowEvent = <K extends keyof WindowEventMap>(
  type: K,
  listener: (this: Window, ev: WindowEventMap[K]) => any,
  deps: DependencyList,
  options?: boolean | AddEventListenerOptions,
) =>
  useEffect(() => {
    if (window) {
      window.addEventListener(type, listener, options)
    }
    return () => {
      window.removeEventListener(type, listener, options)
    }
  }, [listener, options, type])

export default useWindowEvent
