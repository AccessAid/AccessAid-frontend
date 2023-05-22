# AccessAid Frontend

This is the frontend project for AccessAid, a platform for Information and Accessibility Guide in Public and Private Spaces.

## Prerequisites

To run this project, make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository: `git clone https://github.com/AccessAid/AccessAid-frontend.git`
2. Navigate to the project directory: `cd accessaid-frontend`
3. Install the dependencies: `npm install`

## Available Scripts

In the project directory, you can run the following scripts:

- `npm run dev`: Starts the development server using Vite.
- `npm run build`: Builds the production-ready optimized version of the app.
- `npm run preview`: Runs the built app in preview mode.
- `npm run lint`: Runs ESLint to lint the JavaScript and TypeScript files in the project.
- `npm run format`: Formats the code using Prettier.
- `npm run storybook`: Starts the Storybook development server.
- `npm run build-storybook`: Builds the Storybook as a static web application.

## Running the Application

To run the application in development mode, use the following command:

```
npm run dev
```

The application will be available at [http://localhost:5173](http://localhost:5173).

## Storybook

This project uses Storybook for component development and documentation. To run Storybook, use the following command:

```
npm run storybook
```

The Storybook development server will start and can be accessed at [http://localhost:6006](http://localhost:6006).

## Linting and Formatting

To lint the project files and fix any linting errors automatically, use the following command:

```
npm run lint
```

To format the codebase using Prettier, use the following command:

```
npm run format
```

These commands help ensure consistent code quality and formatting standards.

## Building the Application

To build the production-ready optimized version of the application, use the following command:

```
npm run build
```

The built files will be generated in the `dist` directory.

## Additional Information

For more information about specific scripts and configurations, refer to the project's `package.json` file.


## Environment Variables

For add Environment Variables for use around our app, for example backend url, you must create in root directory of the project the next file: `.env.local`. And add the next lines:
```
VITE_API_URL=<REPLACE_THIS_VALUE_WITH_URL_BACKEND>
VITE_GOOGLE_MAPS_API_KEY=<REPLACE_THIS_VALUE_WITH_API_KEY_GOOGLE>
```
For example (this example don't contain any private data):
```
VITE_API_URL=http://localhost:8080/api
VITE_GOOGLE_MAPS_API_KEY=123456
```