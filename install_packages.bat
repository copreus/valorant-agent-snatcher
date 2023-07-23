@echo off

call npm install node-fetch@2
call npm install https
call npm install crypto-js
call npm install path

echo Package installation completed.
echo Press any key to continue...
pause > nul