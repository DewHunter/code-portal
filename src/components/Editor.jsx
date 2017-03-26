import React, { Component } from 'react'
import AceEditor from 'react-ace';
import EditorSettings from '../constants/editor-settings';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import GearIcon from 'material-ui/svg-icons/action/settings';
// sorry about this, I suck I know...
import 'brace/mode/abc'
import 'brace/mode/actionscript'
import 'brace/mode/ada'
import 'brace/mode/apache_conf'
import 'brace/mode/applescript'
import 'brace/mode/asciidoc'
import 'brace/mode/assembly_x86'
import 'brace/mode/autohotkey'
import 'brace/mode/batchfile'
import 'brace/mode/bro'
import 'brace/mode/c_cpp'
import 'brace/mode/c9search'
import 'brace/mode/cirru'
import 'brace/mode/clojure'
import 'brace/mode/cobol'
import 'brace/mode/coffee'
import 'brace/mode/coldfusion'
import 'brace/mode/csharp'
import 'brace/mode/css'
import 'brace/mode/curly'
import 'brace/mode/d'
import 'brace/mode/dart'
import 'brace/mode/diff'
import 'brace/mode/django'
import 'brace/mode/dockerfile'
import 'brace/mode/dot'
import 'brace/mode/drools'
import 'brace/mode/eiffel'
import 'brace/mode/ejs'
import 'brace/mode/elixir'
import 'brace/mode/elm'
import 'brace/mode/erlang'
import 'brace/mode/forth'
import 'brace/mode/fortran'
import 'brace/mode/ftl'
import 'brace/mode/gcode'
import 'brace/mode/gherkin'
import 'brace/mode/gitignore'
import 'brace/mode/glsl'
import 'brace/mode/gobstones'
import 'brace/mode/golang'
import 'brace/mode/groovy'
import 'brace/mode/haml'
import 'brace/mode/handlebars'
import 'brace/mode/haskell_cabal'
import 'brace/mode/haskell'
import 'brace/mode/haxe'
import 'brace/mode/hjson'
import 'brace/mode/html_elixir'
import 'brace/mode/html_ruby'
import 'brace/mode/html'
import 'brace/mode/ini'
import 'brace/mode/io'
import 'brace/mode/jack'
import 'brace/mode/jade'
import 'brace/mode/java'
import 'brace/mode/javascript'
import 'brace/mode/json'
import 'brace/mode/jsoniq'
import 'brace/mode/jsp'
import 'brace/mode/jsx'
import 'brace/mode/julia'
import 'brace/mode/kotlin'
import 'brace/mode/latex'
import 'brace/mode/lean'
import 'brace/mode/less'
import 'brace/mode/liquid'
import 'brace/mode/lisp'
import 'brace/mode/live_script'
import 'brace/mode/logiql'
import 'brace/mode/lsl'
import 'brace/mode/lua'
import 'brace/mode/luapage'
import 'brace/mode/lucene'
import 'brace/mode/makefile'
import 'brace/mode/markdown'
import 'brace/mode/mask'
import 'brace/mode/matlab'
import 'brace/mode/mavens_mate_log'
import 'brace/mode/maze'
import 'brace/mode/mel'
import 'brace/mode/mips_assembler'
import 'brace/mode/mipsassembler'
import 'brace/mode/mushcode'
import 'brace/mode/mysql'
import 'brace/mode/nix'
import 'brace/mode/nsis'
import 'brace/mode/objectivec'
import 'brace/mode/ocaml'
import 'brace/mode/pascal'
import 'brace/mode/perl'
import 'brace/mode/pgsql'
import 'brace/mode/php'
import 'brace/mode/plain_text'
import 'brace/mode/powershell'
import 'brace/mode/praat'
import 'brace/mode/prolog'
import 'brace/mode/properties'
import 'brace/mode/protobuf'
import 'brace/mode/python'
import 'brace/mode/r'
import 'brace/mode/razor'
import 'brace/mode/rdoc'
import 'brace/mode/rhtml'
import 'brace/mode/rst'
import 'brace/mode/ruby'
import 'brace/mode/rust'
import 'brace/mode/sass'
import 'brace/mode/scad'
import 'brace/mode/scala'
import 'brace/mode/scheme'
import 'brace/mode/scss'
import 'brace/mode/sh'
import 'brace/mode/sjs'
import 'brace/mode/smarty'
import 'brace/mode/snippets'
import 'brace/mode/soy_template'
import 'brace/mode/space'
import 'brace/mode/sql'
import 'brace/mode/sqlserver'
import 'brace/mode/stylus'
import 'brace/mode/svg'
import 'brace/mode/swift'
import 'brace/mode/swig'
import 'brace/mode/tcl'
import 'brace/mode/tex'
import 'brace/mode/text'
import 'brace/mode/textile'
import 'brace/mode/toml'
import 'brace/mode/tsx'
import 'brace/mode/twig'
import 'brace/mode/typescript'
import 'brace/mode/vala'
import 'brace/mode/vbscript'
import 'brace/mode/velocity'
import 'brace/mode/verilog'
import 'brace/mode/vhdl'
import 'brace/mode/wollok'
import 'brace/mode/xml'
import 'brace/mode/xquery'
import 'brace/mode/yaml'

