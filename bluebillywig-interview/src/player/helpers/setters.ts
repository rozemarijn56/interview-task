import { FitMode } from "src/Shared/Types/fit-mode.types";

export class PlayerSetters {
  constructor(private readonly player: any) {}

  setVolume(volume: number): boolean {
    return this.safeExecute(
      () => this.player.setVolume(volume),
      'setting volume'
    );
  }

  setMuted(muted: boolean, userAction = true): boolean {
    return this.safeExecute(
      () => this.player.setMuted(muted, undefined, userAction),
      'muting/unmuting video'
    );
  }

  setFitMode(fitMode: FitMode): boolean {
    return this.safeExecute(
      () => this.player.setFitMode(fitMode),
      'setting fit mode'
    );
  }

  // -----------------------
  // Internal helper
  // -----------------------
  private safeExecute(action: () => boolean, context: string): boolean {
    try {
      return action();
    } catch (err) {
      console.error(`Error ${context}:`, err);
      return false;
    }
  }
}