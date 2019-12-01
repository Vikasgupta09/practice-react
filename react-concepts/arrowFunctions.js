/**
 * Arrow Functions
 * ---------------
 * - don't have its own this, it takes this from its lexical scope.
 * - it's an experimental syntax
 * 
 */

/**
 * Error Boundaries
 * ----------------
 * Similar to catch block where you try to render a component and face any error it will catch it
 * <ErrorBoundaryComp>
 *  <>
 * </ErrorBoundaryComp>
 * 
 * lifecycle method
 * - static getDerivedStateFromError
 * when the error happened you can get the derived state
 * render failure case
 * - componentDidCatch
 * log the error
 */

/**
 * Best lifecycle method for making API calls
 * ------------------------------------------
 * on API call, we get some data from server
 * after getting the response we rerender component accordingly
 * API call will take some time and during that time we want to
 * make sure that our DOM is ready for render
 * to ensure this componentDidMount lifecycle method is useful.
 * 
 * componentDidMount 
 */

 