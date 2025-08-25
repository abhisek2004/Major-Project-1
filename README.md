# Major-Project-1

# **FutureMesh – Enhancing Employability Through Mentorship and Smart Job Matching**

## **📖 Project Overview**

**FutureMesh** is an innovative, role-based, web-based platform designed to address the growing disconnect between students, universities, alumni, and industry recruiters.
It combines **personalized job recommendations**, **mentorship opportunities**, **placement automation**, and **real-time communication** into one streamlined system.

The solution aligns with **Smart India Hackathon (SIH) 2025 – Problem Statement SIH1630 (Mentor Connect)** and aims to simplify the entire student-to-industry journey by integrating mentorship, career guidance, and recruitment processes into a single platform.

---

## **📄 Abstract**

In the rapidly evolving job market, students often face challenges in securing the right guidance and opportunities. Although alumni, mentors, and university placement cells exist, communication gaps and inefficient processes prevent effective career support. Universities struggle to manage job postings, track applications, and shortlist candidates, while companies seek more efficient methods to reach targeted talent pools.

**FutureMesh** bridges these gaps by enabling:

* **Students** to receive job suggestions tailored to their profiles, connect with alumni mentors, and get timely interview notifications.
* **Companies** to post jobs targeted to specific universities or departments.
* **HODs & Admins** to manage postings, shortlist candidates, and analyze placement performance.
* **Alumni** to share professional experiences and guide students directly.

The platform uses **React**, **Next.js**, **Flask**, and **MongoDB**, with additional services like **Flask-SocketIO** for real-time chat, **APScheduler** for scheduled tasks, and **SMTP** for email notifications.

---

## **🎯 Objectives**

1. Connect students with verified mentors and industry professionals for career growth.
2. Help universities manage job postings, shortlisting, and placement activities more effectively.
3. Offer students smart job recommendations based on their skills and academic history.
4. Enable companies to post targeted job openings and receive filtered, qualified applications.
5. Provide a secure real-time chat system for collaboration among students, mentors, and alumni.

---

## **⚠️ Problem Statement**

Many students find it challenging to choose a career path due to limited structured mentorship and poor access to relevant job opportunities. Placement departments face difficulties in handling postings and applications manually, and companies struggle to identify eligible candidates efficiently.

There is a clear need for a **centralized, role-based digital platform** that integrates mentorship, placement, and career guidance into a single, accessible system for all stakeholders.

---

## **📥 Expected Input & Output**

**Expected Inputs:**

* Student academic records, skills, resume, and project details.
* Company job postings with eligibility requirements.
* Alumni and mentor registrations.
* Departmental student data with approvals.

**Expected Outputs:**

* Job recommendations tailored to individual profiles.
* Application status updates for students and administrators.
* Shortlisted student lists for HODs.
* Mentor–student chat connections.
* Analytics dashboards showing trends, skill gaps, and placement data.

---

## **🛠 Proposed Methodology**

1. **Requirement Gathering & Planning** – Understand the needs of each user role and break the project into smaller, manageable modules.
2. **Technology Selection** –

   * **Frontend:** React, Next.js, HTML, CSS, JavaScript
   * **Backend:** Flask (Python)
   * **Database:** MongoDB Atlas
   * **Real-time:** Flask-SocketIO
   * **Automation:** APScheduler
   * **Analytics:** Chart.js / Plotly.js
   * **Hosting:** Vercel
3. **UI/UX Design** – Create clean, role-specific dashboards, optimized for mobile and desktop.
4. **Role-Based Access Control** – Ensure each user type only accesses relevant features.
5. **Job Posting & Approval Flow** – Companies post → Admins approve → HODs shortlist → Students apply.
6. **Application Tracking** – Students can track real-time status changes.
7. **Mentorship Chat** – Direct student–alumni messaging with smart suggestions for relevant matches.
8. **Student Portfolio Section** – Upload projects, certifications, and achievements.
9. **Analytics Dashboard** – For admins to view placement stats, in-demand skills, and alumni engagement.
10. **Testing & Debugging** – Ensure smooth performance across devices and browsers.
11. **Deployment** – Live hosting on Vercel with custom domain integration.

---

## **🚀 Novelty & Contribution**

* Not just a job portal — integrates **mentorship + placement** in one system.
* **Smart Shortlisting** saves time for placement officers and recruiters.
* **Portfolio-Driven Recruitment** to highlight practical skills, not just grades.
* **Real-Time Communication** between students, alumni, and companies.
* **Comprehensive Analytics** to guide universities in improving placement outcomes.

---

## **💾 Database Description**

The platform uses **MongoDB Atlas**, a secure cloud-hosted NoSQL database.

**Security Measures:**

* Role-based access control (students, alumni, HODs, HRs, admins).
* Encrypted data transfer between client and server.
* Privacy ensured for chat messages, applications, and personal data.
* Regular backups for recovery in case of system failure.

---

## **📊 Expected Deliverables**

* Fully functional web prototype accessible by all user roles.
* Real-time alumni–student chat system.
* Job tracking and smart recommendation modules.
* Analytics dashboards for placement statistics and trends.

---

## **🧰 Tools & Technologies**

| Category             | Tool / Technology     | Reason                                 |
| -------------------- | --------------------- | -------------------------------------- |
| Programming Language | TypeScript, JavaScript | Strong typing & dynamic interactivity |
| Framework            | React, Next.js, Express.js | Modern UI with fast API handling |
| Backend Runtime      | Node.js                 | Scalable server-side execution |
| Database             | MongoDB Atlas         | Scalable cloud storage                 |
| Real-time            | Flask-SocketIO        | Live chat features                     |
| Scheduling           | APScheduler           | Automated reminders & tasks            |
| Hosting              | Vercel                | Quick and secure deployment            |
| Email Service        | SMTP                  | Send job alerts & updates              |
| Analytics            | Chart.js, Plotly.js   | Data visualization                     |
| Version Control      | Git, GitHub           | Collaboration & history tracking       |

---

## **📅 Development Progress**

* **Landing Pages** – ✅ Done
* **Login & Registration** – ✅ Done
* **Super Admin Dashboard** – 🔄 In-progress
* **Overall Completion** – \~35%

---

## **📌 Future Enhancements**

* **AI Chatbot Integration** (Dialogflow / OpenAI API) for career guidance.
* **Resume Parsing** using Python NLP (spaCy, PyPDF2).
* **Gamification Features** to boost student engagement.

---

## **👨‍💻 Team**

| Roll No  | Name             | Contact    |
| -------- | ---------------- | ---------- |
| 22CSE140 | Debabrata Mishra | 9348179664 |
| 22CSE224 | Diptesh Narendra | 9827403823 |
| 22CSE072 | Abhisek Panda    | 9078089401 |

---

## **📜 License**

Academic project for **Gandhi Institute of Engineering and Technology University, Odisha** – Major Project-I.
For educational and non-commercial use only.
