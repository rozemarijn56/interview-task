export type JsonPlaceHolderPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type WatchEventPlayload = {
  postId: number;
  mediaclipId: string;
  event: 'watched40' | 'finished';
  timestamp: string;
  progress?: number;
};
