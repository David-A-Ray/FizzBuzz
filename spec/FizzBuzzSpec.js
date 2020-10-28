describe("My fizzBuzz function", function() {
    beforeEach(function() {
        num = new fizzBuzz();
    });

    describe("Checks integer", function() {
        it("shoud exsist", function() {
            expect(fizzBuzz).toBeDefined();
        });
    
        it("should return fizz when called as fizzBuzz(6)", function() {
            var result = fizzBuzz(6)
            expect(result).toBe("Fizz");
        });
        it("should return Buzz when called as fizzBuzz(10)", function() {
            var result = fizzBuzz(10)
            expect(result).toBe("Buzz");
        });
        it("should return FizzBuzz when called as fizzBuzz(15)", function() {
            var result = fizzBuzz(15)
            expect(result).toBe("FizzBuzz");
        });
        it("should return 19 when called as fizzBuzz(19)", function() {
            var result = fizzBuzz(19)
            expect(result).toBe(19);
        });
        it(`should return not a number when called as fizzBuzz("ooops")`, function() {
            var result = fizzBuzz("ooops")
            expect(result).toBe("Not a number");
        });
    })
})