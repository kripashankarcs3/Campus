# Student Result Portal

A simple and clean responsive website for checking student results using HTML, CSS, and JavaScript.

## Features

- Modern home page with a simple navbar
- Student result checking form
- Total marks, percentage, and pass/fail result display
- Clean responsive design for desktop and mobile
- Beginner-friendly code structure
- Ready for GitHub Actions and GitHub Pages deployment

## Project Structure

```text
.
|-- .github/
|   `-- workflows/
|       `-- main.yml
|-- css/
|   `-- styles.css
|-- js/
|   `-- script.js
|-- index.html
`-- README.md
```

## How It Works

1. Enter the student name and roll number.
2. Add marks for three subjects.
3. Click the submit button.
4. The portal calculates:
   - Total marks
   - Percentage
   - Pass or fail status

The student passes only if all subject marks are 35 or above.

## Run Locally

Open `index.html` directly in a browser.

## CI/CD

The GitHub Actions workflow:

- validates that the required static files exist
- deploys the website to GitHub Pages when code is pushed to `main`

To use GitHub Pages, enable Pages in the repository settings and select GitHub Actions as the source.
