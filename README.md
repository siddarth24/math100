# MATH 100 / 180 Study Site

Static study guide for UBC MATH 100 and MATH 180.

## Where content lives

All section pages live in `src/content/topics/` as JSON files (one file per book section, for example `src/content/topics/2-1.json`, `src/content/topics/3-2.json`, `src/content/topics/5.json`).

Shared "how to read these questions" cards and navigation group titles live in `src/data/groups.ts`.

Cropped question figures live in `public/figures/`.

## How to add or edit a video

1. Open the section file in `src/content/topics/` (for example `src/content/topics/4-3.json`).
2. Edit the `"seeIt"` or `"slowWalkthrough"` array:
   ```json
   {
     "title": "Interpreting the Chain Rule Graphically",
     "creator": "Trefor Bazett",
     "url": "https://www.youtube.com/watch?v=o-6GzqChpJs",
     "watchFor": "Watch how the rate of the composite function multiplies the two slopes together."
   }
   ```
3. Rebuild and preview.

## How to add or edit a practice question

1. Open the section file in `src/content/topics/`.
2. Add an entry to the `"questions"` array:
   ```json
   {
     "number": 6,
     "id": "2.1-q6",
     "stage": 1,
     "half": "first",
     "oldExam": false,
     "asking": "Read the graph of f(x) to find the height the curve approaches as x approaches 2 from the left, from the right, and overall, and compare that height to the filled dot at x = 2.",
     "statement": "<p>Given the graph of $y = f(x)$ below, evaluate...</p>",
     "figures": [
       {
         "src": "/figures/2.1-q6.png",
         "alt": "Coordinate graph of y = f(x) showing..."
       }
     ]
   }
   ```
   - Use `"half": "first"` or `"half": "harder"`.
   - Set `"oldExam": true` when the practice book marks the question with a star (`*`).
   - If the question has a figure, place the cropped image in `public/figures/` and write the mathematical information shown in the figure in `"alt"`.

## How to rebuild and preview

From `/home/siddarth/math100`:

```bash
pnpm build
pnpm preview
```

The static site is generated in `dist/`.
