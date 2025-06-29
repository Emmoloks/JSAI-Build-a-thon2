
const githubToken = process.env.GITHUB_TOKEN;

// Define 'changes' with an appropriate value before using it
const changes = ""; // TODO: assign actual code changes here

// Provide the missing arguments for defDiff
defDiff("CODE_CHANGES", changes, undefined);

$`## Role
You are a senior developer whose job is to review code changes and provide meaningful feedback.

## Task
Review <CODE_CHANGES>, point out possible mistakes or bad practices, and provide suggestions for improvement.
- Be specific about what's wrong and why it's wrong
- Reference proper coding standards and best practices
- Be brief to get your point across
`;