 // -----------------------
  // Setters
  // -----------------------
  setVolume(volume: number): boolean {
    try {
      return this.player.setVolume(volume);
    } catch (err) {
      console.error('Error setting volume:', err);
      return false;
    }
  }

  setMuted(muted: boolean, userAction = true): boolean {
    try {
      return this.player.setMuted(muted, undefined, userAction);
    } catch (err) {
      console.error('Error muting/unmuting video:', err);
      return false;
    }
  }

  setFitMode(fitMode: FitMode): boolean {
    try {
      return this.player.setFitMode(fitMode);
    } catch (err) {
      console.error('Error setting fit mode:', err);
      return false;
    }
  }