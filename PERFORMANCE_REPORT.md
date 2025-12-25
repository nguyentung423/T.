# Performance Optimization Report

**Project:** T. Portfolio Service Website  
**Target:** Lighthouse Mobile Score ≥ 90  
**Date:** $(date +%Y-%m-%d)

---

## 📊 Executive Summary

### Before Optimization (Estimated from User Report)

| Metric                 | Value         | Status                 |
| ---------------------- | ------------- | ---------------------- |
| Lighthouse Mobile      | ~70           | ⚠️ Needs work          |
| LCP                    | ~6.0s         | ❌ Poor (target <2.5s) |
| Render-blocking CSS    | ~800ms        | ❌ Critical issue      |
| Critical Request Chain | ~786ms (font) | ❌ Blocking LCP        |
| Forced Reflow          | ~53ms         | ⚠️ Minor issue         |

### After Optimization (Expected)

| Metric             | Expected Value | Improvement       |
| ------------------ | -------------- | ----------------- |
| Lighthouse Mobile  | 85-95          | +15-25 points     |
| LCP                | <2.5s          | ~60% faster       |
| Font Chain         | ~400ms         | ~50% faster       |
| CSS Animation Cost | Minimal        | Eliminated delays |

---

## 🔍 Issues Identified & Solutions

### Issue 1: Heavy Font Loading (Critical)

**Problem:**  
Loading 3 Google Fonts (Inter, Be Vietnam Pro, Playfair Display) created a critical request chain with ~83KB font files blocking LCP.

**Evidence:**

- Playfair Display only used for single "T." logo
- Font .woff2 request adding ~786ms to critical path
- Vietnamese subset increasing font file sizes

**Solution Implemented:**

```diff
- import { Inter, Be_Vietnam_Pro, Playfair_Display } from "next/font/google";
+ import { Inter, Be_Vietnam_Pro } from "next/font/google";

- serif: ["var(--font-playfair)", "Georgia", "serif"],
+ serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
```

**Impact:**

- Eliminated ~30KB font file (Playfair Display)
- Reduced critical request chain by 1 request
- Logo now uses instant system serif fonts

---

### Issue 2: Animation Delays Blocking LCP (Critical)

**Problem:**  
Hero h1 headline (LCP element) had `animationDelay: "100ms"` causing delayed paint.

**Evidence:**

```jsx
// BEFORE - Animation delay on LCP element
<h1
  className="animate-in fade-in slide-in-from-bottom-4"
  style={{ animationDelay: "100ms" }}
>
```

**Solution Implemented:**

```jsx
// AFTER - No animation on LCP element
<h1
  className="font-display"
  // NO animation classes or delays
>
```

**Impact:**

- LCP element renders immediately on first paint
- Secondary elements use lightweight fade (no transform)
- Eliminated JavaScript animation orchestration

---

### Issue 3: Complex CSS Animations (Medium)

**Problem:**  
Transform-based animations (`translateY`) cause layout recalculations and paint.

**Evidence:**

```css
/* BEFORE - Heavy animation with transform */
@keyframes slide-in-from-bottom-4 {
  from {
    transform: translateY(1rem);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
```

**Solution Implemented:**

```css
/* AFTER - Opacity-only animations (compositor layer) */
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

**Impact:**

- Animations run on compositor thread
- No forced reflow from transform calculations
- Reduced animation duration (700ms → 400ms)

---

### Issue 4: Unused Tailwind Utilities (Minor)

**Problem:**  
Custom animation utilities defined in `tailwind.config.ts` weren't being used.

**Solution Implemented:**

- Removed unused `keyframes` and `animation` config
- Moved critical animations to `globals.css`
- Smaller CSS bundle output

---

## 📁 Files Modified

| File                      | Changes                                                |
| ------------------------- | ------------------------------------------------------ |
| `src/app/layout.tsx`      | Removed Playfair font, added dns-prefetch              |
| `src/app/globals.css`     | Simplified animations to opacity-only                  |
| `src/components/Hero.tsx` | Removed animation delays from LCP                      |
| `tailwind.config.ts`      | Removed unused animation config, system serif for logo |
| `next.config.js`          | Added modularizeImports config                         |

---

## ✅ Verification Checklist

After deployment, verify these metrics in Lighthouse Mobile:

- [ ] LCP < 2.5s (Green)
- [ ] FCP < 1.8s (Green)
- [ ] CLS < 0.1 (Green)
- [ ] TBT < 200ms (Green)
- [ ] Overall Mobile Score ≥ 90

### How to Test

1. Build production:

   ```bash
   npm run build
   ```

2. Test locally:

   ```bash
   npx serve out
   ```

3. Run Lighthouse:
   - Open Chrome DevTools → Lighthouse
   - Select "Mobile" preset
   - Run audit on production URL

---

## 🚀 Additional Optimization Opportunities

### If Score < 90, Consider:

1. **Self-host fonts** (eliminate Google Fonts entirely)

   - Download subset of Inter + Be Vietnam Pro
   - Place in `/public/fonts/`
   - Use `@font-face` in CSS

2. **Image optimization**

   - Convert demo screenshots to WebP/AVIF
   - Add `loading="lazy"` to below-fold images
   - Use responsive `srcset`

3. **Code splitting**

   - Dynamic import sections below fold:
     ```jsx
     const Faq = dynamic(() => import("./Faq"), { ssr: false });
     ```

4. **Critical CSS extraction**
   - Inline above-fold CSS in `<head>`
   - Defer non-critical stylesheets

---

## 📈 Metrics Tracking

Track these metrics on each deploy:

| Date   | Lighthouse Mobile | LCP  | FCP | CLS |
| ------ | ----------------- | ---- | --- | --- |
| Before | ~70               | 6.0s | -   | -   |
| After  | TBD               | TBD  | TBD | TBD |

---

_Generated by Claude Opus 4.5 performance audit_
