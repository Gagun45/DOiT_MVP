# DOiT MVP Test Assignment

# Next.js test project demonstrating CRUD functionality, API integration and responsive UI with modern state management

## Table of Contents

-[Features] -[Tech Stack] -[Getting Started] -[Scripts] -[Folder Structure] -[Unit Tests]

## Features

    Core Features:
        - Create - add new items
        - Read - view list of items
        - Delete - remove item with confirmation promts

    UX & UI Features
        - Responsive Design - works seamlessly on desktop and mobile
        - User Feedback - snackbars for success or error actions
        - Loading States - skeletons and spinned while fetching data

    Additionaly:
        - Search - quickly find items in the list
        - State Management - uses Redux Toolkit for global state
        - Routing - dynamic routes for individual item pages
        - API Integration - fetch and mutate data usin RTK Query
        - Unit-test -

## Tech Stack

    - Next.js 14
    - React 18
    - Redux Toolkit
    - Material UI v5
    - JavaScript (ES6+)

## Getting started

    ### Prerequisites
        -Node.js >= 18
        - npm or yarn
    ### Installaion
        # Clone the repo:
        git clone https://github.com/Gagun45/DOiT_MVP.git

        # Navigate to the project folder
        cd doit_app

        # Install dependencies
        npm install
        #or
        yarn install

        # Run development server
        npm run dev
        # or
        yarn dev

        # Open http://localhost:3000 to see it in the browser

## Scripts

    - npm run dev - run development server
    - npm run build - build project for productin
    - npm run start - start production server
    - npm run lint - run ESLint
    - npm run test - run unit-tests

## Folder Structure

    doit_app/
    ├─ app/                         # Next.js App directory (pages/routes)
    │   ├─ fonts/                   # Custom fonts used in app
    │   ├─ posts/
    │   │   ├─ [id]/                # Dynamic route for individual post details
    │   │   │   └─ page.tsx
    │   │   └─ create/              # Page to create a new post
    │   │       └─ page.tsx
    │   ├─ globals.css              # Global CSS
    │   ├─ not-found.tsx            # 404 Not Found page
    │   ├─ layout.tsx               # Root layout for the app
    │   ├─ page.tsx                 # Main landing page
    ├─ components/                  # Reusable UI Components
    │   ├─ AllPosts                 # Component to display a list of all posts
    │   ├─ CreatePostSpeedDial      # Floating action button for creating a new post
    │   ├─ CreatePostStepper        # Multi-step post creating component
    │   ├─ GlobalSnackbar/          # Snackbar notifications for the app
    │   │   ├─GlobalSnackbar.tsx
    │   │   └─snackbar.test.ts      # Unit-test for snackbar
    │   ├─ Header                   # App header
    │   ├─ HeroSection              # Landing page hero section
    │   ├─ PostCard                 # Card component for individual post preview
    │   ├─ SearchBar                # Search bar component for filtering posts
    │   └─ SinglePost               # Component to display a single post in detail
    ├─ hooks/                       # Custom React hooks with API calls and user feedback
    │   ├─ useCreatePost.ts         # Hook for creating a post
    │   └─ useDeletePost.ts         # Hook for deleting a post
    ├─ providers/                   # App providers
    │   ├─ ReduxProvider/           # Provides global state via Redux
    │   └─ ThemeProvider/           # Provides theme context for Material UI
    ├─ redux/                       # Redux state management
    │   ├─ apis/                    # RTK Query API slices
    │   ├─ slices/                  # Redux slices for state management
    │   └─ store.ts                 # Redux store setup
    ├─ utils/                       # Utility functions and shared types/constants
    │   ├─ constants.ts             # Application-wide constants
    │   └─ types.ts                 # Shared TypeScript types/interfaces
    ├─ next.config.mjs
    ├─ package.json
    └─ README.md

## Unit Tests

    Project uses Jest and React Testing Library to ensure components and Redux logic work as expected

    Features covered by Unit Tests:
    Redux slices (snackbar.test.ts):
        - Reducers update state correctly
        - Actions return expected payloads
        test:
    React Components (commentDialog.test.tsx):
        - Components render correctly based on Redux state
        - Conditional rendering works
        - User interactions work as expected
        
    # In order to run test script use command
    npm run test
