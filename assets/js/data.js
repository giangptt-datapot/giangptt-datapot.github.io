/**
 * Site content. Edit this file to update text across the site —
 * components read from here instead of hard-coded markup.
 * Every translatable field is { vi, en }.
 */

export const profile = {
  name: "Phạm Thị Thùy Giang",
  initials: "PTG",
  role: { vi: "Business Analyst", en: "Business Analyst" },
  company: "Datapot",
  portraitUrl: "/assets/img/portrait.jpg",
  email: "thuygiang0902.nb@gmail.com",
  linkedin: "https://linkedin.com/in/thuygiang0902",
  github: "https://github.com/giangptt-datapot",
  cvUrl: "/assets/cv/CV-Pham-Thi-Thuy-Giang.pdf",
};

export const highlights = [
  {
    value: "944",
    label: { vi: "commits trên 2 hệ thống production", en: "commits across 2 production systems" },
  },
  {
    value: "322",
    label: { vi: "pull request đã merge", en: "pull requests merged" },
  },
  {
    value: "155",
    label: { vi: "issue phân tích & tạo", en: "issues analyzed & authored" },
  },
  {
    value: "2",
    label: { vi: "hệ thống đang vận hành thật", en: "systems in active production use" },
  },
];

export const highlightNote = {
  vi: "Số liệu ghi nhận từ hoạt động đóng góp trực tiếp trên GitHub, 02/2026 – hiện tại.",
  en: "Figures reflect direct contribution activity on GitHub, Feb 2026 – present.",
};

export const journey = [
  {
    time: { vi: "09/2021 – 07/2025", en: "Sep 2021 – Jul 2025" },
    title: { vi: "Hệ thống thông tin quản lý · Đại học Bách khoa Hà Nội", en: "Management Information Systems · Hanoi University of Science and Technology" },
    desc: {
      vi: "Học Hệ thống thông tin quản lý tại Khoa Toán Tin; tham gia Tổ Hỗ trợ triển khai Hệ thống iCTSV và giữ vai trò Trưởng mảng Truyền thông.",
      en: "Studied Management Information Systems at the School of Applied Mathematics & Informatics; part of the iCTSV system rollout team and led its Communications division.",
    },
  },
  {
    time: { vi: "01/2024 – 06/2025", en: "Jan 2024 – Jun 2025" },
    title: { vi: "Business Analyst / Data Analyst — dự án doanh nghiệp", en: "Business Analyst / Data Analyst — enterprise projects" },
    desc: {
      vi: "Phân tích nghiệp vụ và dữ liệu cho các dự án ERP và hệ thống quản trị tài chính, cùng một dự án phân tích dữ liệu chứng khoán cá nhân.",
      en: "Business and data analysis for ERP and financial-management projects, alongside a personal stock-data analysis project.",
    },
  },
  {
    time: { vi: "02/2026 – hiện tại", en: "Feb 2026 – present" },
    title: { vi: "Business Analyst @ Datapot", en: "Business Analyst @ Datapot" },
    desc: {
      vi: "Phân tích nghiệp vụ và audit hệ thống cho nền tảng vận hành trung tâm đào tạo nghề — từ đặc tả yêu cầu đến trực tiếp xây dựng tính năng.",
      en: "Business analysis and system audits for a vocational-training operations platform — from requirements to features I help build myself.",
    },
  },
  {
    time: { vi: "02/2026 – hiện tại", en: "Feb 2026 – present" },
    title: { vi: "Tham gia xây dựng hệ thống thực tế", en: "Building real production systems" },
    desc: {
      vi: "Đóng góp trực tiếp trên Datapot Operations Platform và Datapot Website — từ Learner/Trainer Portal đến tích hợp Microsoft Teams/Graph và pipeline nội dung.",
      en: "Direct contributions to the Datapot Operations Platform and Datapot Website — from the Learner/Trainer Portal to Microsoft Teams/Graph integration and content pipelines.",
    },
  },
];

