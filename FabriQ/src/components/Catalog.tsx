import { useState } from 'react';
import { Search, Heart, Calendar, MapPin, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type View = 'home' | 'catalog' | 'rentals' | 'custom-orders' | 'appointments' | 'profile' | 'admin';

interface CatalogProps {
  setCurrentView: (view: View) => void;
  isLoggedIn: boolean;
  navigateProtected: (view: View) => void;
}

interface GownItem {
  id: string;
  name: string;
  category: string;
  color: string;
  size: string[];
  price: number;
  status: 'available' | 'rented' | 'reserved';
  branch: string;
  image: string;
  rating: number;
}

const mockGowns: GownItem[] = [
  {
    id: '1',
    name: 'Midnight Elegance',
    category: 'Evening Gown',
    color: 'Navy Blue',
    size: ['S', 'M', 'L'],
    price: 3500,
    status: 'available',
    branch: 'Taguig Main',
    image: 'https://images.unsplash.com/photo-1763336016192-c7b62602e993?w=800',
    rating: 4.8
  },
  {
    id: '2',
    name: 'Pearl Romance',
    category: 'Wedding Dress',
    color: 'Ivory',
    size: ['XS', 'S', 'M'],
    price: 8000,
    status: 'available',
    branch: 'BGC Branch',
    image: 'https://images.unsplash.com/photo-1631386749697-ca71a14f89c9?w=800',
    rating: 5.0
  },
  {
    id: '3',
    name: 'Rose Garden',
    category: 'Cocktail Dress',
    color: 'Blush Pink',
    size: ['M', 'L'],
    price: 2800,
    status: 'rented',
    branch: 'Taguig Main',
    image: 'https://images.unsplash.com/photo-1765229279330-7f906ef241a5?w=800',
    rating: 4.5
  },
  {
    id: '4',
    name: 'Golden Hour',
    category: 'Evening Gown',
    color: 'Gold',
    size: ['S', 'M', 'L', 'XL'],
    price: 4200,
    status: 'available',
    branch: 'Makati Branch',
    image: 'https://images.unsplash.com/photo-1675294292093-5f6f5bb8836f?w=800',
    rating: 4.9
  },
  {
    id: '5',
    name: 'Crimson Dreams',
    category: 'Ball Gown',
    color: 'Deep Red',
    size: ['M', 'L'],
    price: 5500,
    status: 'available',
    branch: 'Taguig Main',
    image: 'https://images.unsplash.com/photo-1763336016192-c7b62602e993?w=800',
    rating: 4.7
  },
  {
    id: '6',
    name: 'Silver Serenade',
    category: 'Evening Gown',
    color: 'Silver',
    size: ['S', 'M'],
    price: 3800,
    status: 'reserved',
    branch: 'BGC Branch',
    image: 'https://images.unsplash.com/photo-1631386749697-ca71a14f89c9?w=800',
    rating: 4.6
  },
];

export function Catalog({ setCurrentView, isLoggedIn, navigateProtected }: CatalogProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedGown, setSelectedGown] = useState<GownItem | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  const categories = ['All', 'Evening Gown', 'Wedding Dress', 'Ball Gown', 'Cocktail Dress'];

  const filteredGowns = mockGowns.filter(gown => {
    const matchesSearch = gown.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         gown.color.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || gown.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-[#FAF7F0] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-serif text-5xl md:text-6xl font-light mb-4">Shop All</h1>
          <p className="text-lg text-[#6B5D4F] max-w-2xl">
            Discover our curated collection of exquisite gowns for every occasion. 
            Each piece is carefully selected for its exceptional quality and timeless design.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B5D4F]" />
            <input
              type="text"
              placeholder="Search gowns..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-[#E8DCC8] focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 text-xs uppercase tracking-[0.15em] transition-all ${
                  selectedCategory === category
                    ? 'bg-[#1a1a1a] text-white'
                    : 'bg-white border border-[#E8DCC8] text-[#6B5D4F] hover:border-[#1a1a1a]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-sm text-[#6B5D4F]">
          {filteredGowns.length} {filteredGowns.length === 1 ? 'gown' : 'gowns'} found
        </div>

        {/* Gown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredGowns.map((gown) => (
            <div
              key={gown.id}
              className="group bg-white overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedGown(gown)}
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#F5F1E8]">
                <ImageWithFallback
                  src={gown.image}
                  alt={gown.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Status Badge */}
                {gown.status === 'rented' && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#6B5D4F] text-white text-xs uppercase tracking-wider">
                    Rented
                  </div>
                )}
                {gown.status === 'reserved' && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#D4AF37] text-white text-xs uppercase tracking-wider">
                    Reserved
                  </div>
                )}

                {/* Favorite Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(gown.id);
                  }}
                  className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white transition-colors"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      favorites.includes(gown.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-[#6B5D4F]'
                    }`}
                  />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    <span className="text-sm text-[#6B5D4F] ml-1">{gown.rating}</span>
                  </div>
                  <span className="text-xs text-[#6B5D4F]">•</span>
                  <span className="text-xs text-[#6B5D4F] uppercase tracking-wider">
                    {gown.category}
                  </span>
                </div>
                
                <h3 className="font-serif text-2xl mb-2">{gown.name}</h3>
                
                <p className="text-sm text-[#6B5D4F] mb-3">{gown.color}</p>

                <div className="flex items-center gap-2 text-xs text-[#6B5D4F] mb-4">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{gown.branch}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-[#6B5D4F] uppercase tracking-wider mb-1">
                      Rental Price
                    </div>
                    <div className="font-serif text-2xl">₱{gown.price.toLocaleString()}</div>
                    <div className="text-xs text-[#6B5D4F]">per day</div>
                  </div>
                  
                  {gown.status === 'available' && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateProtected('rentals');
                      }}
                      className="px-4 py-2 bg-[#1a1a1a] text-white hover:bg-[#D4AF37] transition-colors text-xs uppercase tracking-wider"
                    >
                      Book Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredGowns.length === 0 && (
          <div className="text-center py-16">
            <div className="font-serif text-3xl text-[#6B5D4F] mb-4">No gowns found</div>
            <p className="text-[#6B5D4F] mb-8">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-6 py-3 bg-[#1a1a1a] text-white hover:bg-[#D4AF37] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedGown && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedGown(null)}
        >
          <div
            className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="aspect-[3/4] bg-[#F5F1E8]">
                <ImageWithFallback
                  src={selectedGown.image}
                  alt={selectedGown.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    <span className="text-sm text-[#6B5D4F] ml-1">{selectedGown.rating}</span>
                  </div>
                  <span className="text-xs text-[#6B5D4F]">•</span>
                  <span className="text-xs text-[#6B5D4F] uppercase tracking-wider">
                    {selectedGown.category}
                  </span>
                </div>

                <h2 className="font-serif text-4xl mb-4">{selectedGown.name}</h2>

                <div className="mb-6">
                  <div className="text-xs text-[#6B5D4F] uppercase tracking-wider mb-2">
                    Rental Price
                  </div>
                  <div className="font-serif text-4xl mb-1">
                    ₱{selectedGown.price.toLocaleString()}
                  </div>
                  <div className="text-sm text-[#6B5D4F]">per day</div>
                </div>

                <div className="space-y-4 mb-8 pb-8 border-b border-[#E8DCC8]">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#6B5D4F]">Color:</span>
                    <span className="ml-2 text-[#1a1a1a]">{selectedGown.color}</span>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#6B5D4F]">Sizes Available:</span>
                    <div className="flex gap-2 mt-2">
                      {selectedGown.size.map(size => (
                        <span
                          key={size}
                          className="px-3 py-1 bg-[#F5F1E8] text-[#1a1a1a] text-sm"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#6B5D4F]">Location:</span>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className="w-4 h-4 text-[#6B5D4F]" />
                      <span className="text-[#1a1a1a]">{selectedGown.branch}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#6B5D4F]">Status:</span>
                    <span className={`ml-2 px-3 py-1 text-xs uppercase tracking-wider ${
                      selectedGown.status === 'available'
                        ? 'bg-green-100 text-green-800'
                        : selectedGown.status === 'rented'
                        ? 'bg-[#6B5D4F] text-white'
                        : 'bg-[#D4AF37] text-white'
                    }`}>
                      {selectedGown.status}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  {selectedGown.status === 'available' && (
                    <>
                      <button
                        onClick={() => {
                          navigateProtected('rentals');
                          setSelectedGown(null);
                        }}
                        className="w-full py-4 bg-[#1a1a1a] text-white hover:bg-[#D4AF37] transition-colors flex items-center justify-center gap-2"
                      >
                        <Calendar className="w-5 h-5" />
                        <span>Book This Gown</span>
                      </button>
                      <button
                        onClick={() => {
                          setCurrentView('appointments');
                          setSelectedGown(null);
                        }}
                        className="w-full py-4 border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all"
                      >
                        Schedule Fitting
                      </button>
                    </>
                  )}
                  {selectedGown.status !== 'available' && (
                    <button
                      onClick={() => {
                        setCurrentView('appointments');
                        setSelectedGown(null);
                      }}
                      className="w-full py-4 bg-[#1a1a1a] text-white hover:bg-[#D4AF37] transition-colors"
                    >
                      Get Notified When Available
                    </button>
                  )}
                </div>

                <button
                  onClick={() => setSelectedGown(null)}
                  className="w-full mt-4 py-3 text-sm text-[#6B5D4F] hover:text-[#1a1a1a] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}