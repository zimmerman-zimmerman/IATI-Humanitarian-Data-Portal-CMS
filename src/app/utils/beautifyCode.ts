/* styles */
import beautify from 'js-beautify';

export const beautifyCode = (code: string) => {
  return beautify.html(code, {
    indent_size: '4',
    indent_char: ' ',
    max_preserve_newlines: '5',
    preserve_newlines: true,
    keep_array_indentation: false,
    break_chained_methods: false,
    indent_scripts: 'normal',
    brace_style: 'expand',
    space_before_conditional: true,
    unescape_strings: false,
    jslint_happy: false,
    end_with_newline: false,
    wrap_line_length: '80',
    indent_inner_html: true,
    comma_first: false,
    e4x: false,
    wrap_attributes: 'preserve',
  });
};