export const expertise = [
  {
    title: { vi: "Business Analysis", en: "Business Analysis" },
    items: [
      { vi: "Phân tích yêu cầu nghiệp vụ (BRD/FRD, use-case, flow mapping)", en: "Business requirements analysis (BRD/FRD, use cases, flow mapping)" },
      { vi: "Audit hệ thống & schema dữ liệu", en: "System and data-schema audits" },
      { vi: "Thiết kế quy trình vận hành", en: "Operating-process design" },
      { vi: "QA / UAT & kiểm thử E2E", en: "QA / UAT & end-to-end testing" },
      { vi: "Làm việc với nhiều vai trò liên quan (coordinator, giảng viên, trợ giảng...)", en: "Cross-role stakeholder collaboration (coordinators, trainers, teaching assistants...)" },
    ],
  },
  {
    title: { vi: "Product & Operations", en: "Product & Operations" },
    items: [
      { vi: "RBAC & phân quyền hệ thống", en: "RBAC & system permissions" },
      { vi: "Tối ưu vận hành trung tâm đào tạo: lịch học, điểm danh, bài tập", en: "Training-center operations: scheduling, attendance, assignments" },
      { vi: "Release management — chủ trì các đợt promote dev → main go-live", en: "Release management — leading dev → main go-live promotions" },
      { vi: "Trải nghiệm người dùng Trainer/Learner Portal", en: "Trainer/Learner Portal user experience" },
    ],
  },
  {
    title: { vi: "Data & BI", en: "Data & BI" },
    items: [
      { vi: "SQL cho phân tích dữ liệu", en: "SQL for data analysis" },
      { vi: "Power BI / Microsoft Fabric (Direct Lake, PBIP)", en: "Power BI / Microsoft Fabric (Direct Lake, PBIP)" },
      { vi: "Python (pandas) để làm sạch & xử lý dữ liệu", en: "Python (pandas) for data cleaning & processing" },
      { vi: "Thiết kế & tối ưu index cho truy vấn (CRM lead-pool)", en: "Query and index design (CRM lead-pool)" },
      { vi: "Ra quyết định dựa trên dữ liệu", en: "Data-driven decision making" },
    ],
  },
  {
    title: { vi: "Technical Collaboration", en: "Technical Collaboration" },
    items: [
      { vi: "Next.js / TypeScript, PostgreSQL / Drizzle ORM", en: "Next.js / TypeScript, PostgreSQL / Drizzle ORM" },
      { vi: "Microsoft Graph & Teams API (điểm danh tự động)", en: "Microsoft Graph & Teams API (automated attendance)" },
      { vi: "Git / GitHub — quản lý issue, review PR, điều phối release", en: "Git / GitHub — issue management, PR review, release coordination" },
      { vi: "Làm việc trực tiếp trên codebase thật cùng kỹ sư; AI-assisted development (Claude Code)", en: "Working directly in the codebase alongside engineers; AI-assisted development (Claude Code)" },
    ],
  },
];

/**
 * Selected work — full case studies. `slug` maps to /projects/<slug>.html
 * for entries that have a dedicated detail page.
 */
