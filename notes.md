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
