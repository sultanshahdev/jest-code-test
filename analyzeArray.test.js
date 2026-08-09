import analyzeArray from './analyzeArray.js';


test('and empty arry should have all the fields of returning object to be empty aswell',()=>
{
    let testArray=[];
    let expectedObj = {
        average: 0,
        min: 0,
        max: 0,
        length: 0

    }
    expect(analyzeArray(testArray)).toStrictEqual(expectedObj);

});

test('and arry with single element should have all the fields of returning object to be the element and length of 1',()=>
{
    let testArray=[5];
    let expectedObj = {
        average: 5,
        min: 5,
        max: 5,
        length: 1

    }
    expect(analyzeArray(testArray)).toStrictEqual(expectedObj);

});

test('and arry with single element should have all the fields of returning object to be the element and length of 1',()=>
{
    let testArray=[22];
    let expectedObj = {
        average: 22,
        min: 22,
        max: 22,
        length: 1

    }
    expect(analyzeArray(testArray)).toStrictEqual(expectedObj);

});

test('and arry with two element ',()=>
{
    let testArray=[22,11];
    let expectedObj = {
        average: 16.5,
        min: 11,
        max: 22,
        length: 2

    }
    expect(analyzeArray(testArray)).toEqual(expectedObj);

});

test('and arry with two element ',()=>
{
    let testArray=[88,21];
    let expectedObj = {
        average: 54.5,
        min: 21,
        max: 88,
        length: 2

    }
    expect(analyzeArray(testArray)).toEqual(expectedObj);

});

test('an arry with three elements ',()=>
{
    let testArray=[1,2,3];
    let expectedObj = {
        average: 2,
        min: 1,
        max: 3,
        length: 3

    }
    expect(analyzeArray(testArray)).toEqual(expectedObj);

});


test('an arry with three elements ',()=>
{
    let testArray=[1,0,89];
    let expectedObj = {
        average:30,
        min: 0,
        max: 89,
        length: 3

    }
    expect(analyzeArray(testArray)).toEqual(expectedObj);

});


test('an arry with n elements ',()=>
{
    let testArray=[9,3,1,2,3,4,2,1,2,3,4,2];
    let expectedObj = {
        average:3,
        min: 1,
        max: 9,
        length: 12

    }
    expect(analyzeArray(testArray)).toEqual(expectedObj);

});