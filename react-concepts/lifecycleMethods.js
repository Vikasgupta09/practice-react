/**
 * Lifecycle Methods in React
 * --------------------------
 * When you render a component there are 2 phases
 * 1. initial render
 * - constructor
 * - static getDerivedStateFromPops (old method - componentWillReceiveProps)
 *    tries to get dervied state from props
 *    why it is static ?
 *        because we don't want to use 'this' inside it.
 *    return states or null
 * - render
 *    returns jsx
 *    mandatory to have
 *    cannot set state here
 * - componentDidMount
 *    runs after component is mounted
 *    used when incorporating third party lib, notify dom is ready
 *
 * 2. re-render
 * - static getDerivedStateFromProps
 * - shouldComponentUpdate
 *    we need to make a decision if a component is to be updated or not
 *    compare previous state with new state
 * - render
 * - getSnapshotBeforeUpdate (old method -componentWillUpdate)
 *    precommit phase
 *    mount happens after this
 *    can be used in lazy loading implementation
 * - componentDidUpdate
 *   component is updated, whatever needs to be done post that can be done here
 * - componentWillUnMount
 *   after this component will unmount
 */

/**
 * How to stop components from rerendering ?
 * -----------------------------------------
 * There are 3 ways to do this
 * - shouldComponentUpdate
 * this method is part of rerender life cycle method.
 * compare prev state with new state and return false acc.
 * - React.PureComponent
 * pure component actually compares the old with new state. if they are same, it stops rendering.
 * automatically does what we are doing in shouldComponentUpdate.
 * - React.memo
 * it uses memoization , return the same output for a given repeated input
 */

/**
 *       Component LifeCycle
 *      ----------------------
 *
 *   constructor
 *     - good place for one time setup
 *
 *   render
 *     - avoid doing anything besides returning jsx
 *
 * content is visible on screen post render
 *
 *   componentDidMount
 *     - good place to do data loading
 *
 * sit and wait for updates
 *
 *   componentDidUpdate
 *     - good place to do more data loading when state/props change
 *
 * sit and wait until the component is no longer shown
 *
 *   componentDidUnMount
 *     - good place for clean up
 */
