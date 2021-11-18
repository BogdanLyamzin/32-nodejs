/*
1. Получает год - целое положительное число от 42 и больше
2. Если год высокосный (в году 366 дней, в феврале 29) - возвращает true,
в противном случае - false.
3. Если в функцию приходит неподходящие данные, функция выбрасывает соотвествующую
ошибку.

Высокоснсый год:
- делится без остатка на 4;
- не делится без остатка на 100;
- но может без остатка делится на 400;

2008 - true
2003 - false
2000 - true
1900 - false

() - ошибка 'year must be exist'
41 - ошибка 'year must be more than 41'
2000.4 - ошибка 'year must be Integer'

"2008" - ошибка 'year must be number'
null - ошибка 'year must be number'
true - ошибка 'year must be number'
false - ошибка 'year must be number'
()=>{} - ошибка 'year must be number'
[] - ошибка 'year must be number'
{} - ошибка 'year must be number'
*/

const isLeapYear = require("./isLeapYear");

describe("test isLeapYear function", ()=> {
    beforeAll(()=> console.log("Before all tests"));
    beforeEach(()=> console.log("Before each test"));
    afterAll(()=> console.log("After all tests"));
    afterEach(()=> console.log("After each test"));

    test("2008 - true", ()=> {
        const result = isLeapYear(2008);
        expect(result).toBe(true); // result === true
    });

    test("2003 - false", ()=> {
        expect(isLeapYear(2003)).toBe(false);
    });

    it("2000 - true", ()=> {
        expect(isLeapYear(2000)).toBe(true);
    });

    test("1900 - false", ()=> {
        expect(isLeapYear(1900)).toBe(false);
    });

    test(" - error 'year must be exist'", ()=> {
        expect(()=> isLeapYear()).toThrow('year must be exist');
    });

    test("41 - error 'year must be more than 41'", ()=> {
        expect(()=> isLeapYear(41)).toThrow('year must be more than 41');
    });

    test("2000.4 - error 'year must be Integer'", ()=> {
        expect(()=> isLeapYear(2000.4)).toThrow('year must be Integer');
    });

    test("'2008' - error 'year must be number'", ()=> {
        expect(()=> isLeapYear('2008')).toThrow('year must be number');
    });

    test("null - error 'year must be number'", ()=> {
        expect(()=> isLeapYear(null)).toThrow('year must be number');
    });

    test("false - error 'year must be number'", ()=> {
        expect(()=> isLeapYear(false)).toThrow('year must be number');
    });

    test("true - error 'year must be number'", ()=> {
        expect(()=> isLeapYear(true)).toThrow('year must be number');
    });

    test("()=>{} - error 'year must be number'", ()=> {
        expect(()=> isLeapYear(()=>{})).toThrow('year must be number');
    });

    test("[] - error 'year must be number'", ()=> {
        expect(()=> isLeapYear([])).toThrow('year must be number');
    });

    test("{} - error 'year must be number'", ()=> {
        expect(()=> isLeapYear({})).toThrow('year must be number');
    });

});

