FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

ENV GOOGLE_APPLICATION_CREDENTIALS=/app/credentials.json
ENV MODEL_BUCKET=gpt2_viet_poem_final_pytorch
ENV PORT=8080

EXPOSE 8080

CMD ["python", "poem_api.py"] 