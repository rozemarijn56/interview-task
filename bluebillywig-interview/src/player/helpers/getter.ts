
export class PlayerGetters {
  constructor(private wrapper: PlayerAPIWrapper) {}

// -----------------------
// Getters
// -----------------------
  
  getLocalStorageItem(key: string): any {
    try {
      return this.player.getLocalStorageItem(key);
    } catch (err) {
      console.error('Error getting localStorage item:', err);
      return null;
    }
  }

  getLogo(): Logo | null {
    try {
      return this.player.getLogo();
    } catch (err) {
      console.error('Error getting logo:', err);
      return null;
    }
  }

  getMode(): string {
    try {
      return this.player.getMode();
    } catch (err) {
      console.error('Error getting mode:', err);
      return 'unknown';
    }
  }

  getMuted(): boolean {
    try {
      return this.player.getMuted();
    } catch (err) {
      console.error('Error getting muted state:', err);
      return false;
    }
  }

  getPhase(): string {
    try {
      return this.player.getPhase();
    } catch (err) {
      console.error('Error getting phase:', err);
      return 'unknown';
    }
  }

  isPlaying(): boolean {
    try {
      return this.player.isPlaying();
    } catch (err) {
      console.error('Error checking playing state:', err);
      return false;
    }
  }

  getPlayoutData(): any {
    try {
      return this.player.getPlayoutData();
    } catch (err) {
      console.error('Error getting playout data:', err);
      return null;
    }
  }

  getProjectData(): any {
    try {
      return this.player.getProjectData();
    } catch (err) {
      console.error('Error getting project data:', err);
      return null;
    }
  }

  getRelatedClips(): RelatedClip[] {
    try {
      return this.player.getRelatedClips() || [];
    } catch (err) {
      console.error('Error getting related clips:', err);
      return [];
    }
  }

  getSharing(): any[] {
    try {
      return this.player.getSharing() || [];
    } catch (err) {
      console.error('Error getting sharing data:', err);
      return [];
    }
  }

  getSkinLayer(): HTMLElement | null {
    try {
      return this.player.getSkinLayer();
    } catch (err) {
      console.error('Error getting skin layer:', err);
      return null;
    }
  }

  getSubtitleLayer(): HTMLElement | null {
    try {
      return this.player.getSubtitleLayer();
    } catch (err) {
      console.error('Error getting subtitle layer:', err);
      return null;
    }
  }

  getSubtitlesList(): Subtitle[] {
    try {
      return this.player.getSubtitlesList() || [];
    } catch (err) {
      console.error('Error getting subtitles list:', err);
      return [];
    }
  }

  getThumbnail(clipId: number, width?: number, height?: number): string | null {
    try {
      return this.player.getThumbnail(clipId, width, height);
    } catch (err) {
      console.error('Error getting thumbnail:', err);
      return null;
    }
  }

  getVolume(): number {
    try {
      return this.player.getVolume();
    } catch (err) {
      console.error('Error getting volume:', err);
      return 0;
    }
  }

  getWrapper(): HTMLElement | null {
    try {
      return this.player.getWrapper();
    } catch (err) {
      console.error('Error getting wrapper:', err);
      return null;
    }
  }

}