// Getting Main README.md File Template
const main_readme_template = require('../file_templates/info/readme');
// Getting DEV_README.md Template
const dev_readme_template = require('../file_templates/info/development');

// files_export_list is an ARRAY of files to handle
// Order does not matter since it's gonna gather data
// by using require...so it should help keeping it 
// broken down and easy to handle extending.
const files_export_list = [
  main_readme_template,
  dev_readme_template
];

// And just share it for usage.
module.exports = files_export_list;


