export const navItems = [
  { name: "Home", link: "#home" },
  { name: "Projects", link: "#projects" },
  { name: "Learnings", link: "#learnings" },
  { name: "Contact", link: "#contact" },
];


export const gridItems = [
  {
    id: 1,
    title: "Driven by close collaboration and open communication",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible communication across all time zones",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Built to scale",
    description: "My Tech Stack",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Turning complex ideas into clean code",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Engineering robust, production ready web platforms",
    description: "The Core Philosophy",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let's build something great together",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];


export const projects = [
  {
    id: 1,
    title: "Booksatau",
    des: "A live secondhand book marketplace platform where users can buy and sell used books online, with RESTful API endpoints built using FastAPI.",
    img: "/booksatau.png",
    iconLists: ["/fastapi.svg", "/redis.svg", "/dock.svg", "/postgres.svg", "/git.svg"],
    link: "https://booksatau.com/",
  },
  {
    id: 2,
    title: "Sawari",
    des: "A web-based vehicle booking platform built with Python and Django, featuring secure login, booking management, and payment tracking for admins.",
    img: "/sawari.png",
    iconLists: ["/py.svg", "/re.svg", "/django.svg", "/tail.svg","/mysql.svg", "/git.svg"],
    link: "https://github.com/anshu5718/SAWARI_PROJECT.git",
  },
  {
    id: 3,
    title: "Avenir Tech Web Portal",
    des: "Company website and web portal built with FastAPI, featuring backend API development and database design across multiple modules.",
    img: "/avenir.png",
    iconLists: ["/fastapi.svg", "/redis.svg", "/dock.svg", "/postgres.svg", "/git.svg"],
    link: "https://avenirtech.com.np/contact",
  },
  {
    id: 4,
    title: "Btweet - Microblogging Platform",
    des: "A Django-based microblogging platform where users can share thoughts and memories, demonstrating the Model-View-Template architecture with a clean, responsive UI.",
    img: "/btweet.png",
    iconLists: ["/py.svg", "/django.svg", "/mysql.svg", "/bootstrap.svg" ,"/html5.svg", "/git.svg"],
    link: "https://github.com/anshu5718/Btweet.git",
  },
  {
    id: 5,
    title: "More Coming Soon",
    des: "Still building, learning, and experimenting. More projects and ideas will be added here as I continue the journey.",
    img: "/coming.png",
    iconLists: ["/fastapi.svg", "next.svg" ,"/redis.svg", "/dock.svg", "/postgres.svg", "/git.svg"],
    link: "https://www.linkedin.com/in/bisaka-shrestha-53a78b322/",
  },
];

export const learnings = [
  {
    "category": "Database & ORM Optimization",
    "title": "Managing Asynchronous State and Queries",
    "lesson": "Working with asynchronous SQLAlchemy and PostgreSQL requires intentional query planning such as leveraging selectinload to prevent N+1 query bottlenecks and handling concurrency race conditions like DuplicateObject cleanly."
  },
  {
    "category": "Database Migrations",
    "title": "Zero Downtime Schema Evolution",
    "lesson": "Managing database schema evolution requires treating migration scripts as production grade code, ensuring backward compatibility, proper enum handling, and clean rollback paths for every deployment."
  },
  {
    "category": "Application Architecture",
    "title": "Scalable State and Lifecycle Management",
    "lesson": "Designing multi-service applications requires rigorous separation of concerns, ensuring that business logic, database transaction lifecycles, and API routing layers remain loosely coupled and testable."
  },
  {
    "category": "Version Control & Workflow",
    "title": "Resilient Git & Migration Hygiene",
    "lesson": "Complex multitable database changes managed via Alembic and intricate feature branches demand disciplined version control habits, proactive rebase conflict resolution, and meticulous schema versioning."
  },
  {
    "category": "Clean Code & Design Patterns",
    "title": "Replacing Conditional Sprawl with Patterns",
    "lesson": "Complex conditional branching (nested if else statements) quickly degrades maintainability. Applying design patterns like the Factory Method cleanly encapsulates object creation and keeps core business logic extensible."
  },
  {
    "category": "API Security & Rate Limiting",
    "title": "Proactive Traffic Control",
    "lesson": "Implementing robust rate limiting at the route level protects backend services from abuse and volumetric load spikes, ensuring high availability and fair resource distribution across all authenticated clients."
  },
  {
    "category": "Security & Configurations",
    "title": "Decoupling Configuration from Code",
    "lesson": "Hardcoding operational limits or service parameters introduces security risks and deployment friction. Routing configurations such as rate limits and environment variables through centralized configuration schemas keeps applications adaptable across development, staging, and production."
  },
  {
    "category": "Data Validation & Architecture",
    "title": "Type Safety & Modern Serialization",
    "lesson": "Using Pydantic's native model_dump() instead of raw JSON parsing ensures strict API contracts, eliminates runtime type mismatches, and enforces predictable data payloads from the boundary inward."
  },
  {
    "category": "Infrastructure & Environment",
    "title": "Containerized Development Consistency",
    "lesson": "Utilizing Docker and Docker Compose for local service management ensures that runtime environments closely mirror production, eliminating unexpected discrepancies between development and deployment setups."
  },
  {
    "category": "Code Organization & Readability",
    "title": "Disciplined Import Architecture",
    "lesson": "Maintaining a strict separation of import blocks—grouping system libraries, third-party dependencies, custom modules, and local files—significantly improves code readability and prevents circular dependency issues."
  }
];

export const companies = [
  {
    id: 1,
    name: "AvenirTech",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "CODE IT",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "Bisaka Shrestha",
    img: "/me.svg",
    nameImg: "/meName.svg",
  },

];

export const workExperience = [
  {
    id: 1,
    title: "Django Bootcamp Trainee",
    desc: "Completed a rigorous 30-hour Django bootcamp, building foundational web applications using MVT architecture, forms, and database management.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Django Course & Training",
    desc: "Expanded backend proficiency through structured online coursework, focusing on Django REST Framework, class-based views, and secure authentication.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Django Developer Intern (Online)",
    desc: "Gained remote, hands-on experience developing and maintaining backend features, integrating third-party APIs, and managing database migrations.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "FastAPI Developer Intern",
    desc: "Engineered high-performance asynchronous backend services using FastAPI, SQLAlchemy, and Alembic, utilizing Pydantic for robust data validation.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/anshu5718",
  },
  {
    id: 2,
    img: "/insta.svg",
    link: "https://www.instagram.com/anshu18_stha/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/bisaka-shrestha-53a78b322/",
  },
];