export const projects = [
  {
    slug: "datapot-operations-platform",
    kicker: { vi: "Ops Platform · Datapot", en: "Ops Platform · Datapot" },
    name: "Datapot Operations Platform",
    company: "Datapot",
    time: { vi: "02/2026 – hiện tại", en: "Feb 2026 – present" },
    role: { vi: "Business Analyst · Top 2 contributor", en: "Business Analyst · Top 2 contributor" },
    summary: {
      vi: "Nền tảng vận hành dạng event-driven modular monolith cho trung tâm đào tạo nghề — LMS, Trainer/Learner Portal, CRM, CMS.",
      en: "An event-driven modular-monolith operations platform for a vocational-training center — LMS, Trainer/Learner Portal, CRM, CMS.",
    },
    problem: {
      vi: "Trung tâm đào tạo cần một nền tảng vận hành hợp nhất — lớp học, điểm danh, học viên, giảng viên, CRM — thay vì rời rạc qua nhiều công cụ và quy trình thủ công.",
      en: "The training center needed one unified operations platform — classes, attendance, learners, trainers, CRM — instead of fragmented tools and manual processes.",
    },
    myRole: {
      vi: "Phân tích nghiệp vụ và audit hệ thống, sau đó trực tiếp tham gia xây dựng tính năng trên hệ thống thật — từ đặc tả yêu cầu đến triển khai production.",
      en: "Business analysis and system audits, then hands-on feature development on the live system — from requirements to production deployment.",
    },
    whatIDid: [
      { vi: "Learner Portal: dashboard, lịch học calendar (day/week/month), ghi nhận điểm danh & bài tập (epic đa giai đoạn)", en: "Learner Portal: dashboard, calendar view (day/week/month), attendance & assignment tracking (multi-phase epic)" },
      { vi: "Trainer Portal: session detail, tái tổ chức tab, tối ưu responsive mobile", en: "Trainer Portal: session detail, tab reorganization, mobile-responsive optimization" },
      { vi: "Tích hợp Microsoft Teams/Graph: đồng bộ điểm danh qua callRecords/attendanceRecords, xử lý matching meeting-organizer, bootstrap subscription", en: "Microsoft Teams/Graph integration: attendance sync via callRecords/attendanceRecords, meeting-organizer matching, subscription bootstrap" },
      { vi: "CI/CD & hạ tầng: xử lý race condition Postgres readiness, drizzle-kit migrate, serialize VM run-command", en: "CI/CD & infrastructure: fixing Postgres readiness race conditions, drizzle-kit migrations, serializing VM run-commands" },
      { vi: "CRM: rework bộ lọc Leads, tối ưu index cho lead-pool", en: "CRM: reworked lead filters, optimized indexing for the lead pool" },
      { vi: "CMS/MCP & RBAC: mở rộng write surface, fix phân quyền finance", en: "CMS/MCP & RBAC: extended the write surface, fixed finance permission issues" },
    ],
    outcome: {
      vi: "[Cập nhật business outcome — ví dụ thời gian xử lý vận hành giảm bao nhiêu, số lớp học/học viên đang chạy qua hệ thống]",
      en: "[Update business outcome — e.g. reduction in operational processing time, number of classes/learners now running on the system]",
    },
    evidence: [
      { value: "839", label: { vi: "commits", en: "commits" } },
      { value: "269 / 286", label: { vi: "PR merged / mở", en: "PRs merged / opened" } },
      { value: "144", label: { vi: "issue phân tích & tạo", en: "issues analyzed & authored" } },
    ],
    hasDetailPage: true,
  },
  {
    slug: "datapot-website-cms",
    kicker: { vi: "Website · Datapot Academy", en: "Website · Datapot Academy" },
    name: "Datapot Website (Next.js 16)",
    company: "Datapot Academy",
    time: { vi: "06/2026 – 08/2026", en: "Jun 2026 – Aug 2026" },
    role: { vi: "Core contributor", en: "Core contributor" },
    summary: {
      vi: "Website tuyển sinh & nội dung công khai của Datapot Academy, tách riêng khỏi ops platform nội bộ.",
      en: "Datapot Academy's public admissions and content website, split out from the internal ops platform.",
    },
    problem: {
      vi: "Website tuyển sinh cần tách khỏi hệ thống vận hành nội bộ, đồng thời xử lý nợ kỹ thuật phát sinh khi migrate nội dung từ WordPress sang nền tảng mới.",
      en: "The admissions site needed to be separated from the internal operations system, while resolving technical debt from migrating content off WordPress onto the new platform.",
    },
    myRole: {
      vi: "Đóng góp cốt lõi (core contributor): phân tích và triển khai các luồng nội dung, redirect và checkout; chủ trì điều phối một số đợt release.",
      en: "Core contributor: analyzed and implemented content, redirect and checkout flows; led coordination of several release cycles.",
    },
    whatIDid: [
      { vi: "Redirect/proxy pipeline: chuẩn hoá redirect WordPress → edu.vn, fix loopback fallback, dọn dẹp legacy redirect map", en: "Redirect/proxy pipeline: standardized WordPress → edu.vn redirects, fixed loopback fallback, cleaned up the legacy redirect map" },
      { vi: "CMS-driven content: page-builder cho Landing Page, Form Builder, render nội dung trực tiếp từ CMS Product", en: "CMS-driven content: Landing Page builder, Form Builder, rendering content directly from the CMS Product model" },
      { vi: "E-commerce: luồng chọn hình thức học Hybrid (Online/Offline) tại checkout", en: "E-commerce: hybrid (online/offline) study-mode selection at checkout" },
      { vi: "Bảo mật & hiệu năng: vá CVE (nanoid, sharp), đồng bộ ISR cache revalidate tag", en: "Security & performance: patched CVEs (nanoid, sharp), synchronized ISR cache revalidate tags" },
      { vi: "Release management: chủ trì nhiều đợt promote dev → main go-live", en: "Release management: led multiple dev → main go-live promotions" },
    ],
    outcome: {
      vi: "[Cập nhật business outcome — ví dụ số redirect được chuẩn hoá, tác động SEO/traffic]",
      en: "[Update business outcome — e.g. number of redirects standardized, SEO/traffic impact]",
    },
    evidence: [
      { value: "105", label: { vi: "commits", en: "commits" } },
      { value: "53 / 55", label: { vi: "PR merged / mở", en: "PRs merged / opened" } },
      { value: "11", label: { vi: "issue phân tích & tạo", en: "issues analyzed & authored" } },
    ],
    hasDetailPage: true,
  },
  {
    slug: null,
    kicker: { vi: "Dự án doanh nghiệp · ERP", en: "Enterprise project · ERP" },
    name: { vi: "Xây dựng hệ thống ERP cho công ty thời trang HX", en: "ERP system for fashion company HX" },
    company: "HX",
    time: { vi: "01/2025 – 06/2025", en: "Jan 2025 – Jun 2025" },
    role: { vi: "Business Analyst, Data Analyst", en: "Business Analyst, Data Analyst" },
    summary: {
      vi: "Phân tích yêu cầu và điều phối chuyển đổi dữ liệu cho một hệ thống ERP mới, tập trung vào phân hệ Tài chính – Sản phẩm.",
      en: "Requirements analysis and data-migration coordination for a new ERP system, focused on the Finance – Product modules.",
    },
    problem: {
      vi: "Quy trình giữa các phòng Kế toán, Bán hàng và Kho vận còn rời rạc; doanh nghiệp cần một hệ thống ERP hợp nhất thay thế hệ thống cũ.",
      en: "Processes across Accounting, Sales and Warehouse were disconnected; the company needed a unified ERP system to replace the old one.",
    },
    myRole: {
      vi: "Khảo sát và thu thập yêu cầu người dùng, phân tích quy trình nghiệp vụ hiện tại và đề xuất cải tiến cho phân hệ Tài chính – Sản phẩm.",
      en: "Gathered user requirements, analyzed current business processes, and proposed improvements for the Finance – Product modules.",
    },
    whatIDid: [
      { vi: "Khảo sát, thu thập yêu cầu người dùng từ các phòng Kế toán, Bán hàng và Kho vận", en: "Surveyed and gathered user requirements from Accounting, Sales and Warehouse" },
      { vi: "Phân tích quy trình nghiệp vụ hiện tại, xác định điểm nghẽn và đề xuất cải tiến cho phân hệ Tài chính – Sản phẩm", en: "Analyzed current business processes, identified bottlenecks, and proposed improvements for the Finance – Product modules" },
      { vi: "Thực hiện ETL dữ liệu từ hệ thống cũ sang hệ thống mới", en: "Performed ETL of data from the old system to the new one" },
      { vi: "Trực quan hóa dữ liệu bằng Power BI hỗ trợ doanh nghiệp ra quyết định", en: "Built Power BI visualizations to support business decision-making" },
    ],
    outcome: {
      vi: "[Cập nhật business outcome]",
      en: "[Update business outcome]",
    },
    evidence: [],
    hasDetailPage: false,
  },
  {
    slug: null,
    kicker: { vi: "Dự án doanh nghiệp · Tài chính", en: "Enterprise project · Finance" },
    name: { vi: "Hệ thống quản trị và phân tích tài chính cho tập đoàn X", en: "Financial management & analytics system for Corporation X" },
    company: { vi: "Tập đoàn X", en: "Corporation X" },
    time: { vi: "09/2024 – 01/2025", en: "Sep 2024 – Jan 2025" },
    role: { vi: "Business Analyst, Data Analyst", en: "Business Analyst, Data Analyst" },
    summary: {
      vi: "Xây dựng hệ thống phân tích dữ liệu tài chính tập trung cho 5 công ty thành viên của một tập đoàn.",
      en: "Built a centralized financial data-analytics system for 5 member companies of a corporate group.",
    },
    problem: {
      vi: "Tập đoàn cần một góc nhìn tài chính hợp nhất trên 5 công ty thành viên, thay vì báo cáo rời rạc theo từng đơn vị.",
      en: "The group needed a unified financial view across 5 member companies instead of fragmented per-entity reporting.",
    },
    myRole: {
      vi: "Phân tích quy trình nghiệp vụ tài chính hiện tại, đề xuất bộ chỉ số đánh giá hiệu quả tài chính (KPI) và thiết kế mô hình dữ liệu phù hợp.",
      en: "Analyzed current financial processes, proposed a set of financial KPIs, and designed the underlying data model.",
    },
    whatIDid: [
      { vi: "Phân tích quy trình nghiệp vụ tài chính hiện tại và xây dựng hệ thống phân tích dữ liệu tập trung cho 5 công ty thành viên", en: "Analyzed current financial processes and built a centralized data-analytics system for 5 member companies" },
      { vi: "Đề xuất bộ chỉ số đánh giá hiệu quả tài chính (KPI), thiết kế mô hình dữ liệu phù hợp", en: "Proposed a set of financial performance KPIs and designed a suitable data model" },
      { vi: "Công nghệ: SQL Server, Power BI", en: "Technology: SQL Server, Power BI" },
    ],
    outcome: {
      vi: "[Cập nhật business outcome]",
      en: "[Update business outcome]",
    },
    evidence: [],
    hasDetailPage: false,
  },
];

