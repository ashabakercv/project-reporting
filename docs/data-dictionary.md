# Data dictionary

| Field | Type | Meaning |
| --- | --- | --- |
| id | Text | Stable fictional project identifier |
| name | Text | Fictional workstream title |
| owner | Text | Fictional accountable owner |
| health | Choice | On track, At risk, Blocked |
| complete | Integer | Completed task count |
| total | Integer | Total task count; must be at least complete |
| due | ISO date | Planned completion date |
| dependency | Text | Material outstanding prerequisite |

The collection is a static snapshot. Dates are not refreshed automatically. Change the reference date deliberately when testing another reporting period. Repositories, documentation and the dashboard use the same committed data.
