# ThermostatApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running inside Docker container

Run `docker build -t thermostat-app .` to create thermostat-app image.

Run `docker run --name thermostat-app-container -d -p 8888:80 thermostat-app` to lunch thermostat-app container.
