---
layout: post
title: "Fraction-Inch Calculator"
uid: "fraction-inch-calculator"
description: "A tool for converting decimal numbers and expression to fraction-inch format. Also capable of conversions from fraction-inch to decimal."
live-link: http://www.isaacdozier.org/fis-calculator/
git-link: https://github.com/isaacdozier/fis-calculator
category: App
tags: [Javascript, html, css, Bootstrap]
---
{% include JB/setup %}

### Tool > Calculator

Converts and calculates feet in decimal format to inch-fraction.

This calculator can also convert inch-fraction to decimal format.

Accurate to within 0.03125 of an inch (0.5 sixteenth).

Convert Numbers
Decimal to Inch Fraction 
0.000 = 00-00-00 

Inch Fraction to Decimal 
00.00.00 = 0.000

Convert Expressions
0.00 +/- 0.00 = 00-00-00 
0.00 +/- 00.00.00 = 00-00-00 
00.00.00 +/- 00.00.00 = 00-00-00

Important Updates
v1.2.0-beta:
Added feature allowing subtraction to be used in expressions.
Expressions can currently include addition and subtraction operators simultaniously.
Negative numbers can also be used in expressions.
Fixed bug causing negitive numbers to miscalculate.
Fixed bug causing zero to equate as negative.
Fixed error handling.

v1.1.1-beta:
Added expression feature(currently only addition is accepted).
Added feature allowing to convert from inch fraction (FIS) to decimal.
Added feature to allow adding decimal numbers to inch fraction numbers.
