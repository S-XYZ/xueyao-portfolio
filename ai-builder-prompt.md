# AI Builder Prompt: XZ Builds

This prompt is a complete structured instruction manual for an AI developer agent (such as AI Studio, Cursor, Lovable, v0, Replit Agent, or any other LLM developer workflow) to program and implement this pre-structured client-approved website blueprint. 

---

## Website Title / Brand Logo
- **Website Title:** XZ Builds

## Product Goal
该网站旨在展示个人的工程项目和技术能力，吸引潜在雇主和同行的注意。通过简洁的设计和清晰的内容结构，用户能够快速了解我的背景和专业技能。

## Target Users
潜在雇主、同行、技术爱好者

## Style Direction
Below is the design preset to align the typography styles, background aesthetics, and padding ratios of the project:
- **Theme Preset Name:** Minimalist Slate
- **Visual Style:** Minimalist Slate
- **Selected Tone Preset:** None selected
- **Custom Tone Directions:** None specified
- **Combined Brand Voice:** 专业、简洁、直接
- **Custom Concept:** None entered
- **Selected Workspace Features:** 清晰的项目展示、个人介绍、技术栈展示、联系信息
- **Primary Color Accents & Settings:** Selected Theme optimizes visual reading contrast, balanced padding ratios, and sleek modern borders.
- **AI Theme & Style Notes:** The site adopts a clean and structured aesthetic with high contrast elements, focusing on a minimalist design that emphasizes the user's engineering background. The layout is functional, with a focus on showcasing projects and technical skills.

---

## Site Map
The application includes a clean layout with the following structured pages:
1. **Home** (`/home`)
2. **About** (`/about`)
3. **Projects** (`/projects`)
4. **Contact** (`/contact`)

---

## Routing & Page URL Mapping
- **Preview & Routing slugs:** In the visual builder preview, pages are handled dynamically via internal routes using paths/slugs like `/home` and `/contact`.
- **Static Website compilation:** In the static website output build, the page name/slug transitions to its relative HTML layout. Specifically:
  - The home page always compiles to `index.html`.
  - Additional subpages or custom slugs compile to their matching file paths (e.g. `slug.html`). Please ensure internal links map accordingly.

---

## Compact Code-Spec Blueprint
Please inspect this simplified hierarchy map representing pages, modular sections, button mappings, and details:

```yaml
Home (/home)
  - Hero
      title: "Building reliable data systems and web tools."
      buttons:
        - label: "View Projects"
          actionType: page
          target: "projects"
  - TextSection
      title: "About Me"
  - TextSection
      title: "Built with All You Can Make"
About (/about)
  - Collection
      title: "Educational Background"
      items:
        - title: "New York University"
        - title: "Northeastern University"
  - Collection
      title: "Technology Stack"
      items:
        - title: "Data Engineering"
        - title: "Backend Development"
        - title: "Databases and Storage"
        - title: "Data Analysis and Visualization"
        - title: "Cloud and Development Tools"
Projects (/projects)
  - Collection
      title: "Selected Builds & Systems"
      items:
        - title: "All You Can Make"
          detailBehavior:
            mode: external
            actionLabel: "VIEW LIVE APP →"
            target: "https://all-you-can-make.vercel.app/"
        - title: "Image Stitcher"
          detailBehavior:
            mode: external
            actionLabel: "VIEW LIVE APP →"
            target: "https://www.imagestitcher.top/"
  - Collection
      title: "Data & Analytics Projects"
      items:
        - title: "NYC Subway Data Platform & Analytics Pipeline"
        - title: "Chronic Disease Risk Prediction & Data System"
        - title: "High-Performance Data Storage & Retrieval"
Contact (/contact)
  - Collection
      title: "Let’s Connect"
      items:
        - title: "Email"
          detailBehavior:
            mode: external
            actionLabel: "EMAIL ME →"
            target: "https://mail.google.com/mail/?view=cm&fs=1&to=snow.zhao.xueyao@gmail.com"
        - title: "LinkedIn"
          detailBehavior:
            mode: external
            actionLabel: "VIEW LINKEDIN →"
            target: "https://www.linkedin.com/in/xueyaozhao/"
        - title: "GitHub"
          detailBehavior:
            mode: external
            actionLabel: "VIEW GITHUB →"
            target: "https://github.com/DI0NY"
```

