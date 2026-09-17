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
  // Set to a real image path (e.g. "assets/img/portrait.jpg") once available.
  portraitUrl: null,
  email: null, // "[Cập nhật email liên hệ]" — set to a real address to enable the contact link
  linkedin: null, // set to a real LinkedIn URL to enable the link
  github: "https://github.com/giangptt-datapot",
  cvUrl: null, // set to a real CV file path to enable the download button
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
    time: { vi: "[Cập nhật thời gian]", en: "[Update dates]" },
    title: { vi: "[Cập nhật ngành học] · [Cập nhật tên trường]", en: "[Update major] · [Update university]" },
    desc: { vi: "[Cập nhật mô tả giai đoạn đại học]", en: "[Update description of university years]" },
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
];

export const education = {
  university: { vi: "[Cập nhật tên trường]", en: "[Update university name]" },
  major: { vi: "[Cập nhật ngành học]", en: "[Update major]" },
  time: { vi: "[Cập nhật thời gian học]", en: "[Update duration]" },
  gpa: { vi: "[Cập nhật GPA]", en: "[Update GPA]" },
  coursework: [
    { vi: "[Cập nhật danh sách môn học liên quan]", en: "[Update list of relevant coursework]" },
  ],
  highlights: [
    {
      title: { vi: "[Cập nhật: khóa luận / nghiên cứu]", en: "[Update: thesis / research]" },
      desc: { vi: "[Cập nhật mô tả]", en: "[Update description]" },
    },
    {
      title: { vi: "[Cập nhật: học bổng / giải thưởng học thuật]", en: "[Update: scholarship / academic award]" },
      desc: { vi: "[Cập nhật mô tả]", en: "[Update description]" },
    },
  ],
};

/** University & community activities — placeholders until real data is supplied. */
export const activities = [
  {
    org: { vi: "[Tên câu lạc bộ / tổ chức]", en: "[Club / organization name]" },
    category: { vi: "Câu lạc bộ", en: "Club" },
    role: { vi: "[Cập nhật vai trò]", en: "[Update role]" },
    time: { vi: "[Cập nhật thời gian]", en: "[Update dates]" },
    description: { vi: "[Cập nhật mô tả hoạt động]", en: "[Update activity description]" },
    contribution: { vi: "[Cập nhật đóng góp]", en: "[Update contribution]" },
    result: { vi: "[Cập nhật kết quả]", en: "[Update result]" },
  },
  {
    org: { vi: "[Tên hoạt động / cuộc thi]", en: "[Activity / competition name]" },
    category: { vi: "Cuộc thi", en: "Competition" },
    role: { vi: "[Cập nhật vai trò]", en: "[Update role]" },
    time: { vi: "[Cập nhật thời gian]", en: "[Update dates]" },
    description: { vi: "[Cập nhật mô tả hoạt động]", en: "[Update activity description]" },
    contribution: { vi: "[Cập nhật đóng góp]", en: "[Update contribution]" },
    result: { vi: "[Cập nhật kết quả]", en: "[Update result]" },
  },
];

export const activitiesNote = {
  vi: "Phần này đang được cập nhật — thêm hoạt động thời đại học & cộng đồng thật vào assets/js/data.js.",
  en: "This section is being updated — add real university & community activities to assets/js/data.js.",
};

/** Achievements & certifications. */
export const achievements = [
  {
    type: { vi: "Chứng nhận", en: "Certification" },
    name: "Power BI / Microsoft Fabric (PL-300)",
    org: "Microsoft",
    date: { vi: "[Cập nhật ngày cấp]", en: "[Update issue date]" },
    url: null,
  },
  {
    type: { vi: "Học bổng", en: "Scholarship" },
    name: { vi: "[Cập nhật tên học bổng]", en: "[Update scholarship name]" },
    org: { vi: "[Cập nhật đơn vị cấp]", en: "[Update issuing organization]" },
    date: { vi: "[Cập nhật thời gian]", en: "[Update date]" },
    url: null,
  },
  {
    type: { vi: "Giải thưởng học thuật", en: "Academic award" },
    name: { vi: "[Cập nhật tên giải thưởng]", en: "[Update award name]" },
    org: { vi: "[Cập nhật đơn vị cấp]", en: "[Update issuing organization]" },
    date: { vi: "[Cập nhật thời gian]", en: "[Update date]" },
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
  { href: "#about", vi: "Giới thiệu", en: "About" },
  { href: "#expertise", vi: "Chuyên môn", en: "Expertise" },
  { href: "#projects", vi: "Dự án", en: "Projects" },
  { href: "#education", vi: "Học tập", en: "Education" },
  { href: "#activities", vi: "Hoạt động", en: "Activities" },
  { href: "#achievements", vi: "Thành tích", en: "Achievements" },
  { href: "#contact", vi: "Liên hệ", en: "Contact" },
];
