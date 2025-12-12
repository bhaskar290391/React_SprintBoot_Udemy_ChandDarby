# React + Spring Boot Full Stack Guide

## 📂 Project Repository

Clone the source code:

```bash
git clone -c core.longpaths=true https://github.com/darbyluv2code/fullstack-react-and-springboot.git
```

---

## 🔗 Installation Guides

- [React Tools Installation (Windows)](https://github.com/darbyluv2code/fullstack-react-and-springboot/tree/main/install-react-tools/ms-windows)
- [Official React Documentation](https://react.dev/)
- [Bootstrap](https://getbootstrap.com/)

---

## ⚛️ React Setup

### Create a React App

```bash
npx create-react-app my-first-react-app
```

### Run the Application

```bash
cd my-first-react-app
npm start
```

### Change Default Port

```bash
set PORT=5100 && npm start
```

### If you encounter errors while creating the app:

```bash
npm install web-vitals
```

**Local Development URL:**

```
http://localhost:3000
```

---

## 🎨 Adding Bootstrap

Add the following to `public/index.html`:

**Inside `<head>`:**

```html
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
  crossorigin="anonymous"
/>
```

**Inside `<body>`:**

```html
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
  crossorigin="anonymous"
></script>
```

---

## 🟦 TypeScript Setup

TypeScript is a **superset of JavaScript** used for building Angular and React applications.

### Install TypeScript Globally

```bash
npm install --location=global typescript@4.7.4
```

Add the following to your **Environment Variables** for global access:

```
C:\Users\<your-username>\AppData\Roaming\npm
```

### Transpiling TypeScript

Transpiling means translating and compiling TypeScript files into JavaScript.

Steps:

1. Compile TypeScript file:
   ```bash
   tsc fileName.ts
   ```
2. Execute the generated JavaScript file:
   ```bash
   node fileName.js
   ```

**Note:** Always make changes in the `.ts` file, then recompile to `.js`.
