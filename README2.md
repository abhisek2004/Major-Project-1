# FutureMesh: Enhancing Employability Through Mentorship and Smart Job Matching

## Overview

FutureMesh is a comprehensive web-based platform aimed at revolutionizing how students, universities, alumni, and companies interact in the realm of career development and job placements. Developed as a major project in the Department of Computer Science & Engineering at Gandhi Institute of Engineering and Technology University, Odisha, Gunupur, this system addresses key challenges in the education technology (EdTech) space, focusing on career guidance, mentorship, and automated placement processes. It aligns with the Smart India Hackathon Problem Statement SIH1630, creating a unified digital ecosystem that connects all stakeholders under one roof.

The platform facilitates personalized career support for students by linking them with mentors and relevant job opportunities, while enabling universities and companies to handle placements more efficiently. By incorporating role-based access, real-time communication, and intelligent matching algorithms, FutureMesh streamlines what was once a fragmented and manual process into a seamless, user-friendly experience.

## Problem Statement

In the rapidly evolving job market, students often encounter significant hurdles in discovering suitable career paths. Limited exposure to structured mentorship, insufficient visibility into job openings, and disconnection from industry insights leave many feeling unprepared. Universities, on their end, grapple with coordinating placements, manually tracking applications, and analyzing performance data. Companies, meanwhile, seek targeted talent from specific departments or institutions but are inundated with unqualified applications due to the lack of smart filtering mechanisms.

Existing systems fall short in providing an integrated solution. Conventional job portals offer basic vacancy listings and resume uploads but lack mentorship integration and university-specific targeting. University placement portals manage recruitment notices and student profiles yet miss out on real-time chat features and skill-based filtering. Alumni networks promote professional sharing but are not tied to placement workflows or recommendation tools. This results in missed opportunities for personalized guidance, timely alerts, and efficient hiring, highlighting the need for a centralized, intelligent platform that bridges these gaps for students, educational institutions, alumni, and employers.

## Objectives

The primary goals of FutureMesh are designed to create a supportive and efficient ecosystem for career advancement:

1. **Mentorship Connection**: Link students with verified mentors and industry experts to offer tailored career advice and skill-building support.
2. **Placement Management**: Assist universities in overseeing job postings, candidate selection, and overall placement operations with minimal manual effort.
3. **Smart Recommendations**: Provide students with job suggestions matched to their academic backgrounds, skills, and eligibility requirements.
4. **Targeted Job Posting**: Enable companies to advertise roles aimed at particular departments or universities and receive pre-filtered applications.
5. **Real-Time Collaboration**: Offer a chat and interaction space for students, mentors, and alumni to foster ongoing guidance and networking.

These objectives ensure the platform not only solves immediate pain points but also contributes to long-term employability enhancement.

## Features

FutureMesh incorporates a wide array of features tailored to different user roles, ensuring accessibility and functionality for everyone involved:

- **Role-Based Dashboards**: Customized interfaces for students, alumni, Heads of Departments (HODs), company HRs, and university admins, each displaying only relevant tools and data.
- **Job Posting and Targeting**: Companies can create postings with specific criteria like skills, eligibility, and department focus, targeted to selected universities.
- **Smart Job Matching**: Students receive personalized recommendations based on their profiles, including academic records, skills, resumes, and project details.
- **Application Tracking**: Real-time monitoring of application statuses for students and admins, with notifications for updates like interviews or shortlisting.
- **Mentorship and Chat**: Direct connections between students and alumni for guidance, supported by real-time messaging via Flask-SocketIO.
- **Shortlisting Tools**: HODs can review and select eligible students for job opportunities, with filters for CGPA, skills, and other criteria.
- **Analytics and Reporting**: Dashboards with visual stats on placement trends, performance, and user engagement, using libraries like Chart.js or Plotly.js.
- **Project Showcase and Resume Building**: Students can display their projects and get suggestions for improving resumes.
- **Academic Record Management**: Secure tracking of student batches, approvals, and departmental data.
- **Notifications and Scheduling**: Automated emails and reminders for opportunities, interviews, and tasks via APScheduler and SMTP integration.
- **Security and Accessibility**: Role-based access control, encrypted data handling, and mobile-friendly design for use on any device.

These features make the platform versatile, secure, and focused on user needs.

## Technology Stack

The development of FutureMesh leverages a modern, efficient set of tools and technologies chosen for their simplicity, scalability, and compatibility:

