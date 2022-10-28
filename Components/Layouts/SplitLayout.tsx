import Box from '@mui/material/Box'

interface compProp{
    children?:any,
    leftWeight:number
    rightWeight:number
}

const SplitLayout = ({children, leftWeight, rightWeight}:compProp)  => {
    const [Left, Right] = children

  return (
    <Box display={'flex'} height={'100%'} width={'100%'}>
        <Box minWidth='250px' height={'100%'} flex={leftWeight}>
            {Left}
        </Box>
        <Box minWidth='250px' flex={rightWeight}>
            {Right}
        </Box>
    </Box>
  )
}


export default SplitLayout
