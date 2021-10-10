const files_export_list = require('../config/docs_export')
const { fileSave } = require('../v__modules/v_file_save')
const generated_notice_readme = require('../info_pages/helpers/generated_notice')

const vMD = {
  h1(txt) {
    return `# ${txt}    \n`;
  },
  h2(txt) {
    return `## ${txt}    \n`;
  },
  h3(txt) {
    return `### ${txt}    \n`;
  },
  h4(txt) {
    return `#### ${txt}    \n`;
  },
  h5(txt) {
    return `##### ${txt}    \n`;
  },
  sectionTitle(txt) {
    return this.h2(`Title: **${txt}**    \n`);
  },
  bold(txt) {
    return `**${txt}**`
  },
  italic(txt) {
    return `_${txt}_`
  },
}

//console.log("FILES FOR EXPORTING: ")


//console.log(files_export_list)

files_export_list.forEach(fileDoc => {
  var file_content = ""

  file_content += `${vMD.h1(vMD.bold(fileDoc.scroll_title))} \n\n> **Description**: _${fileDoc.scroll_info}_  \n#   \n`;

  fileDoc.layout.forEach(section => {
    file_content += `${vMD.h2(vMD.bold((typeof section.icon !== "undefined") ? section.icon + " " + section.title : section.title))}\n${section.content}    \n\n`;

    file_content += `---\n`;
  })

    //console.log(file_content)
    const date = require('date-and-time');
    const now = new Date();

    file_content += `${generated_notice_readme.title} \n${generated_notice_readme.content}  \n> Last Updated:  ${date.format(now, 'YYYY/MM/DD HH:mm:ss')} \n`;

    //console.log("Saving content of a " + fileDoc.file_name);
    fileSave(fileDoc.output + fileDoc.file_name, file_content);

  });
