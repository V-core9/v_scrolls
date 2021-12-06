const short_description = require('../../info_pages/readme/short_description');
const folder_structure = require('../../info_pages/readme/folder_structure');
const install_process = require('../../info_pages/readme/install_process');
const how_to_use_it = require('../../info_pages/readme/how_to_use_it');
const full_description = require('../../info_pages/readme/full_description');
const advanced_usage = require('../../info_pages/readme/advanced_usage');
const development = require('../../info_pages/readme/development');

const main_readme_template = {
  file_name: "README.md",
  scroll_title: "🧾 V_Scrolls_Generator - README.md",
  scroll_info: "Basically generates MD files...so a Markdown generator...pack data where ever you want and just use this to organize it how file will be printed.",
    layout: [
        short_description,
        install_process,
        how_to_use_it,
        full_description,
        development,
        folder_structure,
        advanced_usage
    ],
    output: "./"
};

module.exports = main_readme_template;
