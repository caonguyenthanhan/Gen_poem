# Hướng dẫn triển khai dự án

## Phương pháp triển khai đơn giản nhất

### 1. Sử dụng Google Cloud Shell
```bash
# Clone repository
git clone <repository-url>
cd gen-poem

# Cài đặt Google Cloud SDK
curl https://sdk.cloud.google.com | bash
gcloud init

# Tạo project mới (nếu chưa có)
gcloud projects create poem-generator-<unique-id>
gcloud config set project poem-generator-<unique-id>

# Enable các API cần thiết
gcloud services enable compute.googleapis.com
gcloud services enable storage.googleapis.com
gcloud services enable run.googleapis.com
gcloud services enable containerregistry.googleapis.com

# Tạo service account và tải credentials
gcloud iam service-accounts create poem-deployer
gcloud projects add-iam-policy-binding poem-generator-<unique-id> \
    --member="serviceAccount:poem-deployer@poem-generator-<unique-id>.iam.gserviceaccount.com" \
    --role="roles/owner"
gcloud iam service-accounts keys create credentials.json \
    --iam-account=poem-deployer@poem-generator-<unique-id>.iam.gserviceaccount.com

# Tạo bucket storage
gsutil mb -l asia-southeast1 gs://gpt2_viet_poem_final_pytorch
gsutil cp credentials.json gs://gpt2_viet_poem_final_pytorch/

# Build và push Docker images
gcloud auth configure-docker
docker build -t gcr.io/poem-generator-<unique-id>/poem-backend ./backend
docker build -t gcr.io/poem-generator-<unique-id>/poem-frontend ./frontend
docker push gcr.io/poem-generator-<unique-id>/poem-backend
docker push gcr.io/poem-generator-<unique-id>/poem-frontend

# Triển khai backend
gcloud compute instances create poem-backend-vm \
    --machine-type=e2-medium \
    --zone=asia-southeast1-a \
    --image-family=ubuntu-2004-lts \
    --image-project=ubuntu-os-cloud \
    --metadata-from-file=startup-script=./backend/cloud-config.yaml

# Triển khai frontend
gcloud run deploy poem-frontend \
    --image gcr.io/poem-generator-<unique-id>/poem-frontend \
    --platform managed \
    --region asia-southeast1 \
    --allow-unauthenticated
```

### 2. Sử dụng Terraform (Tự động hóa)

```bash
# Khởi tạo Terraform
cd GCP/terraform
terraform init

# Tạo file terraform.tfvars
cat > terraform.tfvars << EOF
project_id = "poem-generator-<unique-id>"
region = "asia-southeast1"
zone = "asia-southeast1-a"
EOF

# Triển khai
terraform plan
terraform apply
```

### 3. Sử dụng Google Cloud Marketplace

1. Đóng gói ứng dụng thành solution package
2. Đăng ký Google Cloud Marketplace
3. Tạo listing với các thông số:
   - Tên: Vietnamese Poem Generator
   - Mô tả: Ứng dụng tạo thơ tiếng Việt tự động
   - Yêu cầu hệ thống: e2-medium VM
   - Giá: Free tier hoặc Pay-as-you-go

### 4. Sử dụng Docker Compose (Phát triển cục bộ)

```yaml
version: '3'
services:
  backend:
    build: ./backend
    ports:
      - "8080:8080"
    environment:
      - GOOGLE_APPLICATION_CREDENTIALS=/app/credentials.json
      - MODEL_BUCKET=gpt2_viet_poem_final_pytorch
    volumes:
      - ./credentials.json:/app/credentials.json

  frontend:
    build: ./frontend
    ports:
      - "3000:8080"
    environment:
      - NEXT_PUBLIC_API_URL=http://localhost:8080
    depends_on:
      - backend
```

## Lựa chọn triển khai theo nhu cầu

1. **Phát triển cục bộ**: Sử dụng Docker Compose
2. **Triển khai thử nghiệm**: Google Cloud Shell
3. **Triển khai production**: Terraform hoặc Marketplace
4. **Triển khai cho khách hàng**: Marketplace

## Lưu ý quan trọng

1. Thay thế `<unique-id>` bằng ID duy nhất cho project
2. Cập nhật domain trong cấu hình frontend
3. Cấu hình SSL certificates
4. Thiết lập monitoring và logging
5. Backup dữ liệu định kỳ 