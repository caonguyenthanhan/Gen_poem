# Gen Poem - Ứng dụng Tạo Thơ Việt Nam bằng AI

Ứng dụng web tạo thơ Việt Nam tự động sử dụng mô hình GPT-2 được huấn luyện đặc biệt cho ngôn ngữ tiếng Việt.

## Tính năng chính

- Tạo thơ Việt Nam tự động dựa trên prompt người dùng
- Giao diện người dùng hiện đại với Next.js và Tailwind CSS
- Hỗ trợ chế độ sáng/tối
- API backend với Flask và mô hình AI
- Tùy chỉnh nhiệt độ và độ dài của bài thơ
- Docker containerization cho dễ dàng triển khai

## Công nghệ sử dụng

### Frontend
- Next.js 14.0.4
- React 18
- Tailwind CSS
- Radix UI Components
- TypeScript

### Backend
- Flask 2.3.3
- Transformers (GPT-2)
- PyTorch
- Flask-CORS
- Gunicorn

## Cài đặt và Chạy

### Cách 1: Sử dụng Docker (Khuyến nghị)

1. Cài đặt Docker và Docker Compose
2. Clone repository:
```bash
git clone https://github.com/yourusername/gen-poem.git
cd gen-poem
```

3. Tải thư mục `vietnamese_poem_generator` từ link sau:
   [https://drive.google.com/drive/folders/1aYpELDht5Pcp60UfgCkZRlF8w5bfSGqk?usp=drive_link](https://drive.google.com/drive/folders/1aYpELDht5Pcp60UfgCkZRlF8w5bfSGqk?usp=drive_link)
   hoặc
   [https://drive.google.com/drive/folders/1-hDOBoKLDCJoSCb3Of5PMpf36NI76gmd?usp=sharing](https://drive.google.com/drive/folders/1-hDOBoKLDCJoSCb3Of5PMpf36NI76gmd?usp=sharing)
5. Giải nén và đặt thư mục `vietnamese_poem_generator` vào thư mục gốc của dự án

6. Chạy ứng dụng:
```bash
docker-compose up --build
```

6. Truy cập ứng dụng tại `http://localhost:3000`

### Cách 2: Cài đặt thủ công

#### Yêu cầu hệ thống
- Node.js 18+
- Python 3.8+
- npm hoặc yarn

#### Cài đặt Frontend
```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev
```

#### Cài đặt Backend
```bash
# Tạo và kích hoạt môi trường ảo
python -m venv venv
source venv/bin/activate  # Linux/Mac
.\venv\Scripts\activate   # Windows

# Cài đặt dependencies
pip install -r requirements.txt

# Chạy API server
python poem_api.py
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
├── package.json         # Node.js dependencies
├── Dockerfile.frontend  # Frontend Dockerfile
├── Dockerfile.backend   # Backend Dockerfile
└── docker-compose.yml   # Docker Compose config
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

## Triển khai

### Docker
```bash
# Build và chạy containers
docker-compose up --build

# Chạy ở chế độ detached
docker-compose up -d

# Dừng containers
docker-compose down
```

### GitHub Pages
1. Fork repository
2. Enable GitHub Pages trong repository settings
3. Chọn branch main và thư mục root
4. Truy cập ứng dụng tại `https://yourusername.github.io/gen-poem`

## Giấy phép

MIT License

## Tác giả

- Cao Nguyễn Thành An  
  Email: caonguyenthanhan.aaa@gmail.com  
  GitHub: [@caonguyenthanhan](https://github.com/caonguyenthanhan)

- Cao Thọ Phú Thịnh  
  Email: caothophuthinh@gmail.com  
  GitHub: *(để trống)*

- Trịnh Ngọc Anh Tuyên  
  Email: tuyen07vn@gmail.com  
  GitHub: [tnatuyen](https://github.com/tnatuyen)
