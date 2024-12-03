---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  I-Exam Portal - Online Examination and Interview System
  Powered by RJAY Technologies
drawings:
  persist: false
css: unocss
---

# I-Exam Portal
<div
  v-motion
  :initial="{ opacity: 0, y: 100 }"
  :enter="{ opacity: 1, y: 0, transition: { duration: 1000 } }">
  Secure and Scalable Online Examination & Interview Platform
</div>

<div
  v-motion
  :initial="{ opacity: 0, y: 50 }"
  :enter="{ opacity: 1, y: 0, transition: { delay: 800, duration: 500 } }">
  Powered by RJAY Technologies
</div>

<div
  class="pt-12"
  v-motion
  :initial="{ opacity: 0 }"
  :enter="{ opacity: 1, transition: { delay: 1000, duration: 500 } }">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---
layout: default
---

# Project Overview

<div
  v-motion
  :initial="{ opacity: 0, x: -100 }"
  :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }">
  A comprehensive web application designed for:
</div>

<v-clicks>

- Conducting secure online examinations
- Facilitating remote interviews
- Supporting multiple question formats
- Providing advanced assessment tools
- Ensuring scalability and performance
- Managing users and roles effectively

</v-clicks>

---
layout: two-cols
---

# Core Objectives

<v-clicks>

- Efficient & secure exam platform
- Versatile question management
- Enhanced user experience
- Comprehensive reporting
- Scalable architecture
- Real-time monitoring
- Multi-language support

</v-clicks>

::right::

 

---
layout: default
---

# Admin Module Features

<div class="grid grid-cols-2 gap-4">
<div 
  v-motion
  :initial="{ opacity: 0, x: -50 }"
  :enter="{ opacity: 1, x: 0 }">

### User Management
- Account creation and management
- Role-based access control
- Permission assignment
- User activity monitoring

</div>
<div 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :enter="{ opacity: 1, x: 0, transition: { delay: 200 } }">

### System Control
- Configuration management
- Security settings
- Notification system
- Audit logging

</div>
<div 
  v-motion
  :initial="{ opacity: 0, x: -50 }"
  :enter="{ opacity: 1, x: 0, transition: { delay: 400 } }">

### Analytics
- Performance metrics
- Usage statistics
- Exam analytics
- Interview insights

</div>
<div 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :enter="{ opacity: 1, x: 0, transition: { delay: 600 } }">

### Communication
- Announcements
- Automated notifications
- Feedback management
- System updates

</div>
</div>

---
layout: default
---

# Staff Module Capabilities

<div class="grid grid-cols-2 gap-4 mt-4">
<div v-click>

### Exam Management
- Multiple question types
- Question bank
- Timer settings
- Randomization
- Auto-grading

</div>
<div v-click>

### Interview Tools
- Scheduling system
- Question management
- Real-time assessment
- Candidate tracking

</div>
<div v-click>

### Analytics & Reporting
- Performance analysis
- Result generation
- Statistical insights
- Export capabilities

</div>
<div v-click>

### Monitoring
- Live exam supervision
- Proctoring features
- Student tracking
- Security measures

</div>
</div>

---
layout: default
---

# Student Module Features

<div 
  class="grid grid-cols-2 gap-4"
  v-motion
  :initial="{ opacity: 0, y: 50 }"
  :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }">
<div v-click>

### Core Features
- Personalized dashboard
- Exam scheduling
- Progress tracking
- Result viewing

</div>
<div v-click>

### Practice Tools
- Mock examinations
- Interview preparation
- Sample questions
- Study resources

</div>
<div v-click>

### Support Features
- Accessibility options
- Multi-language support
- Technical assistance
- Feedback system

</div>
<div v-click>

### Security
- Secure browsing
- Anti-cheating measures
- Data protection
- Session management

</div>
</div>

---
layout: default
---

# Advanced Features

