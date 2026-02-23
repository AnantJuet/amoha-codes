import React from "react";

const SwiftNestedIf: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Swift Nested If Statements
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      Nest <code>if</code> statements to check multiple levels of conditions. An inner if
      only executes when its outer if condition is true.
    </p>

    <h2 className="text-2xl font-bold mt-6">Basic Nested If Syntax</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`if outerCondition {
    // Outer block
    if innerCondition {
        // Inner block - runs only if both conditions are true
    }
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Authentication Example</h2>
    <p className="text-lg leading-relaxed mt-2">
      Use nested conditions to handle layered checks, such as authentication and then role permissions:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let isLoggedIn = true
let isAdmin = false

if isLoggedIn {
    print("User is authenticated")

    if isAdmin {
        print("Welcome to Admin Panel")
    } else {
        print("Welcome to User Dashboard")
    }
} else {
    print("Please log in first")
}

// Output:
// User is authenticated
// Welcome to User Dashboard`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Age and License Verification</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let age = 20
let hasLicense = true
let hasCar = false

if age >= 18 {
    print("You are old enough to drive")

    if hasLicense {
        print("You have a valid license")

        if hasCar {
            print("You can drive your car!")
        } else {
            print("You need to rent or borrow a car")
        }
    } else {
        print("You need to get a driver's license first")
    }
} else {
    print("You must be 18 or older to drive")
}

// Output:
// You are old enough to drive
// You have a valid license
// You need to rent or borrow a car`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Input Validation</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let username = "john_doe"
let password = "secret123"
let email = "john@example.com"

if !username.isEmpty {
    if username.count >= 3 {
        if !password.isEmpty {
            if password.count >= 8 {
                if email.contains("@") {
                    print("All validations passed!")
                } else {
                    print("Invalid email format")
                }
            } else {
                print("Password must be at least 8 characters")
            }
        } else {
            print("Password is required")
        }
    } else {
        print("Username must be at least 3 characters")
    }
} else {
    print("Username is required")
}

// Output: All validations passed!`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Better Approach: Guard Statements</h2>
    <p className="text-lg leading-relaxed mt-2">
      Deep nesting can be avoided using <code>guard</code> for early exits:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`func validateUser(username: String, password: String, email: String) {
    // Using guard for cleaner code
    guard !username.isEmpty else {
        print("Username is required")
        return
    }

    guard username.count >= 3 else {
        print("Username must be at least 3 characters")
        return
    }

    guard !password.isEmpty else {
        print("Password is required")
        return
    }

    guard password.count >= 8 else {
        print("Password must be at least 8 characters")
        return
    }

    guard email.contains("@") else {
        print("Invalid email format")
        return
    }

    print("All validations passed!")
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Number Classification</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let number = 42

if number != 0 {
    if number > 0 {
        if number % 2 == 0 {
            print("\\(number) is a positive even number")
        } else {
            print("\\(number) is a positive odd number")
        }
    } else {
        if number % 2 == 0 {
            print("\\(number) is a negative even number")
        } else {
            print("\\(number) is a negative odd number")
        }
    }
} else {
    print("The number is zero")
}

// Output: 42 is a positive even number`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Shopping Cart Example</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let cartTotal = 150.0
let hasCoupon = true
let couponDiscount = 20.0
let isPremiumMember = true

if cartTotal > 0 {
    var finalTotal = cartTotal

    if hasCoupon {
        finalTotal -= couponDiscount
        print("Coupon applied: -$\\(couponDiscount)")

        if isPremiumMember {
            let premiumDiscount = finalTotal * 0.1
            finalTotal -= premiumDiscount
            print("Premium discount: -$\\(premiumDiscount)")
        }
    }

    print("Final total: $\\(finalTotal)")
} else {
    print("Your cart is empty")
}

// Output:
// Coupon applied: -$20.0
// Premium discount: -$13.0
// Final total: $117.0`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Best Practices</h2>
    <table className="min-w-full border border-gray-300 mt-4">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">Avoid</th>
          <th className="border border-gray-300 px-4 py-2">Prefer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Deep nesting (3+ levels)</td>
          <td className="border border-gray-300 px-4 py-2">Guard statements for early exits</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Nested ifs for single values</td>
          <td className="border border-gray-300 px-4 py-2">Switch statements</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Redundant conditions</td>
          <td className="border border-gray-300 px-4 py-2">Combine with && or ||</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Complex nested logic</td>
          <td className="border border-gray-300 px-4 py-2">Extract to separate functions</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-6">Combining Conditions vs Nesting</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let age = 25
let hasTicket = true

// Nested approach
if age >= 18 {
    if hasTicket {
        print("Entry allowed")
    }
}

// Combined approach (cleaner)
if age >= 18 && hasTicket {
    print("Entry allowed")
}

// Both produce the same result`}
    </pre>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Tip:</strong> If you find yourself nesting more than 2-3 levels deep, consider
        refactoring using guard statements, extracting logic to functions, or combining conditions
        with logical operators.
      </p>
    </div>
  </div>
);

export default SwiftNestedIf;
