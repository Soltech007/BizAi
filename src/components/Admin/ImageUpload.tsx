// components/Admin/ImageUpload.tsx
"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { 
  Upload, 
  X, 
  Loader2, 
  ImageIcon, 
  CheckCircle,
  AlertCircle 
} from "lucide-react";

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  onRemove?: () => void;
}

export default function ImageUpload({ value, onChange, onRemove }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (file: File) => {
    setError("");
    setUploading(true);
    setUploadProgress(0);

    try {
      // Validate file type
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
      if (!allowedTypes.includes(file.type)) {
        throw new Error('Only JPEG, PNG, GIF, WEBP images allowed');
      }

      // Validate file size (5MB)
      if (file.size > 5 * 1024 * 1024) {
        throw new Error('Image size should be less than 5MB');
      }

      // Simulate progress
      const progressInterval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return prev;
          }
          return prev + 10;
        });
      }, 100);

      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      clearInterval(progressInterval);

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Upload failed');
      }

      const data = await res.json();
      setUploadProgress(100);
      
      // Small delay to show 100%
      setTimeout(() => {
        onChange(data.url);
        setUploadProgress(0);
      }, 500);

    } catch (err: any) {
      setError(err.message);
      setUploadProgress(0);
    } finally {
      setUploading(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleRemove = () => {
    onChange("");
    if (onRemove) onRemove();
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-3">
      {/* Preview */}
      {value && (
        <div className="relative rounded-xl overflow-hidden border-2 border-green-200 bg-green-50">
          <div className="relative w-full h-48">
            <Image
              src={value}
              alt="Featured image"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute top-2 right-2 flex gap-2">
            <span className="flex items-center gap-1 px-2 py-1 bg-green-500 text-white text-xs font-medium rounded-lg">
              <CheckCircle className="w-3 h-3" />
              Uploaded
            </span>
            <button
              type="button"
              onClick={handleRemove}
              className="p-1.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Upload Area */}
      {!value && (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => fileInputRef.current?.click()}
          className={`
            relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer
            transition-all duration-200
            ${dragOver 
              ? 'border-blue-500 bg-blue-50' 
              : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
            }
            ${uploading ? 'pointer-events-none' : ''}
          `}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/gif,image/webp"
            onChange={handleInputChange}
            className="hidden"
          />

          {uploading ? (
            <div className="space-y-4">
              <Loader2 className="w-10 h-10 text-blue-500 animate-spin mx-auto" />
              <div className="w-full max-w-xs mx-auto">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Uploading... {uploadProgress}%
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ImageIcon className="w-8 h-8 text-gray-400" />
              </div>
              <div className="space-y-2">
                <p className="text-base font-medium text-gray-700">
                  <span className="text-blue-600">Click to upload</span> or drag and drop
                </p>
                <p className="text-sm text-gray-500">
                  PNG, JPG, GIF, WEBP up to 5MB
                </p>
              </div>
            </>
          )}
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
          <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      {/* URL Input (Optional - for manual URL entry) */}
      {!value && !uploading && (
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-3 bg-white text-gray-500">or paste URL</span>
          </div>
        </div>
      )}
      
      {!value && !uploading && (
        <input
          type="url"
          placeholder="https://example.com/image.jpg"
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm"
        />
      )}
    </div>
  );
}