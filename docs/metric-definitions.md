# Metric definitions

Reference date: 17 November 2026. The data is fictional.

## Active workstreams
Count the source rows in the selected view. Each row represents one project rather than a task, client contact or unique person.

## Task completion
Sum completed tasks and divide by the sum of total tasks for the selected rows. Display a rounded percentage but retain the source counts. Do not average project percentages because differently sized projects would receive equal weight. A zero-task selection returns zero rather than an error.

## Needs attention
Count projects whose health is At risk or Blocked. Health is an explicit source assessment and is not inferred from percent complete. A project with many completed tasks can still have a launch blocker.

## Overdue
Count incomplete projects with a due date before the reference date. A project due on the reference date is not overdue. Filtering updates all headline metrics from the same selected rows.
