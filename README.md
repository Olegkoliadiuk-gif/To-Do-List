# To-Do List Application

A modern, minimalist web application designed for tracking daily tasks. The project is implemented using pure JavaScript (ES6+) without the use of external frameworks or libraries.

## 💻 Features

- **Task Creation**: Seamless generation of new entries utilizing the input form component.
- **Data Persistence**: Automatic synchronization of the task list with `localStorage` to preserve state across page reloads.
- **Status Tracking**: Interactive checkbox functionality to toggle and monitor the completion status of individual items.
- **List Management**: Support for targeted deletion of specific entries or complete purging of the list via a unified control interface.
- **Responsive Layout**: Adaptive user interface optimized for consistent presentation across mobile devices and desktop monitors.

## 🖥️ Technology Stack

- **HTML5**: Semantic document structure.
- **CSS3**: Layout design leveraging Flexbox, modular CSS variables, and fluid animations.
- **JavaScript (ES6+)**: Modular application architecture, explicit DOM manipulation, and native `localStorage` API integration.

## 📂 Project Structure

The deployment workflow isolates production-ready assets within the `public/` directory, while development source files reside in the `src/` directory:

```text
/
├── public/
│   ├── index.html           # Main HTML entry point
│   └── style.css            # Production stylesheet
├── src/
│   ├── js/
│   │   └── app.js           # Core application controller (ES module)
│   ├── components/
│   │   ├── todo-form.js     # Form submission and input processing logic
│   │   └── todo-item.js     # Rendering and state logic for individual tasks
│   └── utils/
│       ├── id-gen.js        # Unique identifier generator utility
│       └── storage.js       # Interface module for localStorage interactions
├── README.md
└── .gitignore
```

## 🎮 How to run

To ensure proper resolution of native JavaScript modules, serving the application through a local static web server is required.

Using `http-server` (Node.js):

```bash
npx http-server public
```

Using Python 3 built-in server:

```bash
cd public
python3 -m http.server 8000
```

Then open `http://localhost:8080` (for `http-server`) or `http://localhost:8000` in your browser.

## ⌚️ Notes

- The application serializes and commits dataset updates to browser memory under the storage key `my-todos`.
- Development modifications must be performed exclusively within the `src/` directory.
- The current architecture is designed for expansion; a `package.json` manifest can be introduced if build step automation becomes necessary.
