
import './Main.css'
import React, { Suspense } from "react"
import Loading from './SubComponent/Loading';
const LazyThreeJSBack = React.lazy(() => import('./SubComponent/Back'));
const LazyThreeJSModel = React.lazy(() => {
  return Promise.all([
    import("./SubComponent/model.js"),
    new Promise(resolve => setTimeout(resolve, 2500))
  ])
  .then(([moduleExports]) => moduleExports);
});

const Main = ({HeaderLoaded, FooterLoaded, HeaderDisable}) => {
    HeaderLoaded();
    FooterLoaded();
    // 헤더 변형, 푸터 비활성
    return (
      <div className="Main">  
        <Suspense fallback={<Loading HeaderDisable={HeaderDisable}/>}>
          <LazyThreeJSBack/>
          <LazyThreeJSModel/>
        </Suspense>
      </div>
    );
}
 
export default Main;