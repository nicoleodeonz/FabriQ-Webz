import { useState } from 'react';
import {
  BarChart3,
  Package,
  Calendar,
  Users,
  DollarSign,
  TrendingUp,
  MapPin,
  Clock,
  AlertCircle
} from 'lucide-react';

interface InventoryItem {
  id: string;
  name: string;
  branch: string;
  status: 'available' | 'rented' | 'maintenance';
  lastRented?: string;
}

interface BranchStats {
  branch: string;
  totalGowns: number;
  availableGowns: number;
  rentedGowns: number;
  revenue: number;
  activeRentals: number;
}

const mockInventory: InventoryItem[] = [
  { id: 'G001', name: 'Midnight Elegance', branch: 'Taguig Main', status: 'rented', lastRented: '2026-02-01' },
  { id: 'G002', name: 'Pearl Romance', branch: 'BGC Branch', status: 'available' },
  { id: 'G003', name: 'Rose Garden', branch: 'Taguig Main', status: 'maintenance' },
  { id: 'G004', name: 'Golden Hour', branch: 'Makati Branch', status: 'available' },
  { id: 'G005', name: 'Crimson Dreams', branch: 'Taguig Main', status: 'available' },
];

const mockBranchStats: BranchStats[] = [
  { branch: 'Taguig Main - Cadena de Amor', totalGowns: 150, availableGowns: 98, rentedGowns: 48, revenue: 325000, activeRentals: 45 },
  { branch: 'BGC Branch', totalGowns: 120, availableGowns: 85, rentedGowns: 32, revenue: 256000, activeRentals: 32 },
  { branch: 'Makati Branch', totalGowns: 95, availableGowns: 72, rentedGowns: 20, revenue: 188000, activeRentals: 20 },
  { branch: 'Quezon City', totalGowns: 80, availableGowns: 65, rentedGowns: 12, revenue: 142000, activeRentals: 12 },
];

