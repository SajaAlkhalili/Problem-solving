function balancedParens(s) {
    const stack = [];
  
    for (let i = 0; i < s.length; i++) {
      const c = s.charAt(i);
  
      switch (c) {
        case '(':
        case '{':
        case '[':
          stack.push(c);
          break;
  
        case ')':
        case '}':
        case ']':
          if (stack.length === 0) {
            return false;
          }
  
          const o = stack.pop();
  
          if (!((c === '}' && o === '{') || (c === ']' && o === '[') || (c === ')' && o === '('))) {
            return false;
          }
          break;
      }
    }
  
    return stack.length === 0;
  }
  
  // Example usage:
  const inputString = " var hubble = function() { telescopes.awesome()";
  const isBalanced = balancedParens(inputString);
  console.log(isBalanced); // Output: true
  