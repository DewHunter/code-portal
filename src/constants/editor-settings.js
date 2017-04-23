import React from 'react';
import MenuItem from 'material-ui/MenuItem';

const EditorSettings = {
    peerKey: '8ml1f1hdsty8ehfr',
    peerHost: 'localhost',
    peerPort: 6969,
    langs: [
        'r','d','sql','xml','abap', 'abc', 'actionscript', 'ada', 'apache_conf', 'applescript', 'asciidoc', 'assembly_x86', 'autohotkey',
        'batchfile', 'bro', 'c_cpp', 'c9search', 'cirru', 'clojure', 'cobol', 'coffee', 'coldfusion', 'csharp', 'css',
        'curly', 'dart', 'diff', 'django', 'dockerfile', 'dot', 'drools', 'eiffel', 'ejs', 'elixir', 'elm', 'erlang',
        'forth', 'fortran', 'ftl', 'gcode', 'gherkin', 'gitignore', 'glsl', 'gobstones', 'golang', 'groovy', 'haml',
        'handlebars', 'haskell_cabal', 'haskell', 'haxe', 'hjson', 'html_elixir', 'html_ruby', 'html', 'ini', 'io', 'jack',
        'jade', 'java', 'javascript', 'json', 'jsoniq', 'jsp', 'jsx', 'julia', 'kotlin', 'latex', 'lean', 'less', 'liquid',
        'lisp', 'live_script', 'logiql', 'lsl', 'lua', 'luapage', 'lucene', 'makefile', 'markdown', 'mask', 'matlab',
        'mavens_mate_log', 'maze', 'mel', 'mips_assembler', 'mipsassembler', 'mushcode', 'mysql', 'nix', 'nsis', 'objectivec',
        'ocaml', 'pascal', 'perl', 'pgsql', 'php', 'plain_text', 'powershell', 'praat', 'prolog', 'properties', 'protobuf',
        'python', 'razor', 'rdoc', 'rhtml', 'rst', 'ruby', 'rust', 'sass', 'scad', 'scala', 'scheme', 'scss', 'sh', 'sjs',
        'smarty', 'snippets', 'soy_template', 'space', 'sqlserver', 'stylus', 'svg', 'swift', 'swig', 'tcl', 'tex', 'text',
        'textile', 'toml', 'tsx', 'twig', 'typescript', 'vala', 'vbscript', 'velocity', 'verilog', 'vhdl', 'wollok', 'xquery',
        'yaml'
    ],
    themes: [
        <MenuItem key={0} value='monokai' primaryText='monokai' />,
        <MenuItem key={1} value='xcode' primaryText='xcode' />,
        <MenuItem key={2} value='ambiance' primaryText='ambiance' />,
        <MenuItem key={3} value='chaos' primaryText='chaos' />,
        <MenuItem key={4} value='chrome' primaryText='chrome' />,
        <MenuItem key={5} value='clouds_midnight' primaryText='clouds_midnight' />,
        <MenuItem key={6} value='clouds' primaryText='clouds' />,
        <MenuItem key={7} value='cobalt' primaryText='cobalt' />,
        <MenuItem key={8} value='crimson_editor' primaryText='crimson_editor' />,
        <MenuItem key={9} value='dawn' primaryText='dawn' />,
        <MenuItem key={10} value='dreamweaver' primaryText='dreamweaver' />,
        <MenuItem key={11} value='eclipse' primaryText='eclipse' />,
        <MenuItem key={12} value='github' primaryText='github' />,
        <MenuItem key={13} value='iplastic' primaryText='iplastic' />,
        <MenuItem key={14} value='katzenmilch' primaryText='katzenmilch' />,
        <MenuItem key={15} value='kr_theme' primaryText='kr_theme' />,
        <MenuItem key={16} value='kuroir' primaryText='kuroir' />,
        <MenuItem key={17} value='merbivore' primaryText='merbivore' />,
        <MenuItem key={18} value='merbivore_soft' primaryText='merbivore_soft' />,
        <MenuItem key={19} value='mono_industrial' primaryText='mono_industrial' />
    ]
}

export default EditorSettings;