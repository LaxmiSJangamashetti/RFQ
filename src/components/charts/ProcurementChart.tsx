import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { chartData } from '../../data/mockRfqs';

export default function ProcurementChart() {
  return (
    <Box sx={{ height: 235, width: '100%', pt: 0.5 }}>
      <Stack direction="row" spacing={2.5} sx={{ mb: 1.5 }}>
        <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', gap: 0.8, color: '#334155', fontWeight: 600, fontSize: 12 }}>
          <Box component="span" sx={{ width: 8, height: 8, bgcolor: '#1877f2', borderRadius: '50%' }} /> RFQ volume
        </Typography>
        <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', gap: 0.8, color: '#334155', fontWeight: 600, fontSize: 12 }}>
          <Box component="span" sx={{ width: 8, height: 8, bgcolor: '#f97316', borderRadius: '50%' }} /> Awarded
        </Typography>
      </Stack>
      <ResponsiveContainer width="100%" height={195}>
        <AreaChart data={chartData} margin={{ top: 8, right: 10, left: -22, bottom: 0 }}>
          <defs>
            <linearGradient id="rfqVolume" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1877f2" stopOpacity={0.22} />
              <stop offset="100%" stopColor="#1877f2" stopOpacity={0.01} />
            </linearGradient>
            <linearGradient id="rfqAwarded" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f97316" stopOpacity={0.25} />
              <stop offset="100%" stopColor="#f97316" stopOpacity={0.01} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#edf2f7" vertical={false} />
          <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fill: '#64748b', fontSize: 11, fontWeight: 500 }} dy={6} />
          <YAxis tickLine={false} axisLine={false} tick={{ fill: '#64748b', fontSize: 11, fontWeight: 500 }} ticks={[0, 15, 30, 45, 60]} domain={[0, 60]} />
          <Tooltip contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 8, fontSize: 12, boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }} />
          <Area
            type="monotone"
            dataKey="volume"
            name="RFQ volume"
            stroke="#1877f2"
            strokeWidth={2.5}
            dot={{ r: 3.5, fill: '#1877f2', stroke: '#ffffff', strokeWidth: 1.5 }}
            activeDot={{ r: 5, fill: '#1877f2' }}
            fill="url(#rfqVolume)"
          />
          <Area
            type="monotone"
            dataKey="awarded"
            name="Awarded"
            stroke="#f97316"
            strokeWidth={2.5}
            dot={{ r: 3.5, fill: '#f97316', stroke: '#ffffff', strokeWidth: 1.5 }}
            activeDot={{ r: 5, fill: '#f97316' }}
            fill="url(#rfqAwarded)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
}