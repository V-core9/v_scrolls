
const v_doc_gen = require('./system/actions/generate_documentation');

const files_export_list = require('./system/config/docs_export');

v_doc_gen.generate(files_export_list);