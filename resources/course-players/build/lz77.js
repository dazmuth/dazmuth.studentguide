
/*
 * The MIT License
 *
 * Copyright (c) 2009 Olle Törnström studiomediatech.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * CREDIT: Initially implemented by Diogo Kollross and made publicly available
 *         on the website http://www.geocities.com/diogok_br/lz77.
 */

/**
 * This class provides simple LZ77 compression and decompression.
 * It is uses ASCII table characters range 32-127 by default
 *
 * @author Olle Törnström olle[at]studiomediatech[dot]com
 * @created 2009-02-18
 */
(Compressor = function (settings) {

    settings = settings || {};

    var referencePrefix = "`",
        referenceIntBase = settings.referenceIntBase || 96,
        referenceIntFloorCode = " ".charCodeAt(0),
        referenceIntCeilCode = referenceIntFloorCode + referenceIntBase - 1,
        maxStringDistance = Math.pow(referenceIntBase, 2) - 1,
        minStringLength = settings.minStringLength || 5,
        maxStringLength = Math.pow(referenceIntBase, 1) - 1 + minStringLength,
        defaultWindowLength = settings.defaultWindowLength || 144,
        maxWindowLength = maxStringDistance + minStringLength;

    function encodeReferenceInt(value, width) {
        if ((value >= 0) && (value < (Math.pow(referenceIntBase, width) - 1))) {
            var encoded = "";
            while (value > 0) {
                encoded = (String.fromCharCode((value % referenceIntBase) + referenceIntFloorCode)) + encoded;
                value = Math.floor(value / referenceIntBase);
            }
            var missingLength = width - encoded.length;
            for (var i = 0; i < missingLength; i++) {
                encoded = String.fromCharCode(referenceIntFloorCode) + encoded;
            }
            return encoded;
        } else {
            throw "Reference int out of range: " + value + " (width = " + width + ")";
        }
    };

    function encodeReferenceLength(length) {
        return encodeReferenceInt(length - minStringLength, 1);
    };

    function decodeReferenceInt(data, width) {
        var value = 0;
        for (var i = 0; i < width; i++) {
            value *= referenceIntBase;
            var charCode = data.charCodeAt(i);
            if ((charCode >= referenceIntFloorCode) && (charCode <= referenceIntCeilCode)) {
                value += charCode - referenceIntFloorCode;
            } else {
                throw "Invalid char code in reference int: " + charCode;
            }
        }
        return value;
    };

    function decodeReferenceLength(data) {
        return decodeReferenceInt(data, 1) + minStringLength;
    };

    // compress/decompress using lz77 algorithm
    function compress(data, windowLength) {
        windowLength = windowLength || defaultWindowLength;
        if (windowLength > maxWindowLength) {
            throw "Window length too large";
        }
        var compressed = "";
        var pos = 0;
        var lastPos = data.length - minStringLength;
        while (pos < lastPos) {
            var searchStart = Math.max(pos - windowLength, 0);
            var matchLength = minStringLength;
            var foundMatch = false;
            var bestMatch = {distance:maxStringDistance, length:0};
            var newCompressed = null;
            while ((searchStart + matchLength) < pos) {
                var isValidMatch = ((data.substr(searchStart, matchLength) == data.substr(pos, matchLength)) && (matchLength < maxStringLength));
                if (isValidMatch) {
                    matchLength++;
                    foundMatch = true;
                } else {
                    var realMatchLength = matchLength - 1;
                    if (foundMatch && (realMatchLength > bestMatch.length)) {
                        bestMatch.distance = pos - searchStart - realMatchLength;
                        bestMatch.length = realMatchLength;
                    }
                    matchLength = minStringLength;
                    searchStart++;
                    foundMatch = false;
                }
            }
            if (bestMatch.length) {
                newCompressed = referencePrefix + encodeReferenceInt(bestMatch.distance, 2) + encodeReferenceLength(bestMatch.length);
                pos += bestMatch.length;
            } else {
                if (data.charAt(pos) != referencePrefix) {
                    newCompressed = data.charAt(pos);
                } else {
                    newCompressed = referencePrefix + referencePrefix;
                }
                pos++;
            }
            compressed += newCompressed;
        }
        return compressed + data.slice(pos).replace(/`/g, "``");
    };

    function decompress(data) {
        var decompressed = "";
        var pos = 0;
        while (pos < data.length) {
            var currentChar = data.charAt(pos);
            if (currentChar != referencePrefix) {
                decompressed += currentChar;
                pos++;
            } else {
                var nextChar = data.charAt(pos + 1);
                if (nextChar != referencePrefix) {
                    var distance = decodeReferenceInt(data.substr(pos + 1, 2), 2);
                    var length = decodeReferenceLength(data.charAt(pos + 3));
                    decompressed += decompressed.substr(decompressed.length - distance - length, length);
                    pos += minStringLength - 1;
                } else {
                    decompressed += referencePrefix;
                    pos += 2;
                }
            }
        }
        return decompressed;
    };

    var replacement = {
        'unknown' : 'u',
        'true'    : 't',
        'false'   : 'f'
    };

    function _replace(str, a, b) {
        if (str.indexOf(a) != -1) {
            str = str.split(a).join(b);
        }
        return str;
    }

    // PUBLIC properties of Compressor object
    return {
        compress : function(data) {
            // replace constants and compress
            var arr = data.split('!'),
                _to, _from, i, key, _new, _old;
            for (i = 0, n = arr.length; i < n; i++) {
                _new = _old = (arr[i].indexOf('#') != -1) ? arr[i].split('#')[0] : arr[i];

                for (key in replacement) {
                    _from = key + '|';
                    _to = replacement[key] + '|';
                    _new = _replace(_new, _from, _to);
                }
                arr[i] = arr[i].split(_old).join(_new);
            }
            return compress(arr.join('!'));
        },
        decompress : function(data) {
            //decompress and replace constants
            var arr, _to, _from, i, key, _new, _old;
            data = decompress(data);
            arr = data.split('!');
            for (i = 0, n = arr.length; i < n; i++) {
                _new = _old = (arr[i].indexOf('#') != -1) ? arr[i].split('#')[0] : arr[i];

                for (key in replacement) {
                    _from = replacement[key] + '|';
                    _to = key + '|';
                    _new = _replace( _new, _from, _to);
                }
                arr[i] = arr[i].split(_old).join(_new);
            }
            return arr.join('!');
        }
    }
    // exclude DEL character(127) from the compression range [ROG-395]
}({'referenceIntBase': 95}));
