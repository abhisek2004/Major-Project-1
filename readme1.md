# FutureMesh README

**Project Title:** FutureMesh: Enhancing Employability Through Mentorship and Smart Job Matching  
**Domain:** Education Technology (EdTech), Career Development, and Placement Automation  
**Team Members:**

- ABHISEK PANDA (22CSE072)
- DEBABRATA MISHRA (22CSE140)
- DIPTESH NARENDRA (22CSE224)  
  **Guide/Supervisor:** Dr. Gitanjali Mishra  
  **Institution:** Gandhi Institute of Engineering and Technology University, Gunupur, Odisha  
  **Department:** Computer Science & Engineering

---

## 1. Project Overview

FutureMesh is a **full-stack web platform** built to solve real-world problems faced by students, universities, placement cells, alumni, and recruiters. It connects all stakeholders in a single digital system to improve career guidance, job matching, and placement efficiency.

This project is developed as a **Major Project-I** under the **Smart India Hackathon Problem Statement SIH1630**.

---

## 2. Problem Statement

Many students struggle to find the right career path due to:

- Limited access to structured mentorship
- Lack of visibility into relevant job opportunities
- No direct connection with alumni or industry professionals

At the same time:

- **Universities** manually manage placements, shortlisting, and tracking
- **Companies** receive too many irrelevant applications
- **Alumni networks** are disconnected from active placement processes

> **There is no unified system** that brings students, universities, alumni, and employers together with smart tools for mentorship, job matching, and analytics.

---

## 3. Solution – FutureMesh

FutureMesh is a **role-based, intelligent platform** that provides:

| User                          | Key Features                                                                                          |
| ----------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Students**                  | Personalized job recommendations, alumni chat, resume builder, project showcase, application tracking |
| **Alumni / Mentors**          | Share experience, guide juniors, real-time chat, verified profiles                                    |
| **HODs / Placement Officers** | Shortlist candidates, view analytics, track applications                                              |
| **Company HRs**               | Post targeted jobs, filter by department/CGPA/skills, view pre-screened profiles                      |
| **Admins**                    | Approve jobs, manage users, monitor platform health                                                   |

---

## 4. Core Objectives

1. **Connect students** with verified mentors and industry professionals for career guidance and skill development support.
2. **Enable universities** to efficiently manage job postings, candidate shortlisting, and overall placement activities.
3. **Deliver smart job recommendations** to students by matching their academic records, skills, and eligibility criteria.
4. **Allow companies** to post targeted job roles and receive filtered applications.
5. **Offer real-time chat and collaboration** between students, mentors, and alumni.

---

## 5. Expected Input & Output

### Expected Inputs

- Student profile data (academic records, skills, resume, project details)
- Job postings by companies (role, skills required, eligibility criteria)
- Mentor and alumni registrations
- Departmental data (student batches, university approvals)

### Expected Outputs

- Job recommendations based on profile and eligibility
- Application status tracking for students and administrators
- Shortlisting of students by HODs
- Chat and mentorship connections with relevant alumni
- Dashboards showing analytics, placement data, and trends

---

## 6. Existing System Analysis

| Ref | System                                    | Key Features                               | Limitations                                            |
| --- | ----------------------------------------- | ------------------------------------------ | ------------------------------------------------------ |
| 1   | Conventional Job Portals (Naukri, Indeed) | Job listings, resume upload, basic filters | No mentorship, no university targeting, no alumni role |
| 2   | University Placement Portals              | Campus notices, student profiles           | No real-time chat, no smart filtering (CGPA/skills)    |
| 3   | Alumni Networks (LinkedIn, AlmaConnect)   | Networking, experience sharing             | Not linked to placements or job recommendations        |

> **FutureMesh fills all these gaps** with a unified, intelligent, and interactive system.

---

## 7. Functional Requirements

1. Role-based dashboards for:

   - Students
   - Alumni
   - HODs
   - Company HRs
   - Super Admins

2. Core Features:
   - Job posting & targeted filtering
   - Candidate shortlisting
   - Application tracking
   - Real-time chat (student ↔ alumni)
   - Analytics dashboards
   - Resume suggestions
   - Project showcase
   - Email & interview reminders

---

## 8. Non-Functional Requirements

- **Security**: Role-based access control, encrypted data, user privacy
- **Performance**: Fast, lightweight, scalable
- **Usability**: Mobile-friendly, clean UI, easy navigation
- **Accessibility**: Works on all devices (desktop, tablet, mobile)

---

## 9. Technology Stack

