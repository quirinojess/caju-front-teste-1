# Caju Front End Teste

This is a test version application developed with TypeScript/React, aimed at creating a modern and scalable application. We use a modular architecture to ensure that the code is clean and easy to maintain.

The application is divided into two main screens: the `Dashboard` and `New User`.

## Descrição

The admissions platform allows the user to add admissions and manage them with options to approve, reject, or delete. It is divided as follows:

- **Dashboard**: Displays all created admissions with options to approve, reject, and delete.
  ![image](https://github.com/user-attachments/assets/e2aa2d6b-10cd-4030-a0b8-dbf1e37152ad)

- **New User**: Used to fill in new admissions.
  ![image](https://github.com/user-attachments/assets/62959767-23ab-4af2-bb48-8dffabe54d4c)

## Prerequisites

- Node.js (v18 ou superior)
- Yarn

## Installing

```shell
git clone https://github.com/quirinojess/caju-front-teste-1.git
cd caju-front-test-1
yarn
yarn dev
```

Open another terminal and execute:

```shell
yarn init:db
```

Para os testes

```shell
yarn test:dev
```

If everything went well, the following ports will be available:
<br/>

App http://localhost:3001/
<br/>
Json Web Server http://localhost:3000/

## Project Structure

**components/** # Reusable components
**config/** # Configurations
**contexts/** # Global contexts
**hooks/** # Custom hooks
**pages/** # Main pages
**router/** # Routes
**services/** # Services from API
**tests/** # Tests config
**themes/** # Global styles
**types/** # Type definitions
**utils/** # Utilities
**App.tsx** # Main component
**index.tsx** # Application entry point

## Important Dependencies

### Overview

This section lists the key dependencies used in the project, providing a brief description of each and its role. This helps in understanding the technology stack and facilitates easier maintenance and onboarding.

### List of Dependencies

1.  **Storybook**

    - **Description:** A tool for developing and testing UI components in isolation. It helps visualize component states and interactions during development.
    - **Documentation:** [Storybook Documentation](https://storybook.js.org/docs)

2.  **Styled-Components**

    - **Description:** A library for styling components using CSS-in-JS. It allows for scoped and dynamic styling of React components.
    - **Documentation:** [Styled-Components Documentation](https://styled-components.com/docs)

3.  **Axios**

    - **Description:** A promise-based HTTP client for making requests to external APIs. It simplifies handling and processing HTTP requests.
    - **Documentation:** [Axios Documentation](https://axios-http.com/ptbr/docs/intro)

4.  **React Hook Form**

    - **Description:** A library for managing form state and validation in React applications. It provides a simple API for handling form inputs and validation.
    - **Documentation:** [React Hook Form Documentation](https://react-hook-form.com/)

5.  **React Icons**

    - **Description:** A library providing popular icons as React components. It allows easy integration and usage of icons in your React project.
    - **Documentation:** [React Icons Documentation](https://react-icons.github.io/react-icons/)

6.  **React Router DOM**

    - **Description:** A library for routing in React applications. It enables navigation and routing within the application, managing different views and URLs.
    - **Documentation:** [React Router DOM Documentation](https://reactrouter.com/)

### Adding New Dependencies

If you need to add new dependencies to the project:

1.  **Install Dependency:** Use the appropriate command to add the dependency.

>     bash

## Code Structure

### Components

- **Component:** Each component should have its own dedicated folder.
- **TSX File:** The React component is defined here.
- **Stories File:** Contains stories that showcase different states and variations of the component using Storybook.
- **Styled TS File:** Contains styles using `styled-components`.
- **Test File:** Unit tests for the component.

_**Note:** All components should be exported from the `index.ts` file in the components folder._

### Hooks

- **Custom Hooks:** Stored in `/hooks`. Each hook should be exported with its name followed by the function.

_**Note:** All hooks should be exported from the `index.ts` file in the hooks folder._

### Contexts

- **Contexts:** Defined in `/contexts`. Each context should provide a `Provider` and a custom hook for accessing the context.

_**Note:** All contexts should be exported from the `index.ts` file in the contexts folder._

### Pages

- **Pages:** Each page should be a React component and located in `/pages`. Pages should be composed of reusable components.

### Services

- **Services:** Files responsible for communicating with APIs and handling external data.

### Utilities

- **Utilities:** Auxiliary and utility functions should be stored in `/utils`.

### Types

- **Types:** Defined in `types.ts`. We use TypeScript to ensure robust types and avoid common errors.

## Best Practices

- **Clean Code:** Keep the code clean and well-documented. Use descriptive variable and function names.
- **Component Reuse:** Reuse components whenever possible to avoid code duplication.
- **Testing:** Write tests for components and hooks. Use `React Testing Library` and `Jest`.
- **Documentation:** Comment the code clearly and keep the documentation up to date.

### Future Improvements

To further enhance both user experience and technical robustness, several key improvements are planned. For user experience, we will develop a more functional menu, including a mobile version to ensure seamless navigation across devices. Additionally, we will introduce descriptive titles and paragraphs on the registration page to clearly outline actions and rules. A footer will be added with navigation buttons, such as "back to previous page" and "scroll to top," to facilitate easier navigation. Visual refinements, as identified through Storybook tests, will also be implemented to ensure a polished and intuitive interface.

On the technical side, we will integrate `import.meta.env` with Jest testing standards to ensure environment variables are properly recognized during tests. Comprehensive testing will be conducted on APIs and services to validate system performance and integrity. These enhancements aim to provide a superior user experience and a robust technical foundation for the project.
