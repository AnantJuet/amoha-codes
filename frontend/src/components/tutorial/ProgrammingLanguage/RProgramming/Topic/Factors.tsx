import React from "react";

const Factors: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">Factors in R</h1>

    <p className="text-lg leading-relaxed mt-4">
      Factors in R Programming Language are used to represent categorical data, such as "male" or
      "female" for gender. While they might seem similar to character vectors, factors are actually
      stored as integers with corresponding labels.
    </p>

    <p className="leading-relaxed mt-3">
      Factors are useful when dealing with data that has a fixed set of possible values, known as
      <b> levels</b>. These levels are sorted alphabetically by default, and once created, a factor
      can only contain those predefined levels.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">1. Creating a Factor</h2>

    <p className="leading-relaxed mt-3">
      To create a factor in R, we use the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">factor()</code> function,
      which converts a vector into a factor.
    </p>

    <h3 className="text-xl font-bold mt-6">Example: Creating a Gender Factor</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`x <- c("female", "male", "male", "female")
print(x)

gender <- factor(x)
print(gender)`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] "female" "male"   "male"   "female"
[1] female male   male   female
Levels: female male`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">Specifying Levels</h3>

    <p className="leading-relaxed mt-3">
      Levels can also be predefined by the programmer:
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`x <- c("female", "male", "male", "female")
gender <- factor(x, levels = c("female", "transgender", "male"))
print(gender)`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] female male   male   female
Levels: female transgender male`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Attributes of Factors</h2>

    <ul className="list-disc list-inside mt-4 space-y-2">
      <li><b>x:</b> The vector to be converted into a factor.</li>
      <li><b>Levels:</b> The distinct values assigned to the factor.</li>
      <li><b>Labels:</b> Character labels for each level.</li>
      <li><b>Exclude:</b> Specifies values to exclude from the factor.</li>
      <li><b>Ordered:</b> Indicates whether the factor levels should be ordered.</li>
      <li><b>nmax:</b> Sets the maximum number of levels allowed for the factor.</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">2. Checking for a Factor</h2>

    <p className="leading-relaxed mt-3">
      The function <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">is.factor()</code> is used to check
      whether the variable is a factor and returns "TRUE" if it is.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`x <- c("female", "male", "male", "female")
gender <- factor(x)

print(is.factor(gender))   # TRUE
print(class(gender))       # "factor"`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">Check Levels</h3>

    <p className="leading-relaxed mt-3">
      Use the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">levels()</code> function to check the levels of a factor:
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`print(levels(gender))`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] "female" "male"`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">3. Accessing Elements of a Factor</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`gender <- factor(c("female", "male", "male", "female"))

# Access first element
print(gender[1])

# Access multiple elements
print(gender[1:3])

# Access by condition
print(gender[gender == "male"])`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">4. Modification of a Factor</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`gender <- factor(c("female", "male", "male", "female"))

# Modify an element (must be an existing level)
gender[2] <- "female"
print(gender)

# Add a new level first, then modify
levels(gender) <- c(levels(gender), "other")
gender[3] <- "other"
print(gender)`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">5. Removing Elements from a Factor</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`gender <- factor(c("female", "male", "male", "female"))

# Remove element by index
gender <- gender[-2]
print(gender)

# Remove unused levels
gender <- droplevels(gender)
print(levels(gender))`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">6. Factors in Data Frames</h2>

    <p className="leading-relaxed mt-3">
      Factors are commonly used in data frames to represent categorical variables.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`df <- data.frame(
  Name = c("John", "Jane", "Bob", "Alice"),
  Gender = factor(c("male", "female", "male", "female")),
  City = factor(c("NYC", "LA", "NYC", "Chicago"))
)

print(df)
print(str(df))`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`   Name Gender    City
1  John   male     NYC
2  Jane female      LA
3   Bob   male     NYC
4 Alice female Chicago

'data.frame':	4 obs. of  3 variables:
 $ Name  : chr  "John" "Jane" "Bob" "Alice"
 $ Gender: Factor w/ 2 levels "female","male": 2 1 2 1
 $ City  : Factor w/ 3 levels "Chicago","LA",..: 3 2 3 1`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Ordered Factors</h2>

    <p className="leading-relaxed mt-3">
      You can create ordered factors when there's a natural ordering among the levels:
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`rating <- factor(
  c("low", "high", "medium", "low", "high"),
  levels = c("low", "medium", "high"),
  ordered = TRUE
)

print(rating)
print(rating[1] < rating[2])  # TRUE`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] low    high   medium low    high
Levels: low < medium < high
[1] TRUE`}</pre>
    </div>
  </>
);

export default Factors;
