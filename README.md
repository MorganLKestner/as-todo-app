# A2TodoApp

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.18.

## Tutorial 
### This is the tutorial I followed along with the edits below - 
https://www.sitepoint.com/angular-2-tutorial/#comment-2918636905
 ** notes from the comments on the tutorial **
 *********************************************
I've just tested this using Node v6.2 and can confirm that with a couple of minor changes, it should work as expected.
- cd <your todo app>
- npm install
- npm install -g typings
- typings install
- Then edit line 39 of src/app/todo.service.ts and line 8 of src/app/todo.ts 
- changing Object.assign(this, values); 
- to (<any>Object).assign(this, values);
- After which the code should run as expected.


## Notes
###These are continual notes since there are updated issues that happen 
  *********************************************
- in <code>todo.service.spec.ts</code>
    <code>
        import { TestBed, async, inject } from '@angular/core/testing';
    </code>
- instead of 
    <code> import {
            beforeEach, beforeEachProviders,
            describe, xdescribe,
            expect, it, xit,
            async, inject
            } from '@angular/core/testing';
    </code>
- <code>TestBed</code> is supposed to replace what is above
- still checking tests



## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
