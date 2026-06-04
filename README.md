# To-Do List Application

A modern, minimalist To-Do application designed for tracking daily tasks. The project is built using pure JavaScript (ES6+) without any external frameworks.

## 🚀 Features
- **Add Tasks**: Create new tasks easily using the input form.
- **Data Persistence**: All tasks are saved to `localStorage`, so they persist even after refreshing the page.
- **Task Status**: Mark tasks as completed using checkboxes.
- **Management**: Delete individual tasks or use the "Clear All" button to wipe the list.
- **Responsive Design**: The app looks great on both desktops and mobile devices.

## 🛠 Technologies
- **HTML5**: Semantic markup.
- **CSS3**: Flexbox, CSS Variables, and animations.
- **JavaScript (ES6+)**: Modular architecture, DOM manipulation, and `localStorage` API.

## 📂 Project Structure
```text
/
├── src/
│   ├── components/
│   │   ├── todo-form.js      # Form submission logic
│   │   └── todo-item.js      # Individual task element logic
│   ├── utils/
│   │   ├── id-gen.js         # Unique ID generator
│   │   └── storage.js        # localStorage interaction
│   └── app.js                # Main application controller
├── index.html                # Main entry point
└── style.css                 # Project styles