import { Value } from 'src/data';
import { ValueDisplay } from 'src/ui';

interface MainDisplayProps {
  // prescript?: string;
  // postscript?: string;
  value: Value | string | undefined;
  valueSize?: string;
}

export const MainDisplay = ({ value, valueSize }: MainDisplayProps) => {
  return (
    <div
      id="main-display"
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-end',
        flex: '1 0 auto',
        alignItems: 'center',
      }}
    >
      {value != null && (
        <ValueDisplay
          value={value}
          // prescript={prescript}
          // postscript={postscript}
          valueSize={valueSize}
        />
      )}
    </div>
  );
};
