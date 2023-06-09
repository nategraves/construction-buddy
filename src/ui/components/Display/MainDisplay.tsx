import { Value } from 'src/data';
import { ValueDisplay } from 'src/ui';

interface MainDisplayProps {
  // prescript?: string;
  // postscript?: string;
  value: Value | string;
  valueSize?: string;
}

export const MainDisplay = ({ value, valueSize }: MainDisplayProps) => {
  return (
    <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
      <ValueDisplay
        value={value}
        // prescript={prescript}
        // postscript={postscript}
        valueSize={valueSize}
      />
    </div>
  );
};
