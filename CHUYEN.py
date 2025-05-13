from transformers import GPT2LMHeadModel, GPT2Tokenizer

# Đường dẫn đến thư mục chứa mô hình của bạn
model_dir = "./vietnamese_poem_generator/gpt2_viet_poem_final"
print(f"model_dir: {model_dir}")  # In đường dẫn

# Load model
print("Loading model...")
model = GPT2LMHeadModel.from_pretrained(model_dir)
print("Model loaded.")

# Đường dẫn để lưu mô hình ở định dạng PyTorch
output_dir = "./vietnamese_poem_generator/gpt2_viet_poem_final_pytorch"  # Tạo thư mục này nếu nó chưa tồn tại
print(f"output_dir: {output_dir}")  # In đường dẫn

# Lưu model
print("Saving model...")
model.save_pretrained(output_dir)
print("Model saved.")

# Load tokenizer (nếu bạn chưa có)
print("Loading tokenizer...")
tokenizer = GPT2Tokenizer.from_pretrained(model_dir)
print("Tokenizer loaded.")

# Lưu tokenizer
print("Saving tokenizer...")
tokenizer.save_pretrained(output_dir)
print("Tokenizer saved.")

print(f"Mô hình đã được chuyển đổi và lưu tại: {output_dir}")