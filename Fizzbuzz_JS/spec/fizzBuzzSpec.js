describe('FizzBuzz', function() {

    var fizzBuzz;
  
    beforeEach(function() {
      fizzBuzz = new FizzBuzz();
    });

    describe('multiples of 3', function() {
        it('fizzes for 3', function() {
          expect(fizzBuzz.prints(3)).toEqual('Fizz');
        });
    
        it('fizzes for 6', function() {
          expect(fizzBuzz.prints(6)).toEqual('Fizz');
        });
      });
    
      describe('multiples of 5', function() {
        it('buzzes for 5', function() {
          expect(fizzBuzz.prints(5)).toEqual('Buzz');
        });
    
        it('buzzes for 10', function() {
          expect(fizzBuzz.prints(10)).toEqual('Buzz');
        });
      });
    
      describe('multiples of 3 and 5', function() {
        it('fizzbuzzes for 15', function() {
          expect(fizzBuzz.prints(15)).toEqual('FizzBuzz');
        });
    
        it('fizzbuzzes for 30', function() {
          expect(fizzBuzz.prints(30)).toEqual('FizzBuzz');
        });
      });
    
      describe('all other numbers', function() {
        it('1 for 1', function() {
          expect(fizzBuzz.prints(1)).toEqual(1);
        });
    
        it('11 for 11', function() {
          expect(fizzBuzz.prints(11)).toEqual(11);
        });
      });
    });