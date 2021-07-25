const short_description = require('../../info_pages/readme/short_description')
const folder_structure  = require('../../info_pages/readme/folder_structure')
const install_process   = require('../../info_pages/readme/install_process')
const how_to_use_it   = require('../../info_pages/readme/how_to_use_it')
const full_description   = require('../../info_pages/readme/full_description')
const advanced_usage   = require('../../info_pages/readme/advanced_usage')
const development   = require('../../info_pages/readme/development')

const dev_readme_template = {
    file_name: "DEV_README.md",
    description: "DEV_README file layout",
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

module.exports = dev_readme_template