/** Smaller / self-directed work, shown as lighter cards (no dedicated detail page). */
export const otherWork = [
  {
    kicker: { vi: "BA Take-Home Test", en: "BA take-home assessment" },
    name: { vi: "Hệ thống quản lý lịch dạy", en: "Teaching-schedule management system" },
    desc: {
      vi: "Phân tích & prototype luồng xác nhận lịch, đổi/hủy lịch, xử lý xung đột cho 3 vai trò: Coordinator, Giảng viên, Trợ giảng.",
      en: "Analysis and prototype for schedule confirmation, rescheduling/cancellation and conflict handling across three roles: coordinator, trainer, teaching assistant.",
    },
    href: "https://github.com/DatapotAnalytics/datapot-ba-test-demo",
    cta: { vi: "Xem repo", en: "View repo" },
  },
  {
    kicker: { vi: "Dự án cá nhân · Data Analyst", en: "Personal project · Data Analyst" },
    name: { vi: "Phân tích dữ liệu chứng khoán", en: "Stock data analysis" },
    desc: {
      vi: "Thu thập dữ liệu giá cổ phiếu từ các API mở (SSI, TCBS, VNDIRECT), làm sạch bằng Python (pandas) và trực quan hóa bằng Power BI để đánh giá định kỳ (giá trị hợp lý, tăng trưởng, P/E...), hỗ trợ quyết định mua/bán cho danh mục cá nhân.",
      en: "Collected stock price data from public APIs (SSI, TCBS, VNDIRECT), cleaned it with Python (pandas), and visualized it in Power BI for periodic evaluation (fair value, growth, P/E...) to support personal-portfolio buy/sell decisions.",
    },
    href: null,
    cta: { vi: "01/2024 – 07/2024", en: "Jan 2024 – Jul 2024" },
  },
];

