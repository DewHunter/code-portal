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
        <MenuItem value='xcode' primaryText='xcode' />,
        <MenuItem value='ambiance' primaryText='ambiance' />,
        <MenuItem value='chaos' primaryText='chaos' />,
        <MenuItem value='chrome' primaryText='chrome' />,
        <MenuItem value='clouds_midnight' primaryText='clouds_midnight' />,
        <MenuItem value='clouds' primaryText='clouds' />,
        <MenuItem value='cobalt' primaryText='cobalt' />,
        <MenuItem value='crimson_editor' primaryText='crimson_editor' />,
        <MenuItem value='dawn' primaryText='dawn' />,
        <MenuItem value='dreamweaver' primaryText='dreamweaver' />,
        <MenuItem value='eclipse' primaryText='eclipse' />,
        <MenuItem value='github' primaryText='github' />,
        <MenuItem value='iplastic' primaryText='iplastic' />,
        <MenuItem value='katzenmilch' primaryText='katzenmilch' />,
        <MenuItem value='kr_theme' primaryText='kr_theme' />,
        <MenuItem value='kuroir' primaryText='kuroir' />,
        <MenuItem value='merbivore' primaryText='merbivore' />,
        <MenuItem value='merbivore_soft' primaryText='merbivore_soft' />,
        <MenuItem value='mono_industrial' primaryText='mono_industrial' />
    ]
}

export default EditorSettings;