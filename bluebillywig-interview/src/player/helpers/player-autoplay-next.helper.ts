export class PlayerAutoplayNextHelper {
  constructor(private player: PlayerAPIWrapper) {}

  onTimerStarted(callback: () => void) {
    this.player.on('autoplaynexttimerstarted', callback);
  }

  onTimerTick(callback: () => void) {
    this.player.on('autoplaynexttimertick', callback);
  }

  onTimerFinished(callback: () => void) {
    this.player.on('autoplaynexttimerfinished', callback);
  }

  onTimerPaused(callback: () => void) {
    this.player.on('autoplaynexttimerpaused', callback);
  }

  onTimerResumed(callback: () => void) {
    this.player.on('autoplaynexttimerresumed', callback);
  }

  onTimerCancelled(callback: () => void) {
    this.player.on('autoplaynexttimercancelled', callback);
  }
}