from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import GPT2LMHeadModel, GPT2Tokenizer
import torch

app = Flask(__name__)
CORS(app) 

# Đường dẫn đến mô hình đã huấn luyện
MODEL_PATH = "./vietnamese_poem_generator/gpt2_viet_poem_final_pytorch"
model = GPT2LMHeadModel.from_pretrained(MODEL_PATH)
tokenizer = GPT2Tokenizer.from_pretrained(MODEL_PATH)
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model.to(device)

def generate_poem(prompt, temperature=0.8, max_length=50):
    inputs = tokenizer(prompt, return_tensors="pt")
    print(f"Tokenized input: {inputs}")  # Debug

    outputs = model.generate(
        inputs["input_ids"],
        attention_mask=inputs["attention_mask"],  # Thêm attention mask
        max_new_tokens=max_length,  # Đặt giới hạn từ mới
        temperature=temperature,
        do_sample=True,  # Bật sampling để nhiệt độ có hiệu lực
        pad_token_id=tokenizer.eos_token_id  # Tránh lỗi thiếu pad token
    )

    return tokenizer.decode(outputs[0], skip_special_tokens=True)



@app.route('/generate', methods=['POST'])
def generate():
    data = request.get_json()
    prompt = data.get('prompt')
    temperature = data.get('temperature', 0.8)
    max_length = data.get('maxLength', 100)

    print("Received data from Next.js:")
    print("Prompt:", prompt)
    print("Temperature:", temperature)
    print("Max Length:", max_length)

    if not prompt:
        return jsonify({'error': 'Prompt is required'}), 400

    poem = generate_poem(prompt, temperature, max_length)
    print("Generated poem:", poem)  # Log kết quả
    return jsonify({'poem': poem})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)