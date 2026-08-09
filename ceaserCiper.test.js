import ceaserCipher from './ceaserCiper.js'

test('should return empty on a empty string',()=>
{
    expect(ceaserCipher('')).toBe('');
})

test('should a cipher text of a single letter',()=>
{
    expect(ceaserCipher('Z',3)).toBe('C');
})


test('should a cipher text of a single letter',()=>
{
    expect(ceaserCipher('C',3)).toBe('F');
})

test('should a cipher text of a single letter should rotate after z to a',()=>
{
    expect(ceaserCipher('Z',1)).toBe('A');
})

test('should a cipher text of a single letter should rotate after z to a',()=>
{
    expect(ceaserCipher('Y',3)).toBe('B');
})

test('cipher text of a single small letter',()=>
{
    expect(ceaserCipher('a',3)).toBe('d');
})


test('cipher text of a single small letter',()=>
{
    expect(ceaserCipher('e',6)).toBe('k');
})
test('cipher of a large lettered word',()=>
{
    expect(ceaserCipher('HELLO',1)).toBe('IFMMP');
})


test('cipher of a small lettered word',()=>
{
    expect(ceaserCipher('way',4)).toBe('aec');
})



test('cipher of a mixed(small and large) lettered word',()=>
{
    expect(ceaserCipher('wOw',2)).toBe('yQy');
})

test('cipher of a mixed(small and large) lettered word',()=>
{
    expect(ceaserCipher('ZzZz',2)).toBe('BbBb');
})




test('cipher of a mixed(small and large) lettered multiple words',()=>
{
    expect(ceaserCipher('ZzZz aAaA',2)).toBe('BbBb cCcC');
})


test('cipher of a mixed(small and large) lettered multiple words',()=>
{
    expect(ceaserCipher('Hello Iam Sultan',2)).toBe('Jgnnq Kco Uwnvcp');
})


test('cipher of a mixed(small and large) lettered multiple words and punctuations ',()=>
{
    expect(ceaserCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})