<div class="grid grid-cols-3 gap-6">
  <div
    v-for="(feature, index) in [
      {
        title: 'Security',
        icon: 'carbon:security',
        color: 'red',
        items: ['Browser lockdown', 'AI proctoring', 'Activity monitoring', 'Secure authentication']
      },
      {
        title: 'Technology',
        icon: 'carbon:technology',
        color: 'blue',
        items: ['Video/voice integration', 'Digital whiteboard', 'Real-time collaboration', 'Adaptive testing']
      },
      {
        title: 'Performance',
        icon: 'carbon:chart-line',
        color: 'green',
        items: ['1000+ concurrent users', '99.9% uptime', 'Scalable architecture', 'Disaster recovery']
      }
    ]"
    :key="index"
    v-motion
    :initial="{ opacity: 0, scale: 0.9, rotate: -5 }"
    :enter="{ opacity: 1, scale: 1, rotate: 0, transition: { delay: index * 200, type: 'spring' } }"
    :class="`p-6 rounded-xl bg-${feature.color}-50 shadow-lg hover:shadow-xl transition-all duration-300`"
  >
    <div class="flex items-center mb-6">
      <div :class="`text-${feature.color}-500 text-3xl mr-3`">
        <component :is="feature.icon" />
      </div>
      <h3 :class="`text-2xl font-bold text-${feature.color}-600`">{{ feature.title }}</h3>
    </div>
    <ul class="space-y-4">
      <li 
        v-for="item in feature.items" 
        class="flex items-center text-gray-700"
      >
        <carbon:checkmark-outline :class="`text-${feature.color}-500 mr-2`" />
        {{ item }}
      </li>
    </ul>
  </div>
</div>

---
layout: default
---

# Technology Stack

<div
  v-motion
  :initial="{ opacity: 0, y: 100 }"
  :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }">

```mermaid {scale: 0.7}
graph TD
    A[Frontend - React] --> E[API Gateway]
    B[Backend - Spring Boot] --> E
    E --> C[Database Layer]
    C --> D1[PostgreSQL]
    C --> D2[MongoDB]
    F[Cloud Services] --> G1[AWS S3]
    F --> G2[AWS EC2]
    H[Version Control - Git] --> I[CI/CD Pipeline]
```

</div>

---
layout: center
class: text-center
---

# Contact Us

<div
  v-motion
  :initial="{ opacity: 0, y: 50 }"
  :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }">

  <div class="grid grid-cols-2 gap-8 mt-8">
    <div class="text-left">
      <h3 class="text-2xl font-bold mb-4">Get in Touch</h3>
      <p class="mb-2">📧 Email: dattudattakumar@gmail.com</p>
      <p class="mb-2">📱 Phone: 93810504702</p>
      <p class="mb-2">🌐 Website: www.iexams.live</p>
    </div>
    <div class="text-left">
      <h3 class="text-2xl font-bold mb-4">Follow Us</h3>
      <p class="mb-2">👥 LinkedIn: /iexamportal</p>
      <p class="mb-2">🐦 Twitter: @iexamportal</p>
      <p class="mb-2">📘 Facebook: /iexamportal</p>
    </div>
  </div>

</div>

---
layout: center
class: text-center
---

# Thank You

<div
  v-motion
  :initial="{ opacity: 0, scale: 0.8 }"
  :enter="{ opacity: 1, scale: 1, transition: { duration: 700 } }"
  class="text-center"
>
  <div class="mb-8">
    <h2 class="text-4xl font-bold bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
      For more information about I-Exam Portal
    </h2>
    <p class="text-2xl mt-4 text-blue-600">A Product of RJAY Technologies</p>
  </div>
  
  <div
    class="mt-12"
    v-motion
    :initial="{ opacity: 0 }"
    :enter="{ opacity: 1, transition: { delay: 1000, duration: 500 } }"
  >
    <a 
      href="https://iexams.live" 
      target="_blank" 
      class="px-8 py-3 text-lg rounded-full bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
    >
      Get Started
    </a>
  </div>
</div>

<div 
  class="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-teal-500 to-blue-500"
  v-motion
  :initial="{ scaleX: 0 }"
  :enter="{ scaleX: 1, transition: { delay: 1500, duration: 1000 } }"
></div>
