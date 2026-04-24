"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Upload, 
  Image as ImageIcon, 
  FileText, 
  DollarSign, 
  Tag, 
  Layers,
  Eye,
  Edit,
  Trash2,
  Plus,
  Search,
  Filter,
  Grid,
  List
} from "lucide-react";

type AssetStatus = "Published" | "Draft";

type AssetItem = {
  id: number;
  title: string;
  price: number;
  status: AssetStatus;
  views: number;
  downloads: number;
  date: string;
  category: string;
};

type AssetFormState = {
  title: string;
  price: string;
  category: string;
  tags: string;
  description: string;
};

const mockAssets: AssetItem[] = [
  {
    id: 1,
    title: "Sinspire 3D Character Pack",
    price: 29.99,
    status: "Published",
    views: 1240,
    downloads: 384,
    date: "2026-04-15",
    category: "3D Models"
  },
  {
    id: 2,
    title: "Fantasy Environment Kit",
    price: 49.99,
    status: "Published",
    views: 892,
    downloads: 156,
    date: "2026-04-10",
    category: "Environments"
  },
  {
    id: 3,
    title: "Sci-Fi Weapon Bundle",
    price: 19.99,
    status: "Draft",
    views: 0,
    downloads: 0,
    date: "2026-04-20",
    category: "Weapons"
  },
  {
    id: 4,
    title: "Low Poly Nature Pack",
    price: 14.99,
    status: "Published",
    views: 567,
    downloads: 89,
    date: "2026-04-05",
    category: "Nature"
  }
];

const categories = [
  "All Assets",
  "3D Models",
  "Textures",
  "Environments",
  "Weapons",
  "Characters",
  "Nature",
  "UI Kits"
];

