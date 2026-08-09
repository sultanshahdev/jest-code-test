import capitalize from './capitalize.js';

// Test 1 : Given an empty String Should Return An Empty String;
test('Empty String Should Be Empty',()=>
    {
        expect(capitalize('')).toBe('');
    })
test('Given A Capitalize Letter (A) Should return Capital A ',()=>
    {
        expect(capitalize('A')).toBe('A');

    })

test('Given A Capital Letter (B) Should return Capital B',()=>
    {
        expect(capitalize('B')).toBe('B');
    })

test('Give a non-capital letter should give a capital letter',()=>
    {
        expect(capitalize('a')).toBe('A');
    });

test('Given a Word with a starting capital letter should return the same word',()=>
    {
        expect(capitalize('Apple')).toBe('Apple');
    })

test('Given a Word with a starting capital letter should return the same word',()=>
    {
        expect(capitalize('ManGsNso')).toBe('ManGsNso');
    })

test('Given a Word with a starting non capital letter should return the word with a starting Capital letter',()=>
    {
        expect(capitalize('wow')).toBe('Wow')
    });
    test('Given a Word with a starting non capital letter should return the word with a starting Capital letter',()=>
    {
        expect(capitalize('hELLO')).toBe('HELLO')
    });