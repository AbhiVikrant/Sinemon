# deploy.ps1
Write-Host "🚀 Starting deployment process..."

# Clean previous build
Remove-Item -Recurse -Force build -ErrorAction SilentlyContinue

# Build React app
npm run build

# Create target directory structure
New-Item -Path "dist" -ItemType Directory -Force

# Move files to subdirectory
Get-ChildItem -Path build -Exclude 'folder' | ForEach-Object {
    Move-Item -Path $_.FullName -Destination "dist" -Force
}

# Deploy to GitHub Pages
npm run deploy

# Cleanup
Remove-Item -Recurse -Force build

Write-Host "✅ Success! Your app is deployed at:"
Write-Host "https://abhivikrant.github.io/Sinemon/tree/new_dora/JavaScriptRunner"
# Add this after building
$indexPath = "dist/index.html"
(Get-Content $indexPath) -replace '"/', '"%PUBLIC_URL%/' | Set-Content $indexPath