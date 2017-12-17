// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  /* FB Test */
  firebase: {
    apiKey: "AIzaSyDzCwH6xKEuRwScws6N9FkvYegGEiQPb50",
    authDomain: "test-proj-d8af0.firebaseapp.com",
    databaseURL: "https://test-proj-d8af0.firebaseio.com",
    projectId: "test-proj-d8af0",
    storageBucket: "test-proj-d8af0.appspot.com",
    messagingSenderId: "855517537391"
  }
};