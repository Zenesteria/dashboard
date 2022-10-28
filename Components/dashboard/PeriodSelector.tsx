import {Box} from '@mui/material'

export default function PeriodSelector() {
  return (
    <Box className="relative before:content-['Period'] before:absolute before:top-[-25%] before:left-[7%] before:text-[0.8rem] before:bg-[#053F4D] before:px-2 before:text-[#9EEFE5]">
        <select className="bg-transparent cursor-pointer p-2 border-2 rounded-md border-[#9EEFE5] text-[#9EEFE5]">
            <option>Last Week</option>
        </select>
    </Box>
  )
}
