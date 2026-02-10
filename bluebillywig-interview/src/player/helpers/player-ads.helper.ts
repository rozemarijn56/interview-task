export class PlayerAdsHelper {
  constructor(private player: PlayerAPIWrapper) {}

  onAdStarted(callback: () => void) {
    this.player.on('adstarted', callback);
  }

  onAdQuartile(quartile: 1 | 2 | 3, callback: () => void) {
    const events = ['adquartile1', 'adquartile2', 'adquartile3'] as const;
    this.player.on(events[quartile - 1], callback);
  }

  onAdFinished(callback: () => void) {
    this.player.on('adfinished', callback);
  }
}
