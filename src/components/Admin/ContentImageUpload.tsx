// components/Admin/ContentImageUpload.tsx
"use client";

import React, { useState, useRef } from "react";
import { Image as ImageIcon, Upload, Loader2, Copy, Check } from "lucide-react";

interface ContentImageUploadProps {
  onInsert: (imageHtml: string) => void;
}

export default function ContentImageUpload({ onInsert }: ContentImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [lastUploadedUrl, setLastUploadedUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (file: File) => {
    setUploading(true);
    
    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Upload failed');

      const data = await res.json();
      setLastUploadedUrl(data.url);
      
      // Generate HTML for content
      const imageHtml = `<img src="${data.url}" alt="${file.name}" class="w-full rounded-lg my-4" />`;
      onInsert(imageHtml);
      
    } catch (error) {
      alert('Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(lastUploadedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2 p-2 bg-gray-100 rounded-lg">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleUpload(file);
        }}
        className="hidden"
      />
      
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        disabled={uploading}
        className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50"
      >
        {uploading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <ImageIcon className="w-4 h-4" />
        )}
        <span className="text-sm">Insert Image</span>
      </button>

      {lastUploadedUrl && (
        <button
          type="button"
          onClick={copyToClipboard}
          className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded text-xs"
        >
          {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
          {copied ? "Copied!" : "Copy URL"}
        </button>
      )}
    </div>
  );
}