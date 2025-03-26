# Wallet App - Test Task

A mobile-first React application demonstrating clean code practices and modern web development skills. Built as a test task, we chose to focus on core functionality and maintainable architecture rather than using complex frameworks.

## Key Technical Decisions

- **Mobile-First Approach**: Implemented as a responsive web app, though React Native could have been used
- **TypeScript**: For type safety and better developer experience
- **CSS Modules**: Kept styling simple and maintainable without Tailwind or CSS-in-JS
- **Component Architecture**: Clean separation of screens and shared components
- **Mock Data Structure**: Well-organized data model for transactions and user state

## Features

### Main Screen
- Card balance and daily points tracking
- Payment status with dynamic due dates
- Transaction list with type-specific formatting
- Responsive layout optimized for mobile

### Transaction Details
- Comprehensive transaction information
- Smooth navigation and transitions
- Enhanced user experience with additional details

## Screenshots

### Main Screen
![image](https://github.com/user-attachments/assets/2ef91146-2e4d-4c82-86e0-62836672ae5f)

### Transaction Details
![image](https://github.com/user-attachments/assets/246cce17-3fdf-48d4-9308-bac37c4c55cd)

## Project Structure
```
src/
├── components/
│   ├── screens/
│   └── shared/
├── types/
├── data/
└── App.tsx
```

## Quick Start
```bash
npm install
npm start
```