export const education = {
  university: { vi: "Đại học Bách khoa Hà Nội", en: "Hanoi University of Science and Technology" },
  major: { vi: "Hệ thống thông tin quản lý — Khoa Toán Tin", en: "Management Information Systems — School of Applied Mathematics & Informatics" },
  time: { vi: "09/2021 – 07/2025", en: "Sep 2021 – Jul 2025" },
  gpa: { vi: "3.66/4.0", en: "3.66/4.0" },
  coursework: [
    { vi: "[Cập nhật danh sách môn học liên quan]", en: "[Update list of relevant coursework]" },
  ],
  highlights: [
    {
      title: { vi: "Giấy khen của Giám đốc Đại học", en: "Merit certificate from the University Director" },
      desc: {
        vi: "Cho sinh viên có nhiều đóng góp tích cực — năm học 2021–2022 và 2022–2023.",
        en: "Awarded for active positive contributions — academic years 2021–2022 and 2022–2023.",
      },
    },
    {
      title: { vi: "Danh hiệu Sinh viên 5 tốt cấp Đại học", en: "\"5 Good Student\" university-level title" },
      desc: { vi: "Năm học 2022–2023.", en: "Academic year 2022–2023." },
    },
  ],
};

/** University & community activities. */
export const activities = [
  {
    org: { vi: "Tổ Hỗ trợ triển khai Hệ thống iCTSV", en: "iCTSV System Rollout Support Team" },
    category: { vi: "Lãnh đạo", en: "Leadership" },
    role: { vi: "Trưởng mảng Truyền thông", en: "Head of Communications" },
    time: { vi: "2021 – 2023", en: "2021 – 2023" },
    description: {
      vi: "Tham gia đội ngũ hỗ trợ triển khai hệ thống iCTSV tại trường, phụ trách mảng truyền thông trong suốt quá trình triển khai.",
      en: "Part of the team supporting the university's iCTSV system rollout, responsible for the communications track throughout the rollout.",
    },
    contribution: {
      vi: "Xây dựng kế hoạch truyền thông, viết bài và quản lý fanpage iCTSV (hơn 50.000 người theo dõi); hỗ trợ các sự kiện, hoạt động của Ban Công tác Sinh viên.",
      en: "Built the communications plan, wrote content, and managed the iCTSV fanpage (50,000+ followers); supported events and activities run by the Student Affairs Office.",
    },
    result: {
      vi: "Duy trì và phát triển fanpage iCTSV với hơn 50.000 người theo dõi.",
      en: "Grew and maintained the iCTSV fanpage to over 50,000 followers.",
    },
  },
];

