# StackAdvisor – Personal Tech Stack & Developer Tool Setup Advisor

StackAdvisor is a responsive web application that helps users choose technologies and developer tools for a project based on their project type, experience level, preferred programming language, operating system, budget, and requirements.

## Features

- Build a suggested technology stack for a project.
- Explore tools across frontend, backend, databases, cloud, DevOps, AI/ML, and other categories.
- View setup commands and documentation links for supported tools.
- Compare technology options and review alternative stacks.
- Save stack choices in the browser using local storage.
- Switch between light and dark themes.
- Responsive layout for desktop and mobile screens.

## Built With

- HTML5
- CSS3
- JavaScript

No build tools or package installation are required to run the current static version.

## Project Structure

```text
StackAdvisor/
├── index.html   # Main HTML page
├── style.css    # Layout, styling, and responsive design
├── script.js    # Advisor logic, tool data, and interactions
├── README.md    # Project documentation
└── .gitignore   # Files Git should ignore
```

## Run Locally

1. Download or clone this repository.
2. Keep `index.html`, `style.css`, and `script.js` in the same folder.
3. Open `index.html` in a modern web browser.

For a local development server, you can use the **Live Server** extension in Visual Studio Code.

## Deploy with GitHub Pages

1. Upload the project files to a GitHub repository.
2. Open the repository's **Settings** page.
3. Select **Pages** from the sidebar.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and the `/(root)` folder, then save.
6. Wait for GitHub Pages to publish the website. The URL will look like:

   `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`

## Usage

1. Open StackAdvisor in your browser.
2. Choose the option to start building a stack.
3. Enter your project details and preferences.
4. Review the recommended technologies and setup guidance.
5. Explore tools or save your preferred stack in the browser.

## Notes

- This is a client-side demo; recommendations are generated in the browser.
- Saved choices use browser local storage and are not automatically synced across devices.
- Review each tool's official documentation before running installation commands.

## Future Improvements

- Add automated tests and accessibility checks.
- Add export options for recommendations.
- Add user accounts and cloud-based synchronization if needed.
- Improve recommendation logic with feedback from users.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
