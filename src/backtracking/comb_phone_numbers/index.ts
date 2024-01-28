function letterCombinations(digits: string): string[] {
  const map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  const digitsLength = digits.length;

  if (digitsLength === 0) return [];
  if (digitsLength === 1) return [...map[digits[0]]];

  const getCombination = (index: number): string[] => {
    const currDigit = digits[index];
    const isLastDigit = index === digitsLength - 1;

    if (!isLastDigit) {
      const currChars = map[currDigit];
      const nextCombinations = getCombination(index + 1);

      return currChars.map(
        (char, index) => char + (nextCombinations[index] ?? "")
      );
    }

    return map[currDigit];
  };

  return getCombination(0);
}
