# Madhaneshwaran M. S. — Portfolio

A frontend-only portfolio for Java backend and Spring Boot engineering, built
with React and Vite.

## Getting started

```sh
npm install
npm run dev
```

## Available scripts

- `npm run dev` — start the local development server
- `npm run build` — create a production build in `dist`
- `npm run preview` — preview the production build locally
- `npm run lint` — check the project with Oxlint

## Jenkins build

The root `Jenkinsfile` installs from `package-lock.json` with `npm ci`, runs
lint and the production build, then archives `dist/` as a Jenkins artifact.

Configure the Jenkins agent with Node.js 20.19+ or 22.12+ and npm on its `PATH`.
The pipeline supports Unix-like and Windows agents.

## Portfolio content

- Edit profile details, skills, experience, projects, engineering areas, and
  education in `src/data/portfolio.js`.
- Update page sections in the corresponding component under `src/components/`.
- Adjust design tokens in `src/index.css` and component styles in `src/App.css`.
- Update SEO and social metadata in `index.html`.

The resume link is intentionally omitted because the resume URL on the reference
site currently returns 404 and no resume file is present in this project. A
LinkedIn link is omitted because the reference site points to a generic LinkedIn
page rather than a personal profile.

This project uses no backend or additional runtime packages.

## Project structure

```text
src/
  components/  Page sections and reusable project UI
  data/        Centralized portfolio content
  App.jsx      Page composition
  App.css      Responsive component styles
  index.css    Theme tokens and base styles
  main.jsx     React entry point
```
