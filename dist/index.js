require('./sourcemap-register.js');module.exports=(()=>{"use strict";var e={786:function(e,t,i){var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i in e)if(Object.hasOwnProperty.call(e,i))t[i]=e[i];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const r=n(i(87));const s=i(392);function issueCommand(e,t,i){const n=new Command(e,t,i);process.stdout.write(n.toString()+r.EOL)}t.issueCommand=issueCommand;function issue(e,t=""){issueCommand(e,{},t)}t.issue=issue;const o="::";class Command{constructor(e,t,i){if(!e){e="missing.command"}this.command=e;this.properties=t;this.message=i}toString(){let e=o+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";let t=true;for(const i in this.properties){if(this.properties.hasOwnProperty(i)){const n=this.properties[i];if(n){if(t){t=false}else{e+=","}e+=`${i}=${escapeProperty(n)}`}}}}e+=`${o}${escapeData(this.message)}`;return e}}function escapeData(e){return s.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function escapeProperty(e){return s.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}},147:function(e,t,i){var n=this&&this.__awaiter||function(e,t,i,n){function adopt(e){return e instanceof i?e:new i(function(t){t(e)})}return new(i||(i=Promise))(function(i,r){function fulfilled(e){try{step(n.next(e))}catch(e){r(e)}}function rejected(e){try{step(n["throw"](e))}catch(e){r(e)}}function step(e){e.done?i(e.value):adopt(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())})};var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i in e)if(Object.hasOwnProperty.call(e,i))t[i]=e[i];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const s=i(786);const o=i(105);const c=i(392);const u=r(i(87));const l=r(i(622));var d;(function(e){e[e["Success"]=0]="Success";e[e["Failure"]=1]="Failure"})(d=t.ExitCode||(t.ExitCode={}));function exportVariable(e,t){const i=c.toCommandValue(t);process.env[e]=i;const n=process.env["GITHUB_ENV"]||"";if(n){const t="_GitHubActionsFileCommandDelimeter_";const n=`${e}<<${t}${u.EOL}${i}${u.EOL}${t}`;o.issueCommand("ENV",n)}else{s.issueCommand("set-env",{name:e},i)}}t.exportVariable=exportVariable;function setSecret(e){s.issueCommand("add-mask",{},e)}t.setSecret=setSecret;function addPath(e){const t=process.env["GITHUB_PATH"]||"";if(t){o.issueCommand("PATH",e)}else{s.issueCommand("add-path",{},e)}process.env["PATH"]=`${e}${l.delimiter}${process.env["PATH"]}`}t.addPath=addPath;function getInput(e,t){const i=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!i){throw new Error(`Input required and not supplied: ${e}`)}return i.trim()}t.getInput=getInput;function setOutput(e,t){s.issueCommand("set-output",{name:e},t)}t.setOutput=setOutput;function setCommandEcho(e){s.issue("echo",e?"on":"off")}t.setCommandEcho=setCommandEcho;function setFailed(e){process.exitCode=d.Failure;error(e)}t.setFailed=setFailed;function isDebug(){return process.env["RUNNER_DEBUG"]==="1"}t.isDebug=isDebug;function debug(e){s.issueCommand("debug",{},e)}t.debug=debug;function error(e){s.issue("error",e instanceof Error?e.toString():e)}t.error=error;function warning(e){s.issue("warning",e instanceof Error?e.toString():e)}t.warning=warning;function info(e){process.stdout.write(e+u.EOL)}t.info=info;function startGroup(e){s.issue("group",e)}t.startGroup=startGroup;function endGroup(){s.issue("endgroup")}t.endGroup=endGroup;function group(e,t){return n(this,void 0,void 0,function*(){startGroup(e);let i;try{i=yield t()}finally{endGroup()}return i})}t.group=group;function saveState(e,t){s.issueCommand("save-state",{name:e},t)}t.saveState=saveState;function getState(e){return process.env[`STATE_${e}`]||""}t.getState=getState},105:function(e,t,i){var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i in e)if(Object.hasOwnProperty.call(e,i))t[i]=e[i];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const r=n(i(747));const s=n(i(87));const o=i(392);function issueCommand(e,t){const i=process.env[`GITHUB_${e}`];if(!i){throw new Error(`Unable to find environment variable for file command ${e}`)}if(!r.existsSync(i)){throw new Error(`Missing file at path: ${i}`)}r.appendFileSync(i,`${o.toCommandValue(t)}${s.EOL}`,{encoding:"utf8"})}t.issueCommand=issueCommand},392:(e,t)=>{Object.defineProperty(t,"__esModule",{value:true});function toCommandValue(e){if(e===null||e===undefined){return""}else if(typeof e==="string"||e instanceof String){return e}return JSON.stringify(e)}t.toCommandValue=toCommandValue},716:function(e,t,i){var n=this&&this.__awaiter||function(e,t,i,n){function adopt(e){return e instanceof i?e:new i(function(t){t(e)})}return new(i||(i=Promise))(function(i,r){function fulfilled(e){try{step(n.next(e))}catch(e){r(e)}}function rejected(e){try{step(n["throw"](e))}catch(e){r(e)}}function step(e){e.done?i(e.value):adopt(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())})};var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i in e)if(Object.hasOwnProperty.call(e,i))t[i]=e[i];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const s=r(i(779));function exec(e,t,i){return n(this,void 0,void 0,function*(){const n=s.argStringToArray(e);if(n.length===0){throw new Error(`Parameter 'commandLine' cannot be null or empty.`)}const r=n[0];t=n.slice(1).concat(t||[]);const o=new s.ToolRunner(r,t,i);return o.exec()})}t.exec=exec},779:function(e,t,i){var n=this&&this.__awaiter||function(e,t,i,n){function adopt(e){return e instanceof i?e:new i(function(t){t(e)})}return new(i||(i=Promise))(function(i,r){function fulfilled(e){try{step(n.next(e))}catch(e){r(e)}}function rejected(e){try{step(n["throw"](e))}catch(e){r(e)}}function step(e){e.done?i(e.value):adopt(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())})};var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i in e)if(Object.hasOwnProperty.call(e,i))t[i]=e[i];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const s=r(i(87));const o=r(i(614));const c=r(i(129));const u=r(i(622));const l=r(i(977));const d=r(i(62));const f=process.platform==="win32";class ToolRunner extends o.EventEmitter{constructor(e,t,i){super();if(!e){throw new Error("Parameter 'toolPath' cannot be null or empty.")}this.toolPath=e;this.args=t||[];this.options=i||{}}_debug(e){if(this.options.listeners&&this.options.listeners.debug){this.options.listeners.debug(e)}}_getCommandString(e,t){const i=this._getSpawnFileName();const n=this._getSpawnArgs(e);let r=t?"":"[command]";if(f){if(this._isCmdFile()){r+=i;for(const e of n){r+=` ${e}`}}else if(e.windowsVerbatimArguments){r+=`"${i}"`;for(const e of n){r+=` ${e}`}}else{r+=this._windowsQuoteCmdArg(i);for(const e of n){r+=` ${this._windowsQuoteCmdArg(e)}`}}}else{r+=i;for(const e of n){r+=` ${e}`}}return r}_processLineBuffer(e,t,i){try{let n=t+e.toString();let r=n.indexOf(s.EOL);while(r>-1){const e=n.substring(0,r);i(e);n=n.substring(r+s.EOL.length);r=n.indexOf(s.EOL)}t=n}catch(e){this._debug(`error processing line. Failed with error ${e}`)}}_getSpawnFileName(){if(f){if(this._isCmdFile()){return process.env["COMSPEC"]||"cmd.exe"}}return this.toolPath}_getSpawnArgs(e){if(f){if(this._isCmdFile()){let t=`/D /S /C "${this._windowsQuoteCmdArg(this.toolPath)}`;for(const i of this.args){t+=" ";t+=e.windowsVerbatimArguments?i:this._windowsQuoteCmdArg(i)}t+='"';return[t]}}return this.args}_endsWith(e,t){return e.endsWith(t)}_isCmdFile(){const e=this.toolPath.toUpperCase();return this._endsWith(e,".CMD")||this._endsWith(e,".BAT")}_windowsQuoteCmdArg(e){if(!this._isCmdFile()){return this._uvQuoteCmdArg(e)}if(!e){return'""'}const t=[" ","\t","&","(",")","[","]","{","}","^","=",";","!","'","+",",","`","~","|","<",">",'"'];let i=false;for(const n of e){if(t.some(e=>e===n)){i=true;break}}if(!i){return e}let n='"';let r=true;for(let t=e.length;t>0;t--){n+=e[t-1];if(r&&e[t-1]==="\\"){n+="\\"}else if(e[t-1]==='"'){r=true;n+='"'}else{r=false}}n+='"';return n.split("").reverse().join("")}_uvQuoteCmdArg(e){if(!e){return'""'}if(!e.includes(" ")&&!e.includes("\t")&&!e.includes('"')){return e}if(!e.includes('"')&&!e.includes("\\")){return`"${e}"`}let t='"';let i=true;for(let n=e.length;n>0;n--){t+=e[n-1];if(i&&e[n-1]==="\\"){t+="\\"}else if(e[n-1]==='"'){i=true;t+="\\"}else{i=false}}t+='"';return t.split("").reverse().join("")}_cloneExecOptions(e){e=e||{};const t={cwd:e.cwd||process.cwd(),env:e.env||process.env,silent:e.silent||false,windowsVerbatimArguments:e.windowsVerbatimArguments||false,failOnStdErr:e.failOnStdErr||false,ignoreReturnCode:e.ignoreReturnCode||false,delay:e.delay||1e4};t.outStream=e.outStream||process.stdout;t.errStream=e.errStream||process.stderr;return t}_getSpawnOptions(e,t){e=e||{};const i={};i.cwd=e.cwd;i.env=e.env;i["windowsVerbatimArguments"]=e.windowsVerbatimArguments||this._isCmdFile();if(e.windowsVerbatimArguments){i.argv0=`"${t}"`}return i}exec(){return n(this,void 0,void 0,function*(){if(!d.isRooted(this.toolPath)&&(this.toolPath.includes("/")||f&&this.toolPath.includes("\\"))){this.toolPath=u.resolve(process.cwd(),this.options.cwd||process.cwd(),this.toolPath)}this.toolPath=yield l.which(this.toolPath,true);return new Promise((e,t)=>{this._debug(`exec tool: ${this.toolPath}`);this._debug("arguments:");for(const e of this.args){this._debug(`   ${e}`)}const i=this._cloneExecOptions(this.options);if(!i.silent&&i.outStream){i.outStream.write(this._getCommandString(i)+s.EOL)}const n=new ExecState(i,this.toolPath);n.on("debug",e=>{this._debug(e)});const r=this._getSpawnFileName();const o=c.spawn(r,this._getSpawnArgs(i),this._getSpawnOptions(this.options,r));const u="";if(o.stdout){o.stdout.on("data",e=>{if(this.options.listeners&&this.options.listeners.stdout){this.options.listeners.stdout(e)}if(!i.silent&&i.outStream){i.outStream.write(e)}this._processLineBuffer(e,u,e=>{if(this.options.listeners&&this.options.listeners.stdline){this.options.listeners.stdline(e)}})})}const l="";if(o.stderr){o.stderr.on("data",e=>{n.processStderr=true;if(this.options.listeners&&this.options.listeners.stderr){this.options.listeners.stderr(e)}if(!i.silent&&i.errStream&&i.outStream){const t=i.failOnStdErr?i.errStream:i.outStream;t.write(e)}this._processLineBuffer(e,l,e=>{if(this.options.listeners&&this.options.listeners.errline){this.options.listeners.errline(e)}})})}o.on("error",e=>{n.processError=e.message;n.processExited=true;n.processClosed=true;n.CheckComplete()});o.on("exit",e=>{n.processExitCode=e;n.processExited=true;this._debug(`Exit code ${e} received from tool '${this.toolPath}'`);n.CheckComplete()});o.on("close",e=>{n.processExitCode=e;n.processExited=true;n.processClosed=true;this._debug(`STDIO streams have closed for tool '${this.toolPath}'`);n.CheckComplete()});n.on("done",(i,n)=>{if(u.length>0){this.emit("stdline",u)}if(l.length>0){this.emit("errline",l)}o.removeAllListeners();if(i){t(i)}else{e(n)}});if(this.options.input){if(!o.stdin){throw new Error("child process missing stdin")}o.stdin.end(this.options.input)}})})}}t.ToolRunner=ToolRunner;function argStringToArray(e){const t=[];let i=false;let n=false;let r="";function append(e){if(n&&e!=='"'){r+="\\"}r+=e;n=false}for(let s=0;s<e.length;s++){const o=e.charAt(s);if(o==='"'){if(!n){i=!i}else{append(o)}continue}if(o==="\\"&&n){append(o);continue}if(o==="\\"&&i){n=true;continue}if(o===" "&&!i){if(r.length>0){t.push(r);r=""}continue}append(o)}if(r.length>0){t.push(r.trim())}return t}t.argStringToArray=argStringToArray;class ExecState extends o.EventEmitter{constructor(e,t){super();this.processClosed=false;this.processError="";this.processExitCode=0;this.processExited=false;this.processStderr=false;this.delay=1e4;this.done=false;this.timeout=null;if(!t){throw new Error("toolPath must not be empty")}this.options=e;this.toolPath=t;if(e.delay){this.delay=e.delay}}CheckComplete(){if(this.done){return}if(this.processClosed){this._setResult()}else if(this.processExited){this.timeout=setTimeout(ExecState.HandleTimeout,this.delay,this)}}_debug(e){this.emit("debug",e)}_setResult(){let e;if(this.processExited){if(this.processError){e=new Error(`There was an error when attempting to execute the process '${this.toolPath}'. This may indicate the process failed to start. Error: ${this.processError}`)}else if(this.processExitCode!==0&&!this.options.ignoreReturnCode){e=new Error(`The process '${this.toolPath}' failed with exit code ${this.processExitCode}`)}else if(this.processStderr&&this.options.failOnStdErr){e=new Error(`The process '${this.toolPath}' failed because one or more lines were written to the STDERR stream`)}}if(this.timeout){clearTimeout(this.timeout);this.timeout=null}this.done=true;this.emit("done",e,this.processExitCode)}static HandleTimeout(e){if(e.done){return}if(!e.processClosed&&e.processExited){const t=`The STDIO streams did not close within ${e.delay/1e3} seconds of the exit event from process '${e.toolPath}'. This may indicate a child process inherited the STDIO streams and has not yet exited.`;e._debug(t)}e._setResult()}}},62:function(e,t,i){var n=this&&this.__awaiter||function(e,t,i,n){function adopt(e){return e instanceof i?e:new i(function(t){t(e)})}return new(i||(i=Promise))(function(i,r){function fulfilled(e){try{step(n.next(e))}catch(e){r(e)}}function rejected(e){try{step(n["throw"](e))}catch(e){r(e)}}function step(e){e.done?i(e.value):adopt(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())})};var r;Object.defineProperty(t,"__esModule",{value:true});const s=i(357);const o=i(747);const c=i(622);r=o.promises,t.chmod=r.chmod,t.copyFile=r.copyFile,t.lstat=r.lstat,t.mkdir=r.mkdir,t.readdir=r.readdir,t.readlink=r.readlink,t.rename=r.rename,t.rmdir=r.rmdir,t.stat=r.stat,t.symlink=r.symlink,t.unlink=r.unlink;t.IS_WINDOWS=process.platform==="win32";function exists(e){return n(this,void 0,void 0,function*(){try{yield t.stat(e)}catch(e){if(e.code==="ENOENT"){return false}throw e}return true})}t.exists=exists;function isDirectory(e,i=false){return n(this,void 0,void 0,function*(){const n=i?yield t.stat(e):yield t.lstat(e);return n.isDirectory()})}t.isDirectory=isDirectory;function isRooted(e){e=normalizeSeparators(e);if(!e){throw new Error('isRooted() parameter "p" cannot be empty')}if(t.IS_WINDOWS){return e.startsWith("\\")||/^[A-Z]:/i.test(e)}return e.startsWith("/")}t.isRooted=isRooted;function mkdirP(e,i=1e3,r=1){return n(this,void 0,void 0,function*(){s.ok(e,"a path argument must be provided");e=c.resolve(e);if(r>=i)return t.mkdir(e);try{yield t.mkdir(e);return}catch(n){switch(n.code){case"ENOENT":{yield mkdirP(c.dirname(e),i,r+1);yield t.mkdir(e);return}default:{let i;try{i=yield t.stat(e)}catch(e){throw n}if(!i.isDirectory())throw n}}}})}t.mkdirP=mkdirP;function tryGetExecutablePath(e,i){return n(this,void 0,void 0,function*(){let n=undefined;try{n=yield t.stat(e)}catch(t){if(t.code!=="ENOENT"){console.log(`Unexpected error attempting to determine if executable file exists '${e}': ${t}`)}}if(n&&n.isFile()){if(t.IS_WINDOWS){const t=c.extname(e).toUpperCase();if(i.some(e=>e.toUpperCase()===t)){return e}}else{if(isUnixExecutable(n)){return e}}}const r=e;for(const s of i){e=r+s;n=undefined;try{n=yield t.stat(e)}catch(t){if(t.code!=="ENOENT"){console.log(`Unexpected error attempting to determine if executable file exists '${e}': ${t}`)}}if(n&&n.isFile()){if(t.IS_WINDOWS){try{const i=c.dirname(e);const n=c.basename(e).toUpperCase();for(const r of yield t.readdir(i)){if(n===r.toUpperCase()){e=c.join(i,r);break}}}catch(t){console.log(`Unexpected error attempting to determine the actual case of the file '${e}': ${t}`)}return e}else{if(isUnixExecutable(n)){return e}}}}return""})}t.tryGetExecutablePath=tryGetExecutablePath;function normalizeSeparators(e){e=e||"";if(t.IS_WINDOWS){e=e.replace(/\//g,"\\");return e.replace(/\\\\+/g,"\\")}return e.replace(/\/\/+/g,"/")}function isUnixExecutable(e){return(e.mode&1)>0||(e.mode&8)>0&&e.gid===process.getgid()||(e.mode&64)>0&&e.uid===process.getuid()}},977:function(e,t,i){var n=this&&this.__awaiter||function(e,t,i,n){function adopt(e){return e instanceof i?e:new i(function(t){t(e)})}return new(i||(i=Promise))(function(i,r){function fulfilled(e){try{step(n.next(e))}catch(e){r(e)}}function rejected(e){try{step(n["throw"](e))}catch(e){r(e)}}function step(e){e.done?i(e.value):adopt(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});const r=i(129);const s=i(622);const o=i(669);const c=i(62);const u=o.promisify(r.exec);function cp(e,t,i={}){return n(this,void 0,void 0,function*(){const{force:n,recursive:r}=readCopyOptions(i);const o=(yield c.exists(t))?yield c.stat(t):null;if(o&&o.isFile()&&!n){return}const u=o&&o.isDirectory()?s.join(t,s.basename(e)):t;if(!(yield c.exists(e))){throw new Error(`no such file or directory: ${e}`)}const l=yield c.stat(e);if(l.isDirectory()){if(!r){throw new Error(`Failed to copy. ${e} is a directory, but tried to copy without recursive flag.`)}else{yield cpDirRecursive(e,u,0,n)}}else{if(s.relative(e,u)===""){throw new Error(`'${u}' and '${e}' are the same file`)}yield copyFile(e,u,n)}})}t.cp=cp;function mv(e,t,i={}){return n(this,void 0,void 0,function*(){if(yield c.exists(t)){let n=true;if(yield c.isDirectory(t)){t=s.join(t,s.basename(e));n=yield c.exists(t)}if(n){if(i.force==null||i.force){yield rmRF(t)}else{throw new Error("Destination already exists")}}}yield mkdirP(s.dirname(t));yield c.rename(e,t)})}t.mv=mv;function rmRF(e){return n(this,void 0,void 0,function*(){if(c.IS_WINDOWS){try{if(yield c.isDirectory(e,true)){yield u(`rd /s /q "${e}"`)}else{yield u(`del /f /a "${e}"`)}}catch(e){if(e.code!=="ENOENT")throw e}try{yield c.unlink(e)}catch(e){if(e.code!=="ENOENT")throw e}}else{let t=false;try{t=yield c.isDirectory(e)}catch(e){if(e.code!=="ENOENT")throw e;return}if(t){yield u(`rm -rf "${e}"`)}else{yield c.unlink(e)}}})}t.rmRF=rmRF;function mkdirP(e){return n(this,void 0,void 0,function*(){yield c.mkdirP(e)})}t.mkdirP=mkdirP;function which(e,t){return n(this,void 0,void 0,function*(){if(!e){throw new Error("parameter 'tool' is required")}if(t){const t=yield which(e,false);if(!t){if(c.IS_WINDOWS){throw new Error(`Unable to locate executable file: ${e}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also verify the file has a valid extension for an executable file.`)}else{throw new Error(`Unable to locate executable file: ${e}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.`)}}}try{const t=[];if(c.IS_WINDOWS&&process.env.PATHEXT){for(const e of process.env.PATHEXT.split(s.delimiter)){if(e){t.push(e)}}}if(c.isRooted(e)){const i=yield c.tryGetExecutablePath(e,t);if(i){return i}return""}if(e.includes("/")||c.IS_WINDOWS&&e.includes("\\")){return""}const i=[];if(process.env.PATH){for(const e of process.env.PATH.split(s.delimiter)){if(e){i.push(e)}}}for(const n of i){const i=yield c.tryGetExecutablePath(n+s.sep+e,t);if(i){return i}}return""}catch(e){throw new Error(`which failed with message ${e.message}`)}})}t.which=which;function readCopyOptions(e){const t=e.force==null?true:e.force;const i=Boolean(e.recursive);return{force:t,recursive:i}}function cpDirRecursive(e,t,i,r){return n(this,void 0,void 0,function*(){if(i>=255)return;i++;yield mkdirP(t);const n=yield c.readdir(e);for(const s of n){const n=`${e}/${s}`;const o=`${t}/${s}`;const u=yield c.lstat(n);if(u.isDirectory()){yield cpDirRecursive(n,o,i,r)}else{yield copyFile(n,o,r)}}yield c.chmod(t,(yield c.stat(e)).mode)})}function copyFile(e,t,i){return n(this,void 0,void 0,function*(){if((yield c.lstat(e)).isSymbolicLink()){try{yield c.lstat(t);yield c.unlink(t)}catch(e){if(e.code==="EPERM"){yield c.chmod(t,"0666");yield c.unlink(t)}}const i=yield c.readlink(e);yield c.symlink(i,t,c.IS_WINDOWS?"junction":null)}else if(!(yield c.exists(t))||i){yield c.copyFile(e,t)}})}},660:function(e,t,i){var n=this&&this.__awaiter||function(e,t,i,n){function adopt(e){return e instanceof i?e:new i(function(t){t(e)})}return new(i||(i=Promise))(function(i,r){function fulfilled(e){try{step(n.next(e))}catch(e){r(e)}}function rejected(e){try{step(n["throw"](e))}catch(e){r(e)}}function step(e){e.done?i(e.value):adopt(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});t.run=void 0;const r=i(147);const s=i(716);const o=i(977);function run(){return n(this,void 0,void 0,function*(){const e=r.getInput("image-to-push");const t=r.getInput("tag")||"latest";const i=r.getInput("registry");const n=r.getInput("username");const s=r.getInput("password");const c=yield o.which("podman",true);const u=yield execute(c,["images","--format","json"]);if(u.succeeded===false){return Promise.reject(new Error(u.reason))}const l=JSON.parse(u.output);const d=l.filter(i=>i.names&&i.names.find(i=>i.includes(`${e}:${t}`))).map(e=>e.names);if(d.length===0){const i=yield execute(c,["pull",`docker-daemon:${e}:${t}`]);if(i.succeeded===false){return Promise.reject(new Error(`Unable to find the image to push`))}}const f=`${i.replace(/\/$/,"")}:${t}`;const a=yield execute(c,["push","--creds",`${n}:${s}`,`${e}`,`${f}`]);if(a.succeeded===false){return Promise.reject(new Error(a.reason))}})}t.run=run;function execute(e,t){return n(this,void 0,void 0,function*(){let i="";let n="";const r={};r.listeners={stdout:e=>{i+=e.toString()},stderr:e=>{n+=e.toString()}};const o=yield s.exec(e,t,r);if(o===1){return Promise.resolve({succeeded:false,error:n})}return Promise.resolve({succeeded:true,output:i})})}run().catch(r.setFailed)},357:e=>{e.exports=require("assert")},129:e=>{e.exports=require("child_process")},614:e=>{e.exports=require("events")},747:e=>{e.exports=require("fs")},87:e=>{e.exports=require("os")},622:e=>{e.exports=require("path")},669:e=>{e.exports=require("util")}};var t={};function __webpack_require__(i){if(t[i]){return t[i].exports}var n=t[i]={exports:{}};var r=true;try{e[i].call(n.exports,n,n.exports,__webpack_require__);r=false}finally{if(r)delete t[i]}return n.exports}__webpack_require__.ab=__dirname+"/";return __webpack_require__(660)})();
//# sourceMappingURL=index.js.map