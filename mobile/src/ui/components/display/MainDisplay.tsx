import { Box } from 'native-base';

import { Value } from 'src/data';
import { ValueDisplay } from 'src/ui';

interface MainDisplayProps {
  // prescript?: string;
  // postscript?: string;
  value: Value | string | undefined;
  valueSize?: number;
}

export const MainDisplay = ({ value, valueSize }: MainDisplayProps) => {
  return (
    <Box
      id="main-display"
      flexDir="row"
      width="100%"
      flex={2}
      justifyContent="flex-end"
      alignItems="center"
      paddingX={2}
    >
      {value != null && (
        <ValueDisplay
          value={value}
          // prescript={prescript}
          // postscript={postscript}
          valueSize={valueSize}
        />
      )}
    </Box>
  );
};
