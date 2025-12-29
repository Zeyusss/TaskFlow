# TaskFlow - Angular Todo Management

A modern, responsive todo management application built with Angular 21 and NgRx Signal Store for efficient state management. TaskFlow provides a clean and intuitive interface for managing daily tasks with filtering capabilities, skeleton loaders, and smooth user interactions.

![Angular](https://img.shields.io/badge/Angular-21.x-dd0031?logo=angular&logoColor=white)
![NgRx](https://img.shields.io/badge/NgRx%20Signal%20Store-21.0.1-purple?logo=ngrx&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1-0ea5e9?logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?logo=typescript&logoColor=white)

---

## Table of Contents

- Introduction
- Features
- Tech Stack
- Architecture Overview
- NgRx Signal Store Implementation
- Component Structure
- Styling & Theme (Tailwind 4 + Flowbite)
- Folder Structure
- Installation & Setup
- Environment Configuration
- Usage Tips
- Building & Deployment
- Tests
- Code Style & Tooling
- Contributing
- License
- Credits

---

## Features

- **Todo Management**: Add, delete, and update todos with ease
- **Smart Filtering**: Filter todos by All, Active (Open), or Completed status
- **Real-time Updates**: Instant UI updates using Angular signals
- **Skeleton Loaders**: Elegant loading states for better user experience
- **Live Statistics**: Real-time count display for different todo categories
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Beautiful, responsive design using TailwindCSS and Flowbite
- **State Management**: Efficient state handling with NgRx Signal Store

---

## Tech Stack

- **Framework**: Angular 21 (Standalone API), Router, RxJS
- **State Management**: NgRx Signal Store 21.0.1
- **Styling**: Tailwind CSS 4.1.12, Flowbite plugin/theme, PostCSS
- **Language**: TypeScript 5.9
- **Build Tool**: Angular CLI 21.0.0
- **Package Manager**: npm 11.4.2
- **Testing**: Vitest 4.0.8
- **UI Components**: Flowbite 4.0.1

---

## Architecture Overview

- Standalone Angular app using provider-based configuration in `app.config.ts`.
- Clear separation of concerns:
  - `components/` for reusable UI components (todo-item, todos-skeleton)
  - `services/` for business logic and API calls
  - `store/` for NgRx Signal Store setup and state management
  - `model/` for TypeScript interfaces and mock data
- HTTP handled via Angular `HttpClient` with async service methods
- Signal-based reactive programming for efficient state management

## NgRx Signal Store Implementation

TaskFlow leverages NgRx Signal Store for modern, reactive state management:

### Store Structure
```typescript
export const TodoStore = signalStore(
  { providedIn: 'root' },
  withState(initTodoStore),
  withComputed(/* computed properties */),
  withMethods(/* store methods */)
);
```

### Key Features

#### **State Management**
- **Loading State**: Tracks async operations
- **Todos Array**: Stores all todo items
- **Filter State**: Manages current filter (all/active/completed)

#### **Computed Properties**
- `filteredTodos`: Dynamically filters todos based on current filter
- `allCount`: Total number of todos
- `activeCount`: Number of incomplete todos
- `completedCount`: Number of completed todos

#### **Store Methods**
- `loadAll()`: Fetches todos from the service
- `addTodo(title)`: Creates a new todo
- `deleteTodo(id)`: Removes a todo by ID
- `updateTodo(id, completed)`: Toggles todo completion status
- `updateFilter(filter)`: Updates the current filter

### Usage in Components
```typescript
// In component
readonly store = inject(TodoStore);

// Access state
const todos = this.store.filteredTodos();
const loading = this.store.loading();

// Dispatch actions
await this.store.addTodo('New task');
this.store.updateFilter('active');
```

## Component Structure

- **AppComponent**: Main application component with todo list and filtering
- **TodoItemComponent**: Individual todo component with delete and toggle functionality
- **TodosSkeletonComponent**: Loading skeleton component for better UX

---

## Styling & Theme (Tailwind 4 + Flowbite)

- Tailwind v4 wired via `src/styles.css` and `src/app/app.css`
- Flowbite components initialized in main app component
- Theme tokens and utilities:
  - `text-heading`, `text-body`, `bg-neutral-200`, `border-black`
  - `rounded-lg`, `rounded-base`, `shadow-xs`
  - Brand colors: `bg-orange-500`, `bg-blue-100`, `text-blue-700`
- Responsive design with mobile-first approach
- Smooth transitions and hover effects

---

## Folder Structure

```
TaskFlow/
├── angular.json
├── package.json
├── public/
├── src/
│   ├── app/
│   │   ├── app.config.ts         # Angular application configuration
│   │   ├── app.html              # Main application template
│   │   ├── app.ts                # Main application component
│   │   ├── app.routes.ts         # Application routes
│   │   ├── components/           # Reusable UI components
│   │   │   ├── todo-item/        # Individual todo component
│   │   │   └── todos-skeleton/   # Loading skeleton component
│   │   ├── model/                # TypeScript interfaces and types
│   │   │   ├── todo.interface.ts # Todo interface definition
│   │   │   └── todo.mock.ts      # Mock todo data
│   │   ├── services/             # Business logic and API calls
│   │   │   └── todos.service.ts  # Todo service with async methods
│   │   └── store/                # NgRx Signal Store setup
│   │       ├── model/            # Store models and initialization
│   │       └── todos.store.ts    # Main store implementation
│   ├── styles.css                # Global styles
│   └── main.ts                   # Application entry point
├── tsconfig.json
└── README.md
```

---

## Installation & Setup

Prereqs: Node.js 18+, npm

Install dependencies:

```bash
npm install
```

Start dev server:

```bash
npm start    # ng serve
# open http://localhost:4200
```

Build for production:

```bash
npm run build    # ng build
```

Watch mode for development:

```bash
npm run watch    # ng build --watch --configuration development
```

Unit tests:

```bash
npm test    # ng test
```

Scripts:

- `start`: `ng serve` 
- `build`: `ng build` 
- `watch`: `ng build --watch --configuration development` 
- `test`: `ng test`

---

## Environment Configuration

- Angular environments:
  - `src/environments/environment.ts` 
  - `src/environments/environment.development.ts` 

Current configuration uses mock data via `TodosService` with simulated async operations.

---

## Usage Tips

- The app uses mock data with simulated delays (1s for load, 500ms for updates)
- All state management is handled through NgRx Signal Store
- Skeleton loaders automatically show during async operations
- Filtering updates the UI immediately without page reload
- Todo counts update in real-time as items are added/removed/completed

---

## Building & Deployment

Build the application:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory. The application is ready for deployment to any static hosting service.

---

## Tests

- Unit tests via Vitest:
  - `npm test` 
- e2e tests not configured yet.

---

## Code Style & Tooling

- Angular CLI 21.0.0
- TypeScript 5.9
- Prettier (from package.json): 
  - `printWidth: 100`
  - `singleQuote: true`
  - HTML parser: `angular`
- Tailwind 4 + Flowbite configured via PostCSS

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style and conventions
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Keep UI consistent with the Tailwind theme and utilities

---

## License

MIT License - see the [LICENSE](LICENSE) file for details.

---

## Credits

- [Angular Team](https://angular.dev/) for the amazing framework
- [NgRx Team](https://ngrx.io/) for the powerful state management solution
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Flowbite](https://flowbite.com/) for the beautiful UI components

---

**Built with ❤️ using Angular and NgRx Signal Store**
