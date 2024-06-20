import { Document, Page, View, Text } from '@react-pdf/renderer';

const MenuPDF = () => {
  return (
    <Document>
      <Page size="A4" wrap>
        <View fixed>
          <Text>Easy-Menu</Text>
        </View>
      </Page>
    </Document>
  );
};

export default MenuPDF;
