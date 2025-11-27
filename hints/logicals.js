// && (AND) returns true if both are true
// || (OR) returns true if one is true
// ! (NOT) turns true into false and vice-versa
// ?? (NULLISH) returns its right side if left side is null or undefined


// && returns first "falsy" or last "truthy"
console.log(5 && 2 && 1 && 0); // 0
console.log(1 && 2 && "hi" && 10); // 10
console.log(null && "true" && "0" && false); // null


// || returns first "truthy" or last "falsy"
console.log(null || "" || true || "hello"); // true
console.log("first" || "me" || 1 || 23); // first
console.log(undefined || 0 || false); // false


// ?? returns right always if left is null or undefined
console.log(null ?? "hello"); // hello
console.log(undefined ?? true); // true
console.log(false ?? 10); // false


// && first, || second
console.log(1 || 6 && 5 || 2); // 1
console.log(0 || 2 && 3 && 10 || false || null); // 10
console.log(undefined || 0 && true || false); // false
