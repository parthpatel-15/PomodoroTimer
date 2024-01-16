# PomodoroTimer


**Description:**
Pomodoro-Timer is a simple and effective productivity tool designed to help you stay focused during work intervals. Break your tasks into timed sessions ranging from 5 to 60 minutes, even while working on other browser tabs, with a visible timer on the title.

**Features:**
- Create customizable sessions for focused work.
- Real-time timer visibility on the browser title.
- Track interrupted, completed, and ongoing sessions.
- View detailed session history and productivity analytics.

**Demo:**
Check out the live:  https://parthpatel-pomodoro-timer.netlify.app
<img width="1383" alt="Screenshot 2024-01-16 at 5 34 47 PM" src="https://github.com/parthpatel-15/PomodoroTimer/assets/79576096/94740b68-eb23-4f80-9f97-db2abc90f899">
<img width="1383" alt="Screenshot 2024-01-16 at 5 42 50 PM" src="https://github.com/parthpatel-15/PomodoroTimer/assets/79576096/7d27779c-b178-43a0-a4ba-567173f74378">



## How it was made

**Tech Stack:**
- **React:** The core framework for building dynamic user interfaces.
- **TypeScript:** Adds static typing for increased code reliability.
- **styled-components:** Used for styling and theming, providing visually appealing components.
- **zod:** Ensures data validation for accurate user input.
- **react-router-dom:** Enables seamless client-side routing for a smooth user experience.
- **react-hook-form:** Facilitates form validation and submission.

**Native React Functions:**
- 'useState' and 'useReducer' for managing component state
- 'useEffect' for handling side effects
- 'useContext' for global state management

The 'useState' and 'useReducer' are used to manage the state of the timer and the session history. The 'useEffect' is used to update the timer every second and to persist the session history to local storage. The 'useContext' is used to manage global state and to pass data between components.

**Third-Party Libraries:**
- **styled-components:** Styling and theming for visually appealing components.
- **zod:** Data validation to ensure correct user input.
- **react-router-dom:** Client-side routing for smooth navigation between pages.
- **react-hook-form:** Form validation and submission for enhanced user input accuracy.

Pomodoro-Timer showcases modern web development practices, utilizing React and TypeScript along with various third-party libraries to create an efficient and user-friendly Pomodoro timer application.