---

## Detailed Page Structure & Modular Blocks
### Page: Home (`/home`)
#### Block 1: Hero
- **Theme/Style Parameters:** Style: [Padding: medium, Alt-Background Enabled: false]
- **Key Content Fields:**
  - Title: "Building reliable data systems and web tools."
  - Subtitle/Description: "I work across data engineering, backend development, analytics, and deployed product-facing applications."
  - **Buttons/Call to Actions:**
      - Button #1: "View Projects" [ActionType: page -> Target: projects]

#### Block 2: TextSection
- **Theme/Style Parameters:** Style: [Padding: medium, Alt-Background Enabled: false, Border Top Line: false]
- **Key Content Fields:**
  - Title: "About Me"

#### Block 3: TextSection
- **Theme/Style Parameters:** Style: [Padding: medium, Card Style: flat, Alt-Background Enabled: false, Border Top Line: true]
- **Key Content Fields:**
  - Title: "Built with All You Can Make"
  - Subtitle/Description: "BUILT WITH MY OWN TOOL"

### Page: About (`/about`)
#### Block 1: Collection
- **Theme/Style Parameters:** Style: [Padding: medium, Card Style: flat, Alt-Background Enabled: false, Border Top Line: false] | Settings: [layout: compact, columns: 3, showTags: true, showMetadata: true]
- **Key Content Fields:**
  - Title: "Educational Background"
  - Subtitle/Description: "An interdisciplinary background in Information Systems, Economics, and Data Science, focused on data engineering, system design, and applied analytics."
  - **Structured Items (2 items):**
    - Item #1: "New York University"
      - Description: "Master's degree in Information Systems"
      - Layout Design Context: "compact"
      - Tags: "Courant Institute, Stern Business School"
      - Metadata Accents: [Year: 2026 | Major: Information Systems]
      - Interactivity Behavior:
        - *(No click action / Display-only)*
    - Item #2: "Northeastern University"
      - Description: "Bachelor's degree in Economics with a minor in Data Science"
      - Layout Design Context: "compact"
      - Tags: "CSSH"
      - Metadata Accents: [Year: 2024 | Major: Economics | Minor: Data Science]
      - Interactivity Behavior:
        - *(No click action / Display-only)*

#### Block 2: Collection
- **Theme/Style Parameters:** Style: [Padding: medium, Card Style: glass, Alt-Background Enabled: false, Border Top Line: true] | Settings: [layout: grid, columns: 2, showTags: true, showMetadata: true]
- **Key Content Fields:**
  - Title: "Technology Stack"
  - Subtitle/Description: "A practical stack spanning data engineering, backend development, databases, cloud deployment, and visualization, supporting projects from data pipelines to application interfaces."
  - **Structured Items (5 items):**
    - Item #1: "Data Engineering"
      - Description: "Building batch processing and analytical data pipelines."
      - Layout Design Context: "grid"
      - Tags: "Spark, Hadoop MapReduce, Trino, Hive, ETL/ELT"
      - Interactivity Behavior:
        - *(No click action / Display-only)*
    - Item #2: "Backend Development"
      - Description: "Developing business logic and server-side applications."
      - Layout Design Context: "grid"
      - Tags: "Python, Java, Django, REST APIs, WEB APPS"
      - Interactivity Behavior:
        - *(No click action / Display-only)*
    - Item #3: "Databases and Storage"
      - Description: "Designing structured and unstructured data models."
      - Layout Design Context: "grid"
      - Tags: "SQL, MySQL, MongoDB, Redis, Neo4j"
      - Interactivity Behavior:
        - *(No click action / Display-only)*
    - Item #4: "Data Analysis and Visualization"
      - Description: "Transforming data results into interactive insights."
      - Layout Design Context: "grid"
      - Tags: "Pandas, Plotly Dash, Tableau, Power BI"
      - Interactivity Behavior:
        - *(No click action / Display-only)*
    - Item #5: "Cloud and Development Tools"
      - Description: "Supporting deployment, version control, and development workflows."
      - Layout Design Context: "grid"
      - Tags: "Google Cloud, Git, Linux, Docker, Vercel"
      - Interactivity Behavior:
        - *(No click action / Display-only)*

