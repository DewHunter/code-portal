import React, { Component } from 'react'
import AceEditor from 'react-ace';
import EditorSettings from '../constants/editor-settings';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import GearIcon from 'material-ui/svg-icons/action/settings';
import EjectIcon from 'material-ui/svg-icons/action/eject';
import SettingsDrawer from './SettingsDrawer';
import StartSessionDialog from './StartSessionDialog';
import SessionToolbar from './SessionToolbar';
import diff from '../constants/diff';
import applyDiff from '../constants/applyDiff';
import urlObject from '../constants/urlObject';
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

const _id = '?id=';
const _wacks = '//';

class Editor extends Component {
    constructor(props) {
        super(props);
        var u = urlObject();
        console.log(u);
        this.state = {
            urlObj: u,
            peer: undefined,
            conn: undefined,
            value:  "/**\n" +
                    " * This is just a test!\n" +
                    " */\n" +
                    "function sayHello() {\n" +
                    "    console.log('Hello, Welcome to code-portal!');\n" +
                    "}\n",
            showSettingsMenu: false,
            startConnectionDialog: false,
            shareLink: undefined,
            theme: 'monokai',
            mode: "javascript",
            modeErrorMessage: '',
            fontSize: 16,
            wrap: true,
            showGutter: true,
            showInvisibles: false,
            displayIndentLines: true,
            highlightActiveLine: true,
            scrollPassedEnd: true,
            updated: false
        };
    }

    componentDidMount() {
        if (this.state.urlObj.parameters.id !== undefined) {
            this.startPeerConnection2(this.state.urlObj.parameters.id);
            this.setState({shareLink: 'You are connected to your friend!'});
        }
    }

    receiveData = (newData) => {
        if (newData.mode === 'updateMe') {
            this.state.conn.send({left: -1, mode: 'replace', change: this.state.value});
        } else {
            var newVal = applyDiff(newData, this.state.value);
            this.setState({
                value: newVal
            });
        }
    }
    
    startPeerConnection = () => {
        var peer = new Peer({key: EditorSettings.peerKey});
        this.setState({peer: peer});
        var setId = (id) => {
            this.setState({
                shareLink: this.state.urlObj.protocol.concat(_wacks, this.state.urlObj.host, _id, id)
            });
        }
        peer.on('open', function(id) {
            console.log('My peer ID is: ' + id);
            setId(id);
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
            });
            addConn(conn);
        });
    }

    startPeerConnection2 = (friendId) => {
        var acceptData = (data) => {
            this.receiveData(data);
        }
        var peer = new Peer({key: EditorSettings.peerKey});
        this.setState({peer: peer});
        peer.on('open', (id) => {
            console.log('My peer ID is: ' + id);
        });
        peer.on('error', (err) => {
            console.log(err);
            this.state.peer.destroy();
            this.setState({peer: undefined, conn: undefined, shareLink: undefined});
        });
        var conn = peer.connect(friendId);
        this.setState({conn: conn});
        conn.on('open', () => {
            conn.on('data', function(data) {
                acceptData(data);
            });
            conn.send({mode: 'updateMe'});
        });
        conn.on('error', (err) => {
            console.log(err);
            this.state.peer.destroy();
            this.setState({peer: undefined, conn: undefined, shareLink: undefined});
        });
    }

    updateStateValue = (newValue) => {
        if (this.state.conn !== undefined) {
            this.state.conn.send(diff(this.state.value, newValue));
        }
        this.setState({
            value: newValue
        });
    }

    render() {
        const isLive = this.state.peer !== undefined;
        const goSessionDialog = !isLive ?
            <div><FloatingActionButton
                    backgroundColor='#8BC34A'
                    style={{
                        margin: 12,
                        position: 'relative',
                        top: '250px',
                        left: '800px'
                    }}
                    onTouchTap={()=>this.setState({startConnectionDialog: true})}>
                        <EjectIcon />
            </FloatingActionButton>
            <StartSessionDialog
                open={this.state.startConnectionDialog}
                onAbort={()=>this.setState({startConnectionDialog: false})}
                onGo={()=>{
                    this.setState({startConnectionDialog: false});
                    this.startPeerConnection();
                }}
            /></div>: <div/>;
        const sessionToolbar = isLive ?
            <SessionToolbar
                shareLink={this.state.shareLink}
                stopSession={() => {
                    this.state.peer.destroy();
                    this.setState({peer: undefined, conn: undefined, shareLink: undefined});
                }}
            /> : <div/>;

        if (isLive && this.refs.editor !== undefined) {
            this.refs.editor.refs.editor.style.top = '106px'; // lmao this hack
        } else if (this.refs.editor !== undefined) {
            this.refs.editor.refs.editor.style.top = '50px';
        }

        return (
            <div>
                {sessionToolbar}
                <AceEditor ref="editor"
                    mode={this.state.mode}
                    theme={this.state.theme}
                    name="editor-unique"
                    fontSize={this.state.fontSize}
                    height="inherit"
                    width="inherit"
                    value={this.state.value}
                    wrapEnabled={this.state.wrap}
                    onChange={this.updateStateValue}
                    editorProps={{$blockScrolling: true}}
                    setOptions={{
                        showGutter: this.state.showGutter,
                        showInvisibles: this.state.showInvisibles,
                        displayIndentGuides: this.state.displayIndentGuides,
                        highlightActiveLine: this.state.highlightActiveLine,
                        scrollPastEnd: this.state.scrollPassedEnd
                    }}
                />
                <SettingsDrawer
                    open={this.state.showSettingsMenu}
                    onCloseDrawer={() => this.setState({showSettingsMenu: false})}
                    mode={this.state.mode}
                    onModeEnter={(chosenRequest, index) => {
                        if (EditorSettings.langs.indexOf(chosenRequest) !== -1) {
                            this.setState({mode: chosenRequest});
                        } else {
                            this.setState({mode: 'javascript'});
                        }
                    }}
                    editorTheme={this.state.theme}
                    onEditorThemeChange={(event, index, value) => {this.setState({theme: value});}}
                    editorWrap={this.state.wrap}
                    onEditorWrapToggle={(event, isInputChecked) => {this.setState({wrap: isInputChecked});}}
                    editorDisplayIndentGuides={this.state.displayIndentLines}
                    onIndentLinesToggle={(event, isInputChecked) => {this.setState({displayIndentLines: isInputChecked});}}
                    editorHighlightActiveLine={this.state.highlightActiveLine}
                    onHighlightLineToggle={(event, isInputChecked) => {this.setState({highlightActiveLine: isInputChecked});}}
                    editorShowInvisibles={this.state.showInvisibles}
                    onShowInvisiblesToggle={(event, isInputChecked) => {this.setState({showInvisibles: isInputChecked});}}
                    editorShowGutter={this.state.showGutter}
                    onShowGutterToggle={(event, isInputChecked) => {this.setState({showGutter: isInputChecked});}}
                />
                <FloatingActionButton
                    style={{
                        margin: 12,
                        position: 'relative',
                        top: '40px',
                        left: '800px'
                    }}
                    onTouchTap={()=>this.setState({showSettingsMenu: true})}>
                        <GearIcon />
                </FloatingActionButton>
                {goSessionDialog}
            </div>
        );
    }
}

export default Editor;
