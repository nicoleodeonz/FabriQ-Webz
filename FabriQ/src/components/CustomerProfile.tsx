import { useState } from 'react';
import { User, Ruler, History, Heart, Camera } from 'lucide-react';

interface Measurement {
  bust: string;
  waist: string;
  hips: string;
  height: string;
  shoulder: string;
  sleeveLength: string;
  dressLength: string;
  lastUpdated: string;
}

const mockMeasurements: Measurement = {
  bust: '34"',
  waist: '26"',
  hips: '36"',
  height: '5\'6"',
  shoulder: '15"',
  sleeveLength: '23"',
  dressLength: '42"',
  lastUpdated: '2026-01-10'
};

const mockFavorites = [
  { id: '1', name: 'Midnight Elegance', category: 'Evening Gown' },
  { id: '2', name: 'Pearl Romance', category: 'Wedding Dress' },
  { id: '5', name: 'Crimson Dreams', category: 'Ball Gown' }
];

const mockHistory = [
  { id: 'R001', type: 'Rental', item: 'Golden Hour', date: '2025-12-20', status: 'Completed' },
  { id: 'CO001', type: 'Custom Order', item: 'Wedding Gown', date: '2026-01-15', status: 'In Progress' }
];

export function CustomerProfile() {
  const [activeTab, setActiveTab] = useState<'profile' | 'measurements' | 'favorites' | 'history'>('profile');

  return (
    <div className="min-h-screen py-8 px-4 bg-[#FAF7F0]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-light mb-2">My Profile</h1>
          <p className="text-[#6B5D4F]">Manage your account and preferences</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl border border-[#E8DCC8] p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-24 h-24 bg-[#FAF7F0] rounded-full flex items-center justify-center border border-[#E8DCC8]">
              <User className="w-12 h-12 text-[#6B5D4F]" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-light mb-1">Sarah Johnson</h2>
              <p className="text-[#6B5D4F] mb-4">sarah.johnson@email.com</p>
              <div className="flex flex-wrap gap-4 text-sm text-[#6B5D4F]">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Member since:</span>
                  <span>January 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Phone:</span>
                  <span>+63 912 345 6789</span>
                </div>
              </div>
            </div>
            <button className="px-6 py-3 border border-[#E8DCC8] rounded-full hover:border-[#D4AF37] transition-colors">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-[#E8DCC8] overflow-x-auto">
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-6 py-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'profile'
                ? 'border-[#D4AF37] font-medium'
                : 'border-transparent text-[#6B5D4F] hover:text-black'
            }`}
          >
            Profile Info
          </button>
          <button
            onClick={() => setActiveTab('measurements')}
            className={`px-6 py-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'measurements'
                ? 'border-[#D4AF37] font-medium'
                : 'border-transparent text-[#6B5D4F] hover:text-black'
            }`}
          >
            Measurements
          </button>
          <button
            onClick={() => setActiveTab('favorites')}
            className={`px-6 py-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'favorites'
                ? 'border-[#D4AF37] font-medium'
                : 'border-transparent text-[#6B5D4F] hover:text-black'
            }`}
          >
            Favorites
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`px-6 py-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'history'
                ? 'border-[#D4AF37] font-medium'
                : 'border-transparent text-[#6B5D4F] hover:text-black'
            }`}
          >
            History
          </button>
        </div>

        {/* Profile Info */}
        {activeTab === 'profile' && (
          <div className="bg-white rounded-2xl border border-[#E8DCC8] p-8">
            <h2 className="text-2xl font-light mb-6">Personal Information</h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-[#6B5D4F] mb-2">Full Name</label>
                  <input
                    type="text"
                    defaultValue="Sarah Johnson"
                    className="w-full px-4 py-3 rounded-lg border border-[#E8DCC8] focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#6B5D4F] mb-2">Email Address</label>
                  <input
                    type="email"
                    defaultValue="sarah.johnson@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-[#E8DCC8] focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#6B5D4F] mb-2">Phone Number</label>
                  <input
                    type="tel"
                    defaultValue="+63 912 345 6789"
                    className="w-full px-4 py-3 rounded-lg border border-[#E8DCC8] focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#6B5D4F] mb-2">Preferred Branch</label>
                  <select
                    defaultValue="Taguig Main"
                    className="w-full px-4 py-3 rounded-lg border border-[#E8DCC8] focus:outline-none focus:border-[#D4AF37] transition-colors"
                  >
                    <option value="Taguig Main">Taguig Main - Cadena de Amor</option>
                    <option value="BGC Branch">BGC Branch</option>
                    <option value="Makati Branch">Makati Branch</option>
                    <option value="Quezon City">Quezon City</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm text-[#6B5D4F] mb-2">Address</label>
                <textarea
                  defaultValue="123 Fashion Street, Taguig City, Metro Manila"
                  className="w-full px-4 py-3 rounded-lg border border-[#E8DCC8] focus:outline-none focus:border-[#D4AF37] transition-colors min-h-[100px]"
                />
              </div>
              <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-[#D4AF37] transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        )}

        {/* Measurements */}
        {activeTab === 'measurements' && (
          <div className="space-y-6">
            {/* AI Measurement Tool */}
            <div className="bg-gradient-to-br from-[#FAF7F0] to-white rounded-2xl border border-[#D4AF37] p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-lg border border-[#E8DCC8]">
                  <Camera className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium mb-2">AI Smart Measurement</h3>
                  <p className="text-[#6B5D4F] mb-4">
                    Use our advanced AI camera system to automatically capture and store your measurements with high accuracy.
                  </p>
                  <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-[#D4AF37] transition-colors">
                    Start AI Measurement
                  </button>
                </div>
              </div>
            </div>

            {/* Current Measurements */}
            <div className="bg-white rounded-2xl border border-[#E8DCC8] p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-light mb-1">Your Measurements</h2>
                  <p className="text-sm text-[#6B5D4F]">Last updated: {mockMeasurements.lastUpdated}</p>
                </div>
                <button className="px-4 py-2 border border-[#E8DCC8] rounded-full hover:border-[#D4AF37] transition-colors text-sm">
                  Manual Entry
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 bg-[#FAF7F0] rounded-lg border border-[#E8DCC8]">
                  <div className="text-sm text-[#6B5D4F] mb-1">Bust</div>
                  <div className="text-2xl font-light">{mockMeasurements.bust}</div>
                </div>
                <div className="p-4 bg-[#FAF7F0] rounded-lg border border-[#E8DCC8]">
                  <div className="text-sm text-[#6B5D4F] mb-1">Waist</div>
                  <div className="text-2xl font-light">{mockMeasurements.waist}</div>
                </div>
                <div className="p-4 bg-[#FAF7F0] rounded-lg border border-[#E8DCC8]">
                  <div className="text-sm text-[#6B5D4F] mb-1">Hips</div>
                  <div className="text-2xl font-light">{mockMeasurements.hips}</div>
                </div>
                <div className="p-4 bg-[#FAF7F0] rounded-lg border border-[#E8DCC8]">
                  <div className="text-sm text-[#6B5D4F] mb-1">Height</div>
                  <div className="text-2xl font-light">{mockMeasurements.height}</div>
                </div>
                <div className="p-4 bg-[#FAF7F0] rounded-lg border border-[#E8DCC8]">
                  <div className="text-sm text-[#6B5D4F] mb-1">Shoulder Width</div>
                  <div className="text-2xl font-light">{mockMeasurements.shoulder}</div>
                </div>
                <div className="p-4 bg-[#FAF7F0] rounded-lg border border-[#E8DCC8]">
                  <div className="text-sm text-[#6B5D4F] mb-1">Sleeve Length</div>
                  <div className="text-2xl font-light">{mockMeasurements.sleeveLength}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Favorites */}
        {activeTab === 'favorites' && (
          <div className="bg-white rounded-2xl border border-[#E8DCC8] p-8">
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <Heart className="w-6 h-6" />
              Favorite Gowns
            </h2>
            <div className="space-y-4">
              {mockFavorites.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 border border-[#E8DCC8] rounded-lg hover:border-[#D4AF37] transition-colors"
                >
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-[#6B5D4F]">{item.category}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-black text-white text-sm rounded-full hover:bg-[#D4AF37] transition-colors">
                      View
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors">
                      <Heart className="w-5 h-5 fill-current" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* History */}
        {activeTab === 'history' && (
          <div className="bg-white rounded-2xl border border-[#E8DCC8] p-8">
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <History className="w-6 h-6" />
              Order History
            </h2>
            <div className="space-y-4">
              {mockHistory.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 border border-[#E8DCC8] rounded-lg hover:border-[#D4AF37] transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs px-2 py-1 bg-[#FAF7F0] text-[#6B5D4F] border border-[#E8DCC8] rounded">
                        {item.type}
                      </span>
                      <span className="text-sm text-[#6B5D4F]">{item.id}</span>
                    </div>
                    <h3 className="font-medium">{item.item}</h3>
                    <p className="text-sm text-[#6B5D4F]">{item.date}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === 'Completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}