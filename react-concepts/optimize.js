/**
 * How to optimize a React app?
 * ----------------------------
 * First ask about the app,
 * - how big is app
 * - what does app do
 * - which version of react is it using
 * - what do you mean by bad performance 
 * - is it slow, crashing or bundle size is big ?
 * 
 * For speed,
 * - add profiler
 * - run app to see which areas of app is behaving badly
 * - rendering component that are not supposed to be rerendered
 * - setting same state over and over 
 * - stop rerendering some components 
 * If packet size is huge
 * - use lazy loading
 * If APIs are taking a lot of time
 * - optimize API
 * If assets are loading slowly (videos)
 * - use different strategy on server side
 * - function vs class
 * External packages are also available that can check speed of the app
 */