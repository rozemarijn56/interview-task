<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Post ${post.id}</title>

  <link rel="stylesheet" href="/public/styles.css" />
  <script src="https://cdn.bluebillywig.com/apps/player/latest/player.js"></script>
</head>
<body>
  <main data-post-id="${post.id}" ${mediaclipId ? `data-mediaclip-id="${mediaclipId}"` : ''}>
    <h1>${this.escapeHtml(post.title)}</h1>
    <p>${this.escapeHtml(post.body)}</p>
    <p class="meta">Post ID: ${post.id}</p>

    
    ${mediaclipId ? `
      <div class="player">
        <div id="bbv-player"></div>
      </div>
      <script src="/public/player.js" defer></script>
    ` : `
      <p><strong>No video mapping found for this post.</strong></p>
    `}
  </main>
</body>
</html>