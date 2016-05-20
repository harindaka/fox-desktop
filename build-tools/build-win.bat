cd %~dp0..
set PROJECT_PATH=%CD%
cd %~dp0

SET VERSION=1.0
SET ICON_PATH=%PROJECT_PATH%\images\fox.ico

call "%PROJECT_PATH%\node_modules\.bin\electron-packager" "%PROJECT_PATH%" --platform=win32 --arch=ia32 --overwrite --icon="%ICON_PATH%" --out="%PROJECT_PATH%\bin" --version-string.CompanyName="Hemal Harindaka" --version-string.ProductName="Fox 91.4 Desktop Client" --version-string.ProductVersion="%VERSION%" --ignore="./bin" --ignore="./node_modules/electron-packager" --ignore="./node_modules/electron-prebuilt" --ignore="./build-tools" 
call node "%PROJECT_PATH%\build-tools\build-helper-rcedit.js" "%PROJECT_PATH%\bin\fox-desktop-win32-ia32\fox-desktop.exe" "version-string=%VERSION%" "version-string=%VERSION%" "file-version=%VERSION%" "product-version=%VERSION%" "icon=%ICON_PATH%"
move "%PROJECT_PATH%\bin\fox-desktop-win32-ia32" "%PROJECT_PATH%\bin\fox-desktop-win32-ia32-temp"
mkdir "%PROJECT_PATH%\bin\fox-desktop-win32-ia32"
move "%PROJECT_PATH%\bin\fox-desktop-win32-ia32-temp" "%PROJECT_PATH%\bin\fox-desktop-win32-ia32\bin"
copy /Y "%PROJECT_PATH%\build-tools\start-fox-desktop.exe" "%PROJECT_PATH%\bin\fox-desktop-win32-ia32\start-fox-desktop.exe"
call node "%PROJECT_PATH%\build-tools\build-helper-zip.js" "%PROJECT_PATH%\bin\fox-desktop-win32-ia32" "%PROJECT_PATH%\bin\fox-desktop-v%VERSION%-win32-ia32.zip"

call "%PROJECT_PATH%\node_modules\.bin\electron-packager" "%PROJECT_PATH%" --platform=win32 --arch=x64 --overwrite --icon="%ICON_PATH%" --out="%PROJECT_PATH%\bin" --version-string.CompanyName="Hemal Harindaka" --version-string.ProductName="Fox 91.4 Desktop Client" --version-string.ProductVersion="%VERSION%" --ignore="./bin" --ignore="./node_modules/electron-packager" --ignore="./node_modules/electron-prebuilt"  --ignore="./build-tools"
call node "%PROJECT_PATH%\build-tools\build-helper-rcedit.js" "%PROJECT_PATH%\bin\fox-desktop-win32-x64\fox-desktop.exe" "version-string=%VERSION%" "version-string=%VERSION%" "file-version=%VERSION%" "product-version=%VERSION%" "icon=%ICON_PATH%"
move "%PROJECT_PATH%\bin\fox-desktop-win32-x64" "%PROJECT_PATH%\bin\fox-desktop-win32-x64-temp"
mkdir "%PROJECT_PATH%\bin\fox-desktop-win32-x64"
move "%PROJECT_PATH%\bin\fox-desktop-win32-x64-temp" "%PROJECT_PATH%\bin\fox-desktop-win32-x64\bin"
copy /Y "%PROJECT_PATH%\build-tools\start-fox-desktop.exe" "%PROJECT_PATH%\bin\fox-desktop-win32-x64\start-fox-desktop.exe"
call node "%PROJECT_PATH%\build-tools\build-helper-zip.js" "%PROJECT_PATH%\bin\fox-desktop-win32-x64" "%PROJECT_PATH%\bin\fox-desktop-v%VERSION%-win32-x64.zip"