import { styled } from '@stitches/react';

export const Button = styled('button', {
  // Base styles
  border: 'none',
  borderRadius: '$spacingXS',
  cursor: 'pointer',
  display: 'inline-block',
  fontWeight: '$medium',
  lineHeight: '1.5',
  margin: '0px',
  padding: '0px',
  textAlign: 'center',
  transition: '200ms ease',

  // Variants
  variants: {
    size: {
      small: {
        fontSize: '$buttonS',
        height: '$spacing2XL',
        paddingInline: '$spacingS',
      },
      medium: {
        fontSize: '$buttonM',
        height: '$spacing3XL',
        paddingInline: '$spacingM',
      },
      large: {
        fontSize: '$buttonL',
        height: '$spacing4XL',
        paddingInline: '$spacingXL',
      },
    },

    variant: {
      primary: {
        background: '$gray950',
        color: '$gray100',

        selectors: {
          '&:hover:not([disabled])': {
            backgroundColor: 'gray800',
          },
        },
      },
    },
  },

  // Default Variants
  defaultVariants: {
    variant: 'primary',
  },
});
