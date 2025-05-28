# Admin Template

A professional admin dashboard template built with **React 19**, **Vite**, **TypeScript**, **TailwindCSS**, **Redux Toolkit**, **RTK Query**, and **react-i18next**. This template provides a modern structure with lazy-loaded routing, state management, internationalization, and a responsive UI layout – ready to scale for enterprise-grade apps or quick MVPs.

---

## 🚀 Features

- ⚛️ **React 19** with `react-router-dom` v6 for navigation
- ⚡ **Vite** for fast development and optimized builds
- 🎨 **TailwindCSS** utility-first styling
- 🧠 **Redux Toolkit** with **RTK Query** for scalable state and API management
- 🌍 **react-i18next** internationalization (i18n) support
- 🧩 Modular architecture with lazy-loaded pages via `React.lazy` + `Suspense`
- 🖼️ Shared layout with persistent **Sidebar** and **Header**
- 🌀 Global loading spinner for route transitions
- 🧱 Ready for Ant Design integration

---

## 📁 Folder Structure

```
src/
├── main.tsx              # App entry point
├── App.tsx               # Root component with routes
├── i18n/                 # i18n configuration and translations
├── layout/               # Shared layout components (Header, Sidebar, Layout)
├── pages/                # Lazy-loaded page views
├── store/                # Redux store and RTK Query setup
├── routes/               # Route definitions (optional split)
├── components/           # Reusable components (e.g. Spinner)
└── styles/               # Tailwind global styles
```

---

## 📦 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Narek-JS/admin-template.git
cd admin-template
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the dev server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

---

## 🌍 i18n

- English (`en`) and Armenian (`hy`) translations
- Easily switch language via the `<LanguageSwitcher />` in the header
- All translation keys defined in `src/i18n/locales/{lng}/translation.json`

---

## 🧪 Extending

- Add more pages in `src/pages` and define their routes in `App.tsx`
- Add new API endpoints using RTK Query in `src/store/api.ts`
- Integrate UI libraries like Ant Design or ShadCN when ready

---

## 📜 License

MIT — feel free to use and modify for your own projects.

---

## 🙌 Author

Built with ❤️ by [Narek Petrosyan](https://www.linkedin.com/in/narek-petrosyan-dev)
📫 Email: [narek.petrosyan.005@gmail.com](mailto:narek.petrosyan.005@gmail.com)
🌐 Portfolio: [narek.portfolo.am](http://narek.portfolo.am)
