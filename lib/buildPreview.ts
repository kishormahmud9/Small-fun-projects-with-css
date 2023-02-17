export function buildPreviewDoc(html: string, css: string, js?: string) {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<style>
  html, body {
    margin: 0;
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0d1220;
    font-family: 'Inter', system-ui, sans-serif;
    color: #eef1f8;
  }
  ${css}
</style>
</head>
<body>
${html}
<script>${js ?? ""}</script>
</body>
</html>`;
}
