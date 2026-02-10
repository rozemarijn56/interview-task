import { PlayerAPIWrapper } from "../player-api-wrapper";

export class PlayerGetters {
  constructor(private player: PlayerAPIWrapper) {}

  // -----------------------
  // Getters
  // -----------------------

  getMode() {
    return this.player['player'].getMode();
  }

  getPhase() {
    return this.player['player'].getPhase();
  }

  getState() {
    return this.player['player'].getState();
  }

  getVolume() {
    return this.player['player'].getVolume();
  }

  getMuted() {
    return this.player['player'].getMuted();
  }

  getCurrentTime() {
    return this.player['player'].getCurrentTime();
  }

  getClipData() {
    return this.player['player'].getClipData();
  }

  getPlayoutData() {
    return this.player['player'].getPlayoutData();
  }

  getProjectData() {
    return this.player['player'].getProjectData();
  }

  getRelatedClips() {
    return this.player['player'].getRelatedClips();
  }

  getThumbnail(clipId: number, width?: number, height?: number) {
    return this.player['player'].getThumbnail(clipId, width, height);
  }

  getWrapper() {
    return this.player['player'].getWrapper();
  }
}
