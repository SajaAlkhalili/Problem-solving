function reverse(s) {
    if (s !== null && s.length > 0) {
      process.stdout.write(s[s.length - 1]);
      reverse(s.substring(0, s.length - 1));
    }
  }
  
  // Example usage:
  const inputString = "Hello, World!";
  reverse(inputString);