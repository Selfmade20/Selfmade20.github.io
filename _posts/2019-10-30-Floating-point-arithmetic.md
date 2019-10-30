---
Layout: default
Title: "Floating-point arithmetic"
Date: 30-10-2019

---

# Floating-point arithmetic

**Floating-point-arithmetic** (**FP**) is arithmetic using formulaic representation of real numbers as an approximation to support a trade-off between range and precision. For this reason, floating-point computation is often found in systems which include a very large real numbers, which require fast processing times. A number is, in general, represented approximately to a fixed number of significant digits(the significand) and scaled using an exponent in some fixed base; the bast for scaling is normally two, ten, or sixteen.

The term floating point refers to the fact that a number's radix point (decimal point, or, more commonly in computers, binary point) can "float"; that is, it can be placed anywhere relative to the significant digits of the number. This position is indicated as the exponent component, and thus the floating-point representation can be thought of as a kind of scientific notation.

A floating-point system can be used to represent, with a fixed number of digits, numbers of different orders of magnitude: e.g. the distance between galaxies or the diameter of an atomic nucleus can be expressed with the same unit of length. The result of this dynamic range is that the numbers that can be represented are not uniformly spaced; the difference between two consecutive representable numbers grows with the chosen scale.