# Git init and first push for umang-frontend
# Run in PowerShell from the project folder: .\git-setup.ps1
# If you get permission errors, run PowerShell "As Administrator" or run from a normal terminal (not inside Cursor).

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

# Remove existing .git if present (fixes lock/permission issues from IDE)
if (Test-Path .git) {
    Write-Host "Removing existing .git folder..."
    Remove-Item -Recurse -Force .git
}

# Initialize git
Write-Host "Initializing git repository..."
git init

# Add remote (ignore error if already added)
git remote add origin https://github.com/dilitalcreatorss-design/umang-frontend.git 2>$null
if (-not $?) { git remote set-url origin https://github.com/dilitalcreatorss-design/umang-frontend.git }

# Stage all files
Write-Host "Staging files..."
git add .

# First commit
Write-Host "Creating first commit..."
git commit -m "Initial commit: Exobase React frontend (Home, About, Products, Contact, Certificates)"

# Ensure main and push
git branch -M main
Write-Host "Pushing to GitHub..."
git push -u origin main

Write-Host "Done! Repository: https://github.com/dilitalcreatorss-design/umang-frontend"