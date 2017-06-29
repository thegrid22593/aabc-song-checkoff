// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAYThpdcu3zb4ll_q6BJkpaWYS8XTVVz4Y",
    authDomain: "aabc-checkoff.firebaseapp.com",
    databaseURL: "https://aabc-checkoff.firebaseio.com",
    storageBucket: "aabc-checkoff.appspot.com",
    messagingSenderId: "920421563150"
  }
};
