cd "%~dp0"

SET VERSION=1.0
SET ICON_PATH=%~dp0images\fox.png

call "%~dp0\node_modules\.bin\electron-packager" . --platform=win32 --arch=ia32 --overwrite --icon="%ICON_PATH%" --out="%~dp0bin" --version-string.CompanyName="Hemal Harindaka" --version-string.ProductName="Fox 91.4 Desktop Client" --version-string.ProductVersion="%VERSION%" --ignore="bin" --ignore="node_modules/electron-packager" --ignore="node_modules/electron-prebuilt" --ignore="build-*" 
call node "%~dp0build-helper-rcedit.js" "%~dp0bin\fox-desktop-win32-ia32\fox-desktop.exe" "version-string=%VERSION%" "version-string=%VERSION%" "file-version=%VERSION%" "product-version=%VERSION%" "icon=%ICON_PATH%"
call node "%~dp0build-helper-zip.js" "%~dp0bin\fox-desktop-win32-ia32" "%~dp0bin\fox-desktop-win32-ia32.zip"

call "%~dp0\node_modules\.bin\electron-packager" . --platform=win32 --arch=x64 --overwrite --icon="%ICON_PATH%" --out="%~dp0bin" --version-string.CompanyName="Hemal Harindaka" --version-string.ProductName="Fox 91.4 Desktop Client" --version-string.ProductVersion="%VERSION%" --ignore="bin" --ignore="node_modules/electron-packager" --ignore="node_modules/electron-prebuilt" --ignore="build-*" 
call node "%~dp0build-helper-rcedit.js" "%~dp0bin\fox-desktop-win32-x64\fox-desktop.exe" "version-string=%VERSION%" "version-string=%VERSION%" "file-version=%VERSION%" "product-version=%VERSION%" "icon=%ICON_PATH%"
call node "%~dp0build-helper-zip.js" "%~dp0bin\fox-desktop-win32-x64" "%~dp0bin\fox-desktop-win32-x64.zip"