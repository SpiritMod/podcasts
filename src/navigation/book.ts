interface IBook {
  [key: string]: string;
}

export const book: IBook = {
  'root': '/',
  'podcast': '/podcast/:slug',
  'episode': '/podcast/:slug/episode/:id',
  'notFound': '/404'
};