### Page: Projects (`/projects`)
#### Block 1: Collection
- **Theme/Style Parameters:** Style: [Padding: medium, Card Style: flat, Alt-Background Enabled: false] | Settings: [layout: grid, columns: 3, showTags: true, showMetadata: true]
- **Key Content Fields:**
  - Title: "Selected Builds & Systems"
  - Subtitle/Description: "Deployed tools, product systems, and technical experiments built across data, design, and automation."
  - **Structured Items (2 items):**
    - Item #1: "All You Can Make"
      - Description: "A modular site builder that generates PRDs, sitemaps, block plans, and editable previews from guided inputs or AI prompts, with manual block editing, AI rewrite/rebuild, and HTML export."
      - Layout Design Context: "grid"
      - Tags: "MODULAR DESIGN, AI BLOCKS"
      - Interactivity Behavior:
        - Mode: **external** | Action Label: "VIEW LIVE APP →" | External URL: `https://all-you-can-make.vercel.app/`
    - Item #2: "Image Stitcher"
      - Description: "A lightweight image stitching tool for combining multiple uploads vertically or horizontally, with spacing, sizing, background controls, and lossless PNG export."
      - Layout Design Context: "grid"
      - Tags: "FRONTEND TOOL, PNG EXPORT"
      - Interactivity Behavior:
        - Mode: **external** | Action Label: "VIEW LIVE APP →" | External URL: `https://www.imagestitcher.top/`

#### Block 2: Collection
- **Theme/Style Parameters:** Style: [Padding: medium, Card Style: flat, Alt-Background Enabled: false] | Settings: [layout: grid, columns: 3, showTags: true, showMetadata: true]
- **Key Content Fields:**
  - Title: "Data & Analytics Projects"
  - Subtitle/Description: "Selected data projects focused on large-scale processing, database systems, machine learning, and analytical visualization."
  - **Structured Items (3 items):**
    - Item #1: "NYC Subway Data Platform & Analytics Pipeline"
      - Description: "A large-scale data engineering pipeline for processing 110M+ NYC subway ridership records with Hadoop, Spark, Hive, Trino, and Airflow, producing analytics-ready layers and interactive congestion insights."
      - Layout Design Context: "grid"
      - Tags: "SPARK, TRINO"
      - Metadata Accents: [Year: 2025 | Focus: Data Engineering]
      - Interactivity Behavior:
        - *(No click action / Display-only)*
    - Item #2: "Chronic Disease Risk Prediction & Data System"
      - Description: "A health data system combining SQL workflows and machine learning to model insurance-style processes, integrate structured health features, and predict chronic disease risk with Random Forest classification."
      - Layout Design Context: "grid"
      - Tags: "MYSQL, RANDOM FOREST"
      - Metadata Accents: [Year: 2024 | Focus: SQL + ML]
      - Interactivity Behavior:
        - *(No click action / Display-only)*
    - Item #3: "High-Performance Data Storage & Retrieval"
      - Description: "A multi-database storage project using MySQL, Redis, MongoDB, and Neo4j to support high-throughput access patterns, recommendation queries, and unstructured data visualization."
      - Layout Design Context: "grid"
      - Tags: "REDIS, NEO4J"
      - Metadata Accents: [Year: 2024 | Focus: Database Systems]
      - Interactivity Behavior:
        - *(No click action / Display-only)*

