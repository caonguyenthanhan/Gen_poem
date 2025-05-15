# Triển khai Google Cloud Platform

## Cấu trúc triển khai
```
GCP/
├── backend/                 # Backend deployment
│   ├── Dockerfile          # Backend container config
│   └── cloud-config.yaml   # VM instance config
├── frontend/               # Frontend deployment
│   ├── Dockerfile         # Frontend container config
│   └── cloud-run.yaml     # Cloud Run config
├── storage/               # Cloud Storage config
│   └── bucket-config.yaml # Bucket configuration
└── terraform/            # Infrastructure as Code
    ├── main.tf           # Main Terraform config
    ├── variables.tf      # Terraform variables
    └── outputs.tf        # Terraform outputs
```

## Các thành phần

### 1. Cloud Storage
- Bucket: `gpt2_viet_poem_final_pytorch`
- Mục đích: Lưu trữ model và dữ liệu
- Cấu hình: Private access, versioning enabled

### 2. Backend (Compute Engine VM)
- Instance: e2-medium (2 vCPU, 4GB RAM)
- OS: Ubuntu 20.04 LTS
- Docker container chạy Flask API
- Auto-scaling enabled
- Load balancer

### 3. Frontend (Cloud Run)
- Next.js container
- Auto-scaling
- HTTPS enabled
- Custom domain support

## Hướng dẫn triển khai

1. Cài đặt Google Cloud SDK
2. Khởi tạo project và enable APIs
3. Tạo bucket storage
4. Triển khai backend VM
5. Triển khai frontend container
6. Cấu hình networking và security

## Chi phí ước tính
- Compute Engine: ~$50-100/month
- Cloud Storage: ~$10-20/month
- Cloud Run: ~$20-30/month
- Network: ~$10-20/month

Tổng: ~$90-170/month 