- **Programming Languages**:
  - Python: Used for backend logic, integrating well with frameworks for lightweight tasks.
  - JavaScript/TypeScript: Powers interactive frontend elements, with TypeScript adding type safety and scalability.

- **Frameworks**:
  - Flask (Python): Handles backend operations, providing a simple yet robust structure.
  - React with Next.js: Enables responsive, modern user interfaces with server-side rendering for faster performance.
  - Node.js: Supports scalable backend processes where needed.

- **Database**:
  - MongoDB Atlas: A cloud-hosted NoSQL solution for storing diverse data types like user profiles, job postings, chat logs, and records, offering easy scalability and security.

- **Real-Time Features**:
  - Flask-SocketIO: Facilitates live chat and instant updates.

- **Scheduling and Notifications**:
  - APScheduler: Manages timed tasks such as interview reminders.
  - SMTP: For sending emails and real-time alerts.

- **Visualization**:
  - Chart.js or Plotly.js: For generating reports and analytics visuals.

- **Frontend Basics**:
  - HTML, CSS, JavaScript: Forms the core of the user interface, ensuring clean and intuitive designs.

- **Development Tools**:
  - IDE/Editor: Visual Studio Code – Versatile with extensions for Python, JavaScript, and web development.
  - Version Control: Git & GitHub – For team collaboration, code tracking, and backups.
  - Hosting: Vercel – Provides reliable deployment for the application.

This stack ensures the platform is fast, maintainable, and capable of handling real-time interactions without unnecessary complexity.

## Methodology

The project follows a structured approach to ensure thorough planning and execution:

1. **Requirement Understanding and Planning**:
   - Identified needs for all users: students (job suggestions, mentorship), alumni (sharing experiences), HODs (shortlisting, tracking), HRs (posting jobs), and admins (approvals, analytics).
   - Broke the project into manageable tasks, created flow diagrams, and outlined system connections.

2. **Technology Selection**:
   - Chose tools for their balance of power and ease, focusing on lightweight, fast performance.

3. **User Interface Design**:
   - Developed clean, mobile-responsive dashboards tailored to each role, prioritizing usability and accessibility.

4. **Role-Based Access Implementation**:
   - Ensured secure, limited access: Students apply and chat; HODs select candidates; HRs post and view profiles; Admins approve and monitor.

5. **Job Posting and Shortlisting**:
   - Built mechanisms for targeted postings, eligibility checks, and automated filtering.

6. **Preliminary Design**:
   - Included attached diagrams such as System Architecture, Workflow, and UI Mock-ups/Wireframes.

This methodology emphasizes iterative development, starting from literature surveys and requirement analysis to full implementation.

## Expected Inputs and Outputs

**Inputs**:
- Student profiles (academic records, skills, resumes, project details).
- Job postings from companies (roles, required skills, eligibility criteria).
- Registrations from mentors and alumni.
- Departmental data (student batches, university approvals).

**Outputs**:
- Personalized job recommendations based on student eligibility.
- Real-time application status tracking for users and admins.
- Shortlisted candidate lists generated by HODs.
- Mentorship connections and chat sessions with relevant alumni.
- Interactive dashboards displaying analytics, placement stats, and trends.

## Project Progress

As of the latest reviews:

- **1st Month Review (35% Completion)**:
  - Completed: Literature survey, requirement analysis, architecture finalization, tool setup.
  - Progress: Landing pages, user authentication (login and registration). Super Admin dashboard underway for platform-wide controls.

- **2nd Month Review (60% Completion)**:
  - Completed: All tasks from Month 1, plus Super Admin dashboard with full controls.
  - Live Modules: Student and alumni features including login, registration, profiles, resumes, and mentorship chat.
  - Designed and Implemented: Alumni and HOD dashboards.

The project is on track, with ongoing development focusing on integrating remaining features like company HR modules and advanced analytics.

## Team and Supervision

- **Students**:
  - Abhisek Panda (Roll No. 22CSE072)
  - Debabrata Mishra (Roll No. 22CSE140)
  - Diptesh Narendra (Roll No. 22CSE224)

- **Guide/Supervisor**: Dr. Gitanjali Mishra

This project represents original work by the team, drawing solely from the documented research and development processes without any external copying or AI assistance. All content is human-crafted in English for clarity and authenticity. For any queries or contributions, refer to the GitHub repository (details to be added upon deployment).