import 'brace/theme/monokai';
import 'brace/theme/ambiance';
import 'brace/theme/chaos';
import 'brace/theme/chrome';
import 'brace/theme/clouds_midnight';
import 'brace/theme/clouds';
import 'brace/theme/cobalt';
import 'brace/theme/crimson_editor';
import 'brace/theme/dawn';
import 'brace/theme/dreamweaver';
import 'brace/theme/eclipse';
import 'brace/theme/github';
import 'brace/theme/iplastic';
import 'brace/theme/katzenmilch';
import 'brace/theme/kr_theme';
import 'brace/theme/kuroir';
import 'brace/theme/merbivore';
import 'brace/theme/merbivore_soft';
import 'brace/theme/mono_industrial';
import 'brace/theme/monokai';
import 'brace/theme/xcode';

var Peer = require('peerjs');

class Editor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            peer: undefined,
            conn: undefined,
            value:  "/**\n" +
                    " * This is just a test!\n" +
                    " */\n" +
                    "function sayHello() {\n" +
                    "    console.log('Hello!');\n" +
                    "}\n",
            height: "inherit",
            width: "inherit"
        };
    }

    receiveData = (newData) => {
        this.setState({
            value: newData
        });
    }
    
    startPeerConnection = () => {
        var currData = this.state.value;
        var peer = new Peer('code-portal-dewhunter', {key: EditorSettings.peerKey});
        peer.on('open', function(id) {
            console.log('My peer ID is: ' + id);
        });
        var addConn = (newConn) => {
            this.setState({
                conn: newConn
            });
        }
        var acceptData = (data) => {
            this.receiveData(data);
        }
        peer.on('connection', function(conn) {
            console.log('Accepted Connection!', conn);
            conn.on('open', function() {
                conn.on('data', function(data) {
                    acceptData(data);
                });

                conn.send(currData);
            });
            addConn(conn);
        });
    }

    startPeerConnection2 = () => {
        var acceptData = (data) => {
            this.receiveData(data);
        }
        var peer = new Peer('code-portal-dewhunter-2', {key: EditorSettings.peerKey});
        peer.on('open', function(id) {
            console.log('My peer ID is: ' + id);
        });
        var conn = peer.connect('code-portal-dewhunter');
        conn.on('open', function() {
            conn.on('data', function(data) {
                acceptData(data);
            });
        });
        this.setState({
            conn: conn
        });
    }

    updateStateValue = (newValue) => {
        if (this.state.conn !== undefined) {
            this.state.conn.send(newValue);
        }
        this.setState({
            value: newValue
        });
    }

    render() {
        return (
            <div>
                <FlatButton
                    label='Connect'
                    backgroundColor="#a4c639"
                    hoverColor="#8AA62F"
                    style={{
                        margin: 12,
                        top: '800px',
                        left: '100px'
                    }}
                    onTouchTap={this.startPeerConnection}
                    />
                <FlatButton
                    label='Connect 2'
                    backgroundColor="#a4c639"
                    hoverColor="#8AA62F"
                    style={{
                        margin: 12,
                        top: '800px',
                        left: '150'
                    }}
                    onTouchTap={this.startPeerConnection2}
                    />
                <FloatingActionButton
                    style={{
                        margin: 12,
                        position: 'relative',
                        float: 'right',
                        bottom: '100px'
                    }}>
                    <GearIcon />
                </FloatingActionButton>
                <AceEditor
                    mode={this.props.mode}
                    theme={this.props.theme}
                    name="editor-unique"
                    fontSize={this.props.fontSize}
                    height={this.state.height}
                    width={this.state.width}
                    value={this.state.value}
                    wrapEnabled={this.props.wrap}
                    onChange={this.updateStateValue}
                    editorProps={{$blockScrolling: true}}
                    setOptions={{
                        showGutter: this.props.showGutter,
                        showInvisibles: this.props.showInvisibles,
                        displayIndentGuides: this.props.displayIndentGuides,
                        highlightActiveLine: this.props.highlightActiveLine
                    }}
                />
            </div>
        );
    }
}

export default Editor
