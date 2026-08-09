import calculator from './calculator.js';

test('add() should thow an error if there is no parameters given',()=>
{
    expect(()=>{calculator.add()}).toThrow(Error);
});