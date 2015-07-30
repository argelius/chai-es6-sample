let chai = require('chai'),
  path = require('path');

chai.should();

let Rectangle = require(path.join(__dirname, '..', 'rectangle'));

describe('Rectangle', () => {
  describe('#constructor()', () => {
    it('requires two numerical arguments', () => {
      () => {
        new Rectangle();
      }.should.throw(Error);

      () => {
        new Rectangle(1.0);
      }.should.throw(Error);

      () => {
        new Rectangle('foo', 'bar');
      }.should.throw(Error);

      () => {
        new Rectangle(5, 7);
      }.should.not.throw(Error);
    });
  });

  describe('#width', () => {
    let rectangle;

    beforeEach(() => {
      rectangle = new Rectangle(10, 20);
    });

    it('returns the width', () => {
      rectangle.width.should.equal(10);
    });

    it('can be changed', () => {
      rectangle.width = 30;
      rectangle.width.should.equal(30);
    });

    it('only accepts numerical values', () => {
      () => {
        rectangle.width = 'foo';
      }.should.throw(Error);
    });
  });

  describe('#height', () => {
    let rectangle;

    beforeEach(() => {
      rectangle = new Rectangle(10, 20);
    });

    it('returns the height', () => {
      rectangle.height.should.equal(20);
    });

    it('can be changed', () => {
      rectangle.height = 30;
      rectangle.height.should.equal(30);
    });

    it('only accepts numerical values', () => {
      () => {
        rectangle.height = 'foo';
      }.should.throw(Error);
    });
  });

  describe('#area', () => {
    let rectangle;

    beforeEach(() => {
      rectangle = new Rectangle(10, 20);
    });

    it('returns the area', () => {
      rectangle.area.should.equal(200);
    });

    it('can not be changed', () => {
      () => {
        rectangle.area = 1000;
      }.should.throw(Error);
    });
  });

  describe('#circumference', () => {
    let rectangle;

    beforeEach(() => {
      rectangle = new Rectangle(10, 20);
    });

    it('returns the circumference', () => {
      rectangle.circumference.should.equal(60);
    });

    it('can not be changed', () => {
      () => {
        rectangle.circumference = 1000;
      }.should.throw(Error);
    });
  });
});
