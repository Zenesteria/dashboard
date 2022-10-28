import React from 'react'
import {Box, Typography} from '@mui/material'
import {Selector as SelectorIcon} from '../../icons/selector'

export default function User() {
  return (
        <Box
            sx={{
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            px: 3,
            py: '11px',
            borderRadius: 1
            }}
        >
              <div>
                <Typography color="inherit" variant="subtitle1">
                  Acme Inc
                </Typography>

                <Typography color={'rgba(255,255,255,0.5)'} variant="body2">
                    Your tier
                    {' '}
                    : Premium
                </Typography>
              </div>
                <SelectorIcon
                    sx={{
                    color: 'neutral.500',
                    width: 14,
                    height: 14
                    }}
                />
        </Box>
  )
}
