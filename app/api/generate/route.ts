import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        const { prompt, temperature, maxLength } = await req.json()

        console.log("Sending data to Python API:"); // In dữ liệu trước khi gửi
        console.log("Prompt:", prompt);
        console.log("Temperature:", temperature);
        console.log("Max Length:", maxLength);

        // Gọi đến API Python
        const response = await fetch('http://localhost:5000/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt, temperature, maxLength }),
        })

        const data = await response.json()
        return NextResponse.json({ poem: data.poem })
    } catch (error) {
        console.error("Error generating poem:", error)
        return NextResponse.json({ error: "Failed to generate poem" }, { status: 500 })
    }
}