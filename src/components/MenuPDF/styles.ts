import { Styles, StyleSheet } from '@react-pdf/renderer';

const customCss: Styles = {
  page: {
    paddingVertical: '32px',
    paddingHorizontal: '32px',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '32px',
  },
  title: {
    fontSize: '24px',
    fontFamily: 'Inter',
    fontWeight: 'semibold',
    color: '#55cc8a',
  },
  subtitle: {
    fontSize: '14px',
    fontFamily: 'Inter',
    color: '#333c4d',
  },
  products: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  itemWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '32px',
  },
  itemWrapper2: {
    display: 'flex',
    flexDirection: 'column',
  },
  productName: {
    fontSize: '16px',
    fontFamily: 'Inter',
    fontWeight: 'semibold',
    color: '#333c4d',
  },
  productDescription: {
    fontSize: '12px',
    fontFamily: 'Inter',
    color: '#333c4d',
  },
  productPrice: {
    fontSize: '16px',
    fontFamily: 'Inter',
    color: '#333c4d',
  },
};

export const styles = StyleSheet.create(customCss);
