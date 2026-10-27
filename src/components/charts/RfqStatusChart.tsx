import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { Rfq, RfqStatus } from '../../types/index';

const statusColors: Record<RfqStatus, string> = {
  Open: '#10b981',
  'Pending Broker Approval': '#f59e0b',
  Quoted: '#1877f2',
  Executed: '#06b6d4',
  Expired: '#c026d3',
  Draft: '#94a3b8',
};

const statuses: RfqStatus[] = ['Open', 'Pending Broker Approval', 'Quoted', 'Executed', 'Expired', 'Draft'];

export default function RfqStatusChart({ rfqs }: { rfqs: Rfq[] }) {
  const data = statuses.map((status) => ({
    status,
    count: rfqs.filter((rfq) => rfq.status === status).length,
    fill: statusColors[status],
  }));
  const total = data.reduce((sum, entry) => sum + entry.count, 0);

  return (
    <Box className="status-chart-layout">
      <Box className="status-chart-plot">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="count"
              nameKey="status"
              cx="50%"
              cy="50%"
              innerRadius="60%"
              outerRadius="86%"
              paddingAngle={2}
              stroke="none"
            >
              {data.map((entry) => <Cell key={entry.status} fill={entry.fill} />)}
            </Pie>
            <Tooltip
              formatter={(value: number, name: string) => [`${value} RFQs`, name]}
              contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 8, fontSize: 12, boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}
            />
          </PieChart>
        </ResponsiveContainer>
        <Box className="status-chart-center">
          <strong>{total}</strong>
          <span>Total RFQs</span>
        </Box>
      </Box>
      <Stack className="status-chart-legend" spacing={1.2}>
        {data.map((entry) => (
          <Box className="status-legend-row" key={entry.status}>
            <span className="status-legend-dot" style={{ backgroundColor: entry.fill }} />
            <Typography variant="caption">{entry.status}</Typography>
            <strong>{entry.count}</strong>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}