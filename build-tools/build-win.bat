cd %~dp0..
set PROJECT_PATH=%CD%
cd %~dp0

SET VERSION=1.1
SET ICON_PATH=%PROJECT_PATH%\images\fox.ico
SET OUT_PATH=%PROJECT_PATH%\bin

rmdir "%OUT_PATH%" /s /q

call "%PROJECT_PATH%\node_modules\.bin\electron-packager" "%PROJECT_PATH%" --platform=win32 --arch=ia32 --overwrite --icon="%ICON_PATH%" --out="%OUT_PATH%" --version-string.CompanyName="Hemal Harindaka" --version-string.ProductName="Fox 91.4 Desktop Client" --version-string.ProductVersion="%VERSION%" --ignore="./bin" --ignore="./node_modules/electron-packager" --ignore="./node_modules/electron-prebuilt" --ignore="./build-tools" 
call node "%PROJECT_PATH%\build-tools\build-helper-rcedit.js" "%OUT_PATH%\fox-desktop-win32-ia32\fox-desktop.exe" "version-string=%VERSION%" "version-string=%VERSION%" "file-version=%VERSION%" "product-version=%VERSION%" "icon=%ICON_PATH%"
move "%OUT_PATH%\fox-desktop-win32-ia32" "%OUT_PATH%\fox-desktop-win32-ia32-temp"
mkdir "%OUT_PATH%\fox-desktop-win32-ia32"
move "%OUT_PATH%\fox-desktop-win32-ia32-temp" "%OUT_PATH%\fox-desktop-win32-ia32\bin"
copy /Y "%PROJECT_PATH%\build-tools\start-fox-desktop.exe" "%OUT_PATH%\fox-desktop-win32-ia32\start-fox-desktop.exe"
call node "%PROJECT_PATH%\build-tools\build-helper-zip.js" "%OUT_PATH%\fox-desktop-win32-ia32" "%OUT_PATH%\fox-desktop-v%VERSION%-win32-ia32.zip"

call "%PROJECT_PATH%\node_modules\.bin\electron-packager" "%PROJECT_PATH%" --platform=win32 --arch=x64 --overwrite --icon="%ICON_PATH%" --out="%OUT_PATH%" --version-string.CompanyName="Hemal Harindaka" --version-string.ProductName="Fox 91.4 Desktop Client" --version-string.ProductVersion="%VERSION%" --ignore="./bin" --ignore="./node_modules/electron-packager" --ignore="./node_modules/electron-prebuilt"  --ignore="./build-tools"
call node "%PROJECT_PATH%\build-tools\build-helper-rcedit.js" "%OUT_PATH%\fox-desktop-win32-x64\fox-desktop.exe" "version-string=%VERSION%" "version-string=%VERSION%" "file-version=%VERSION%" "product-version=%VERSION%" "icon=%ICON_PATH%"
move "%OUT_PATH%\fox-desktop-win32-x64" "%OUT_PATH%\fox-desktop-win32-x64-temp"
mkdir "%OUT_PATH%\fox-desktop-win32-x64"
move "%OUT_PATH%\fox-desktop-win32-x64-temp" "%OUT_PATH%\fox-desktop-win32-x64\bin"
copy /Y "%PROJECT_PATH%\build-tools\start-fox-desktop.exe" "%OUT_PATH%\fox-desktop-win32-x64\start-fox-desktop.exe"
call node "%PROJECT_PATH%\build-tools\build-helper-zip.js" "%OUT_PATH%\fox-desktop-win32-x64" "%OUT_PATH%\fox-desktop-v%VERSION%-win32-x64.zip"