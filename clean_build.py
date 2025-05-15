import os
import shutil

folders = ['node_modules', '.next']
files = ['package-lock.json']

for folder in folders:
    if os.path.exists(folder):
        shutil.rmtree(folder)
        print(f"Đã xóa thư mục {folder}")

for file in files:
    if os.path.exists(file):
        os.remove(file)
        print(f"Đã xóa file {file}")