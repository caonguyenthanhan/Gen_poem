# Gen Poem - Ứng dụng Tạo Thơ Việt Nam bằng AI

Ứng dụng web tạo thơ Việt Nam tự động sử dụng mô hình GPT-2 được huấn luyện đặc biệt cho ngôn ngữ tiếng Việt.

## Tính năng chính

- Tạo thơ Việt Nam tự động dựa trên prompt người dùng
- Giao diện người dùng hiện đại với Next.js và Tailwind CSS
- Hỗ trợ chế độ sáng/tối
- API backend với Flask và mô hình AI
- Tùy chỉnh nhiệt độ và độ dài của bài thơ

## Công nghệ sử dụng

### Frontend
- Next.js 15.1.0
- React 19
- Tailwind CSS
- Radix UI Components
- TypeScript

### Backend
- Flask
- Transformers (GPT-2)
- PyTorch
- Flask-CORS

## Cài đặt và Chạy

### Yêu cầu hệ thống
- Node.js (phiên bản mới nhất)
- Python 3.8+
- npm hoặc yarn

### Tải Model AI
1. Tải thư mục `vietnamese_poem_generator` từ link sau:
   [LINK_DRIVE_MODEL]
2. Giải nén và đặt thư mục `vietnamese_poem_generator` vào thư mục gốc của dự án

### Cài đặt Frontend
```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev
```

### Cài đặt Backend
```bash
# Tạo và kích hoạt môi trường ảo
python setup_env.py

# Chạy API server
npm run server
```

## Cấu trúc dự án

```
gen-poem/
├── app/                    # Next.js frontend
│   ├── api/               # API routes
│   ├── components/        # React components
│   └── page.tsx          # Trang chủ
├── lib/                   # Utility functions
├── public/               # Static assets
├── vietnamese_poem_generator/  # Mô hình AI
├── poem_api.py           # Flask API server
├── requirements.txt      # Python dependencies
└── package.json         # Node.js dependencies
```

## Sử dụng

1. Truy cập ứng dụng tại `http://localhost:3000`
2. Nhập prompt (gợi ý) cho bài thơ
3. Điều chỉnh các tham số:
   - Nhiệt độ: Kiểm soát độ sáng tạo (0.1 - 1.0)
   - Độ dài: Số từ tối đa trong bài thơ
4. Nhấn "Tạo thơ" để tạo bài thơ mới

## API Endpoints

### POST /api/generate
Tạo thơ mới dựa trên prompt

**Request Body:**
```json
{
  "prompt": "string",
  "temperature": number,
  "maxLength": number
}
```

**Response:**
```json
{
  "poem": "string"
}
```

## Phát triển

### Frontend Development
```bash
npm run dev
```

### Backend Development
```bash
npm run server
```

### Linting
```bash
npm run lint
```

## Giấy phép

MIT License

## Tác giả

Cao Nguyễn Thành An
- Email: caonguyenthanhan.aaa@gmail.com
- GitHub: [@caonguyenthanhan](https://github.com/caonguyenthanhan)
