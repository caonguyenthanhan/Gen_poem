"use client"

import { useState } from "react"

export default function PoemGenerator() {
    const [prompt, setPrompt] = useState("Học học nữa học mãi");
    const [generatedPoem, setGeneratedPoem] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);

    // Model parameters
    const [temperature, setTemperature] = useState(0.8);
    const [maxLength, setMaxLength] = useState(50);

    const generatePoem = async () => {
        setIsGenerating(true);
        try {
            const response = await fetch('http://localhost:5000/generate', { // Thay đổi URL nếu cần
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prompt: prompt,
                    temperature: temperature,
                    maxLength: maxLength,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setGeneratedPoem(data.poem); // Cập nhật với dữ liệu từ API
        } catch (error) {
            console.error("Error generating poem:", error);
            // Xử lý lỗi (ví dụ: hiển thị thông báo cho người dùng)
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-8">Vietnamese Poem Generator</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="border rounded-lg p-6 shadow-sm">
                    <h2 className="text-xl font-semibold mb-4">Input Parameters</h2>
                    <p className="text-sm text-gray-600 mb-4">Enter a prompt and adjust generation parameters</p>

                    <div className="space-y-4">
                        <div>
                            <label htmlFor="prompt" className="block text-sm font-medium mb-1">
                                Prompt
                            </label>
                            <input
                                id="prompt"
                                type="text"
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                placeholder="Enter your prompt..."
                                className="w-full p-2 border rounded-md"
                            />
                            <p className="text-sm text-gray-500 mt-1">
                                Enter a few words to start your poem (e.g., "Học học nữa học mãi")
                            </p>
                        </div>

                        <div>
                            <label htmlFor="temperature" className="block text-sm font-medium mb-1">
                                Temperature: {temperature}
                            </label>
                            <input
                                id="temperature"
                                type="range"
                                min="0.1"
                                max="1.5"
                                step="0.1"
                                value={temperature}
                                onChange={(e) => setTemperature(Number.parseFloat(e.target.value))}
                                className="w-full"
                            />
                            <p className="text-sm text-gray-500 mt-1">
                                Controls randomness: Lower values are more deterministic, higher values more creative
                            </p>
                        </div>

                        <div>
                            <label htmlFor="maxLength" className="block text-sm font-medium mb-1">
                                Max Length: {maxLength}
                            </label>
                            <input
                                id="maxLength"
                                type="range"
                                min="10"
                                max="100"
                                step="5"
                                value={maxLength}
                                onChange={(e) => setMaxLength(Number.parseInt(e.target.value))}
                                className="w-full"
                            />
                            <p className="text-sm text-gray-500 mt-1">Maximum number of tokens to generate</p>
                        </div>
                    </div>

                    <button
                        onClick={generatePoem}
                        disabled={isGenerating}
                        className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-blue-300"
                    >
                        {isGenerating ? "Generating..." : "Generate Poem"}
                    </button>
                </div>

                {/* Output Section */}
                <div className="border rounded-lg p-6 shadow-sm">
                    <h2 className="text-xl font-semibold mb-4">Generated Poem</h2>
                    <p className="text-sm text-gray-600 mb-4">Your Vietnamese five-word poem will appear here</p>

                    <div className="bg-gray-100 p-4 rounded-md min-h-[300px] whitespace-pre-line">
                        {generatedPoem ? (
                            generatedPoem.split("\n").map((line, index) => (
                                <p key={index} className="mb-2">
                                    {line}
                                </p>
                            ))
                        ) : (
                            <p className="text-gray-500 italic">Your poem will appear here after generation...</p>
                        )}
                    </div>

                    <div className="flex justify-between mt-4">
                        <button
                            onClick={() => setGeneratedPoem("")}
                            disabled={!generatedPoem || isGenerating}
                            className="border border-gray-300 py-2 px-4 rounded-md hover:bg-gray-100 disabled:opacity-50"
                        >
                            Clear
                        </button>
                        <button
                            onClick={() => {
                                if (generatedPoem) {
                                    navigator.clipboard.writeText(generatedPoem);
                                    alert("Poem copied to clipboard!");
                                }
                            }}
                            disabled={!generatedPoem || isGenerating}
                            className="border border-gray-300 py-2 px-4 rounded-md hover:bg-gray-100 disabled:opacity-50"
                        >
                            Copy to Clipboard
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}