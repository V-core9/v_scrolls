
const v_fs = require('v_file_system');
const beta_warning = require('../info_pages/helpers/beta_warning');
const generated_notice_readme = require('../info_pages/helpers/generated_notice');
const date = require('date-and-time');

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
    return `**${txt}**`;
  },
  italic(txt) {
    return `_${txt}_`;
  },
};

const v_scrolls = {

  $_config: null,

  config($_config) {
    if ($_config === undefined) return false;
    v_scrolls.$_config = $_config;
  },
  generate: async ($_config) => {
    console.log($_config);
    if (v_scrolls.$_config === null) {
      if ($_config === null) return false;
      v_scrolls.config($_config);
    }

    console.log(v_scrolls);
    v_scrolls.$_config.forEach(async (fileDoc) => {
      var file_content = "";

      file_content += `${vMD.h1(vMD.bold(fileDoc.scroll_title))} \n\n **Description**: _${fileDoc.scroll_info}_  \n  \n`;

      file_content += `${beta_warning.title} \n`;

      fileDoc.layout.forEach(section => {
        file_content += `${vMD.h2(vMD.bold((typeof section.icon !== "undefined") ? section.icon + " " + section.title : section.title))}\n${section.content}    \n\n`;

        file_content += `---\n`;
      });


      const now = new Date();

      file_content += `${generated_notice_readme.title} \n${generated_notice_readme.content}  \n> Last Updated:  ${date.format(now, 'YYYY/MM/DD HH:mm:ss')} \n`;

      const result_save = await v_fs.write(fileDoc.output + fileDoc.file_name, file_content);

      console.log("\n📑 " + fileDoc.file_name + " \n" + (result_save === true ? "✅ SAVED" : "❌ FAILED"));
    });
  },
};


module.exports = v_scrolls;