# Angular Decorator Example: Middle-earth Edition

This project demonstrates how to use Angular's traditional module-based architecture with non-standalone components. It specifically focuses on the @NgModule decorator and its metadata properties (declarations, imports, exports, providers, bootstrap).

## Project Overview

The application is a simple guide to Middle-earth realms from The Lord of the Rings, organized into "Good Side" (Rivendell, Gondor, Rohan) and "Bad Side" (Mordor) sections. Each realm has its own page with information and interactive elements. The project structure showcases how to organize code using Angular's module system.

## Key Features

- **@NgModule Metadata Focus**: Explores the declarations, imports, exports, providers, and bootstrap properties
- **Modular Architecture**: Uses Angular's traditional NgModule system instead of the newer standalone components
- **Feature Modules**: Separate modules for good and bad realms
- **Shared Components**: Reusable components across different feature modules
- **Custom Pipes**: Demonstrates how to create and use pipes in a modular architecture

## Technical Concepts Demonstrated

### @NgModule Class Metadata

This project focuses specifically on the @NgModule decorator and its metadata properties:

- **declarations**: Components, directives, and pipes that belong to this module
- **imports**: Other modules whose exported components/directives/pipes are needed
- **exports**: Components, directives, and pipes that can be used in other modules
- **providers**: Services that the module contributes to the global collection of services
- **bootstrap**: The main application view (root component)

### Module Structure

- **AppModule**: The root module that bootstraps the application
- **GoodSidePagesModule**: Contains components for the good realms
- **BadSidePagesModule**: Contains components for the bad realms
- **ComponentsModule**: Contains shared components used across the application
- **PipesModule**: Contains custom pipes used across the application

## Why Non-Standalone Architecture?

While Angular is moving towards standalone components, understanding the traditional module-based architecture is still important for:

1. Maintaining existing Angular applications
2. Working with enterprise applications that haven't migrated to standalone components
3. Understanding Angular's dependency injection system at a deeper level
4. Learning how Angular organizes and manages components, directives, and pipes

## Getting Started

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `ng serve` to start the development server
4. Navigate to `http://localhost:4200/`

## Project Structure

```
src/
├── app/
│   ├── components/               # Shared components
│   │   └── character-display/    # Component for displaying character info
│   ├── pages/                    # Feature pages
│   │   ├── good-side-pages.module.ts
│   │   ├── bad-side-pages.module.ts
│   │   ├── gondor/
│   │   ├── mordor/
│   │   ├── rivendell/
│   │   └── rohan/
│   ├── pipes/                    # Custom pipes
│   │   └── character-info.pipe.ts
│   ├── app.component.ts          # Root component
│   ├── app.module.ts             # Root module
│   └── app-routing.module.ts     # Application routes
└── ...
```

## Learning Resources

If you want to learn more about Angular's module system and decorators, check out:

- [Angular Official Documentation on NgModules](https://angular.io/guide/ngmodules)
- [Angular Architecture Best Practices](https://angular.io/guide/styleguide)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
