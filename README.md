
# TypeScript Cheatsheet

## What is TypeScript?
- TypeScript = JavaScript + Types
- A **superset of JavaScript** that adds **static typing**.
- Developed by Microsoft.
- Helps catch bugs at compile-time instead of runtime.
- Uses `.ts` extension instead of `.js`.

## Why Use TypeScript?
- Better code completion (IntelliSense)
- Type checking and early bug detection
- Code scalability and readability
- Seamless JavaScript integration

**points to remember**: static typing + autocomplete + scales well
---

## TypeScript Compilation Flow
1. Write TypeScript code in `.ts` files
2. Use the TypeScript Compiler (`tsc`) to transpile it to JavaScript (`.js`)
3. Run the compiled JavaScript in the browser or Node.js

```bash
tsc filename.ts  # Produces filename.js
```

To initialize a TypeScript project:
```bash
tsc --init  # Creates tsconfig.json
```

---

## Setup
### Install TypeScript Globally
```bash
npm install -g typescript
```

### Check Installed Version
```bash
tsc -v
```

### Compile a File
```bash
tsc filename.ts
```

---

## Extra Data Types

- `any` (It disables type checking, avoid when possible)
- `unknown` (Better than `any`)
- `void` (No return value)
- `never` (Function never returns)
- `enum` (Lets u define a named constraints. Gives more meaningful names to numeric ir string values)
- `tuple` Fixed len array, where each element can have a differnt type

```ts
const person: [string, number] = ['Nikhil', 7];
```

Drawback:  > 	At run-time js treat them as js arrays. TS doesn't prevent .push().
		   >	It can break the fixed len assumption
---
```ts
person.push(10); // This doesn't cause compile time error.
```
---

## Enum
```ts
enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Up;
console.log(move); // Output: 0
```

---

## Primitive type Alias 
```ts
type Username = string;
let user: Username = 'Nick';
```

---

## Object Type Alias
```ts
type Person = {
  name: string;
  age: number;
};

const p1:Person = {name: 'Nikhil', age: 25};
```

---
## Function Type Alias

```ts
type Add = (a: number, b: number) => number;

const sum: Add = (x, y) => x + y;
```
---

## Type Operators

### Union (`|`)
```ts
type ID = string | number;

let userId: ID = 123;
userId = "abc";
```

### Intersection (`&`)
```ts
type Name = { name: string };
type Age = { age: number };

type Person = Name & Age;

const p: Person = {
  name: "Atli",
  age: 25,
};
```


