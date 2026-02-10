export type PlayerMode =
  | 'static'
  | 'commercial'
  | 'audio'
  | 'video'
  | 'live-audio'
  | 'live-video';

export type PlayerPhase = 'INIT' | 'PRE' | 'MAIN' | 'POST' | 'EXIT';
export type PlayerState = 'playing' | 'paused' | 'error' | 'loading';

export type MediaEvent =
  | 'load' | 'loadeddata' | 'loadedmetadata' | 'canplay' | 'play' | 'pause'
  | 'playing' | 'seeking' | 'seeked' | 'ended' | 'started' | 'timeupdate'
  | 'stalled' | 'unstalled' | 'progress' | 'error' | 'aderror' | 'adnotfound';

export type DataEvent =
  | 'loadedplayoutdata' | 'changedplayoutdata' | 'loadedclipdata'
  | 'loadedprojectdata' | 'chapterlistchange' | 'relatedclipschange'
  | 'assetlistchange' | 'audiotracklistchange' | 'durationchange';

export type StateEvent =
  | 'modechange' | 'statechange' | 'phasechange' | 'flagchange';

export type AdEvent =
  | 'adstarted' | 'adquartile1' | 'adquartile2' | 'adquartile3' | 'adfinished';

export type AutoplayNextEvent =
  | 'autoplaynexttimerstarted' | 'autoplaynexttimercancelled' | 'autoplaynexttimertick'
  | 'autoplaynexttimerfinished' | 'autoplaynexttimerpaused' | 'autoplaynexttimerresumed';

export type GeneralEvent =
  | 'ready' | 'assetselected' | 'audiotrackchange' | 'volumechange'
  | 'subtitlechange' | 'subtitlelinechange' | 'resized' | 'inview'
  | 'outview' | 'fullscreen' | 'retractfullscreen' | 'floatstart' | 'floatend';

export type PlayerEvent =
  | MediaEvent
  | DataEvent
  | StateEvent
  | AdEvent
  | AutoplayNextEvent
  | GeneralEvent;