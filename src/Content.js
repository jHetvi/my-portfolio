import Hero_person from "./assets/images/Hero/person.png";

import react from "./assets/images/Skills/react.png";
import flutter from "./assets/images/Skills/flutter.png";
import android from "./assets/images/Skills/android.png";
import apple from "./assets/images/Skills/apple.png";
import api from "./assets/images/Skills/api.png";
import mobile from "./assets/images/Skills/mobile.png";
import cloud from "./assets/images/Skills/cloud.png";
import devops from "./assets/images/Skills/devops.png";
import ui from "./assets/images/Skills/ui.png";

import education1 from "./assets/images/Education/education1.png";
import education2 from "./assets/images/Education/education2.png";

import certificate1 from "./assets/images/Certificates/certificate1.png";
import certificate2 from "./assets/images/Certificates/certificate2.png";
import certificate3 from "./assets/images/Certificates/certificate3.png";
import certificate4 from "./assets/images/Certificates/certificate4.png";


import project1 from "./assets/images/Projects/xmed.png";
import project2 from "./assets/images/Projects/skip.png";
import project3 from "./assets/images/Projects/redPositive.png";
import project4 from "./assets/images/Projects/holaMedico.png";
import project5 from "./assets/images/Projects/rsta.png";
import project6 from "./assets/images/Projects/trivia360.png";
import project7 from "./assets/images/Projects/worthpoint.png";
import project8 from "./assets/images/Projects/worthpointMaps.png";
import project9 from "./assets/images/Projects/zinniax.png";
import project10 from "./assets/images/Projects/vici.png";
import project11 from "./assets/images/Projects/performance.png";
import project12 from "./assets/images/Projects/heeyThere.png";
import project13 from "./assets/images/Projects/soact.png";
import project14 from "./assets/images/Projects/dph.png";

import Hireme_person from "./assets/images/Hireme/person.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdCall, MdArrowForward, MdOutlinePermContactCalendar, MdWork } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiBookOpen } from "react-icons/bi";
import { RiProjectorLine, RiAwardLine } from "react-icons/ri";
import { FaCode } from "react-icons/fa";


// Add imports for new component images
import education1 from "./assets/images/Education/education1.png";
import education2 from "./assets/images/Education/education2.png";

