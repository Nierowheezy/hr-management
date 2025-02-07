# HR Management Solution

![HR Management Solution Login](/login.png)
![HR Management Solution Dashboard](/Project-To-Do.png)

## 📌 Project Overview

HR Management Solution is a web application designed to streamline employee management within an organization. It allows HR personnel to efficiently manage employee records, track attendance, oversee projects, and handle organizational tasks. The application follows a clean and professional UI design, ensuring an intuitive user experience.

This project was built using **React (TypeScript), Firebase, and Tailwind CSS** to deliver a scalable and responsive HR management system.

---

## 🚀 Features

- **User Authentication**: Users can register and log in using Firebase authentication. Both email/password and social logins (Google & Facebook) are supported.
- **Dashboard**: A structured dashboard displaying key HR functionalities.
- **Employee Management**: Ability to view and manage employee records.
- **Project Tracking**: Allows users to add, monitor, and update projects.
- **Attendance Management**: Track employee attendance and generate reports.
- **Messaging System**: Internal communication between employees.
- **Settings Panel**: Users can update their account settings.
- **Responsive Design**: Ensures optimal viewing on different screen sizes.

---

## 🛠️ Tech Stack

- **React + TypeScript**
- **Firebase Authentication (Email/Password, Google, Facebook)**
- **Firebase Firestore (Database)**
- **Tailwind CSS** (for styling)
- **Context API** (for state management)

---

## 🏗️ Setup & Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (v16 or later)
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nierowheezy/hr-management.git
   cd hr-management
   ```
2. **Install dependencies**
   ```bash
   npm install  # or yarn install
   ```
3. **Set up environment variables**
   - Create a `.env` file in the root directory and populate it using the `.env.example` file provided.
   - Example:
     ```env
      VITE_FIREBASE_AUTH_DOMAIN=***************************************
      VITE_FIREBASE_PROJECT_ID=**************************************
      VITE_FIREBASE_STORAGE_BUCKET=**************************************
      VITE_FIREBASE_MESSAGING_SENDER_ID=**************************************
      VITE_FIREBASE_APP_ID=**************************************
      VITE_MEASUREMENT_ID=**************************************
     ```
4. **Run the development server**
   ```bash
   npm run dev  # or yarn dev
   ```
5. **Build for production**
   ```bash
   npm run build  # or yarn build
   ```

---

## 📂 Folder Structure

```
hr-management
├── public
│   ├── facebook.png
│   ├── google.png
│   ├── logo.png
│   └── vite.svg
├── src
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── auth
│   │   │   ├── login
│   │   │   │   └── index.tsx
│   │   │   └── register
│   │   │       └── index.tsx
│   │   ├── dashboard
│   │   │   ├── Header.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── index.tsx
│   │   ├── pages
│   │   │   ├── project
│   │   │   │   ├── AddProject.tsx
│   │   │   │   ├── Complete.tsx
│   │   │   │   ├── OnGoing.tsx
│   │   │   │   ├── ProjectInfo.tsx
│   │   │   │   ├── Todo.tsx
│   │   │   │   └── Todo copy.tsx
│   │   │   ├── Employee.tsx
│   │   │   ├── Attendance.tsx
│   │   │   ├── Notice.tsx
│   │   │   ├── Organization.tsx
│   │   │   ├── Overview.tsx
│   │   │   ├── Settings.tsx
│   │   │   └── Ticket.tsx
│   ├── context
│   │   └── authContext
│   │       └── index.tsx
│   ├── firebase
│   │   ├── auth.ts
│   │   └── firebase.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── README.md
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🌐 Deployment

- The application is **deployed on Vercel**.
- Visit the live demo: [Live Link](https://your-deployment-url.vercel.app/)

---

## 📖 Usage Instructions

1. **Register an account** using email/password or sign in with Google/Facebook.
2. **Navigate through the dashboard** to access different sections (Projects, Attendance, Employees, etc.).
3. **Manage HR functionalities**, including project tracking and attendance monitoring.
4. **Update user settings** via the Settings page.
5. **Logout** Logout functionality

---

## 🔥 Challenges & Solutions

- No major challenges were encountered during development.

---

## 🚀 Future Improvements

- Implement **toast notifications** for better user feedback.
- Enhance **state management** for better performance and scalability.
- Improve **UI responsiveness** across all screen sizes.
- Add **more detailed functionalities** to complete the HR management experience.

---

## 🤝 Contribution

Feel free to fork this repository and submit pull requests. Any improvements are welcome!

---

## 📝 License

This project is licensed under the MIT License.

---

## 💡 Author

Developed by **Olaniyi Olabode (Niero)**
