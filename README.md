# AngularBasicApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


## File Structure & Usage
#my-angular-app/
├── src/
│   |ー├── app/
│   │   ├── app.component.ts       # Root component logic
│   │   ├── app.component.html     # Root component template
│   │   ├── app.component.css      # Root component styles
│   │   ├── app.module.ts          # Root module
│   │   └── app-routing.module.ts  # Routing module (optional)
│   ├── assets/                   # Static assets (e.g., images)
│   ├── environments/
│   │   ├── environment.ts        # Development environment settings
│   │   └── environment.prod.ts   # Production environment settings
│   ├── index.html                # Main HTML file
│   ├── main.ts                   # App entry point
│   └── styles.css                # Global styles
├── angular.json                  # Angular CLI configuration
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
└── .gitignore                    # Git ignore file

## Data Binding 
 it concept of sharing the Display Data from Logic computing file (.ts) to user Interface file(.html) and vice versa
## there are two type of Data binding
 1. One Way Data binding
    Either display data move from .ts to .html and vice versa
    1. Interpolation