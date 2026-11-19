@echo off
echo ==========================================
echo Pushing Mohammed Faiz Portfolio to GitHub
echo Repo: https://github.com/faizyyy07/my-vision
echo ==========================================
cd /d "%~dp0"
git remote remove origin 2>nul
git remote add origin https://github.com/faizyyy07/my-vision.git
git branch -M main
git push -u origin main
echo.
echo Done! Press any key to exit.
pause