// Define the content object
export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#education",
      icon: BiBookOpen,
    },
    {
      link: "#experience",
      icon: MdWork,
    },
    {
      link: "#skills",
      icon: FaCode,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#certificates",
      icon: RiAwardLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Applications Developer",
    firstName: "HETVI",
    lastName: "TRIVEDI",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "6+",
        text: "Years of Experience in Mobile Applications Development",
      },
      {
        count: "30+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "React Native Development",
        para: "Javascript, Typescript, RN CLI, Expo",
        logo: react,
        details: [
          "React Native Technology: JavaScript, TypeScript, RN CLI, Expo",
          "RN Packages: Navigation, geolocation, thunk, Redux, Pendo, Maps, Axios, Lottie, skeleton, Reanimated, React Query, Gesture Handler, socket.io - client, etc.",
          "Testing Frameworks: Jest, Detox, Mocha, Enzyme"
        ]
      },
      {
        name: "Flutter Development",
        para: "Dart, Flutter SDK, BLoC, Provide",
        logo: flutter,
        details: [
          "Flutter Technology: Dart, Flutter SDK",
          "Flutter Packages: Provider, Dio, http, flutter_bloc, Fl_chart, GetIt, RxDart, Qr_flutter, scoped_model, intl, flavorizr, etc.",
          "Testing Frameworks: Flutter Test, Mockito"
        ]
      },
      {
        name: "Android Development",
        para: "Java, Kotlin, Jetpack",
        logo: android,
        details: [
          "Android Technology: Java, Kotlin, Gradle, Maven, Android SDK",
          "Android Libraries: Dagger-Hilt, Jetpack, Retrofit, AsyncHttp, RxJava, Androidx, Kotlin Coroutines, Room, etc...",
          "Testing Frameworks: Junit, Mockito, Jasmine"
        ]
      },
      {
        name: "iOS Development",
        para: "Swift, Objective-C, UIKit, UItoolkit",
        logo: apple,
        details: [
          "iOS Technology: Swift, Objective-C, pods, iOS SDK",
          "iOS Libraries: Alamofire, SwiftyJSON, CoreData, UIKit, CoreLocation, MapKit, AVFoundation, etc...",
          "Testing Frameworks: XCTest, Quick, Nimble"
        ]
      },
      {
        name: "API Integration & Web Services",
        para: "REST, GraphQL, SOAP",
        logo: api,
        details: [
          "API Integration: REST, GraphQL, SOAP",
          "3rd Party API and SDK: GoogleMap, starPRNT, Firebase, sentry.io, datadog, Azure, AWS, ARKit, Stripe, Unity, Oculus, Vimeo, Shazam, Scandit, coinbase, Google Cloud Vision, Google Analytics, Amazon Alexa, etc...",
          "Web Services: JSON, XML, WebSockets",
          "Web Technologies: HTML, CSS, Node.js/Express.js, JavaScript/TypeScript",
          "Authentication: OAuth, JWT, Basic Auth",
          "Databases: MySQL, PostgreSQL, Oracle, Firebase, MongoDB"
        ]
      },
      {
        name: "Mobile App Architecture",
        para: "MVVM, MVP, MVC, VIPER, Clean Architecture",
        logo: mobile,
        details: [
          "Mobile App Architecture: MVVM, MVP, MVC, VIPER, Clean Architecture",
          "Design Patterns: Singleton, Factory, Observer, Dependency Injection",
          "State Management: Redux, BLoC, Provider, Riverpod"
        ]
      },
      {
        name: "Cloud & Backend Integration",
        para: "AWS, Firebase, Azure, Supabase, MongoDB, MySQL, Node.js/Express.js",
        logo: cloud,
        details: [
          "Cloud Platforms: AWS, Firebase, Azure, Supabase",
          "Backend Technologies: Node.js/Express.js, Python/Django, Ruby on Rails",
          "Database Management: MongoDB, MySQL, PostgreSQL, Firebase Realtime Database"
        ]
      },
      {
        name: "CI/CD & DevOps Tools",
        para: "GitHub, GitLab, Jenkins, Docker, Terraform, AppCenter, ADO",
        logo: devops,
        details: [
          "Version Control: Git, GitHub, GitLab",
          "CI/CD Tools: Jenkins, GitHub Actions, GitLab CI",
          "Containerization: Docker, Kubernetes",
          "Infrastructure as Code: Terraform, CloudFormation",
          "Monitoring & Logging: Datadog, Sentry, Grafana"
        ]
      },
      {
        name: "UI/UX Design & Prototyping",
        para: "Figma, Adobe XD, Photoshop, InVision",
        logo: ui,
        details: [
          "Design Tools: Figma, Adobe XD, Sketch, InVision, Photoshop, Illustrator",
          "Prototyping Tools: Marvel, Axure, Balsamiq",
          "User Testing: UsabilityHub, Lookback, Hotjar"
        ]
      },
    ],
    icon: MdArrowForward,
  },

  // Single source of truth for all projects
  projects: [
    {
      id: 1,
      title: "Skip-Restaurant Partners",
      category: "React Native Mobile App",
      image: project2,
      technologies: ["React Native", "TypeScript", "Redux", "React CLI", "Socket.io", "Firebase", "AWS", "CodePush", "Pendo", "Sentry"],
      description: "A comprehensive restaurant management platform for Skip network partners, enabling efficient order processing, menu management, delivery logistics, and real-time restaurant performance analytics. This enterprise-grade application serves as the cornerstone for thousands of restaurant partners across multiple brands (Skip, Just Eat UK, Just Eat IT, Just Eat IE, Menulog) with white-label support and multi-region deployment. Led development using Agile methodologies, managing cross-functional teams across multiple time zones, with a focus on continuous delivery and operational excellence.",
      features: [
        "Real-time order management with instant notifications and status updates via Socket.io",
        "Comprehensive dashboard with sales analytics, order trends, and performance metrics",
        "Intelligent delivery time estimation using machine learning algorithms",
        "Customizable menu management with item availability toggling and price adjustments",
        "Inventory tracking and automatic item availability management",
        "Staff management with role-based access controls and performance tracking",
        "Multi-location restaurant management from a single account",
        "Integrated payment reconciliation and financial reporting",
        "Direct communication channel with delivery drivers and customer support",
        "Automated order acceptance with customizable business rules",
        "Promotional campaign management and discount code implementation",
        "Customer feedback and ratings monitoring with response capabilities",
        "Scheduled reports delivery via email with customizable parameters",
        "Offline mode support for uninterrupted operation during connectivity issues",
        "Multi-brand white-labeling with dynamic configuration for Skip, Just Eat UK, Just Eat IT, Just Eat IE, and Menulog",
        "In-app review prompts for gathering merchant feedback",
        "Feature flagging and remote configuration for controlled feature rollouts",
        "Thermal printer integration for order receipt printing using Star Micronics hardware",
        "Advanced authentication with Keycloak integration and secure biometric login",
        "A/B testing capabilities with Optimizely for feature optimization",
        "Network time synchronization to ensure accurate order timing across devices",
        "Multi-region deployment with localization for international markets",
        "Custom sound notifications for different order events",
        "Interactive maps for delivery zone management and driver tracking"
      ],
      appStoreLink: "https://apps.apple.com/ca/app/skip-partner/id1501893213",
      playStoreLink: "https://play.google.com/store/apps/details?id=ca.skipthedishes.dashboard&hl=en_CA",
      techDetails: [
        "Used React Native (0.71.12) and upgraded to React Native (0.76.09) with TypeScript for type-safe cross-platform development",
        "Redux and Redux Toolkit for predictable state management with Redux Thunk for async operations",
        "Socket.io client for real-time bidirectional event-based communication",
        "CodePush migration from App Center to AWS for seamless OTA updates without app store submissions",
        "Firebase suite integration including Analytics, Crashlytics, Remote Config, and In-App Messaging",
        "Pendo SDK implementation for user analytics, feature usage tracking, and in-app guidance",
        "Sentry for real-time error tracking, monitoring, and debugging across all environments",
        "Datadog integration for comprehensive infrastructure and application monitoring, with custom dashboards for tracking key performance metrics and alerting",
        "Jest and React Testing Library for comprehensive unit and integration testing with 80%+ coverage",
        "Detox and Puppeteer for end-to-end testing across iOS and Android platforms",
        "Custom UI component library (@jet-pie/react-native) for consistent branding across applications",
        "Multi-environment configuration with React Native Config for dev, staging, and production",
        "Secure data storage with react-native-sensitive-info for encrypted credential management",
        "Push notification architecture with Firebase Cloud Messaging and AWS SNS",
        "Axios for RESTful API communication with custom interceptors for error handling",
        "Styled-components for component-based styling with theming support",
        "React Navigation (v5) for screen management with drawer, stack, and tab navigation patterns",
        "Advanced device information gathering for debugging and analytics",
        "Internationalization framework supporting multiple languages and regions",
        "Custom printing solution with Star Micronics SDK integration",
        "Offline-first architecture with AsyncStorage and Redux-Persist for data persistence",
        "Migrated from CircleCI to GitHub Actions for continuous integration with automated testing and deployment pipelines",
        "Used Fastlane for automated building and releasing of mobile applications",
        "Created new Workflows for different environments and branches for building and testing",
        "Multi-variant builds for different brands, environments, and release channels",
        "Optimizely integration for A/B testing and feature experiments",
        "Network connectivity monitoring with automatic retry mechanisms",
        "Date and time handling with date-fns and moment-timezone for accurate order timing",
        "UUID generation for unique transaction and entity identification",
        "Custom logging system with remote logging capabilities",
        "Secure JWT authentication with token refresh mechanisms",
        "Husky and lint-staged for pre-commit and pre-push code quality enforcement",
        "Biometric authentication for enhanced security",
        "JIRA for Agile project management, with customized workflows, sprint planning, and issue tracking",
        "Implemented Scrum methodology with 3-week sprints, daily stand-ups, sprint planning, sprint reviews, and retrospectives",
        "Led cross-functional teams through Agile ceremonies, including facilitating sprint planning sessions, daily scrum meetings, and retrospectives to continuously improve team processes",
        "Conducted one-on-one mentoring sessions with junior developers, providing technical guidance and career development support",
        "Organized team-building activities to foster collaboration and strengthen team cohesion, resulting in improved productivity and reduced turnover",
        "Implemented CI/CD pipelines integrated with JIRA for automated issue tracking and deployment status updates",
        "Created comprehensive documentation using Confluence, including technical specifications, architecture diagrams, and onboarding guides for new team members"
      ]
    },
    {
      id: 2,
      title: "XMed - Online Doctor Consultation",
      category: "Flutter Mobile App",
      image: project1,
      technologies: ["Flutter", "Firebase", "Node.js", "Google Meet API", "YouTube Player API", "Multiple third-party APIs"],
      description: "A comprehensive telemedicine platform providing 24/7 access to qualified medical professionals through secure video, audio, and text consultations. XMed bridges the healthcare accessibility gap, allowing patients to receive medical advice, prescriptions, and follow-up care from anywhere.",
      features: [
        "Secure HD video and audio consultations with end-to-end encryption using Google Meet API",
        "Comprehensive user authentication with multi-factor verification for patient data security",
        "Intelligent doctor matching based on specialization, language preference, and availability",
        "Integrated appointment scheduling with calendar sync and automated reminders",
        "Multi-language support with real-time translation capabilities for international consultations",
        "Offline access to medical records, prescriptions, and previous consultation summaries",
        "YouTube Player API integration for curated educational medical content relevant to patient conditions",
        "Advanced geolocation services for finding nearby clinics, pharmacies, and emergency services",
        "Customizable push notification system for medication reminders and appointment alerts",
        "Secure payment gateway supporting multiple currencies and payment methods",
        "HIPAA-compliant chat functionality with file sharing for medical documents",
        "Comprehensive electronic health records (EHR) management with document upload capabilities",
        "Doctor verification system with credential checking and patient review integration",
        "Emergency consultation priority queue with rapid response protocol",
        "Symptom checker with AI-assisted preliminary diagnosis suggestions",
        "Prescription management with direct pharmacy transmission options",
        "Follow-up appointment scheduling with continuity of care features"
      ],
      appStoreLink: "https://apps.apple.com/in/app/xmed-%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD-%D0%BF%D1%80%D0%B8%D0%B5%D0%BC-%D0%B2%D1%80%D0%B0%D1%87%D0%B5%D0%B9/id1580909766",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.telehealth.xmed&hl=en_CA",
      techDetails: [
        "Cross-platform development with Flutter ensuring consistent user experience across iOS and Android",
        "Modular architecture using MVP pattern for clear separation of concerns and code maintainability",
        "Comprehensive Firebase integration including Authentication, Firestore, Cloud Messaging, Analytics, and Crashlytics",
        "Advanced state management using Provider with optimized rebuilds for performance efficiency",
        "CI/CD pipelines with GitLab for automated testing, versioning, and deployment processes",
        "Extensive unit, widget, and integration testing with 80%+ code coverage using Flutter Test framework",
        "Custom location services with geofencing for proximity-based clinic and doctor recommendations",
        "Dependency injection framework for modular code structure and testability",
        "YouTube Player API with custom controls for medical educational content delivery",
        "Sophisticated offline-first architecture with local SQLite database for data persistence",
        "Real-time data synchronization with Firestore using custom conflict resolution strategies",
        "Seamless device calendar integration for appointment management with intelligent conflict detection",
        "Internationalization framework supporting 12+ languages with right-to-left text rendering",
        "Adaptive UI design with responsive layouts for various device sizes from phones to tablets",
        "Custom APK and IPA build optimization reducing app size by 30% while maintaining functionality",
        "Background fetch implementation for critical updates when app is not active",
        "Custom encryption layer for sensitive patient data beyond standard Firebase security",
        "Advanced logging and monitoring for proactive issue detection and resolution",
        "Memory optimization techniques for low-end device compatibility in developing markets",
        "Accessibility features including VoiceOver/TalkBack support, dynamic text sizing, and contrast options"
      ]
    },

    {
      id: 3,
      title: "BloodWale Bhaiyya",
      category: "Android Mobile App",
      image: project3,
      technologies: ["Android", "Firebase", "FCM", "Push Notifications", "Firestore", "Crashlytics", "Authentication", "Jetpack", "SharedPreferences"],
      description: "Bloodwale Bhaiyya is a comprehensive solution for blood-related emergencies, streamlining access to blood banks and donors through a centralized database. It helps users locate the nearest optimal blood bank, offers both self-pickup and fast delivery options, and motivates community donations with credits and social sharing features. By improving communication and inventory management, it ensures timely and efficient blood retrieval. In critical moments, Bloodwale Bhaiyya stands as a reliable companion to save lives.",
      features: [
        "Health-related Information and Articles",
        "Community Engagement Platform",
        "Health Challenges and Goal Tracking",
        "Daily Health Tips and Reminders",
        "Mental Health Support",
        "Personalized Health Recommendations",
        "Events and Workshops Information",
        "Social Sharing and Networking",
        "User Profiles and Tracking",
        "Multi-language Support",
      ],
      appStoreLink: null,
      playStoreLink: "https://play.google.com/store/apps/details?id%3Dcom.RedPositive.project_redpositive%26hl%3Dor%26gl%3DUS&sa=D&source=editors&ust=1755048355086259&usg=AOvVaw2hgq6bIrSZbqfTWAP06_Qb",
      techDetails: [
        "Use MVC architecture with Activities/Fragments as controllers, XML layouts as views, and data classes/models for business logic",
        "Manage state using LiveData and ViewModel from Android Jetpack",
        "Store user preferences and lightweight data using SharedPreferences",
        "Integrate Firebase Cloud Messaging (FCM) for push notifications",
        "Upload and retrieve images, videos, and documents using Firebase Cloud Storage",
        "Access device location using FusedLocationProviderClient and query nearby blood banks from Firebase Firestore",
        "Authenticate users with Firebase Authentication using email/password, phone number, and social media logins",
        "Store and sync user data and app content in real-time using Firebase Firestore",
        "Implement search functionality using Firestore queries to filter and retrieve relevant data",
        "Allow users to view and edit their profiles with data stored in Firestore",
        "Track and log errors using Firebase Crashlytics for debugging and stability",
        "Support multiple languages using Android's localization framework with strings.xml and Locale settings",
        "Maintain app reliability with regular bug fixes and updates to support evolving health features and community tools"
      ]
    },
    {
      id: 4,
      title: "Hola Medico",
      category: "iOS Mobile App",
      image: project4,
      technologies: ["iOS", "Swift", "SwiftUI", "AWS", "CloudWatch", "Alamofire", "URLSession", "MapKit", "Google Places SDK"],
      description: "Hola Medico, provides a unique engaging and effective continuous medical learning platform to doctors that will help them learn and evolve at their own pace.",
      features: [
        "Telemedicine Consultations",
        "Access to Medical Records",
        "Doctor Search & Appointments",
        "Medication Reminders",
        "Health Tips & Articles",
        "Symptom Checker & Health Assessment",
        "Secure Messaging & Health Support",
        "Health Monitoring & Trackers",
        "Emergency Services Integration",
        "Healthcare Network & Referrals",
        "Payment & Insurance Integration",
        "User Profiles & Health History"
      ],
      appStoreLink: "https://apps.apple.com/in/app/hola-medico/id1526398025",
      playStoreLink: null,
      techDetails: [
        "Use folder structure to separate presentation, domain, and data layers",
        "Implement reactive state using Combine with ObservableObject and @Published",
        "Store lightweight data using UserDefaults",
        "Integrate Firebase Messaging SDK with APNs for push notifications",
        "Use Firebase Storage SDK for uploading and retrieving media files",
        "Enable document selection with UIDocumentPickerViewController and upload to Firebase Storage",
        "Access user location using CoreLocation framework",
        "Integrate Google Places SDK for location search and autocomplete",
        "Build quiz game UI using SwiftUI or UIKit components with local or Firestore-based data",
        "Authenticate users with FirebaseAuth using email, phone, Google, Facebook, and Apple Sign-In",
        "Use Firebase Firestore for real-time data sync and offline persistence",
        "Make HTTP requests using URLSession or Alamofire",
        "Call serverless backend logic using Firebase Functions SDK",
        "Localize app using Localizable.strings and NSLocale",
        "Manage translations with intl or easy_localization equivalents if using third-party tools",
        "Use MapKit to display maps and annotate health-related locations",
        "Handle notification permissions and display using UNUserNotificationCenter",
        "Track user progress and health goals using Firestore and local caching",
        "Enable social sharing with UIActivityViewController",
        "Monitor app stability and errors using Firebase Crashlytics",
        "Use AWS SNS to send push notifications and SMS alerts for health reminders or community updates",
        "Integrate AWS Cognito for secure user authentication and identity management",
        "Store and retrieve health-related documents and media using AWS S3",
        "Use AWS Lambda for backend logic such as processing quiz results or generating personalized health tips",
        "Access AWS API Gateway to connect mobile app with custom RESTful services",
        "Monitor app performance and backend health using AWS CloudWatch",
        "Secure data transmission and access with AWS IAM roles and policies",
        "Use AWS DynamoDB as an alternative NoSQL database for storing user goals, preferences, and community interactions"
      ]
    },
    {
      id: 5,
      title: "School Management App",
      category: "React Native App",
      image: null,
      technologies: ["React Native", "Expo", "Auth API", "Firebase Notifications", "Firebase Chat", "Firebase Analytics", "Stripe API", "GraphQL Sync", "Data Encryption", "Permission Handling", "Data Backup", "Accessibility Support"
      ],
      description: "Developed a full-fledged company product from its inception, spearheading the entire process from crafting the UI/UX design to delivering the finalized end product. Managed all facts of client communication, meticulously planned the project, strategized sprint cycles, and adeptly presented demos. Single-handedly shouldered the responsibility of managing deadlines, ensuring every phase of development adhered to timelines.",
      features: [
        "Attendance Management",
        "Gradebook and Student Progress",
        "Timetable and Scheduling",
        "Assignment and Homework Tracking",
        "Communication and Messaging",
        "Fee Payment and Management",
        "Library Management",
        "School Bus Tracking",
        "Examination and Results",
        "Parent-Teacher Collaboration",
        "Event Calendar",
        "Admin Dashboard"
      ],
      appStoreLink: null,
      playStoreLink: null,
      techDetails: [
        "Implement secure login/signup using REST APIs with role-based access control using axios, react-navigation, and react-native-keychain",
        "Build a dashboard UI with key metrics, task summaries, Firebase notifications, and event previews using react-native-paper or react-native-elements",
        "Manage tasks and projects with custom components for status, deadlines, priorities, and dependencies; integrate Agile workflows and JIRA APIs",
        "Enable file upload and sharing using expo-document-picker, expo-media-library, and Firebase Storage with version and access control",
        "Integrate calendar and scheduling features using react-native-calendars or @react-native-community/datetimepicker with reminders via FCM",
        "Use Firebase Realtime Database or Firestore for chat, messaging, and comment threads; integrate with react-native-gifted-chat",
        "Generate reports and analytics using Firebase Analytics and custom chart libraries like react-native-chart-kit",
        "Integrate external services via REST APIs for payments (expo-in-app-purchases, react-native-stripe-sdk), emails (emailjs, Firebase), and CRM tools",
        "Enable offline access and sync using apollo-client with graphql and local caching via AsyncStorage or react-query",
        "Apply encryption with crypto-js, manage permissions with expo-permissions, and implement backup logic using Firebase or AWS S3",
        "Ensure responsive design using react-native-responsive-screen, react-native-safe-area-context, and accessibility with react-native-accessibility-engine"
      ]
    },
    {
      id: 6,
      title: "Pocket Chat ",
      category: "React native App",
      image: null,
      technologies: ["React Native", "Expo", "Firebase", "Jest", "Chat"],
      description: "A financial management application allowing users to track expenses, set budgets, and visualize spending patterns with interactive charts.",
      features: [
        "User Authentication",
        "Real-time Messaging",
        "Multimedia Messaging",
        "Group Chats",
        "Push Notifications",
        "Message Status Indicators",
        "Emojis and Stickers",
        "Search and Filters",
        "User Profiles",
        "Offline Support",
        "Security and Encryption",
        "Customization Options",
        "Blocking and Reporting",
        "Read Receipts",
        "Voice Messaging"
      ],
      appStoreLink: null,
      playStoreLink: null,
      techDetails: [
        "Firebase Authentication: firebase or @react-native-firebase/auth with TextInput, TouchableOpacity, useState, and useEffect for form handling",
        "Realtime Messaging: @react-native-firebase/database with FlatList, Text, and useEffect for live updates",
        "Multimedia Messaging: @react-native-firebase/storage with Image, expo-av for video/audio playback",
        "Group Chats: Structured data in Realtime Database, rendered using FlatList, View, and conditional logic for group threads",
        "Push Notifications: @react-native-firebase/messaging, configured via native modules and background handlers",
        "Message Status Indicators: Status flags stored in Realtime DB, displayed using custom View components and icons",
        "Emojis and Stickers: emoji-mart-native or custom emoji picker, stickers via expo-image-picker and Image components",
        "Search and Filters: Querying Realtime DB with orderByChild, equalTo, and implementing search via SearchBar or custom header filter logic",
        "User Profiles: @react-native-firebase/firestore with FlatList, Avatar from react-native-elements, and Card components",
        "Offline Support: Firebase's built-in persistence, accessed via cached listeners and useEffect hooks",
        "Security and Encryption: Firebase Console rules, enforced server-side; no direct UI handling",
        "Customization Options: @react-native-firebase/remote-config with dynamic UI updates using useState, useContext, Redux",
        "Used testing framework like Jest with React Native Testing Library, also mocked Firebase services and isolate logic from UI components"
      ]
    },
    {
      id: 7,
      title: "Rising Star Tennis Academy",
      category: "Full Stack",
      image: project5,
      technologies: ["React Native", "Redux", "ReactCLI", "Node.js", "PostgreSQL", "Firebase", "JWT", "Auth", "buildship", "Figma", "Jest", "Docker", "Terraform", "PostgreSQL", "Kubernetes", "Razorpay API", "Paypal API", "Zoom API", "Google Calendar API", "Deep linking ", "Razorpay SDK", "PayPal SDK", "Firebase Storage", "FCM", "push notifications"],
      description: "A comprehensive platform for managing tennis academy operations, including class schedules, player registrations, and payment processing.",
      features: [
        "Class Scheduling and Management",
        "Player Registration and Profiles",
        "Payment Processing and Invoicing",
        "Attendance Tracking and Reporting",
        "Student's Batches Details",
        "Fees Management",
        "Tracking Active/Inactive Students",
        "Communication Tools for Coaches and Players",
        "Performance Analytics and Reporting",
        "Customizable User Roles and Permissions",
        "Integration with Third-Party Tools (e.g., Zoom, Google Calendar)",

      ],
      appStoreLink: null,
      playStoreLink: null,
      link: "https://drive.google.com/drive/folders/1ich5Tl1_sha-V4bqhXMkSEirawmMBTXG",
      techDetails: [
        "React Native used for cross-platform mobile development",
        "Formik and Yup for form handling and validation",
        "react-native-calendars for scheduling UI",
        "react-native-gifted-chat for chat interface",
        "react-native-chart-kit or victory-native for performance graphs",
        "Firebase Authentication for login and identity",
        "Firebase Cloud Messaging for push notifications",
        "Firebase Storage for profile image uploads",
        "PayPal SDK for card and wallet payments",
        "Razorpay SDK for UPI payments via deep linking",
        "Deep linking used for Zoom and UPI app redirection",
        "Redux for state management",
        "Jest for unit and component testing",
        "Figma for UI/UX design prototypes",
        "Node.js with Express.js for backend API development",
        "JWT for secure authentication",
        "Middleware for role-based access control",
        "RESTful APIs for class, batch, attendance, and payment management",
        "Firebase Admin SDK for sending notifications",
        "Google Calendar API for schedule syncing",
        "Zoom API for meeting creation and joining",
        "PayPal API for payment processing",
        "Razorpay API for UPI transaction verification",
        "Jest for backend logic and API testing",
        "PostgreSQL used for relational data storage",
        "Tables for users, roles, classes, batches, attendance, payments, messages",
        "Prisma as ORM for database interaction",
        "Role-based access control enforced at database level",
        "Encrypted storage for sensitive data",
        "Automated backups and read replicas for scaling",
        "Docker used to containerize backend, database, and admin panel",
        "docker-compose for local development and service orchestration",
        "Multi-stage builds for optimized production images",
        "Environment variables managed via Docker secrets",
        "Terraform used for infrastructure provisioning",
        "Supports multi-environment setups (dev, staging, production)"
      ]
    },
    {
      id: 8,
      title: "TRIVIA 360: Quiz Game",
      category: "React Native",
      image: project6,
      technologies: [""],
      description: "TRIVIA 360 is a free quiz game available for iOS and Android devices. It offers a variety of trivia puzzles and brain teasers across different categories, allowing users to test their knowledge and challenge their intellect. With a user-friendly interface, leaderboards, and multiple language options, TRIVIA 360 provides an engaging and educational experience for players of all ages.",
      features: [
        "WIP"
      ],
      appStoreLink: "https://apps.apple.com/us/app/trivia-360-quiz-game/id1131021462",
      playStoreLink: "https://play.google.com/store/apps/details?id=smartowlapps.com.quiz360",
      techDetails: [
        "WIP"
      ]
    },
    {
      id: 9,
      title: "WORTHPOINT",
      category: "React Native",
      image: project7,
      technologies: [""],
      description: "The WorthPoint app allows users to research and price items on-the-go, assisting collectors and resellers in determining the value of collectibles. Users can browse, search, and organise items while accessing valuable pricing data, authentication tools, and a personal digital archive.",
      features: [
        "WIP"
      ],
      appStoreLink: "https://apps.apple.com/in/app/worthpoint/id1472512649",
      playStoreLink: "https://play.google.com/store/search?q=worthpoint&c=apps",
      techDetails: [
        "WIP"
      ]
    },
    {
      id: 10,
      title: "WORTHPOINT MAPS",
      category: "iOS",
      image: project8,
      technologies: [""],
      description: "The WorthPoint M.A.P.S. app is a visual library with over 178,000 unique identifying makers’ marks, autographs, patterns, and symbols (M.A.P.S.) to determine an item’s origin, history, and authenticity.",
      features: [
        "WIP"
      ],
      appStoreLink: "https://apps.apple.com/in/app/worthpoint-m-a-p-s/id1529578165",
      playStoreLink: null,
      techDetails: [
        "WIP"
      ]
    },
    {
      id: 11,
      title: "ZINNIAX  IONM",
      category: "Flutter",
      image: project9,
      technologies: [""],
      description: "ZinniaX IONM offers a comprehensive management system with a full slate of features that take users through the entire IONM lifecycle. From scheduling, surgery, billing to closing, users can track anything from our organized, feature-rich dashboard. Billing, invoicing, alerts, analytics reports, role-based dashboards, add new cases, chat on cases, and much more.",
      features: [
        "WIP"
      ],
      appStoreLink: "https://apps.apple.com/in/app/zinniax-ionm/id1516604925",
      playStoreLink: "https://play.google.com/store/search?q=zinniax&c=apps",
      techDetails: [
        "WIP"
      ]
    },
    {
      id: 12,
      title: "ViCi ATHLETE",
      category: "Android & iOS",
      image: project10,
      technologies: [""],
      description: "Vici Athlete allows users to access workout programs, log results, track progress, and compare with peers!Athletes can access pre-loaded Vici workout programs or custom programs created by their coach. Vici workout programs are carefully developed by professional strength and conditioning coaches. They provide level progressions that emphasize both fundamental training principles and more advanced sport-specific exercises.",
      features: [
        "WIP"
      ],
      appStoreLink: "https://apps.apple.com/in/app/vici-athlete/id1520434178",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.vici.athlete",
      techDetails: [
        "WIP"
      ]
    },
    {
      id: 13,
      title: "ViCi Performance",
      category: "Android",
      image: project11,
      technologies: [""],
      description: "ViCi Performance allows admin to analyze ViCi Athlete user’s performance.",
      features: [
        "WIP"
      ],
      appStoreLink: null,
      playStoreLink: "https://play.google.com/store/search?q=vici%20performance&c=apps",
      techDetails: [
        "WIP"
      ]
    },
    {
      id: 14,
      title: "Heey There",
      category: "Flutter",
      image: project12,
      technologies: [""],
      description: "Heey There allows you to immerse yourself into the present moment. A social media app specially created to help you log off and connect face to face. Heey There gently leads you to start social interactions unobtrusively. Designed to strategically plant seeds of connection that gives you the nudge to make a move. Eliminate catfishing by seeing people for how they appear in real life. The tool to transform from a wallflower into a social butterfly. Get off regular dating apps and immerse yourself back into the social scene or use as a professional tool in workspaces to expand your networking bandwidth. Removes the pressure of first interactions to create successful first impressions.Learn about a person before you approach them.",
      features: [
        "WIP"
      ],
      appStoreLink: "https://apps.apple.com/in/app/heey-there/id1667371625",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.sfl.is.heeythere&hl=en_CA",
      techDetails: [
        "WIP"
      ]
    },
    {
      id: 15,
      title: "SoAct ",
      category: "iOS",
      image: project13,
      technologies: [""],
      description: "SoAct is a social media platform focused on organizing for positive change. It allows users to connect with like-minded individuals, form groups centered around various causes, engage in conversations, share resources, plan events, and earn points and badges for their involvement. Organizations and nonprofits can also join the platform to host events, give awards, and grow their communities.",
      features: [
        "WIP"
      ],
      appStoreLink: "https://apps.apple.com/in/app/soact/id1556801035",
      playStoreLink: null,
      techDetails: [
        "WIP"
      ]
    },
    {
      id: 16,
      title: "DPH- Think like a girl",
      category: "Android",
      image: project14,
      technologies: [""],
      description: "The EmpowerHer app is designed to empower girls by providing a platform for self-confidence building, giving back to others, finding their voice, and journaling. It offers a range of tasks and activities tailored to promote personal growth and empowerment. Please note that this app is not a substitute for professional medical or psychological services.",
      features: [
        "WIP"
      ],
      appStoreLink: null,
      playStoreLink: "https://play.google.com/store/apps/details?id=com.sfl.is.dph&pcampaignid=web_share",
      techDetails: [
        "WIP"
      ]
    },
    {
      id: 17,
      title: "AES(Petrol Pump Management)",
      category: "UI/UX",
      image: null,
      technologies: [""],
      description: "AES is a comprehensive petrol pump management system designed to streamline operations, enhance efficiency, and improve customer service at fuel stations. The system offers features such as real-time inventory management, sales tracking, and reporting, enabling pump owners to make informed decisions and optimize their business processes.",
      features: [
        "WIP"
      ],
      appStoreLink: null,
      link: "https://xd.adobe.com/view/09d0cdd8-c5f3-4c57-a295-beac1bc4f26b-5c83/",
      techDetails: [
        "WIP"
      ]
    },
  ],

  // Projects section references the main projects array
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    // Use getter functions to dynamically access the projects array
    get project_content() {
      return content.projects.slice(0, 3);
    },
    get all_projects() {
      return content.projects;
    }
  },

  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    para: "With a strong command of modern technologies, I build scalable, secure, and user-friendly applications tailored to your needs. My experience spans mobile apps, backend systems, and cloud infrastructure—ensuring seamless integration and performance. I bring a detail-oriented mindset, clean architecture, and a passion for solving real-world problems. If you're looking for someone who delivers with precision and creativity, I'm ready to bring your ideas to life.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "jhetvi0308@gmail.com",
        icon: GrMail,
        link: "mailto:jhetvi0308@gmail.com",
      },
      {
        text: "+1 437 870 3536",
        icon: MdCall,
        link: "https://wa.me/14378703536",
      },
      {
        text: "Hetvi Trivedi",
        icon: BsLinkedin,
        link: "https://ca.linkedin.com/in/hetvi-trivedi-173335153",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2025",
  },
  // New Education section
  education: {
    title: "Education",
    subtitle: "MY ACADEMIC JOURNEY",
    image: education1,
    education_content: [
      {
        degree: "Master of Computer Applications",
        institution: "Ganpat University",
        year: "2018 - 2021",
        logo: education1
      },
      {
        degree: "Bachelor of Business Administration - Finance & Marketing",
        institution: "Saurashtra University",
        year: "2015-2018",
        logo: education2
      }
    ]
  },

  // New Certificates section
  certificates: {
    title: "Certificates",
    subtitle: "MY ACHIEVEMENTS",
    certificates_content: [
      {
        name: "Full Stack Developer",
        issuer: "Dropify Technologies",
        date: "2024",
        image: certificate1,
        links: [
          "https://drive.google.com/file/d/12TUcRRz0ws5TfzpkcxLeuiLF3mfcWTHf/view",
        ]
      },
      {
        name: "Career Essentials in Software Development",
        issuer: "Microsoft & LinkedIn",
        date: "2024",
        image: certificate2,
        links: [
          "https://www.linkedin.com/learning/certificates/7a6513481accd3315f8b7d665f48a980247c3f41ae0825bc4db139eafe10a136",
        ]
      },
      {
        name: "Languages and Frameworks",
        issuer: "Hackerrank",
        date: "2024",
        image: certificate3,
        links: [
          "https://www.hackerrank.com/certificates/374bc3d8f3df",
          "https://www.hackerrank.com/certificates/93b754d5b2ef",
          "https://www.hackerrank.com/certificates/6b925a90e648",
          "https://www.hackerrank.com/certificates/b2c982c09a59",
          "https://www.hackerrank.com/certificates/96a6d4db244a",
          "https://www.hackerrank.com/certificates/93b754d5b2ef"
        ]
      },
      {
        name: "Cloud Computing",
        issuer: "Coursera",
        date: "2020",
        image: certificate4,
        links: [
          "https://www.coursera.org/account/accomplishments/specialization/certificate/6RBALPQBKY4E",
          "https://www.coursera.org/account/accomplishments/certificate/PHDA2U6CMKAF",
          "https://www.coursera.org/account/accomplishments/certificate/YVZYBYLZNEH4",
          "https://www.coursera.org/account/accomplishments/certificate/B2X2K2KMWDHX",
          "https://www.coursera.org/account/accomplishments/certificate/MKJQLJTC89G6",
        ]
      }
    ]
  },
};
