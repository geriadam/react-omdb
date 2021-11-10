import MovieItem from './MovieItem';

describe('MovieItem', () => {
  describe('poster exists', () => {
    const movie = { Title: 'star wars', Poster: 'star wars poster', Year: '1999', imdbRating: '5/5' };
    let returnValue;
    beforeEach(() => {
      returnValue = MovieItem({ movie });
    });
    it('should create the MovieItem component', () => {
      expect(returnValue).toMatchSnapshot();
    });
  });
  describe('poster does not exist', () => {
    const movie = { Title: 'star wars', Poster: 'N/A', Year: '1999', imdbRating: '5/5' };
    let returnValue;
    beforeEach(() => {
      returnValue = MovieItem({ movie });
    });
    it('should create the MovieItem component', () => {
      expect(returnValue).toMatchSnapshot();
    });
  });
});
