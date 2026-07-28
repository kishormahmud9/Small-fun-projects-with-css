/**
 * buildPreviewDoc — generates a self-contained HTML document for iframe preview.
 *
 * Features:
 * - Dark themed canvas that matches the platform
 * - Smart auto-scaling: content scales to fit the preview container
 * - CSS reset so project styles don't inherit browser defaults
 * - Error boundary via try/catch wrapper on JS
 */
export function buildPreviewDoc(html: string, css: string, js?: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    /* ── Hard Reset ─────────────────────────────────────── */
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      height: 100%;
      width: 100%;
      overflow: hidden;
      font-size: 16px;
    }

    body {
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color: #09090b;
      color: #f4f4f5;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      -webkit-font-smoothing: antialiased;
    }

    /* ── Stage: centers content and auto-scales to fit ──── */
    #preview-stage {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      padding: 16px;
    }

    /* ── Inner scaler: wraps the user's project content ─── */
    #preview-content {
      max-width: 100%;
      max-height: 100%;
      overflow: visible;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 8px;
    }

    /* ── User CSS ───────────────────────────────────────── */
    ${css}
  </style>
</head>
<body>
  <div id="preview-stage">
    <div id="preview-content">
      ${html}
    </div>
  </div>
  <script>
    // Auto-scale preview-content to fill the stage without overflow
    (function() {
      function scaleContent() {
        var stage = document.getElementById('preview-stage');
        var content = document.getElementById('preview-content');
        if (!stage || !content) return;

        // Reset transform first to measure natural size
        content.style.transform = '';
        content.style.transformOrigin = 'center center';

        var stageW = stage.clientWidth - 32;
        var stageH = stage.clientHeight - 32;
        var contentW = content.scrollWidth;
        var contentH = content.scrollHeight;

        if (contentW <= 0 || contentH <= 0) return;

        var scaleX = stageW / contentW;
        var scaleY = stageH / contentH;
        var scale = Math.min(scaleX, scaleY, 1); // never upscale beyond 1

        if (scale < 0.98) {
          content.style.transform = 'scale(' + scale + ')';
        }
      }

      // Run after layout
      window.addEventListener('load', scaleContent);
      document.addEventListener('DOMContentLoaded', scaleContent);
      setTimeout(scaleContent, 200);
      setTimeout(scaleContent, 600);
    })();
  </script>
  ${js ? `<script>\ntry {\n${js}\n} catch(e) { console.error("Preview runtime error:", e); }\n</script>` : ""}
</body>
</html>`;
}

/**
 * buildFullDoc — generates a complete standalone HTML file for download.
 * Unlike buildPreviewDoc, this has no scaling wrappers and renders at natural size.
 */
export function buildFullDoc(html: string, css: string, js?: string, title?: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title || "CSS Experiment"}</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 0;
      background: #09090b;
      color: #f4f4f5;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    ${css}
  </style>
</head>
<body>
  ${html}
  ${js ? `<script>\n${js}\n</script>` : ""}
</body>
</html>`;
}
