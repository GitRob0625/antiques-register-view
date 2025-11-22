const getApiUrl = () => {
  const mode = import.meta.env.MODE

  switch(mode) {
    default:
      return import.meta.env.VITE_API_URL_LOCAL
  }
}

export const API_URL = getApiUrl()

const getViewUrl = () => {
  const mode = import.meta.env.MODE

  switch(mode) {
    default:
      return import.meta.env.VITE_VIEW_URL_LOCAL
  }
}

export const VIEW_URL = getViewUrl()
