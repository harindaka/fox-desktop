cd "%~dp0"
"%~dp0\node_modules\.bin\electron-packager" . --all --overwrite --icon="%~dp0images\fox.png" --out="%~dp0bin" --version-string.CompanyName="Hemal Harindaka" --version-string.ProductName="Fox 91.4 Desktop Client" --version-string.ProductVersion="1.0" --ignore="bin"