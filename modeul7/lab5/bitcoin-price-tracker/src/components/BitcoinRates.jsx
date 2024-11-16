import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, Select, MenuItem, CircularProgress, Box } from '@mui/material';
import { useBitcoinPrice } from "../hooks/useBitcoinPrice";
import { useEmoji } from '../context/EmojiContext';

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const { price, loading, error } = useBitcoinPrice(currency);
  const { isHappy } = useEmoji();

  const options = currencies.map(curr => (
    <MenuItem value={curr} key={curr}>
      {curr}
    </MenuItem>
  ));

  return (
    <Box sx={{ mt: 4 }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Bitcoin Exchange Rate
              </Typography>
              <Select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                fullWidth
                variant="outlined"
              >
                {options}
              </Select>
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6">
                  {loading ? (
                    <CircularProgress size={24} />
                  ) : error ? (
                    error
                  ) : (
                    `${price} ${currency}`
                  )}
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  Current Mood: {isHappy ? '😊' : '😢'}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BitcoinRates;
