# Website Content Migration Plan

## Overview
Migrate 2 blog posts from datapot.vn to dev site with >=95% content fidelity.

---

## Phase 1: Discovery & Preparation
**Objective**: Identify source content and prepare migration environment

### Tasks
1. Identify 2 blog posts from datapot.vn for migration
2. Document source URLs and content structure
3. Capture screenshots of original posts for comparison
4. Analyze content elements (headings, lists, tables, code blocks, images, links)
5. Set up dev environment for testing

### Human-in-Loop Checkpoint #1
**Review**: Selected blog posts and content analysis
- Confirm the 2 posts are appropriate for migration
- Verify content structure documentation is complete
- Approve migration approach

---

## Phase 2: Content Extraction & Transformation
**Objective**: Extract content from source and transform for target system

### Tasks
1. Extract HTML/markdown from source blog posts
2. Parse and identify all content elements:
   - Headings (h1-h6)
   - Lists (ordered/unordered)
   - Tables
   - Code blocks
   - Images (URLs, alt text)
   - Links (internal/external)
3. Download and store images locally
4. Transform content to target format
5. Update image paths to local/dev paths
6. Validate internal links and update if needed

### Human-in-Loop Checkpoint #2
**Review**: Extracted content quality
- Verify all content elements extracted correctly
- Check image downloads are complete
- Confirm link inventory is accurate

---

## Phase 3: Migration & Validation
**Objective**: Import content to dev site and validate against acceptance criteria

### Tasks
1. Create posts on dev site with transformed content
2. Upload images to dev site
3. Assign appropriate slugs (document source -> target mapping)
4. Run acceptance criteria checks (detailed below)
5. Document any issues encountered
6. Fix identified issues

### Acceptance Criteria Checks
#### Content/Format Match (>= 95%)
- [ ] All headings preserved with correct hierarchy
- [ ] Lists formatted correctly (ordered/unordered)
- [ ] Tables render properly with all rows/columns
- [ ] Code blocks display with proper syntax highlighting
- [ ] Text content matches source (no missing paragraphs)
- [ ] Overall visual layout comparable to source

#### Images Validation
- [ ] All images display correctly (no 404 errors)
- [ ] Image alt text preserved
- [ ] Image sizing appropriate
- [ ] Images load from correct paths

#### Links Validation
- [ ] No broken external links (run link checker)
- [ ] Internal links updated for new site structure
- [ ] All links open to correct destinations

### Human-in-Loop Checkpoint #3
**Review**: Migrated posts on dev site
- Visual comparison with source screenshots
- Review acceptance criteria checklist
- Approve posts or request fixes

---

## Phase 4: Documentation & Reusability
**Objective**: Create migration notes and reusable prompt pack

### Tasks
1. Document migration notes:
   - Source URL -> Target slug mappings
   - Issues encountered and resolutions
   - Content element transformations applied
2. Create prompt pack for future migrations:
   - Step-by-step prompts for extracting content
   - Transformation templates
   - Validation checklist
   - Troubleshooting guide
3. Package deliverables for handoff

### Human-in-Loop Checkpoint #4
**Final Review**: Complete deliverables
- Review migration notes completeness
- Test prompt pack with sample content
- Approve final deliverables

---

## Risks & Mitigations

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Source site structure changes mid-migration | High | Low | Take screenshots and save HTML snapshots at start |
| Images blocked by CORS/hotlinking protection | Medium | Medium | Download all images locally before migration |
| Code blocks lose formatting during extraction | Medium | Medium | Test extraction on sample content first; use proper markdown/HTML parsing |
| Tables don't render correctly in target format | Medium | Medium | Test table rendering early; prepare fallback formatting |
| Internal links break after migration | High | High | Create comprehensive link mapping; use search/replace carefully |
| Character encoding issues (special chars, emojis) | Low | Medium | Use UTF-8 throughout; validate encoding after extraction |
| Dev site has different content length limits | Medium | Low | Check target CMS limits before migration |
| Loss of SEO metadata (titles, descriptions) | Medium | Medium | Extract and migrate meta tags along with content |

---

## Success Metrics
- 2 posts successfully migrated to dev site
- Acceptance criteria >= 95% content match achieved
- Zero 404 errors on images
- Zero broken links
- Complete migration notes delivered
- Reusable prompt pack created and tested

---

## Timeline Estimate
- Phase 1: Discovery & Preparation
- Phase 2: Content Extraction & Transformation
- Phase 3: Migration & Validation
- Phase 4: Documentation & Reusability

*Note: Following project rules - propose plan first, wait for approval before implementation*
