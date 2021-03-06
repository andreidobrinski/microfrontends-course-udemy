# Microfrontends Notes

## What is a microfrontend?

- Splitting a monolithic application's frontend into multiple different codebases
- Usually split depending on major features
- Each codebase can have it's own SPA implementation/frontend framework
- Try to prevent direct communication between frontends
- Use an API to manage communication between SPAs

Smaller apps:

- easier to understand
- easier to make changes to
- easier for separate teams to work on

## Integration

- A container app to coordinate how/when to show individual microfrontends

Major categories:

- Build-time (compile-time) integration
  - container app gets MF source code **before** it's loaded into the browser
  - container has to be redeployed when changes to a module (MF) are made
- Run-time (client-side) integration
  - container app gets MF source code **after** it's loaded into the browser
  - deployed to static URL
  - container fetches updated file and loads it
  - (primary focus in this course)
  - most flexible and performant solution, uses webpack module federation

## Sharing dependencies between subprojects

If the subprojects require different versions, then webpack will serve both versions.

If the subprojects require the same version, then webpack will only serve one instance of it.

If forcing a singleton:true but specifying conflicting versions, webpack with throw a console warning about conflicting rules.

## Requirements

Requirements driving architecture choices:

1. No coupling between child projects. No sharing state or functions. Shared dependencies are ok.
2. Almost no coupling between container and child apps. Container can't assume any frameworks that the child is using. Necessary comms are done with callbacks and simple events.
3. CSS from one project should not affect another
4. Version control shouldn't have any impact on overall project. Monorepo vs separate projects should both work.
5. Container should be able to decide to use the latest version of a microfrontend or a specific version of a microfrontend. Either or - container may have to redeploy to make a change.

## Routing

1. Both the container and individual apps need routing features. Container controls routing between subapps. Subapp controls its own routing, if it needs routing.
2. Subapps might need to add new pages/routes at any time. Shouldn't need to deploy the container to do this.
3. It should be possible to show two or more microfrontends at the same time.
4. We want to be able to use off-the-shelf routing solutions. React Router, Vue Router etc.
5. Subapp navigation should work both in hosted mode and in isolation.
6. If different apps need to communicate about routing, it should be done as generically as possible. Should be agnostic about any routing libraries.

### History Object

3 different kinds:

1. Browser History. Looks at the path of the URL to figure out what the current path is
2. Hash History. Looks at everything after the '#' in the URL to figure out the path.
3. Memory (Abstract) History. Keeps track of the current path in memory.

## Authentication

- Auth app is for signin/up of users
- Auth app is not for enforcing permissions or allowing access to certain routes
- Container app is responsible for auth and communicating auth status to subprojects

## Summary

**Microfrontends**

- collection of frontend projects built with one container and multiple subapps
- subapps can be run independently or as part of the container
- app code integration managed with webpack module federation
- subapps expose a `mount` function that lets the container (or subapp in isolation) mount the MFE to an HTML element
- communication between apps managed with simple JS callbacks
- requirements noted above

**Development**

- container and subapps need an npm install && start

**Routing**

- history object is passed from container to subapp
- subapp creates own history object if not passed for isolated development
- container routes between subapps
- subapps manage their internal routing
- pass callbacks to communicate route pathname between container and subapps to sync history objects

**CSS**

- important to scope all CSS to MFE
- done with CSS-in-JS frameworks by appending a prefix to classnames in production

**Performance**

- shared dependencies with webpack module federation plugin
- code splitting with React lazy

**Authentication**

- container hold auth state and passes to subapps

**Next Steps**

- SSR/SSG at either the container or subapp level?
- Replacing JS with a different language at the container or subapp level?
- room for improvement in DX, to not have to run multiple terminal windows. nodemon or containerization?
- figure out React Router bug with landing on /route
