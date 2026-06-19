# Work Hours Tracker

A modern full-stack application built with React, TypeScript, Tailwind CSS, and Supabase that allows users to track work hours, calculate monthly totals, and generate professional SMS-ready summaries.

## Features

- Secure email/password authentication with Supabase
- Work hours tracking by date
- Monthly hours calculation
- Filter entries by month
- Delete incorrect entries
- SMS summary generation
- Protected user data using Row Level Security (RLS)
- Unit testing with Vitest
- Continuous Integration with GitHub Actions

## Tech Stack

### Frontend

- React
- TypeScript
- Tailwind CSS
- React Router

### Backend

- Supabase
- PostgreSQL
- Supabase Auth

### Testing

- Vitest
- Testing Library

### DevOps

- GitHub Actions
- Netlify (deployment)

---

## Screenshots

### Login

Secure authentication using Supabase Auth.

### Dashboard

Track daily work hours and review monthly totals.

### SMS Generator

Generate a formatted monthly summary ready to send via SMS.

---

## Project Structure

```txt
src/
├── components/
│   ├── WorkEntryForm.tsx
│   ├── WorkEntryList.tsx
│   ├── SmsPreview.tsx
│
├── pages/
│   ├── Login.tsx
│   └── Dashboard.tsx
│
├── lib/
│   ├── supabase.ts
│   ├── calculateHours.ts
│   └── generateSmsMessage.ts
│
├── tests/
│   ├── calculateHours.test.ts
│   └── generateSmsMessage.test.ts
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/work-hours-tracker.git
```

Navigate to the project:

```bash
cd work-hours-tracker
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

Start the development server:

```bash
npm run dev
```

---

## Running Tests

```bash
npm run test:run
```

---

## CI/CD

GitHub Actions automatically:

- Installs dependencies
- Runs tests
- Builds the application

Every push to the `main` branch triggers the workflow.

---

## Future Improvements

- Edit work entries
- Dashboard statistics
- Charts and analytics
- Export to PDF
- Export to Excel
- SMS integration with Twilio
- Mobile-friendly PWA version

---

## Author

**Tibirica Botto Guimaraes Neto**

Toronto, Ontario, Canada

Software Engineering Technician | React Developer | Full Stack Developer

GitHub: https://github.com/yourusername

LinkedIn: https://linkedin.com/in/yourprofile
