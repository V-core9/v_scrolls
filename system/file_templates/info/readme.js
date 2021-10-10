const short_description = require('../../readme_files/readme/short_description')
const folder_structure  = require('../../readme_files/readme/folder_structure')
const install_process   = require('../../readme_files/readme/install_process')
const how_to_use_it   = require('../../readme_files/readme/how_to_use_it')
const full_description   = require('../../readme_files/readme/full_description')
const advanced_usage   = require('../../readme_files/readme/advanced_usage')
const development   = require('../../readme_files/readme/development')

const main_readme_template = {
  file_name: "README.md",
  scroll_title: "🧾 V_Scrolls_Generator - README.md ",
  scroll_info: "Will print projects root readme file in order it is sorded in layout part of this object",
    layout: [
        short_description,
        folder_structure,
        install_process,
        how_to_use_it,
        full_description,
        advanced_usage,
        development
    ],
    output: "./"
}

module.exports = main_readme_template
