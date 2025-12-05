import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Bar,
  ResponsiveContainer,
} from "recharts";

const API = "http://localhost:5000";
const COLORS = ["#6366F1", "#F97316", "#10B981", "#EC4899", "#3B82F6"];

export default function VisitorDashboard() {
  const [summary, setSummary] = useState(null);
  const [visits, setVisits] = useState([]);
  const [filteredVisits, setFilteredVisits] = useState([]);
  const [loading, setLoading] = useState(true);
  const API = import.meta.env.VITE_API_URL;
  // Filters
  const [deviceFilter, setDeviceFilter] = useState("all");
  const [visitTypeFilter, setVisitTypeFilter] = useState("all");

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const s = await fetch(`${API}/api/visits/summary`).then((r) => r.json());
      const v = await fetch(`${API}/api/visits`).then((r) => r.json());

      setSummary(s);
      setVisits(v);
      setFilteredVisits(v);
      setLoading(false);
    } catch (err) {
      console.error("Error loading dashboard:", err);
    }
  }

  // Apply filters
  useEffect(() => {
    let data = [...visits];

    if (deviceFilter !== "all") {
      data = data.filter((i) => i.device.toLowerCase() === deviceFilter);
    }

    if (visitTypeFilter !== "all") {
      data = data.filter((i) =>
        visitTypeFilter === "new" ? i.isNewVisit === true : i.isNewVisit === false
      );
    }

    setFilteredVisits(data);
  }, [deviceFilter, visitTypeFilter, visits]);

  // Loading screen
  if (loading || !summary) {
    return (
      <div className="p-10 text-center">
        <div className="animate-spin h-10 w-10 border-b-2 border-blue-600 rounded-full mx-auto"></div>
        <p className="mt-3 text-gray-600">Loading visitor analytics...</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Visitor Analytics Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-5 rounded shadow">
          <h2 className="text-gray-500 text-sm">Total Unique Visitors</h2>
          <p className="text-3xl font-bold text-blue-600">
            {summary.totalUnique}
          </p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h2 className="text-gray-500 text-sm">Total Visits</h2>
          <p className="text-3xl font-bold text-green-600">
            {summary.totalVisits}
          </p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h2 className="text-gray-500 text-sm">Visitors With Location</h2>
          <p className="text-3xl font-bold text-purple-600">
            {summary.coordinates.length}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-5 rounded shadow mb-8 flex flex-wrap gap-4">
        {/* Device Filter */}
        <div>
          <label className="block text-gray-600 mb-1 font-medium">
            Filter by Device
          </label>
          <select
            value={deviceFilter}
            onChange={(e) => setDeviceFilter(e.target.value)}
            className="p-2 border rounded bg-gray-50"
          >
            <option value="all">All</option>
            <option value="desktop">Desktop</option>
            <option value="mobile">Mobile</option>
            <option value="tablet">Tablet</option>
          </select>
        </div>

        {/* Visit Type Filter */}
        <div>
          <label className="block text-gray-600 mb-1 font-medium">
            Visit Type
          </label>
          <select
            value={visitTypeFilter}
            onChange={(e) => setVisitTypeFilter(e.target.value)}
            className="p-2 border rounded bg-gray-50"
          >
            <option value="all">All</option>
            <option value="new">New Visits</option>
            <option value="old">Returning Visits</option>
          </select>
        </div>
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        
        {/* Device Chart */}
        <div className="bg-white p-5 rounded shadow">
          <h3 className="text-lg font-semibold mb-3">Devices</h3>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={summary.byDevice}>
              <XAxis dataKey="device" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count">
                {summary.byDevice.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Browser Chart */}
        <div className="bg-white p-5 rounded shadow">
          <h3 className="text-lg font-semibold mb-3">Browsers</h3>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={summary.byBrowser}
                dataKey="count"
                nameKey="browser"
                outerRadius={120}
                label
              >
                {summary.byBrowser.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white p-5 rounded shadow">
        <h3 className="text-lg font-semibold mb-4">Filtered Visitors</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-3 py-2">Timestamp</th>
                <th className="px-3 py-2">IP</th>
                <th className="px-3 py-2">Device</th>
                <th className="px-3 py-2">Browser</th>
                <th className="px-3 py-2">Page</th>
                <th className="px-3 py-2">New Visit</th>
              </tr>
            </thead>

            <tbody>
              {filteredVisits.slice(0, 50).map((v) => (
                <tr key={v._id} className="border-b hover:bg-gray-50">
                  <td className="px-3 py-2">
                    {new Date(v.timestamp).toLocaleString()}
                  </td>
                  <td className="px-3 py-2">{v.ip}</td>
                  <td className="px-3 py-2">{v.device}</td>
                  <td className="px-3 py-2">{v.browser}</td>
                  <td className="px-3 py-2">{v.page}</td>
                  <td className="px-3 py-2">
                    {v.isNewVisit ? (
                      <span className="text-green-600 font-semibold">Yes</span>
                    ) : (
                      <span className="text-gray-500">No</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}
