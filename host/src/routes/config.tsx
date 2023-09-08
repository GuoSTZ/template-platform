export const config = {
  'reactAntdWebpack': {
    url: ENV === 'development' ? 'http://localhost:8000/' : `${window.location.origin}/reactAntdWebpack/`
  },
}