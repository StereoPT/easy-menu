import { Styles, StyleSheet } from '@react-pdf/renderer';

const customCss: Styles = {
  // ***** PDF Page ***** //
  page: {
    fontFamily: 'Inter',
  },

  // ***** PDF Header ***** //
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',

    backgroundColor: '#e5e5e5',

    paddingHorizontal: '32px',
    paddingVertical: '32px',
    marginBottom: '32px',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'semibold',
    letterSpacing: '4px',
    textTransform: 'uppercase',
    color: '#55cc8a',
  },
  subtitle: {
    fontSize: '20px',
    color: '#333c4d',
  },

  // ***** PDF Content ***** //
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',

    paddingHorizontal: '32px',
    marginHorizontal: '32px',
  },

  // ***** PDF Category ***** //
  category: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  categoryName: {
    display: 'flex',
    justifyContent: 'center',

    textAlign: 'center',
    paddingHorizontal: '16px',
    paddingVertical: '4px',

    borderRadius: '4px',

    backgroundColor: '#66cc8a',
  },

  // ***** PDF Item ***** //
  items: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '32px',
  },
  itemWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  itemName: {
    fontSize: '16px',
    fontWeight: 'semibold',
    color: '#333c4d',
  },
  itemDescription: {
    fontSize: '12px',
    color: '#737373',
  },
  itemPrice: {
    fontSize: '16px',
    color: '#333c4d',
  },
};

export const styles = StyleSheet.create(customCss);