export const activitiesNote = {
  vi: "Sẽ tiếp tục cập nhật thêm các hoạt động khác tại đây.",
  en: "More activities will be added here over time.",
};

/** Achievements & certifications. */
export const achievements = [
  {
    type: { vi: "Chứng chỉ", en: "Certification" },
    name: "Google Data Analytics Certificate",
    org: "Google",
    date: { vi: "2024", en: "2024" },
    url: null, // add the Coursera/credential URL here once available
  },
  {
    type: { vi: "Cuộc thi", en: "Competition" },
    name: { vi: "Top 5 khu vực miền Bắc — GDGoC Hackathon Vietnam 2025", en: "Top 5, Northern Region — GDGoC Hackathon Vietnam 2025" },
    org: "Google Developer Groups on Campus (GDGoC)",
    date: { vi: "2025", en: "2025" },
    url: null,
  },
  {
    type: { vi: "Cuộc thi", en: "Competition" },
    name: { vi: "Giải \"Giải pháp công nghệ triển vọng\" — SheCodes Hackathon 2023", en: "\"Promising Tech Solution\" Award — SheCodes Hackathon 2023" },
    org: "SheCodes",
    date: { vi: "2023", en: "2023" },
    url: null,
  },
];

/** Writing / research / learning. */
export const articles = [
  {
    category: { vi: "Tài liệu tự học · SQL", en: "Self-study · SQL" },
    title: "SQL for Data Analytics",
    desc: {
      vi: "Biên soạn ví dụ SQL thực hành cho analyst: xử lý NULL, non-equi join, self-join.",
      en: "A collection of hands-on SQL examples for analysts: handling NULLs, non-equi joins, self-joins.",
    },
    href: "https://github.com/DatapotAnalytics/SQL-for-data-analytics",
    cta: { vi: "Xem repo", en: "View repo" },
    thumbLabel: "SQL",
  },
  {
    category: { vi: "Research & Educational", en: "Research & educational" },
    title: "Power BI / Microsoft Fabric Demo",
    desc: {
      vi: "Demo phân tích ngành ngân hàng trên kiến trúc Direct Lake / PBIP, xây bằng AI agent theo hướng reviewable code.",
      en: "A banking-sector analytics demo on Direct Lake / PBIP architecture, built with an AI agent following a reviewable-code approach.",
    },
    href: "https://github.com/DatapotAnalytics/datapot-fabric-agent-demo",
    cta: { vi: "Xem repo", en: "View repo" },
    thumbLabel: "Power BI",
  },
];

export const navLinks = [
  { key: "about", href: "/about.html", vi: "Giới thiệu", en: "About" },
  { key: "expertise", href: "/expertise.html", vi: "Chuyên môn", en: "Expertise" },
  { key: "projects", href: "/projects.html", vi: "Dự án", en: "Projects" },
  { key: "education", href: "/education.html", vi: "Học tập", en: "Education" },
  { key: "activities", href: "/activities.html", vi: "Hoạt động", en: "Activities" },
  { key: "achievements", href: "/achievements.html", vi: "Thành tích", en: "Achievements" },
  { key: "contact", href: "/contact.html", vi: "Liên hệ", en: "Contact" },
];
