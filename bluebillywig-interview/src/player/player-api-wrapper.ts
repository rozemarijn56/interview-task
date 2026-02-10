// src/player/player-api-wrapper.ts
import type { 
    PlayerMode,
    PlayerPhase,
    PlayerState, 
    PlayerEvent  } from '../Shared/player-types';
import 


export class PlayerAPIWrapper {
  private player: any;

  constructor(playerInstance: any) {
    if (!playerInstance) throw new Error('Player instance is required');
    this.player = playerInstance;
  }

  // -----------------------
  // Transport
  // -----------------------
  play(userAction = true): boolean {
    try {
      return this.player.play(userAction);
    } catch (err) {
      console.error('Error playing video:', err);
      return false;
    }
  }

  pause(): boolean {
    try {
      return this.player.pause();
    } catch (err) {
      console.error('Error pausing video:', err);
      return false;
    }
  }

  seek(positionInSeconds: number): boolean {
    try {
      return this.player.seek(positionInSeconds);
    } catch (err) {
      console.error('Error seeking video:', err);
      return false;
    }
  }

  load(params: LoadParams): void {
    try {
      this.player.load(params);
    } catch (err) {
      console.error('Error loading video:', err);
    }
  }
  // -----------------------
  // Interface methods
  // -----------------------
  showInterfaceElement(elementName: string): void {
    try {
      this.player.showInterfaceElement(elementName);
    } catch (err) {
      console.error(`Error showing interface element ${elementName}:`, err);
    }
  }

  hideInterfaceElement(elementName: string): void {
    try {
      this.player.hideInterfaceElement(elementName);
    } catch (err) {
      console.error(`Error hiding interface element ${elementName}:`, err);
    }
  }

  enableInterfaceElement(elementName: string): void {
    try {
      this.player.enableInterfaceElement(elementName);
    } catch (err) {
      console.error(`Error enabling interface element ${elementName}:`, err);
    }
  }

  disableInterfaceElement(elementName: string): void {
    try {
      this.player.disableInterfaceElement(elementName);
    } catch (err) {
      console.error(`Error disabling interface element ${elementName}:`, err);
    }
  }

  showCastTargetPicker(type: 'AirPlay' | 'ChromeCast' = 'AirPlay'): void {
    try {
      this.player.showCastTargetPicker(type);
    } catch (err) {
      console.error('Error showing cast target picker:', err);
    }
  }

  // -----------------------
  // Miscellaneous
  // -----------------------
  fullscreen(): void {
    try {
      this.player.fullscreen();
    } catch (err) {
      console.error('Error entering fullscreen:', err);
    }
  }

  retractFullscreen(): void {
    try {
      this.player.retractFullscreen();
    } catch (err) {
      console.error('Error exiting fullscreen:', err);
    }
  }

  toggleFullscreen(): void {
    try {
      this.player.toggleFullscreen();
    } catch (err) {
      console.error('Error toggling fullscreen:', err);
    }
  }

  playAdTag(params: {
    vastUrl?: string;
    vastXml?: string;
    phase?: 'PRE' | 'MAIN' | 'POST';
    time?: number;
  }): boolean {
    try {
      return this.player.playAdTag(params);
    } catch (err) {
      console.error('Error playing ad tag:', err);
      return false;
    }
  }

  destruct(): void {
    try {
      this.player.destruct();
    } catch (err) {
      console.error('Error destructing player:', err);
    }
  }

  // -----------------------
  // Event handling
  // -----------------------
  on(eventType: string, handler: (...args: any[]) => void): void {
    try {
      this.player.on(eventType, handler);
    } catch (err) {
      console.error(`Error attaching handler for ${eventType}:`, err);
    }
  }

  off(eventType: string): void {
    try {
      this.player.off(eventType);
    } catch (err) {
      console.error(`Error detaching handler for ${eventType}:`, err);
    }
  }
}
