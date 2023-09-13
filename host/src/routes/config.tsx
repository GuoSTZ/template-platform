export const config = {
  'reactWebpack': {
    url: ENV === 'development' ? 'http://localhost:8000/' : `${window.location.origin}/reactWebpack/`
  },
}