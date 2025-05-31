#!/bin/bash

# Script untuk menyalin file konfigurasi .env ke direktori yang sesuai
# Dibuat lebih modular dengan penanganan kesalahan dan pesan status

set -e

# Fungsi untuk menyalin file .env
copy_env_file() {
  local source_file="$1"
  local target_dir="$2"
  local target_file="$3"
  
  # Periksa apakah file sumber ada
  if [ ! -f "$source_file" ]; then
    echo "Error: File sumber $source_file tidak ditemukan."
    return 1
  fi
  
  # Periksa apakah direktori tujuan ada, jika tidak buat direktori
  if [ ! -d "$target_dir" ]; then
    echo "Membuat direktori $target_dir..."
    mkdir -p "$target_dir"
  fi
  
  # Salin file dengan pesan status
  echo "Menyalin $source_file ke $target_file..."
  cp "$source_file" "$target_file"
  
  # Periksa apakah penyalinan berhasil
  if [ $? -eq 0 ]; then
    echo "Berhasil menyalin ke $target_file"
    return 0
  else
    echo "Gagal menyalin ke $target_file"
    return 1
  fi
}

# Konfigurasi file sumber dan tujuan
NEXTJS_SOURCE="docker/.env.example.nextjs-app"
NEXTJS_TARGET_DIR="apps/nextjs-app"
NEXTJS_TARGET="$NEXTJS_TARGET_DIR/.env"

PRISMA_SOURCE="docker/.env.example.prisma-db"
PRISMA_TARGET_DIR="packages/prisma-db"
PRISMA_TARGET="$PRISMA_TARGET_DIR/.env"

# Jalankan fungsi penyalinan
echo "=== Memulai penyalinan file konfigurasi ==="
copy_env_file "$NEXTJS_SOURCE" "$NEXTJS_TARGET_DIR" "$NEXTJS_TARGET"
copy_env_file "$PRISMA_SOURCE" "$PRISMA_TARGET_DIR" "$PRISMA_TARGET"
echo "=== Penyalinan file konfigurasi selesai ==="