# Project reporting and analysis

A small portfolio dashboard with transparent definitions and traceable source data.

**[Open the interactive project](https://ashabakercv.github.io/projects/project-reporting/demo/)**

## Scenario
A fictional operations lead needs a consistent view of six active workstreams. The dashboard separates task completion from health and shows blocked work explicitly.

## Design decision
Calculate weighted completion from completed and total tasks, then expose the source rows. Keep health visible so a nearly complete blocked project still receives attention.

## Explore the work
- [Metric Definitions](docs/metric-definitions.md)
- [Weekly Brief](docs/weekly-brief.md)
- [Data Dictionary](docs/data-dictionary.md)
- [Fictional source data](data/fixtures.json)
- [Functional logic](src/model.mjs)
- [Functional checks](tests/model.test.mjs)

## Run locally
Use Node.js 22 or later to run `npm test`. No dependency installation is required. To view the demo, serve this repository over local HTTP with any static server and open `/demo/`. For example: `python3 -m http.server 8000` followed by `http://localhost:8000/demo/`.

## Scope and limitations
All organizations, owners and records in the dataset are fictional. The dashboard is a demonstration, not a forecast or an employer performance report.

## Contribution and provenance
This is an AI-assisted personal portfolio demonstration prepared for Asha Baker. The scenario, source records and sample responses are fictional. It is separate from employer deliverables and does not imply a production deployment, client outcome or prior employment in software engineering. Professional experience is described on the portfolio home page. Asha can use the documentation and source files to review, adapt and explain the implementation.

## Tools and relevant work
Excel-ready data / Portfolio reporting / Metric definitions. Relevant areas: Operations, Implementation.

## Version history
Version 1.0 introduces the documented scenario, browser demonstration, source data and functional checks. Subsequent changes should record the user need, change made and verification performed. GitHub Actions results should be described as passing only after a real workflow run succeeds.

## Reuse
The code and documentation are available for portfolio review. No license granting reuse has been selected; contact the owner for permission.