const mockPendingReturns = [
  { id: 'R001', gownName: 'Midnight Elegance', customer: 'Sarah Johnson', dueDate: '2026-02-03', daysLate: 0 },
  { id: 'R015', gownName: 'Sapphire Night', customer: 'Emma Wilson', dueDate: '2026-01-20', daysLate: 1 },
  { id: 'R022', gownName: 'Rose Garden', customer: 'Olivia Brown', dueDate: '2026-01-19', daysLate: 2 },
];

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'inventory' | 'rentals' | 'analytics'>('overview');
  const [selectedBranch, setSelectedBranch] = useState<string>('All Branches');

  const totalRevenue = mockBranchStats.reduce((sum, branch) => sum + branch.revenue, 0);
  const totalGowns = mockBranchStats.reduce((sum, branch) => sum + branch.totalGowns, 0);
  const totalRented = mockBranchStats.reduce((sum, branch) => sum + branch.rentedGowns, 0);
  const totalActive = mockBranchStats.reduce((sum, branch) => sum + branch.activeRentals, 0);

  return (
    <div className="min-h-screen py-8 px-4 bg-[#FAF7F0]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-light mb-2">Admin Dashboard</h1>
          <p className="text-[#6B5D4F]">Manage your boutique operations across all branches</p>
        </div>

        {/* Branch Selector */}
        <div className="mb-6">
          <select
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
            className="px-6 py-3 rounded-full border border-[#E8DCC8] focus:outline-none focus:border-[#D4AF37] transition-colors bg-white"
          >
            <option value="All Branches">All Branches</option>
            <option value="Taguig Main">Taguig Main - Cadena de Amor</option>
            <option value="BGC Branch">BGC Branch</option>
            <option value="Makati Branch">Makati Branch</option>
            <option value="Quezon City">Quezon City</option>
          </select>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-[#E8DCC8] overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-[#D4AF37] font-medium'
                : 'border-transparent text-[#6B5D4F] hover:text-black'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('inventory')}
            className={`px-6 py-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'inventory'
                ? 'border-[#D4AF37] font-medium'
                : 'border-transparent text-[#6B5D4F] hover:text-black'
            }`}
          >
            Inventory
          </button>
          <button
            onClick={() => setActiveTab('rentals')}
            className={`px-6 py-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'rentals'
                ? 'border-[#D4AF37] font-medium'
                : 'border-transparent text-[#6B5D4F] hover:text-black'
            }`}
          >
            Rentals
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-6 py-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'analytics'
                ? 'border-[#D4AF37] font-medium'
                : 'border-transparent text-[#6B5D4F] hover:text-black'
            }`}
          >
            Analytics
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Key Metrics */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl border border-[#E8DCC8] p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <DollarSign className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-sm text-[#6B5D4F]">Total Revenue</span>
                </div>
                <div className="text-3xl font-light mb-1">
                  ₱{totalRevenue.toLocaleString()}
                </div>
                <div className="text-sm text-green-600 flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  +12.5% vs last month
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-[#E8DCC8] p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Package className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-sm text-[#6B5D4F]">Total Inventory</span>
                </div>
                <div className="text-3xl font-light mb-1">{totalGowns}</div>
                <div className="text-sm text-[#6B5D4F]">{totalGowns - totalRented} available</div>
              </div>

              <div className="bg-white rounded-2xl border border-[#E8DCC8] p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-amber-100 rounded-lg">
                    <Calendar className="w-5 h-5 text-amber-600" />
                  </div>
                  <span className="text-sm text-[#6B5D4F]">Active Rentals</span>
                </div>
                <div className="text-3xl font-light mb-1">{totalActive}</div>
                <div className="text-sm text-[#6B5D4F]">{totalRented} gowns rented</div>
              </div>

              <div className="bg-white rounded-2xl border border-[#E8DCC8] p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Users className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="text-sm text-[#6B5D4F]">Total Customers</span>
                </div>
                <div className="text-3xl font-light mb-1">1,248</div>
                <div className="text-sm text-[#6B5D4F]">+32 this week</div>
              </div>
            </div>

            {/* Branch Performance */}
            <div className="bg-white rounded-2xl border border-[#E8DCC8] p-8">
              <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6" />
                Branch Performance
              </h2>
              <div className="space-y-4">
                {mockBranchStats.map((branch) => (
                  <div key={branch.branch} className="border border-[#E8DCC8] rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-medium">{branch.branch}</h3>
                      <span className="text-sm text-[#6B5D4F]">{branch.activeRentals} active rentals</span>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                      <div>
                        <div className="text-sm text-[#6B5D4F] mb-1">Total Gowns</div>
                        <div className="text-xl font-light">{branch.totalGowns}</div>
                      </div>
                      <div>
                        <div className="text-sm text-[#6B5D4F] mb-1">Available</div>
                        <div className="text-xl font-light text-green-600">{branch.availableGowns}</div>
                      </div>
                      <div>
                        <div className="text-sm text-[#6B5D4F] mb-1">Rented</div>
                        <div className="text-xl font-light text-amber-600">{branch.rentedGowns}</div>
                      </div>
                      <div>
                        <div className="text-sm text-[#6B5D4F] mb-1">Revenue</div>
                        <div className="text-xl font-light">₱{branch.revenue.toLocaleString()}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pending Returns Alert */}
            <div className="bg-white rounded-2xl border border-[#D4AF37] p-8">
              <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-[#D4AF37]" />
                Pending Returns
              </h2>
              <div className="space-y-3">
                {mockPendingReturns.map((rental) => (
                  <div
                    key={rental.id}
                    className={`flex items-center justify-between p-4 rounded-lg ${
                      rental.daysLate > 0 ? 'bg-red-50 border border-red-200' : 'bg-[#FAF7F0] border border-[#E8DCC8]'
                    }`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-medium">{rental.gownName}</span>
                        <span className="text-sm text-[#6B5D4F]">#{rental.id}</span>
                      </div>
                      <p className="text-sm text-[#6B5D4F]">{rental.customer}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-[#6B5D4F]">Due: {rental.dueDate}</div>
                      {rental.daysLate > 0 && (
                        <div className="text-sm text-red-600 font-medium">
                          {rental.daysLate} day(s) late
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Inventory Tab */}
        {activeTab === 'inventory' && (
          <div className="bg-white rounded-2xl border border-[#E8DCC8] p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-light flex items-center gap-2">
                <Package className="w-6 h-6" />
                Inventory Management
              </h2>
              <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-[#D4AF37] transition-colors">
                Add New Gown
              </button>
            </div>

            <div className="space-y-3">
              {mockInventory.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 border border-[#E8DCC8] rounded-lg hover:border-[#D4AF37] transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-sm text-[#6B5D4F]">#{item.id}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.status === 'available'
                          ? 'bg-green-100 text-green-800'
                          : item.status === 'rented'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-[#E8DCC8] text-[#6B5D4F]'
                      }`}>
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-[#6B5D4F]">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {item.branch}
                      </div>
                      {item.lastRented && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          Last rented: {item.lastRented}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 border border-[#E8DCC8] rounded-full hover:border-[#D4AF37] transition-colors text-sm">
                      Edit
                    </button>
                    <button className="px-4 py-2 border border-[#E8DCC8] rounded-full hover:border-[#D4AF37] transition-colors text-sm">
                      QR Code
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Rentals Tab */}
        {activeTab === 'rentals' && (
          <div className="bg-white rounded-2xl border border-[#E8DCC8] p-8">
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <Calendar className="w-6 h-6" />
              Rental Management
            </h2>
            <div className="text-center py-12 text-[#6B5D4F]">
              <Calendar className="w-12 h-12 text-[#E8DCC8] mx-auto mb-4" />
              <p>Rental tracking system coming soon</p>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="bg-white rounded-2xl border border-[#E8DCC8] p-8">
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <BarChart3 className="w-6 h-6" />
              Analytics & Reports
            </h2>
            <div className="text-center py-12 text-[#6B5D4F]">
              <BarChart3 className="w-12 h-12 text-[#E8DCC8] mx-auto mb-4" />
              <p>Advanced analytics dashboard coming soon</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}