export const compileLogic = (commands: string): string => {
    return commands
        .replace(/\\author\{(.*?)\}/g, '<h1>$1</h1>') 
        .replace(/\\color\{(.*?)\}\{(.*?)\}/g, '<span style="color:$1">$2</span>')
        .replace(/\\bold\{(.*?)\}/g, '<b>$1</b>') 
        .replace(/\\link\{(.*?)\}\{(.*?)\}/g, '<a href="$1" target="_blank">$2</a>') 
        .replace(/\\font\{(.*?)\}/g, '<span style="font-family:$1">$1 Font Applied</span>') 
        .replace(/\\size\{(.*?)\}\{(.*?)\}/g, '<span style="font-size:$1">$2</span>') 
        .replace(/\\newline/g, '<br>') 
        .replace(/&nbsp;/g, ' ') 
        .replace(/\s{2,}/g, ' ') 
        .trim();
};
