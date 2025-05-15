# Vietnamese Poem Generator

Ứng dụng tạo thơ tiếng Việt tự động sử dụng mô hình ngôn ngữ GPT-2.

## Tổng quan

Dự án này sử dụng mô hình GPT-2 được fine-tune trên tập dữ liệu thơ tiếng Việt để tạo ra những bài thơ tự động. Ứng dụng bao gồm:
- Backend API (Flask) xử lý logic tạo thơ
- Frontend (Next.js) cung cấp giao diện người dùng
- Mô hình ML được lưu trữ trên Google Cloud Storage

## Nguồn dữ liệu
Dữ liệu huấn luyện được thu thập từ [Thi Viện](https://www.thivien.net/) - một kho thơ Việt Nam phong phú với hàng nghìn bài thơ từ các tác giả nổi tiếng.

## Liên kết Tài nguyên Đồ án

### 1. Mã nguồn GitHub
- Repository chính: https://github.com/caonguyenthanhan/Gen_poem
- Repository triển khai: https://github.com/caonguyenthanhan/Gen_poem_deploy
- Tải dự án (Google Drive): [Link sẽ được cập nhật]

### 2. Google Colab Notebook
- Notebook huấn luyện: https://colab.research.google.com/drive/1JKyXc71GE8skzc6darfMvDIVFN1S0ncK?usp=sharing
- Notebook thử nghiệm: https://colab.research.google.com/drive/1bXXXHiJfC7Nlb5VgIydmbg00xGfeVcoL?usp=sharing

### 3. Demo trực tuyến
- Frontend: https://poem-frontend-service-1072112715772.asia-southeast1.run.app/
- API: https://poem-backend-service-1072112715772.asia-southeast1.run.app/

## Cài đặt và Chạy

### Cách 1: Sử dụng Docker (Khuyến nghị)

1. Cài đặt Docker và Docker Compose
2. Clone repository:
```bash
git clone https://github.com/caonguyenthanhan/Gen_poem.git
cd Gen_poem
```

3. Tải thư mục `vietnamese_poem_generator` từ link sau:
   [https://drive.google.com/drive/folders/1aYpELDht5Pcp60UfgCkZRlF8w5bfSGqk?usp=drive_link](https://drive.google.com/drive/folders/1aYpELDht5Pcp60UfgCkZRlF8w5bfSGqk?usp=drive_link)
   hoặc
   [https://drive.google.com/drive/folders/1-hDOBoKLDCJoSCb3Of5PMpf36NI76gmd?usp=sharing](https://drive.google.com/drive/folders/1-hDOBoKLDCJoSCb3Of5PMpf36NI76gmd?usp=sharing)

4. Giải nén và đặt thư mục `vietnamese_poem_generator` vào thư mục gốc của dự án

5. Chạy ứng dụng:
```bash
cd GCP
docker-compose up --build
```

6. Truy cập ứng dụng tại `http://localhost:3000`

### Cách 2: Cài đặt thủ công

#### Yêu cầu hệ thống
- Python 3.9+
- Node.js 18+
- Docker và Docker Compose
- Google Cloud SDK (cho triển khai)

1. Clone repository:
```bash
git clone https://github.com/caonguyenthanhan/Gen_poem.git
cd Gen_poem
```

2. Cài đặt dependencies:
```bash
# Backend
python -m venv venv
source venv/bin/activate  # Linux/Mac
.\venv\Scripts\activate   # Windows
pip install -r requirements.txt

# Frontend
npm install
```

3. Chạy ứng dụng:
```bash
# Backend
python poem_api.py

# Frontend (terminal mới)
npm run dev
```

4. Truy cập ứng dụng:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8080

## Triển khai

### 1. Triển khai cục bộ (Docker Compose)
```bash
cd GCP
docker-compose up --build
```

### 2. Triển khai lên Google Cloud Platform
Xem hướng dẫn chi tiết trong thư mục [GCP/deployment-guide.md](GCP/deployment-guide.md)

### 3. Triển khai với Terraform
```bash
cd GCP/terraform
terraform init
terraform plan
terraform apply
```

## Cấu trúc dự án
```
gen-poem/
├── backend/                 # Flask API
│   ├── poem_api.py         # API endpoints
│   └── requirements.txt    # Python dependencies
├── frontend/               # Next.js frontend
│   ├── pages/             # React components
│   └── package.json       # Node.js dependencies
├── GCP/                    # Deployment configs
│   ├── backend/           # Backend deployment
│   ├── frontend/          # Frontend deployment
│   └── terraform/         # IaC configs
└── memory-bank/           # Project documentation
```

## API Endpoints

### POST /api/generate
Tạo thơ mới
```json
{
  "prompt": "Chủ đề thơ",
  "max_length": 100,
  "temperature": 0.7
}
```

### GET /api/health
Kiểm tra trạng thái API

## Đóng góp

1. Fork repository
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit thay đổi (`git commit -m 'Add some AmazingFeature'`)
4. Push lên branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## Giấy phép

Dự án này được cấp phép theo MIT License - xem file [LICENSE](LICENSE) để biết thêm chi tiết.

## Liên hệ

- Nguyễn Thanh An - [GitHub](https://github.com/caonguyenthanhan)
- Email: caonguyenthanhan.aaa@gmail.com

## Cảm ơn

- [GPT-2](https://github.com/openai/gpt-2) - Mô hình ngôn ngữ cơ sở
- [Hugging Face Transformers](https://github.com/huggingface/transformers) - Thư viện ML
- [Next.js](https://nextjs.org/) - Framework frontend
- [Flask](https://flask.palletsprojects.com/) - Framework backend
- [Thi Viện](https://www.thivien.net/) - Nguồn dữ liệu thơ
