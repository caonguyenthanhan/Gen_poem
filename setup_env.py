import os
import subprocess
import sys
from pathlib import Path

def setup_virtual_env():
    venv_name = "venv"
    
    if not os.path.exists(venv_name):
        print("Creating virtual environment...")
        subprocess.run([sys.executable, "-m", "venv", venv_name], check=True)
    
    if os.name == "nt":  # Windows
        python_path = os.path.join(venv_name, "Scripts", "python.exe")
        pip_path = os.path.join(venv_name, "Scripts", "pip.exe")
    else:  # Unix/Linux/MacOS
        python_path = os.path.join(venv_name, "bin", "python")
        pip_path = os.path.join(venv_name, "bin", "pip")
    
    print("Installing requirements...")
    subprocess.run([pip_path, "install", "-r", "requirements.txt"], check=True)
    
    print("\nVirtual environment setup complete!")
    print(f"\nTo activate the virtual environment:")
    if os.name == "nt":
        print(f"    {venv_name}\\Scripts\\activate")
    else:
        print(f"    source {venv_name}/bin/activate")
    
    print("\nTo run the API server:")
    print("    python poem_api.py")

if __name__ == "__main__":
    setup_virtual_env() 