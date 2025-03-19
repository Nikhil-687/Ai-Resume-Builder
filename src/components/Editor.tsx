'use client';

import { useState } from 'react';
import { compileLogic } from '@/utils/compileLogic';

const Editor = () => {
    const [commands, setCommands] = useState<string>(`\\author{Ishika Deshpande}\\newline
\\color{green}{Welcome to My Resume}\\newline
\\bold{Skills: React, Node.js, MongoDB}\\newline
\\link{https://example.com}{Portfolio Link}\\newline
\\font{Courier} Custom Font Example
`);

    const [compiledOutput, setCompiledOutput] = useState<string>('');

    const handleCompile = () => {
        setCompiledOutput(compileLogic(commands));
    };

    return (
        <div className="h-screen flex flex-col bg-[#1e1e1e] text-white p-4">
            {/* Top Bar with Compile Button */}
            <div className="flex justify-end mb-2">
                <button
                    onClick={handleCompile}
                    className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-4 py-2 rounded-md text-sm"
                >
                    Compile
                </button>
            </div>

            {/* Main Editor Area */}
            <div className="flex flex-grow gap-4">
                {/* Left Side - Command Editor */}
                <div className="w-1/2 p-4 border border-[#2d2d2d] rounded-md bg-[#282828]">
                    <h2 className="text-lg font-bold text-green-400 mb-2">Command Editor</h2>
                    <textarea
                        value={commands}
                        onChange={(e) => setCommands(e.target.value)}
                        className="w-full h-[90%] p-3 rounded-md bg-[#1e1e1e] text-green-400 border border-[#3b3b3b] outline-none resize-none"
                    />
                </div>

                {/* Right Side - Compiled Preview */}
                <div className="w-1/2 p-4 border border-[#2d2d2d] rounded-md bg-[#282828]">
                    <h2 className="text-lg font-bold text-green-400 mb-2">Preview</h2>
                    <div
                        className="w-full h-[90%] p-3 rounded-md bg-[#1e1e1e] text-white border border-[#3b3b3b] overflow-auto"
                        dangerouslySetInnerHTML={{ __html: compiledOutput }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Editor;


