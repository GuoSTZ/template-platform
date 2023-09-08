import './public-path';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Demo from '@/pages/demo';

// ReactDOM.render(
//   <div>
//     <div>Hello,World！</div>
//     <Demo />
//   </div>,
//   document.getElementById('root')
// );


// 线上环境地址：http://114.116.6.135:1446/gs
// global.API_PREFIX = '/gs';
// if (ENV === 'development') {
//   if (window.__MICRO_APP_ENVIRONMENT__) {
//     global.API_PREFIX = window.microApp.getData()?.API_PREFIX ?? 'http://localhost:1446/gs';
//   } else {
//     global.API_PREFIX = 'http://localhost:1446/gs';
//   }
// }

const App = () => {
  // const View = useRoutes(routes)
  // const navigate = useNavigate()

  // useEffect(() => {
  //   if (window.__MICRO_APP_ENVIRONMENT__) {
  //     window.microApp.addDataListener((data: any) => {
  //       const newPath: string = data.path?.replace(window.__MICRO_APP_BASE_ROUTE__, "");
  //       // 非默认页下点击基座菜单，将页面切换至默认页
  //       if (newPath === data.modulePath && data.appName === window.__MICRO_APP_NAME__) {
  //         navigate('/', { replace: true })
  //       }
  //     }, true)
  //   }
  //   return () => {
  //     if (window.__MICRO_APP_ENVIRONMENT__) {
  //       window.microApp.clearDataListener()
  //     }
  //   }
  // }, [])


  return (
    <div>
      <div>Hello,World！</div>
      <Demo />
    </div>
  )
}

const unmount = () => {
  console.log(`${window.__MICRO_APP_NAME__ ?? ""}子应用已经卸载`)
  ReactDOM.unmountComponentAtNode(document.getElementById('root'));
}

const mount = (data?: any) => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
  console.log(`${window.__MICRO_APP_NAME__ ?? ""}子应用已经渲染`, data)
}

// 微前端环境下，注册mount和unmount方法
if (window.__MICRO_APP_ENVIRONMENT__) {
  window[`micro-app-${window.__MICRO_APP_NAME__}`] = { mount, unmount }
} else {
  mount();
}

