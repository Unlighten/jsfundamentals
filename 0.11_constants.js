// We're declaring `PI` to be a constant variable.
const PI = 3.141592653589793;

// Any attempt to assign a new value to `PI`  fails because `PI` is a constant variable.
PI = 0;
PI++;

// All of the variable declarations below fail
// because we can't declare a new variable with the
// same identifier as an existing constant variable.
var PI = 0;
let PI = 0;
const PI = 0;


// We're declaring a constant variable
// to hold a settings object.
const settings = {
    baseUrl: "https://example.com"
};

// Since `settings` is a constant variable,
// an attempt to assign a new value will fail.
settings = {};

// However, the object is **not** immutable.
// This means we can change its properties!
settings.baseUrl = "https://evil.example.com";