import { useState, useMemo, useEffect, type FC } from "react";
import { Search } from "lucide-react";
import { API } from "../../api";

const SHEET_NAME = "BasicStandardProblemSolving";

// --- TYPE DEFINITIONS ---
interface Question {
  id: number;
  title: string;
  category: string;
  difficulty: "Easy" | "Medium" | "Hard";
  solved: boolean;
  link: string;
}

interface BasicStandardProps {
  darkMode: boolean;
}

// TCS NQT Coding Sheet - 115 Questions (All LeetCode Links)
const initialQuestions: Question[] = [
  // --- Problems on Arrays (25 Questions) ---
  { id: 1, title: "Find the smallest number in an array", category: "Arrays", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/third-maximum-number/" },
  { id: 2, title: "Find the largest number in an array", category: "Arrays", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/third-maximum-number/" },
  { id: 3, title: "Second Smallest and Second Largest element in an array", category: "Arrays", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/third-maximum-number/" },
  { id: 4, title: "Reverse a given array", category: "Arrays", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/reverse-string/" },
  { id: 5, title: "Count frequency of each element in an array", category: "Arrays", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/top-k-frequent-elements/" },
  { id: 6, title: "Rearrange array in increasing-decreasing order", category: "Arrays", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/sort-array-by-parity/" },
  { id: 7, title: "Calculate sum of the elements of the array", category: "Arrays", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/running-sum-of-1d-array/" },
  { id: 8, title: "Rotate array by K elements (Block Swap)", category: "Arrays", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/rotate-array/" },
  { id: 9, title: "Average of all elements in an array", category: "Arrays", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/" },
  { id: 10, title: "Find the median of the given array", category: "Arrays", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/median-of-two-sorted-arrays/" },
  { id: 11, title: "Remove duplicates from a sorted array", category: "Arrays", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/" },
  { id: 12, title: "Remove duplicates from unsorted array", category: "Arrays", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/" },
  { id: 13, title: "Adding Element in an array", category: "Arrays", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/build-array-from-permutation/" },
  { id: 14, title: "Find all repeating elements in an array", category: "Arrays", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/find-all-duplicates-in-an-array/" },
  { id: 15, title: "Find all non-repeating elements in an array", category: "Arrays", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/single-number/" },
  { id: 16, title: "Find all symmetric pairs in array", category: "Arrays", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/two-sum/" },
  { id: 17, title: "Maximum product subarray in an array", category: "Arrays", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/maximum-product-subarray/" },
  { id: 18, title: "Replace each element of array by its rank", category: "Arrays", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/rank-transform-of-an-array/" },
  { id: 19, title: "Sorting elements of an array by frequency", category: "Arrays", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/sort-array-by-increasing-frequency/" },
  { id: 20, title: "Rotation of elements of array (left and right)", category: "Arrays", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/rotate-array/" },
  { id: 21, title: "Finding equilibrium index of an array", category: "Arrays", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/find-pivot-index/" },
  { id: 22, title: "Circular rotation of an array by K positions", category: "Arrays", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/rotate-array/" },
  { id: 23, title: "Sort array by order defined by another array", category: "Arrays", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/relative-sort-array/" },
  { id: 24, title: "Search an element in an array", category: "Arrays", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/binary-search/" },
  { id: 25, title: "Check if Array is subset of another array", category: "Arrays", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/is-subsequence/" },

  // --- Problems on Numbers (35 Questions) ---
  { id: 26, title: "Check if a number is Palindrome or not", category: "Numbers", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/palindrome-number/" },
  { id: 27, title: "Find all Palindrome numbers in a given range", category: "Numbers", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/palindrome-number/" },
  { id: 28, title: "Check if a number is Prime or not", category: "Numbers", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/count-primes/" },
  { id: 29, title: "Prime numbers in a given range", category: "Numbers", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/count-primes/" },
  { id: 30, title: "Check if a number is Armstrong number", category: "Numbers", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/armstrong-number/" },
  { id: 31, title: "Check if a number is Perfect number", category: "Numbers", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/perfect-number/" },
  { id: 32, title: "Even or Odd", category: "Numbers", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/" },
  { id: 33, title: "Check positive or negative number", category: "Numbers", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/" },
  { id: 34, title: "Sum of first N natural numbers", category: "Numbers", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/sum-of-all-odd-length-subarrays/" },
  { id: 35, title: "Find Sum of AP Series", category: "Numbers", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/arithmetic-slices/" },
  { id: 36, title: "Find Sum of GP Series", category: "Numbers", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/arithmetic-slices/" },
  { id: 37, title: "Greatest of two numbers", category: "Numbers", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/maximum-of-two-numbers-in-an-array/" },
  { id: 38, title: "Greatest of three numbers", category: "Numbers", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/third-maximum-number/" },
  { id: 39, title: "Leap year or not", category: "Numbers", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/day-of-the-year/" },
  { id: 40, title: "Reverse digits of a number", category: "Numbers", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/reverse-integer/" },
  { id: 41, title: "Maximum and Minimum digit in a number", category: "Numbers", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/largest-number-at-least-twice-of-others/" },
  { id: 42, title: "Print Fibonacci series up to Nth term", category: "Numbers", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/fibonacci-number/" },
  { id: 43, title: "Factorial of a Number", category: "Numbers", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/factorial-trailing-zeroes/" },
  { id: 44, title: "Power of a Number", category: "Numbers", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/powx-n/" },
  { id: 45, title: "Factors of a given Number", category: "Numbers", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/four-divisors/" },
  { id: 46, title: "Print all prime factors", category: "Numbers", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/largest-component-size-by-common-factor/" },
  { id: 47, title: "Check if a number is Strong number", category: "Numbers", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/strong-password-checker/" },
  { id: 48, title: "Check if a number is Automorphic", category: "Numbers", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/self-dividing-numbers/" },
  { id: 49, title: "GCD of two numbers", category: "Numbers", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/find-greatest-common-divisor-of-array/" },
  { id: 50, title: "LCM of two numbers", category: "Numbers", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/find-greatest-common-divisor-of-array/" },
  { id: 51, title: "Check if a number is Harshad number", category: "Numbers", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/harshad-number/" },
  { id: 52, title: "Check if number is Abundant number", category: "Numbers", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/perfect-number/" },
  { id: 53, title: "Sum of digits of a number", category: "Numbers", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/add-digits/" },
  { id: 54, title: "Sum of numbers in the given range", category: "Numbers", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/range-sum-query-immutable/" },
  { id: 55, title: "Permutations (nPr calculation)", category: "Numbers", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/permutations/" },
  { id: 56, title: "Add two fractions", category: "Numbers", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/add-two-integers/" },
  { id: 57, title: "Replace all 0s with 1s in a given integer", category: "Numbers", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/number-complement/" },
  { id: 58, title: "Sum of two prime numbers check", category: "Numbers", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/prime-palindrome/" },
  { id: 59, title: "Area of a circle", category: "Numbers", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/circle-and-rectangle-overlapping/" },
  { id: 60, title: "Roots of a Quadratic Equation", category: "Numbers", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/sqrtx/" },

  // --- Problems on Number Systems (15 Questions) ---
  { id: 61, title: "Convert Binary to Decimal", category: "Number Systems", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/" },
  { id: 62, title: "Convert Decimal to Binary", category: "Number Systems", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/binary-number-with-alternating-bits/" },
  { id: 63, title: "Convert Octal to Decimal", category: "Number Systems", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/base-7/" },
  { id: 64, title: "Convert Decimal to Octal", category: "Number Systems", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/base-7/" },
  { id: 65, title: "Convert Binary to Octal", category: "Number Systems", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/base-7/" },
  { id: 66, title: "Convert Octal to Binary", category: "Number Systems", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/base-7/" },
  { id: 67, title: "Convert Decimal to Hexadecimal", category: "Number Systems", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/convert-a-number-to-hexadecimal/" },
  { id: 68, title: "Convert Hexadecimal to Decimal", category: "Number Systems", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/convert-a-number-to-hexadecimal/" },
  { id: 69, title: "Convert Hexadecimal to Binary", category: "Number Systems", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/convert-a-number-to-hexadecimal/" },
  { id: 70, title: "Convert Binary to Hexadecimal", category: "Number Systems", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/convert-a-number-to-hexadecimal/" },
  { id: 71, title: "Convert Octal to Hexadecimal", category: "Number Systems", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/convert-a-number-to-hexadecimal/" },
  { id: 72, title: "Convert Hexadecimal to Octal", category: "Number Systems", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/convert-a-number-to-hexadecimal/" },
  { id: 73, title: "Find 1s and 2s complement of Binary", category: "Number Systems", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/complement-of-base-10-integer/" },
  { id: 74, title: "Binary Addition", category: "Number Systems", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/add-binary/" },
  { id: 75, title: "Binary Subtraction", category: "Number Systems", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/add-binary/" },

  // --- Problems on Sorting (15 Questions) ---
  { id: 76, title: "Bubble Sort Algorithm", category: "Sorting", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/sort-an-array/" },
  { id: 77, title: "Selection Sort Algorithm", category: "Sorting", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/sort-an-array/" },
  { id: 78, title: "Insertion Sort Algorithm", category: "Sorting", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/insertion-sort-list/" },
  { id: 79, title: "Quick Sort Algorithm", category: "Sorting", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/sort-an-array/" },
  { id: 80, title: "Merge Sort Algorithm", category: "Sorting", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/sort-an-array/" },
  { id: 81, title: "Counting Sort Algorithm", category: "Sorting", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/sort-an-array/" },
  { id: 82, title: "Radix Sort Algorithm", category: "Sorting", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/maximum-gap/" },
  { id: 83, title: "Heap Sort Algorithm", category: "Sorting", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/sort-an-array/" },
  { id: 84, title: "Bucket Sort Algorithm", category: "Sorting", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/top-k-frequent-elements/" },
  { id: 85, title: "Shell Sort Algorithm", category: "Sorting", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/sort-an-array/" },
  { id: 86, title: "Sort an array of 0s, 1s and 2s", category: "Sorting", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/sort-colors/" },
  { id: 87, title: "Sort array in wave form", category: "Sorting", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/wiggle-sort/" },
  { id: 88, title: "Sort an array in descending order", category: "Sorting", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/sort-an-array/" },
  { id: 89, title: "Sort elements by frequency", category: "Sorting", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/sort-array-by-increasing-frequency/" },
  { id: 90, title: "Merge two sorted arrays", category: "Sorting", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/merge-sorted-array/" },

  // --- Problems on Strings (25 Questions) ---
  { id: 91, title: "Print all duplicates in the input string", category: "Strings", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/find-all-duplicates-in-an-array/" },
  { id: 92, title: "Remove chars from first string in second", category: "Strings", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/remove-letter-to-equalize-frequency/" },
  { id: 93, title: "Change letter to next lexicographic alphabet", category: "Strings", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/shifting-letters/" },
  { id: 94, title: "Find the largest word in a given string", category: "Strings", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/longest-word-in-dictionary/" },
  { id: 95, title: "Sort characters in a string", category: "Strings", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/sort-characters-by-frequency/" },
  { id: 96, title: "Count number of words in a given string", category: "Strings", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/number-of-segments-in-a-string/" },
  { id: 97, title: "Find word with highest repeated letters", category: "Strings", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/maximum-repeating-substring/" },
  { id: 98, title: "Change case of each character in string", category: "Strings", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/to-lower-case/" },
  { id: 99, title: "Concatenate one string to another", category: "Strings", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/merge-strings-alternately/" },
  { id: 100, title: "Find substring within a string", category: "Strings", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/" },
  { id: 101, title: "Reverse words in a string", category: "Strings", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/reverse-words-in-a-string/" },
  { id: 102, title: "Reverse a string using recursion", category: "Strings", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/reverse-string/" },
  { id: 103, title: "Check if a string is Palindrome", category: "Strings", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/valid-palindrome/" },
  { id: 104, title: "Check if two strings are Anagram", category: "Strings", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/valid-anagram/" },
  { id: 105, title: "Count common sub-sequences in strings", category: "Strings", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/longest-common-subsequence/" },
  { id: 106, title: "Find first non-repeating character", category: "Strings", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/first-unique-character-in-a-string/" },
  { id: 107, title: "Find first repeating character", category: "Strings", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/first-letter-to-appear-twice/" },
  { id: 108, title: "Wildcard pattern matching", category: "Strings", difficulty: "Hard", solved: false, link: "https://leetcode.com/problems/wildcard-matching/" },
  { id: 109, title: "Count vowels and consonants", category: "Strings", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/reverse-vowels-of-a-string/" },
  { id: 110, title: "Find ASCII value of a character", category: "Strings", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/excel-sheet-column-number/" },
  { id: 111, title: "Remove all vowels from a string", category: "Strings", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/remove-vowels-from-a-string/" },
  { id: 112, title: "Remove spaces from a string", category: "Strings", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/" },
  { id: 113, title: "Remove brackets from algebraic expr", category: "Strings", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/" },
  { id: 114, title: "Sum of numbers in a string", category: "Strings", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/calculate-digit-sum-of-a-string/" },
  { id: 115, title: "Capitalize first and last char of each word", category: "Strings", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/detect-capital/" },
];

const allCategories: string[] = [
  "Arrays",
  "Numbers",
  "Number Systems",
  "Sorting",
  "Strings",
];

const BasicStandardProblemSolving: FC<BasicStandardProps> = ({ darkMode }) => {
  const [questionsList, setQuestionsList] = useState<Question[]>(() =>
    initialQuestions.map((q) => ({ ...q, solved: false }))
  );
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  // Load saved progress from backend on mount and when auth changes
  useEffect(() => {
    const fetchProgress = async () => {
      const token = localStorage.getItem("access_token");
      if (!token) {
        setQuestionsList(initialQuestions.map((q) => ({ ...q, solved: false })));
        return;
      }
      try {
        const response = await API.get(`/question/status?sheet=${SHEET_NAME}`);
        const solvedIds: string[] = response.data;
        setQuestionsList((prevList) =>
          prevList.map((q) => ({
            ...q,
            solved: solvedIds.includes(String(q.id)),
          }))
        );
      } catch (error) {
        console.error("Failed to fetch progress:", error);
      }
    };
    fetchProgress();

    const handleAuthChange = () => {
      fetchProgress();
    };
    window.addEventListener("authChanged", handleAuthChange);
    return () => {
      window.removeEventListener("authChanged", handleAuthChange);
    };
  }, []);
  const [selectedDifficulty] = useState<string | null>(null);
  const [categorySearchTerm, setCategorySearchTerm] = useState<string>("");
  const [problemSearchTerm, setProblemSearchTerm] = useState<string>("");

  const handleCheckboxChange = async (id: number): Promise<void> => {
    const question = questionsList.find((q) => q.id === id);
    if (!question) return;

    const newSolvedState = !question.solved;

    // Optimistically update UI
    setQuestionsList((prevList) =>
      prevList.map((q) => (q.id === id ? { ...q, solved: newSolvedState } : q))
    );

    // Save to backend if user is logged in
    const token = localStorage.getItem("access_token");
    if (token) {
      try {
        await API.post("/question/check", {
          question_id: String(id),
          title: question.title,
          category: question.category,
          difficulty: question.difficulty,
          company: null,
          sheet_name: SHEET_NAME,
          checked: newSolvedState,
        });
      } catch (error) {
        console.error("Failed to save progress:", error);
        // Revert on failure
        setQuestionsList((prevList) =>
          prevList.map((q) => (q.id === id ? { ...q, solved: !newSolvedState } : q))
        );
      }
    }
  };

  const filteredCategories: string[] = allCategories.filter((cat: string) =>
    cat.toLowerCase().includes(categorySearchTerm.toLowerCase())
  );

  const filteredQuestions: Question[] = questionsList.filter((q: Question) => {
    const matchesCategory =
      !expandedCategory || q.category === expandedCategory;
    const matchesDifficulty =
      !selectedDifficulty || q.difficulty === selectedDifficulty;
    const matchesSearchTerm =
      !problemSearchTerm ||
      q.title.toLowerCase().includes(problemSearchTerm.toLowerCase());

    return matchesCategory && matchesDifficulty && matchesSearchTerm;
  });

  const totalQuestions: number = questionsList.length;
  const solvedQuestions: number = questionsList.filter((q) => q.solved).length;
  const completionPercentage: number = useMemo(() =>
    totalQuestions > 0
      ? Math.round((solvedQuestions / totalQuestions) * 100)
      : 0,
    [solvedQuestions, totalQuestions]
  );

  const difficultyStats: { [key: string]: { total: number; solved: number } } = useMemo(() => ({
    Easy: {
      total: questionsList.filter((q) => q.difficulty === "Easy").length,
      solved: questionsList.filter((q) => q.difficulty === "Easy" && q.solved).length,
    },
    Medium: {
      total: questionsList.filter((q) => q.difficulty === "Medium").length,
      solved: questionsList.filter((q) => q.difficulty === "Medium" && q.solved).length,
    },
    Hard: {
      total: questionsList.filter((q) => q.difficulty === "Hard").length,
      solved: questionsList.filter((q) => q.difficulty === "Hard" && q.solved).length,
    },
  }), [questionsList]);

  const difficultyColors: { [key: string]: string } = {
    Easy: "#22C55E",
    Medium: "#FACC15",
    Hard: "#EF4444",
  };

  const getDifficultyColorClass = (difficulty: string): string => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-600 text-white";
      case "Medium":
        return "bg-orange-500 text-white";
      case "Hard":
        return "bg-red-500 text-white";
      default:
        return darkMode
          ? "bg-gray-700 text-gray-300"
          : "bg-gray-200 text-gray-800";
    }
  };

  const getCategoryColorClass = (category: string): string => {
    switch (category) {
      case "Arrays":
        return darkMode
          ? "bg-blue-900 text-blue-200"
          : "bg-blue-100 text-blue-700";
      case "Numbers":
        return darkMode
          ? "bg-purple-900 text-purple-200"
          : "bg-purple-100 text-purple-700";
      case "Number Systems":
        return darkMode
          ? "bg-cyan-900 text-cyan-200"
          : "bg-cyan-100 text-cyan-700";
      case "Sorting":
        return darkMode
          ? "bg-green-900 text-green-200"
          : "bg-green-100 text-green-700";
      case "Strings":
        return darkMode
          ? "bg-pink-900 text-pink-200"
          : "bg-pink-100 text-pink-700";
      default:
        return darkMode
          ? "bg-gray-900 text-gray-200"
          : "bg-gray-100 text-gray-700";
    }
  };

  const getCategoryProgress = (category: string): string => {
    const categoryQuestions = questionsList.filter(
      (q) => q.category === category
    );
    const solvedCount = categoryQuestions.filter((q) => q.solved).length;
    const totalCount = categoryQuestions.length;
    return `(${solvedCount}/${totalCount})`;
  };

  return (
    <div
      className={`flex flex-col md:flex-row min-h-screen transition-colors duration-500 pt-20 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      {/* Sidebar */}
      <div
        className={`w-full md:w-72 border-b md:border-b-0 mt-6 md:border-r p-4 transition-colors duration-500 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}
      >
        <h1 className="text-lg font-bold mb-4">Filters</h1>
        <div className="relative mb-6">
          <Search
            className={`absolute left-3 top-2.5 w-4 h-4 ${darkMode ? "text-[#6334B9]" : "text-[#6334B9]"}`}
          />
          <input
            type="text"
            placeholder="Search category..."
            className={`w-full pl-9 pr-3 py-2 rounded-md text-sm outline-none transition-colors duration-300 ${darkMode
              ? "bg-gray-700 border border-[#6334B9] text-white focus:ring-2 focus:ring-[#6334B9]"
              : "bg-purple-50 border border-[#6334B9] text-black focus:ring-2 focus:ring-[#6334B9]"
              }`}
            value={categorySearchTerm}
            onChange={(e) => setCategorySearchTerm(e.target.value)}
          />
        </div>
        <h2 className="font-semibold text-base mb-3">Category</h2>
        <ul className="space-y-3">
          {filteredCategories.map((cat) => (
            <li key={cat}>
              <div
                className={`flex items-center justify-between space-x-2 cursor-pointer p-2 rounded-md ${expandedCategory === cat
                  ? darkMode
                    ? "bg-gray-700"
                    : "bg-gray-100"
                  : darkMode
                    ? "hover:bg-gray-700"
                    : "hover:bg-gray-100"
                  }`}
                onClick={() =>
                  setExpandedCategory(expandedCategory === cat ? null : cat)
                }
              >
                <span
                  className={`font-medium ${expandedCategory === cat
                    ? "text-purple-800"
                    : darkMode
                      ? "text-gray-200"
                      : "text-gray-800"
                    }`}
                >
                  {cat}
                </span>
                <span
                  className={`text-xs font-medium ${darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                >
                  {getCategoryProgress(cat)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Content */}
      <div className="flex-1 p-4 sm:p-6">
        {/* Progress Section */}
        <div
          className={`p-4 sm:p-6 rounded-lg mb-6 shadow-md transition-colors duration-500 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}
        >
          <div className="flex flex-col sm:flex-row items-center sm:justify-between mb-4 gap-4 sm:gap-0">
            <h2 className="text-xl font-bold">Progress</h2>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-6 gap-4">
            {/* Total Progress */}
            <div className="flex flex-col items-start min-w-[120px]">
              <span className="text-2xl font-bold">
                {solvedQuestions} / {totalQuestions}
              </span>
              <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-800"}`}>
                Total Progress
              </p>
            </div>

            {/* Circle */}
            <div className="relative w-20 h-20 flex-shrink-0 -translate-y-2 -translate-x-12">
              <svg
                viewBox="0 0 80 80"
                className="w-full h-full transform -rotate-90"
              >
                <circle
                  className={`stroke-current ${darkMode ? "text-gray-700" : "text-gray-300"}`}
                  strokeWidth="6"
                  fill="transparent"
                  r="30"
                  cx="40"
                  cy="40"
                />

                {/* Progress Circle */}
                <circle
                  className="stroke-current text-[#6334B9]"
                  strokeWidth="6"
                  strokeDasharray={30 * 2 * Math.PI}
                  strokeDashoffset={
                    30 * 2 * Math.PI - (completionPercentage / 100) * (30 * 2 * Math.PI)
                  }
                  strokeLinecap="round"
                  fill="transparent"
                  r="30"
                  cx="40"
                  cy="40"
                />
              </svg>

              {/* Center Percentage Text */}
              <span
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-lg ${darkMode ? "text-white" : "text-gray-900"
                  }`}
              >
                {completionPercentage}%
              </span>
            </div>

            {/* Difficulty Bars */}
            <div className="flex flex-col sm:flex-row flex-wrap sm:space-x-6 w-full">
              {Object.keys(difficultyStats).map((diff: string) => (
                <div
                  key={diff}
                  className="flex-1 flex flex-col items-center px-2 sm:px-6 border-l border-gray-700 first:border-l-0 mb-3 sm:mb-0"
                >
                  <span className={`font-semibold ${darkMode ? "text-gray-300" : "text-gray-900"}`}>
                    {diff}
                  </span>
                  <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-800"}`}>
                    {difficultyStats[diff].solved} / {difficultyStats[diff].total} completed
                  </p>
                  <div className={`w-full h-2 mt-1 rounded-full overflow-hidden ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}>
                    <div
                      className={`h-full rounded-full`}
                      style={{
                        width: `${(difficultyStats[diff].solved / (difficultyStats[diff].total || 1)) * 100}%`,
                        backgroundColor: difficultyColors[diff],
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Practice Problems */}
        <h2 className="text-2xl font-bold mb-4">Basic Standard Problem Solving</h2>
        <div className="relative mb-4 w-full sm:w-1/2">
          <Search
            className={`absolute left-3 top-2.5 w-4 h-4 ${darkMode ? "text-[#6334B9]" : "text-[#6334B9]"}`}
          />
          <input
            type="text"
            placeholder="Search problems..."
            className={`w-full pl-9 pr-3 py-2 rounded-md text-sm outline-none transition-colors duration-300 ${darkMode
              ? "bg-gray-700 border border-[#6334B9] text-white focus:ring-2 focus:ring-[#6334B9]"
              : "bg-purple-50 border border-[#6334B9] text-black focus:ring-2 focus:ring-[#6334B9]"
              }`}
            value={problemSearchTerm}
            onChange={(e) => setProblemSearchTerm(e.target.value)}
          />
        </div>
        {filteredQuestions.length === 0 ? (
          <p className={`text-gray-500 ${darkMode ? "text-gray-400" : ""}`}>
            No problems found for the selected filters.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className={`w-full border rounded-lg transition-colors duration-500 ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
              <thead className={darkMode ? "bg-gray-700" : "bg-gray-100"}>
                <tr>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Problem Title</th>
                  <th className="p-3 text-left">Category</th>
                  <th className="p-3 text-left">Difficulty</th>
                </tr>
              </thead>
              <tbody>
                {filteredQuestions.map((q: Question) => (
                  <tr
                    key={q.id}
                    className={`border-t ${darkMode ? "border-gray-700 hover:bg-gray-800" : "border-gray-200 hover:bg-gray-50"}`}
                  >
                    <td className="p-3">
                      <input
                        type="checkbox"
                        checked={q.solved}
                        onChange={() => handleCheckboxChange(q.id)}
                        className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:bg-gray-600 dark:border-gray-500 dark:checked:bg-purple-600 dark:focus:ring-purple-400"
                      />
                    </td>
                    <td className="p-3">
                      <a
                        href={q.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-medium ${darkMode ? "text-gray-200 hover:text-[#6334B9]" : "text-gray-900 hover:text-[#6334B9]"}`}
                      >
                        {q.title}
                      </a>
                    </td>
                    <td className="p-3">
                      <span className={`px-2 py-1 text-sm rounded-full ${getCategoryColorClass(q.category)}`}>
                        {q.category}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className={`px-2 py-1 text-sm rounded-full ${getDifficultyColorClass(q.difficulty)}`}>
                        {q.difficulty}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default BasicStandardProblemSolving;
