const { spawn } = require('child_process');

// Spawn a child process to run the 'ls' command
const child = spawn('ls', ['-lh', '/usr']);

// Parent process continues running without blocking
console.log('This is printed while the child process is running.');

// Listen for data from the child process
child.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

// Listen for errors from the child process
child.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

// Listen for the close event to know when the child process finishes
child.on('close', (code) => {
  console.log(`Child process exited with code ${code}`);
});

console.log('This is printed while waiting for the child process to finish.');
