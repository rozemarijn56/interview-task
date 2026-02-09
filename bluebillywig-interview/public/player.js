(function () {
  const root = document.querySelector('[data-post-id]');
  if (!root) return;

  const postId = Number(root.getAttribute('data-post-id'));
  const mediaclipId = root.getAttribute('data-mediaclip-id');

  const params = new URLSearchParams(window.location.search);
  const fromQuery = params.get('user');
  if (fromQuery) localStorage.setItem('user_id', fromQuery);
  const userId = fromQuery || localStorage.getItem('user_id');
  const canTrack = !!userId;

  if (!mediaclipId) return;

  const player = window.bluebillywig?.('bbv-player', { mediaclip: mediaclipId, playout: 'default' });
  if (!player) {
    console.warn('BBV player not available. Check player.js load.');
    return;
  }

  let sent40 = false;
  let sentFinished = false;

  function postEvent(event, extra) {
    if (!canTrack) return;

    const url =
      event === 'watched40'
        ? `/user/${userId}/watched40`
        : `/user/${userId}/finished`;

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        postId,
        mediaclipId,
        event,
        timestamp: new Date().toISOString(),
        ...extra,
      }),
    })
      .then((r) => r.json())
      .then(console.log)
      .catch(console.error);
  }

  player.on('timeupdate', (data) => {
    const currentTime = data?.currentTime ?? 0;
    const duration = data?.duration ?? 0;
    if (!duration) return;

    const ratio = currentTime / duration;
    if (!sent40 && ratio >= 0.4) {
      sent40 = true;
      postEvent('watched40', { progress: 0.4 });
    }
  });

  player.on('ended', () => {
    if (!sentFinished) {
      sentFinished = true;
      postEvent('finished');
    }
  });
})();
