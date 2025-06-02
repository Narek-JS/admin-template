# Admin Template

A fully-featured, production-ready **Admin Dashboard Template** built using the latest frontend technologies including **React 19**, **Vite 6**, **TypeScript**, **TailwindCSS v4**, **Ant Design 5**, **Redux Toolkit**, **RTK Query**, and **react-i18next**.

This project features **responsive layouts**, **custom language switchers**, **multi-language support (English + Armenian)**, **modular routing**, **dynamic components**, and a clean developer experience optimized for scalability.

---

## 🚀 Features

- ⚛️ **React 19** + `react-router-dom@7` with lazy-loaded routing (`React.lazy` + `Suspense`)
- ⚡ **Vite 6** - blazing-fast bundler and dev server
- 📦 **TypeScript** with strict linting rules
- 🎨 **Tailwind CSS v4** for utility-first, customizable UI
- 🧩 **Ant Design v5** fully integrated and themed with CSS variables
- 🌍 **react-i18next** multi-language support (EN/AM)
- 🧠 **Redux Toolkit** with **RTK Query** for API and state management
- 🧱 **Modular layout** with shared `Header`, `Sidebar`, `UserCard`, `PageLayout`
- 🌐 **Custom fonts** via `Helvetica Now Display` integration
- 🌀 Global **Spinner** component for lazy routes
- 📚 Easily extendable with pre-configured folder structure and scalable design

---

## 📁 Folder Structure

```bash
src/
├── components/          # Reusable UI and shared components
│   ├── Icons/           # Custom SVG icons
│   ├── LanguageSwitcher # Language toggles for Auth and Dashboard
│   └── UI/              # Spinner and other UI elements
├── constants/           # Routes, theme, form config, etc.
├── i18n/                # Localization files (EN + HY)
├── layout/              # Layout system with Header + Sidebar
├── pages/               # Route-based lazy pages (Dashboard, Products, etc.)
├── routes/              # Route definitions
├── store/               # Redux Toolkit store, RTK Query setup, hooks
├── styles/              # Global Tailwind + custom fonts
├── utils/               # Helper functions (e.g., string formatting)
├── main.tsx             # Root app entry point
└── vite-env.d.ts        # Vite types
```

---

## 📦 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/admin-template.git
cd admin-template
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

### 5. Preview production build

```bash
npm run preview
```

---

## 🌍 Internationalization (i18n)

- Available languages: `English (en)` and `Armenian (hy)`
- Language toggles via `<AuthLanguageSwitcher />` and `<DashboardLanguageSwitcher />`
- Translation files are located in `src/locales/{en,hy}.json`

---

## ✨ New Updates

- ✅ **Ant Design 5** integration with full custom theming via `THEME_CONFIG`
- ✅ **Strict linting** enabled via `typescript-eslint`, `@eslint/js`, and recommended rules
- ✅ **Dynamic Sidebar** with multi-language labels and Ant Design Menu
- ✅ **Modular User Card** with animation toggle and logout support
- ✅ **Custom Font Integration** with Helvetica Now Display
- ✅ **Password visibility toggle** in `SignIn` / `SignUp` using Ant Design Icons
- ✅ **PageLayout** component for consistent UI across all pages
- ✅ **Responsive mobile-friendly UI** with `tailwindcss`

---

## 🧪 How to Extend

- Create a new page inside `src/pages/`
- Add its route in `src/routes/routes.tsx`
- Use `PageLayout` for consistency
- Use `useAppSelector`/`useAppDispatch` for state access
- Add new API endpoints to `src/store/api.ts`

---

## 📜 License

MIT — free to use and modify as needed.

---

## 🙌 Author

Built with ❤️ by [Narek Petrosyan](https://www.linkedin.com/in/narek-petrosyan-dev)

📫 Email: [narek.petrosyan.005@gmail.com](mailto:narek.petrosyan.005@gmail.com)
🌐 Portfolio: [narek.portfolo.am](http://narek.portfolo.am)