| Category            | Tool/Technology                       | Reason for Selection                                |
| ------------------- | ------------------------------------- | --------------------------------------------------- |
| **Frontend**        | HTML, CSS, JavaScript, React, Next.js | Responsive, modern UI; fast rendering; SEO-friendly |
| **Backend**         | Flask (Python) / Node.js              | Lightweight, scalable, integrates well with MongoDB |
| **Database**        | MongoDB Atlas                         | Cloud NoSQL, flexible schema, easy scaling          |
| **Real-time Chat**  | Flask-SocketIO                        | Enables live messaging between users                |
| **Scheduling**      | APScheduler                           | Sends interview reminders and email alerts          |
| **Emails**          | SMTP                                  | Sends notifications, updates, and alerts            |
| **Analytics**       | Chart.js / Plotly.js                  | Visual dashboards for placement trends              |
| **Hosting**         | Vercel                                | Free, fast, auto-deploy from GitHub                 |
| **IDE**             | Visual Studio Code                    | Best for full-stack development                     |
| **Version Control** | Git & GitHub                          | Team collaboration, backup, version tracking        |

> **Note:** Initial plan used Python + Flask. Later shifted to **TypeScript + React + Node.js** for better scalability and type safety.

---

## 10. System Architecture (High-Level)

```
[Frontend: React + Next.js]
       ↓ (API Calls)
[Backend: Flask / Node.js]
       ↓
[MongoDB Atlas]
       ↓
[Real-time: SocketIO]
       ↓
[Emails: SMTP] [Scheduler: APScheduler]
```

- **Frontend** → Hosted on Vercel
- **Backend** → REST APIs + WebSocket
- **Database** → Cloud-hosted, secure
- **Diagrams Attached**:
  - System Architecture Diagram
  - Workflow Diagram
  - UI Mock-ups / Wireframes

---

## 11. Role-Based Access Control

| Role        | Permissions                                           |
| ----------- | ----------------------------------------------------- |
| **Student** | Apply to jobs, chat with alumni, view recommendations |
| **Alumni**  | Mentor students, share posts, chat                    |
| **HOD**     | View job posts, shortlist students                    |
| **HR**      | Post jobs, view filtered profiles                     |
| **Admin**   | Approve jobs, manage users, view analytics            |

---

## 12. Development Progress

### **Month 1 Review (35% Complete)**

- Landing page created
- User authentication (Login & Registration)
- Super Admin dashboard started
- Tools & environment setup completed
- Literature survey, requirement analysis, architecture finalized

### **Month 2 Review (60% Complete)**

- Full authentication module (login, register)
- Super Admin dashboard **fully functional**
- Student & Alumni modules live:
  - Profile & resume management
  - Mentorship chat
- HOD dashboard **fully designed and implemented**
- UI/UX improved and mobile-responsive

---

## 13. Current Features Implemented

- [x] Landing Page
- [x] User Registration & Login
- [x] Role-based Authentication
- [x] Super Admin Dashboard
- [x] Student Dashboard (Profile, Resume, Chat)
- [x] Alumni Dashboard (Mentoring, Chat)
- [x] HOD Dashboard (Shortlisting View)
- [x] Real-time Chat (Student ↔ Alumni)
- [x] Mobile-responsive Design

---

## 14. Upcoming Features (In Progress)

- [ ] Smart Job Recommendation Engine
- [ ] Company HR Job Posting Module
- [ ] Application Tracking System
- [ ] HOD Shortlisting Interface
- [ ] Analytics Dashboard (Charts & Reports)
- [ ] Email Notifications & Interview Reminders
- [ ] Resume Suggestion Tool
- [ ] Project Showcase Section

---

## 15. How to Run the Project (Local Setup)

> **Note:** Instructions will be updated as backend stabilizes.

```bash
# Clone the repository
git clone https://github.com/your-team/futuremesh.git
cd futuremesh

# Install dependencies (Frontend)
cd frontend
npm install
npm run dev

# Backend (Flask or Node.js)
cd ../backend
pip install -r requirements.txt  # or npm install
python app.py  # or node server.js
```

---

## 16. Project Structure (Planned)

```
futuremesh/
├── frontend/           → React + Next.js
├── backend/            → Flask / Node.js
├── database/           → MongoDB schemas
├── docs/               → Diagrams, SOP, Reports
├── .github/            → GitHub workflows
└── README.md
```

---

## 17. Contribution Guidelines

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/name`)
3. Commit changes (`git commit -m "Add feature"`)
4. Push to branch (`git push origin feature/name`)
5. Open a Pull Request

---

## 18. Contact & Support

**Guide:** Dr. Gitanjali Mishra  
**Email:** gitanjali.mishra@giet.edu  
**Team Lead:** Abhisek Panda (22CSE072)

---

## 19. Declaration

> This project is **100% original**, developed by the team members listed above.  
> No code or content has been copied from unauthorized sources.  
> No AI tools were used to generate code or documentation.  
> All content in this README is **human-written** and based solely on the provided project documents.

---

**FutureMesh – Bridging Dreams and Opportunities**  
_Built with passion by Team GIET Gunupur_

---

**Last Updated:** October 28, 2025  
**Status:** Under Active Development (60% Complete)