const page = () => {
  const [activeTab, setActiveTab] = useState<"grid" | "upload">("grid");
  const [selectedCategory, setSelectedCategory] = useState("All Assets");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState<AssetFormState>({
    title: "",
    price: "",
    category: categories[1],
    tags: "",
    description: "",
  });

  const handleInputChange = (field: keyof AssetFormState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSaveAsset = (isDraft: boolean) => {
    const payload = {
      ...formData,
      tags: formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      status: isDraft ? "draft" : "published",
      createdAt: new Date().toISOString(),
    };

    // Supabase integration-ready payload.
    // await supabase.from("assets").insert(payload)
    console.log("Asset payload:", payload);
  };

  const filteredAssets = mockAssets.filter((asset) => {
    const categoryMatch = selectedCategory === "All Assets" || asset.category === selectedCategory;
    const query = searchQuery.trim().toLowerCase();
    const searchMatch =
      query.length === 0 ||
      asset.title.toLowerCase().includes(query) ||
      asset.category.toLowerCase().includes(query);

    return categoryMatch && searchMatch;
  });

  return (
    <div className="flex flex-col p-4 bg-background w-full gap-4 h-full justify-between overflow-y-auto overflow-x-hidden">
      <div className="flex flex-col bg-background w-full gap-4 min-w-0">
        <div className="flex flex-row justify-between flex-wrap gap-3">
          <div>
            <h1 className="font-bold text-3xl">My Assets</h1>
            <p className="text-sm text-muted-foreground">
              Upload and manage your digital creations
            </p>
          </div>

          <div className="flex flex-row gap-2 h-full items-center">
            <Button variant="outline" onClick={() => setActiveTab("grid")}>
              <Grid size={16} className="mr-2" />
              My Assets
            </Button>
            <Button onClick={() => setActiveTab("upload")}>
              <Plus size={16} className="mr-2" />
              Upload New
            </Button>
          </div>
        </div>

        <hr />

        {activeTab === "upload" && (
          <div className="w-full p-6 bg-primary-foreground border border-muted rounded-lg">
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">Upload New Asset</h2>
                <p className="text-sm text-muted-foreground">
                  Share your digital creation with the Pithos marketplace
                </p>
              </div>

              <div className="border border-dashed border-muted rounded-lg p-8 md:p-10 flex flex-col items-center justify-center gap-3 hover:border-accent transition-colors cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center">
                  <Upload size={32} className="text-muted-foreground" />
                </div>
                <div className="text-center">
                  <p className="font-medium">Drag and drop your files here</p>
                  <p className="text-sm text-muted-foreground">or click to browse</p>
                </div>
                <p className="text-xs text-muted-foreground">
                  Supports: .zip, .rar, .7z, .fbx, .obj, .blend, .max (Max 500MB)
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Asset Title</label>
                  <Input
                    placeholder="Enter asset name"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Price (USD)</label>
                  <div className="relative">
                    <DollarSign size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="0.00"
                      className="pl-8"
                      value={formData.price}
                      onChange={(e) => handleInputChange("price", e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Category</label>
                  <div className="relative">
                    <Layers size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <select
                      className="w-full h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm pl-10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      value={formData.category}
                      onChange={(e) => handleInputChange("category", e.target.value)}
                    >
                      {categories.slice(1).map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Tags</label>
                  <div className="relative">
                    <Tag size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="3d, fantasy, character (comma separated)"
                      className="pl-8"
                      value={formData.tags}
                      onChange={(e) => handleInputChange("tags", e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Description</label>
                <textarea 
                  className="w-full min-h-[120px] rounded-md border border-input bg-transparent px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  placeholder="Describe your asset, include features, technical details, and usage instructions..."
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Cover Image</label>
                <div className="border border-dashed border-muted rounded-lg p-8 flex flex-col items-center justify-center gap-2 hover:border-accent transition-colors cursor-pointer">
                  <ImageIcon size={24} className="text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Click to upload cover image</p>
                  <p className="text-xs text-muted-foreground">Recommended: 640x360px or 16:9 ratio</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Preview Images / Videos</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-video bg-muted rounded-lg flex items-center justify-center cursor-pointer hover:bg-muted/80 transition-colors">
                      <ImageIcon size={20} className="text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 justify-end pt-4 border-t">
                <Button variant="outline" onClick={() => handleSaveAsset(true)}>Save as Draft</Button>
                <Button onClick={() => handleSaveAsset(false)}>Publish Asset</Button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "grid" && (
          <div className="flex flex-col gap-4 min-w-0">
            <div className="flex justify-between items-center flex-wrap gap-4 min-w-0">
              <div className="flex gap-2 overflow-x-auto pb-2 max-w-full">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                      selectedCategory === cat 
                        ? "bg-accent text-accent-foreground" 
                        : "bg-muted text-foreground hover:bg-accent hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="flex gap-2 flex-wrap">
                <div className="relative">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    placeholder="Search assets..." 
                    className="pl-8 w-48"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Filter size={16} />
                </Button>
                <Button variant="outline" size="icon" onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}>
                  {viewMode === "grid" ? <List size={16} /> : <Grid size={16} />}
                </Button>
              </div>
            </div>

            <div className="w-full p-4 bg-primary-foreground border border-muted rounded-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredAssets.map((asset) => (
                  <div key={asset.id} className="overflow-hidden bg-background border border-muted rounded-lg hover:shadow-sm transition-shadow">
                    <div className="aspect-video bg-muted relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <ImageIcon size={32} className="text-muted-foreground" />
                      </div>
                      <div className="absolute top-2 right-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          asset.status === "Published" 
                            ? "bg-green-500/20 text-green-500" 
                            : "bg-yellow-500/20 text-yellow-500"
                        }`}>
                          {asset.status}
                        </span>
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="font-medium text-sm truncate">{asset.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{asset.category}</p>
                      
                      <div className="flex items-center justify-between mt-3">
                        <span className="font-bold text-accent">${asset.price}</span>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Eye size={14} />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Edit size={14} />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Trash2 size={14} />
                          </Button>
                        </div>
                      </div>

                      <div className="flex gap-4 mt-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Eye size={12} /> {asset.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <FileText size={12} /> {asset.downloads}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="border-dashed border-2 border-muted bg-transparent rounded-lg flex flex-col items-center justify-center min-h-[200px] cursor-pointer hover:bg-muted/20 transition-colors" onClick={() => setActiveTab("upload")}>
                  <Plus size={32} className="text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mt-2">Add New Asset</p>
                </div>
              </div>
              {filteredAssets.length === 0 && (
                <p className="text-sm text-muted-foreground">No assets found for the current filter.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
