/**
 * Redux
 * -----
 * - State management library
 * - makes creating complex app easier
 * - not reqd to create a react app
 * - not explicity designed to use with react
 * 
 * Redux Cycle
 * Action Creator -> Action -> Dispatch -> Reducers -> State
 * 
 */
/**
 * What are alternatives to redux ?
 * --------------------------------
 * - mobX
 * - apollo client + graphQL
 * - RxJS
 */

/**
 * What is redux middleware ?
 * --------------------------
 * Redux architect
 * 
 *          post
 *    UI ----------> SERVER  ->  DB
 *    UI ----------> REDUCER -> STORE 
 *         action
 * 
 * As soon as POST request is made, redux parallely takes an action
 * and update the state via reducer.
 * But in case the POST request is failed, then state should not be updated.
 * 
 * For handling this,middleware comes into picture
 * We update state after receiving the POST api response. This is handled in middleware.
 * 
 */
