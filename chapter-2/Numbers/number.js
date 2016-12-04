//decelration
var intLiteral = 6;
var constructorInt = new Number("6");


// Decimal Numbers
1234567890
//care with leading 0's 
0777 // this will be parsed as an octal Number

//You can even create binary Numbers
var FLT_SIGNBIT  = 0b10000000000000000000000000000000; // 2147483648
var FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040
var FLT_MANTISSA = 0B00000000011111111111111111111111; // 8388607

// Hexadecimal Numbers
0xFFFFFFFFFFFFFFFFF // 295147905179352830000
0x123456789ABCDEF   // 81985529216486900
0XA                 // 10

// Number properties
var biggestNum = Number.MAX_VALUE;
var smallestNum = Number.MIN_VALUE;
var infiniteNum = Number.POSITIVE_INFINITY;
var negInfiniteNum = Number.NEGATIVE_INFINITY;
var notANum = Number.NaN;


//Conversion methods

Number.parseFloat();

Number.parseInt();

Number.isFinite();

Number.isNaN();

Number.toExponential();

Number.toFixed(2);

Number.toPrecision();