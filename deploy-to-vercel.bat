@echo off
echo ========================================================
echo Deploying Mohammed Faiz Portfolio to Vercel
echo Desired URL: https://mohammed-faiz.vercel.app
echo ========================================================
cd /d "%~dp0"
npx vercel --prod
pause
