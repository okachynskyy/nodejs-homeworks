const program = require('commander');

program
  .version('0.1.0')
  .option('-a, --action [value]', 'Provide necessary action name')
  .option('-f, --file', 'File name')
  .parse(process.argv);

switch (program.action) {
  case 'reverse':
    require('./lib/reverse')(process.stdin, process.stdout);
    break;
  case 'transform':
    break;
  case 'outputFile':
    break;
  case 'convertFromFile':
    break;
  case 'convertToFile':
    break;
  case 'cssBundler':
    break;
  default:
    console.error('Error: Provided action name is unknown or empty')
}