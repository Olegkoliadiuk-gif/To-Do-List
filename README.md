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
```

## 🔧 Updated Folder Layout

Project now uses a `public/` folder for the web entry and keeps sources under `src/`:

```text
/
├── public/
│   ├── index.html           # Entry HTML (open this in the browser)
│   └── style.css            # Styles used by the public site
├── src/
│   ├── js/
│   │   └── app.js           # Main application controller (ES module)
│   ├── components/
│   │   ├── todo-form.js     # Form submission logic
│   │   └── todo-item.js     # Individual task element logic
│   └── utils/
│       ├── id-gen.js        # Unique ID generator
│       └── storage.js       # localStorage interaction
├── README.md
└── .gitignore
```

## ▶️ How to run

Open `public/index.html` directly in the browser, or serve `public/` with a simple static server (recommended for proper module support):

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

## 📝 Notes

- The app stores tasks in `localStorage` under the key `my-todos`.
- To develop, edit files under `src/` and keep `public/` as the served output.
- If you want, I can add a dev script (`package.json`) or set up a small build step.
