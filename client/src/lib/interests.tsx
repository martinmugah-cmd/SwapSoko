import React from 'react';
import { Gamepad2, Smartphone, BookOpen, Monitor, Camera, Trophy, Shirt, Sofa, Code, Music, Palette, Plane, Flame, LayoutGrid, Sparkles, Coffee, Briefcase } from "lucide-react";

export const INTERESTS = [
  { id: "gaming", label: "Gaming", icon: <Gamepad2 className="w-6 h-6" />, color: "text-purple-500", bg: "bg-purple-50" },
  { id: "phones", label: "Phones", icon: <Smartphone className="w-6 h-6" />, color: "text-blue-500", bg: "bg-blue-50" },
  { id: "books", label: "Books", icon: <BookOpen className="w-6 h-6" />, color: "text-orange-500", bg: "bg-orange-50" },
  { id: "electronics", label: "Electronics", icon: <Monitor className="w-6 h-6" />, color: "text-slate-600", bg: "bg-slate-100" },
  { id: "photography", label: "Photography", icon: <Camera className="w-6 h-6" />, color: "text-pink-500", bg: "bg-pink-50" },
  { id: "sports", label: "Sports", icon: <Trophy className="w-6 h-6" />, color: "text-emerald-500", bg: "bg-emerald-50" },
  { id: "fashion", label: "Fashion", icon: <Shirt className="w-6 h-6" />, color: "text-rose-500", bg: "bg-rose-50" },
  { id: "furniture", label: "Furniture", icon: <Sofa className="w-6 h-6" />, color: "text-amber-600", bg: "bg-amber-50" },
  { id: "programming", label: "Coding", icon: <Code className="w-6 h-6" />, color: "text-indigo-500", bg: "bg-indigo-50" },
  { id: "music", label: "Music", icon: <Music className="w-6 h-6" />, color: "text-yellow-600", bg: "bg-yellow-50" },
  { id: "art", label: "Art", icon: <Palette className="w-6 h-6" />, color: "text-red-500", bg: "bg-red-50" },
  { id: "travel", label: "Travel", icon: <Plane className="w-6 h-6" />, color: "text-sky-500", bg: "bg-sky-50" },
  { id: "nsfw", label: "NSFW", icon: <Flame className="w-6 h-6" />, color: "text-red-600", bg: "bg-red-50" },
  { id: "thrifting", label: "Thrifting", icon: <Sparkles className="w-6 h-6" />, color: "text-fuchsia-500", bg: "bg-fuchsia-50" },
  { id: "lifestyle", label: "Lifestyle", icon: <Coffee className="w-6 h-6" />, color: "text-amber-700", bg: "bg-amber-100" },
  { id: "services", label: "Services", icon: <Briefcase className="w-6 h-6" />, color: "text-cyan-600", bg: "bg-cyan-50" },
  { id: "other", label: "Other", icon: <LayoutGrid className="w-6 h-6" />, color: "text-gray-500", bg: "bg-gray-100" },
];
