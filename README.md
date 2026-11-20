# 🎵 Criminally Underrated Bands

A React project built with Vite, TypeScript and ESLint that follows the YouTube course **"Learn to Program in React"** by Professor Spencer.

📺 **Course Playlist**  
[Learn to Program in React - Professor Spencer](https://www.youtube.com/playlist?list=PLdmQEhafuhGqFV66g47tUZgw86BZCHmkF)

---

## 📖 Overview

This project was created as part of my React learning journey and focuses on building reusable React components, passing data through props, and rendering lists dynamically.

The application presents a collection of criminally underrated bands and displays:

- Band name
- Original members
- Year formed

### Featured Bands

- Dire Straits
- R.E.M.
- Collective Soul
- Traffic

---

## 🛠️ Technologies Used

- React
- TypeScript
- Vite
- ESLint
- Prettier
- CSS

---

## 🧠 React Concepts Practiced

### Components

The application is built using reusable React components:

- `Welcome`
- `Band`
- `BandList`
- `App`

### Props

Band information is passed to components through props.

### Array Mapping

The application uses JavaScript's `map()` method to dynamically render multiple band components from an array of objects.

### Spread Operator

Band data is passed into components using the spread operator:

```tsx
<Band {...singleBand} />
```

### TypeScript

TypeScript is used to define prop types and improve code safety.

---

## 📂 Project Structure

```text
src/
├── App.tsx
├── App.css
└── main.tsx
```

---

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

Navigate to the project folder:

```bash
cd Frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

## 🎯 Learning Goals

This project was created to practice:

- React fundamentals
- TypeScript basics
- Working with props
- Dynamic rendering with `map()`
- Component architecture
- Modern frontend tooling using Vite
- Git and GitHub workflows

---

## 👩‍💻 Author

**Lina**

---

## 📜 License

This project is available for educational and portfolio purposes.
