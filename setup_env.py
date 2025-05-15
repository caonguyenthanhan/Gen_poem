import subprocess
import sys
import os
import venv

def setup_virtual_env():
    if not os.path.exists('venv'):
        print('Creating virtual environment...')
        venv.create('venv', with_pip=True)
    
    if sys.platform == 'win32':
        pip_path = os.path.join('venv', 'Scripts', 'pip')
    else:
        pip_path = os.path.join('venv', 'bin', 'pip')
    
    print('Installing requirements...')
    subprocess.check_call([pip_path, 'install', '-r', 'requirements.txt'])
    print('Setup completed successfully!')

if __name__ == '__main__':
    setup_virtual_env() 