### Page: Contact (`/contact`)
#### Block 1: Collection
- **Theme/Style Parameters:** Style: [Padding: medium, Card Style: flat, Alt-Background Enabled: false] | Settings: [layout: compact, columns: 3, showTags: true, showMetadata: true]
- **Key Content Fields:**
  - Title: "Let’s Connect"
  - Subtitle/Description: "For opportunities, collaborations, or project discussions, you can reach me through email, LinkedIn, or GitHub."
  - **Structured Items (3 items):**
    - Item #1: "Email"
      - Description: "The best way to reach me for opportunities, interviews, and project discussions."
      - Layout Design Context: "compact"
      - Tags: "snow.zhao.xueyao@gmail.com"
      - Interactivity Behavior:
        - Mode: **external** | Action Label: "EMAIL ME →" | External URL: `https://mail.google.com/mail/?view=cm&fs=1&to=snow.zhao.xueyao@gmail.com`
    - Item #2: "LinkedIn"
      - Description: "Professional profile, experience, education, and career updates."
      - Layout Design Context: "compact"
      - Tags: ""
      - Interactivity Behavior:
        - Mode: **external** | Action Label: "VIEW LINKEDIN →" | External URL: `https://www.linkedin.com/in/xueyaozhao/`
    - Item #3: "GitHub"
      - Description: "Code repositories for selected software, data engineering, and web application projects."
      - Layout Design Context: "compact"
      - Tags: ""
      - Image Source URL: `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80`
      - Interactivity Behavior:
        - Mode: **external** | Action Label: "VIEW GITHUB →" | External URL: `https://github.com/DI0NY`


---

## Interaction Requirements
The generated code must strictly preserve the specific action redirects and user feedback triggers customized in the prototype:

1. **Button Actions (`actionType`):**
   - **Page Link (`page`):** Triggers dynamic router navigation to the target page slug layout.
   - **External URL (`external`):** Opens the specified URL in a new browser tab with secure references (`_blank`).
   - **Email Trigger (`email`):** Opens the user's default client program via a `mailto:` reference.
   - **None (`none`):** Standard styled element mapping without pointer/interactive triggers.

2. **Item Click Actions & Detail Indicators (`detailBehavior.mode`):**
   - **Open Popup Modal (`modal`):** Opens a sleek, beautiful modal overlay overlaying the custom modal title and body paragraphs. Default label: "Learn More +".
   - **Expand Inline HTML (`expand`):** Expands customized detailed paragraph blocks inline underneath the clicked element smoothly. Default label: "Expand ↓".
   - **Link to Subpage (`subpage`):** Transitions route layout seamlessly to the specified subpage. Default label: "Open Page →".
   - **External Link (`external`):** Navigates users directly to an external link. Default label: "Open Link →".
   - **None (`none`):** Cards render passively as pure display elements without hover hand-pointer triggers or actions.

---

## Modular Code Requirements
When writing code from this spec, adhere to these professional engineering standards:
- **Modular Component Schema:** Build the pages using atomic reusable React components grouped by block roles (e.g. `HeroBlock`, `CollectionBlock`, `Navbar`, etc.).
- **Self-Contained Styles:** Employ utility-first styling like Tailwind CSS to cleanly handle margins, typography ratios, grid layouts, and color states.
- **Data-Driven Architecture:** Maintain the layouts driven by semantic data states or local definitions so blocks remain highly modular and flexible. Do not hardcode content inline inside massive monolithic pages.

---

## Implementation Guardrails
- **Build with reusable modular components:** Keep components separated and clean.
- **Preserve site structure as data:** Let properties control display fields dynamically.
- **Do not generate one giant black-box page:** Avoid single massive files spanning multiple thousand lines.
- **Keep cards/collections item actions consistent:** Adhere to modal/expand/subpage/external/none behaviors precisely.

---

## Export / Deployment Goal
The production code output produced from this prompt should be fully buildable, lint-checked, responsive, and publishable as an optimized static bundle or Next.js/Vite application. It should scale perfectly for mobile viewports, tablet screens, and ultra-wide desktops.

---
*Created dynamically by the visual blueprint export generator module.*
