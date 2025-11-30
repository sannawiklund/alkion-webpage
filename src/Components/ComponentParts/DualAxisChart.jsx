import React from 'react';
import {
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    ComposedChart
} from 'recharts';

const colors = {
    KCl: "#7A0000",
    KOH: "#C85F00",
    K2CO3: "#FFA64D",
    K2SO4: "#FFE0B2",
    NaCl: "#001A4D",
    NaOH: "#003399",
    Na2CO3: "#7F8CFF",
    Na2SO4: "#D6D9FF",
    Total: "#00A000",
    Temperature: "#1E40AF"
};

// -----------------------------
// Exempeldata (8 komponenter)
// -----------------------------
const data = [
    { time: 0, KCl: 0, KOH: 0, K2CO3: 0, K2SO4: 0, NaCl: 0, NaOH: 0, Na2CO3: 0, Na2SO4: 0, Temperature: 0 },
    { time: 1000, KCl: 2, KOH: 1, K2CO3: 0.5, K2SO4: 0.5, NaCl: 1, NaOH: 0.5, Na2CO3: 0.5, Na2SO4: 0.5, Temperature: 100 },
    { time: 2000, KCl: 20, KOH: 10, K2CO3: 8, K2SO4: 5, NaCl: 18, NaOH: 10, Na2CO3: 10, Na2SO4: 7, Temperature: 300 },
    { time: 3000, KCl: 8, KOH: 4, K2CO3: 3, K2SO4: 3, NaCl: 6, NaOH: 3, Na2CO3: 3, Na2SO4: 3, Temperature: 500 },
    { time: 4000, KCl: 5, KOH: 3, K2CO3: 2, K2SO4: 2, NaCl: 5, NaOH: 2, Na2CO3: 2, Na2SO4: 1.5, Temperature: 700 },
    { time: 5000, KCl: 4, KOH: 2, K2CO3: 2, K2SO4: 1, NaCl: 4, NaOH: 2, Na2CO3: 2, Na2SO4: 1, Temperature: 850 },
    { time: 6000, KCl: 18, KOH: 8, K2CO3: 5, K2SO4: 4, NaCl: 20, NaOH: 10, Na2CO3: 7, Na2SO4: 5, Temperature: 950 },
    { time: 7000, KCl: 0, KOH: 0, K2CO3: 0, K2SO4: 0, NaCl: 0, NaOH: 0, Na2CO3: 0, Na2SO4: 0, Temperature: 950 }
];

// -----------------------------
// Total-alkali beräkning
// -----------------------------
const totalAlkali = row =>
    row.KCl + row.KOH + row.K2CO3 + row.K2SO4 +
    row.NaCl + row.NaOH + row.Na2CO3 + row.Na2SO4;

export default function DualAxisChart() {

    const enrichedData = data.map(d => ({ ...d, TotalAlkali: totalAlkali(d) }));

    return (
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full h-[520px]">

            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Biomass Conversion Analysis
            </h3>

            <ResponsiveContainer width="100%" height="90%">
                <ComposedChart
                    data={enrichedData}
                    margin={{ top: 10, right: 35, left: 10, bottom: 20 }}
                >
                    <CartesianGrid strokeDasharray="2 2" stroke="#ddd" />

                    <XAxis dataKey="time" tick={{ fontSize: 12 }} />

                    <YAxis
                        yAxisId="left"
                        domain={[0, 100]}
                        label={{ value: "Alkali conc. (µg m⁻³)", angle: -90, dx: -10 }}
                        tick={{ fontSize: 12 }}
                    />

                    <YAxis
                        yAxisId="right"
                        orientation="right"
                        domain={[0, 1200]}
                        stroke={colors.Temperature}
                        label={{ value: "Temperature (°C)", angle: 90, dx: 10, fill: colors.Temperature }}
                        tick={{ fontSize: 12 }}
                    />

                    <Legend />

                    {/* -----------------------------
                        ALKALI BARS (8 st)
                       ----------------------------- */}
                    <Bar yAxisId="left" stackId="a" dataKey="KCl" fill={colors.KCl} />
                    <Bar yAxisId="left" stackId="a" dataKey="KOH" fill={colors.KOH} />
                    <Bar yAxisId="left" stackId="a" dataKey="K₂CO₃" fill={colors.K2CO3} />
                    <Bar yAxisId="left" stackId="a" dataKey="K₂SO₄" fill={colors.K2SO4} />

                    <Bar yAxisId="left" stackId="a" dataKey="NaCl" fill={colors.NaCl} />
                    <Bar yAxisId="left" stackId="a" dataKey="NaOH" fill={colors.NaOH} />
                    <Bar yAxisId="left" stackId="a" dataKey="Na₂CO₃" fill={colors.Na2CO3} />
                    <Bar yAxisId="left" stackId="a" dataKey="Na₂SO₄" fill={colors.Na2SO4} />

                    {/* -----------------------------
                        TOTAL ALKALI LINE (Green)
                       ----------------------------- */}
                    <Line
                        yAxisId="left"
                        type="linear"           // spetsiga toppar
                        dataKey="TotalAlkali"
                        stroke={colors.Total}
                        strokeWidth={2}
                        dot={false}
                    />

                    {/* -----------------------------
                        TEMPERATURE LINE (Blue dashed)
                       ----------------------------- */}
                    <Line
                        yAxisId="right"
                        type="linear"
                        dataKey="Temperature"
                        stroke={colors.Temperature}
                        strokeWidth={2}
                        strokeDasharray="6 4"
                        dot={false}
                    />

                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
}
