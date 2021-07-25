const files_export_list = require('../config/docs_export')
const { fileSave } = require('../v_node_modules/Awesome-Node.js-Helpout/samples/fileSave')
const generated_notice_readme = require('../info_pages/helpers/generated_notice')

console.log("FILES FOR EXPORTING: ")

var file_content = ""

console.log(files_export_list)

files_export_list.forEach(fileDoc => {
    var file_content = "" 

    //console.log(fileDoc)

    fileDoc.layout.forEach(section =>  {
        file_content += "### Title: \n ## **"+ section.title +"** \n\n"
        file_content += "### **Description:**  \n"+ section.content +" \n\n"
        file_content += "##  \n  ## \n"
    })

    //console.log(file_content)
    const date = require('date-and-time');
    const now = new Date();

    file_content += generated_notice_readme.title+"\n"+generated_notice_readme.content+"  \n"+"> Last Updated: "+date.format(now, 'YYYY/MM/DD HH:mm:ss') + " \n";

    console.log("Saving content of a "+ fileDoc.file_name)
    fileSave(fileDoc.output+fileDoc.file_name, file_content)

});
