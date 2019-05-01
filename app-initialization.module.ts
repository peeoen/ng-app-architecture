// AppInitializationModule makes use of Angular’s APP_INITIALIZER 
// injection token to do some work during Angular initialization process. 
// This is useful for loading app’s settings from a server since the code is executed before rendering anything. 
// Note that your app won’t start until all promises are resolved so doing too much work during initialization 
// might impact the performance of your app negatively. In many scenarios it is better to use route resolvers 
// to load necessary data before rendering route’s component as this doesn’t delay app’s initialization.

// Lastly, app.constants.ts is used to store global constants’ enums and app.config.ts is used to
// store global app’s configs like REST API base URL or some defaults.