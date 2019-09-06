# ReactDOM.render做了什么？

ReactDOM.render的作用
* 在container内渲染一个React元素，并且返回该组件的引用
```js
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<div>hello React</div>,document.getElementId('app'));
```
从源码角度ReactDOM.render做了什么
* 创建ReactSyncRoot、fiberRoot
* 创建、插入当前任务，并且调整优先级，进行优先调度渲染
* 返回了container即React元素的引用

源码流程
:::tip
react/packages/react-dom/client/src/ReactDOM.js
:::
```js
render(
    element: React$Element<any>,// React元素
    container: DOMContainer,// 真实DOM
    callback: ?Function,// 回调函数
) {
  // 检查container是不是一个真实的DOM对象
  invariant(
    isValidContainer(container),
    'Target container is not a DOM element.',
  );
  // 调用legacyRenderSubtreeIntoContainer
  return legacyRenderSubtreeIntoContainer(
    null,
    element, // React元素
    container,// 真实DOM
    false,
    callback,// 回调函数
  );
}
```
作用
* 判断container是不是一个DOM元素
* 调用legacyRenderSubtreeIntoContainer

:::tip
react/packages/react-dom/src/client/ReactDOM.js
:::
```js
function legacyRenderSubtreeIntoContainer(
  parentComponent: ?React$Component<any, any>,// 子组件
  children: ReactNodeList,// React元素
  container: DOMContainer,// 真实DOM
  forceHydrate: boolean,// 是否服务端渲染
  callback: ?Function,// 回调函数
) {
  // 判断container._reactRootContainer是否存在
  let root: _ReactSyncRoot = (container._reactRootContainer: any);
  let fiberRoot;
  if (!root) {
    // 初始化一个ReactSyncRoot
    root = container._reactRootContainer = legacyCreateRootFromDOMContainer(
      container,
      forceHydrate,
    );
    // 赋值fiberRoot
    fiberRoot = root._internalRoot;
    if (typeof callback === 'function') {
      const originalCallback = callback;
      callback = function() {
        const instance = getPublicRootInstance(fiberRoot);
        originalCallback.call(instance);
      };
    }
    // 启动批量更新
    unbatchedUpdates(() => {
      // 启动container更新
      updateContainer(children, fiberRoot, parentComponent, callback);
    });
  } else {
    fiberRoot = root._internalRoot;
    if (typeof callback === 'function') {
      const originalCallback = callback;
      callback = function() {
        const instance = getPublicRootInstance(fiberRoot);
        originalCallback.call(instance);
      };
    }
    updateContainer(children, fiberRoot, parentComponent, callback);
  }
  // 返回React元素引用
  return getPublicRootInstance(fiberRoot);
}
```
作用
* 创建ReactSyncRoot和fiberRoot
* 返回React元素引用
* 启动批量更新
* 启动任务调度

:::tip
react/packages/react-dom/client/src/ReactDOM.js
:::
```js
function legacyCreateRootFromDOMContainer(
  container: DOMContainer,
  forceHydrate: boolean,
): _ReactSyncRoot {
  // 判断节点是否拥有data-reactroot属性
  const shouldHydrate =
    forceHydrate || shouldHydrateDueToLegacyHeuristic(container);
  // 清空container中的子元素
  if (!shouldHydrate) {
    let warned = false;
    let rootSibling;  
    while ((rootSibling = container.lastChild)) {
      container.removeChild(rootSibling);
    }
  }
  // new 一个ReactSyncRoot对象并且返回
  return new ReactSyncRoot(
    container,
    LegacyRoot,
    shouldHydrate
      ? {
          hydrate: true,
        }
      : undefined,
  );
}
```
作用
* 判断container中是有拥有data-reactroot属性
* 清空container中的子元素
* new一个ReactSyncRoot并且返回

:::tip
react/packages/react-dom/client/src/ReactFiberReconciler.js
:::
```js
export function updateContainer(
  element: ReactNodeList,// React元素
  container: OpaqueRoot,// 真实DOM
  parentComponent: ?React$Component<any, any>,// React子元素
  callback: ?Function,// 回调函数
): ExpirationTime {
  const current = container.current;
  const currentTime = requestCurrentTime();// 时长

  // 请求suspense配置
  const suspenseConfig = requestCurrentSuspenseConfig();
  // 计算出expirationTime
  const expirationTime = computeExpirationForFiber(
    currentTime,
    current,
    suspenseConfig,
  );
  // 更新container的时间，并且返回expirationTime
  return updateContainerAtExpirationTime(
    element,
    container,
    parentComponent,
    expirationTime,
    suspenseConfig,
    callback,
  );
}
```
作用
* 请求suspenseConfig配置
* 计算expirationTime
* 更新container，并且返回expirationTime

:::tip
react/packages/react-dom/client/src/ReactFiberReconciler.js
:::
```js
export function getPublicRootInstance(
  container: OpaqueRoot,// fiberRoot
): React$Component<any, any> | PublicInstance | null {
  const containerFiber = container.current;
  if (!containerFiber.child) {
    return null;
  }
  // containerFiber.child.tag，为3是一个root节点
  switch (containerFiber.child.tag) {
    case HostComponent:
      return getPublicInstance(containerFiber.child.stateNode);
    default:
      // 返回containerFiber的stateNode
      return containerFiber.child.stateNode;
  }
}
```
* 判断container是否存在子节点
* 判断container的tag是否是React元素类型
* 返回container的stateNode，React元素类型