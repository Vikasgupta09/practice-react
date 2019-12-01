/**
 * Virtual DOM
 * -----------
 * everybody was trying to update dom efficiently
 * updating dom is really expensive , repaints everything on DOM
 * 1. make DOM update faster
 * 2. update as less as possible
 * react came with virtual DOM that solves both prob
 * virtual DOM is created at the initial render
 * any updates to virtual DOM (tree) doesn't update the actual DOM
 */

/**
 * Why to use setState instead of directly updating it ?
 * -----------------------------------------------------
 * setState always trigger rerender to update view
 * directly setting state won't do that
 *
 */

/**
 * How many ways you can conditional render in react ?
 * ---------------------------------------------------
 * using if statement
 * using && statement
 * using conditional operator
 *
 */

/**
 * Fragments
 * ---------
 * whenever a component is rendered, it renders a single child
 * using react fragment we can render multiple childs
 * 
 render() {
  return {
    <React.Fragment>
      <Child />
      <Child />
      <Child />
    </React.Fragment>
  }
 }
 */

/**
 * How to do code splitting in react ?
 * -----------------------------------
 * react bundles all thing in one single file
 * but user might need to view only few pages instead of all
 * So we need to split code
 * react introduces dynamic import aka lazy loading to load selected component
 * const LazyComp = React.lazy(() => import('./lazyComp'));
 * we need to provide fallback component so that code doesn't break
 * react introduces Suspense with lazy loading
 * <Suspense fallback={<div>Loading....</div>}>
 *  <LazyComp />
 * </Suspense>
 */
