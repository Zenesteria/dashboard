import {Box} from '@mui/material'

export default function PeriodSelector() {
  return (
    <Box className="relative before:content-['Period'] before:absolute before:top-[-25%] before:left-[7%] before:text-[0.8rem] before:bg-[#123038] before:px-2 before:text-cyan-300">
        <select className="bg-transparent cursor-pointer p-2 border-2 rounded-md border-cyan-300 text-cyan-300">
            <option>Last Week</option>
        </select>
    </Box>
  )
}
